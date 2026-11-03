import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from '../../leadflow-crm-main/node_modules/sharp/dist/index.mjs';
import * as cheerio from '../../leadflow-crm-main/node_modules/cheerio/dist/esm/index.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogHtml = 'D:/广州小彧/圣诞树/catalog.html';
const $ = cheerio.load(await fs.readFile(catalogHtml, 'utf8'));
const sourceProducts = $('section.product').map((_, section) => {
  const node = $(section);
  const spec = Object.fromEntries(node.find('.specs dt').map((__, dt) => {
    const key = $(dt).text().trim();
    return [[key, $(dt).next('dd').text().trim()]];
  }).get());
  const rows = node.find('tbody tr').toArray().map((row) => $(row).find('td').toArray().map((td) => $(td).text().trim()));
  return {
    name: node.find('h2').first().text().replace(/\s+/g, ' ').trim(),
    category: node.find('.hero article > span').first().text().trim(),
    hero: node.find('.hero figure img').first().attr('src') || node.find('figure img').first().attr('src'),
    gallery: node.find('.gallery img').map((__, img) => $(img).attr('src')).get(),
    material: spec.Material || 'Contact us',
    sizes: spec.Height || rows.map((row) => row[0]).filter(Boolean).filter((value, index, all) => all.indexOf(value) === index).join(' / '),
    usage: spec.Usage || '',
    finish: spec['Tree Finish'] || '',
    variants: rows.map((row) => row.filter(Boolean).join(' · ')).slice(0, 12),
  };
}).get();

const selected = sourceProducts.filter((product) => product.hero);

const outputImages = path.join(root, 'public', 'products');
await fs.rm(outputImages, { recursive: true, force: true });
await fs.mkdir(outputImages, { recursive: true });

async function downloadImage(url) {
  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`Image download failed (${response.status}): ${url}`);
  return Buffer.from(await response.arrayBuffer());
}

const products = [];
for (const [index, product] of selected.entries()) {
  const urls = [product.hero, ...product.gallery].filter(Boolean).filter((value, i, all) => all.indexOf(value) === i).slice(0, 2);
  const images = [];
  for (const [imageIndex, url] of urls.entries()) {
    const filename = `catalog-${String(index + 1).padStart(3, '0')}-${imageIndex + 1}.webp`;
    const buffer = await downloadImage(url);
    await sharp(buffer).resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(outputImages, filename));
    images.push(`/products/${filename}`);
  }
  products.push({
    id: `XY-${String(index + 1).padStart(3, '0')}`,
    slug: `christmas-tree-${String(index + 1).padStart(3, '0')}`,
    name: product.name,
    category: product.category,
    material: product.material,
    sizes: product.sizes,
    usage: product.usage,
    finish: product.finish,
    origin: 'China',
    images,
    variants: product.variants,
  });
}

const dataDir = path.join(root, 'src', 'data');
await fs.mkdir(dataDir, { recursive: true });
await fs.writeFile(path.join(dataDir, 'catalogProducts.js'), `// Generated from the official Guangzhou Xiaoyu Christmas Tree Catalog.\nexport const CATALOG_PRODUCTS = ${JSON.stringify(products, null, 2)};\n`, 'utf8');
console.log(`Generated ${products.length} products from the official catalog with ${products.reduce((sum, item) => sum + item.images.length, 0)} local images.`);
