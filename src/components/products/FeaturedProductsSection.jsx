import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail } from 'lucide-react';

// ── Product 1: 新款大型圣诞树 858721284508 ──────────────────────────────
// ── Product 2: Desktop DIY Kit  693386841939 ───────────────────────────
// ── Product 3: Full-size PE+PVC Tree (estimated from category) ─────────

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Luxury Full-Size Christmas Tree — Red & Gold Deluxe',
    nameZh: 'New Luxury Full-Size Illuminated Christmas Tree — Elegant Ins Style Floor Decoration',
    badge: 'Best Seller · 1900+ orders',
    category: 'Full-Size Christmas Trees',
    description: 'Premium full-size Christmas tree with realistic PE+PVC mixed foliage, pre-installed warm LED lights, lush ornament set (balls, ribbons, bowknots, star topper), and velvet tree skirt. Available in Red & Gold, Gold & Coffee, Champagne Gold, and Pink White colorways.',
    specs: [
      { label: 'Material', value: 'PE+PVC mixed foliage, metal stand' },
      { label: 'LED Lights', value: 'Warm white, pre-installed' },
      { label: 'Includes', value: 'Tree + ornaments + ribbon + star topper + tree skirt' },
      { label: 'Assembly', value: '3-section hinged, quick setup' },
      { label: 'MOQ', value: 'Contact us' },
      { label: 'OEM/ODM', value: 'Custom logo, packaging, color' },
      { label: 'Certification', value: 'CE, RoHS' },
    ],
    // Color groups → each color has size variants
    colorGroups: [
      {
        color: 'Red & Gold White',
        colorKey: 'red-gold',
        sizes: [
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp' },
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Fa7kIL1kfEU8no35Q_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Pd63i91kfEU62A50j_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01okJByu1kfEU78ZAc3_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Gold & Coffee',
        colorKey: 'gold-coffee',
        sizes: [
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01fZ9Ojv1kfEU6pYCVw_!!963724710-0-cib.jpg_.webp' },
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN015kXtVI1kfETziO67v_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01trvARx1kfEU6pa0tQ_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01HAH7ff1kfEU8IeK0w_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Champagne Gold',
        colorKey: 'champagne',
        sizes: [
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01frI69o1kfEU4lXQwl_!!963724710-0-cib.jpg_.webp' },
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01zdHa3O1kfETziZujb_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01XfawOg1kfEU65yzmV_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01FGvkAM1kfEU8rkQB2_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Pink & White',
        colorKey: 'pink',
        sizes: [
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01SSFSMl1kfEU78u337_!!963724710-0-cib.jpg_.webp' },
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01xNoIXN1kfEU6X9Ou7_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01IGhRyf1kfEU6jcIvu_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01kslv9V1kfEU600Y02_!!963724710-0-cib.jpg_.webp' },
        ],
      },
    ],
    // Additional gallery images (product detail shots)
    gallery: [
      'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01Pd63i91kfEU62A50j_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01okJByu1kfEU78ZAc3_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01fZ9Ojv1kfEU6pYCVw_!!963724710-0-cib.jpg_.webp',
    ],
  },
  {
    id: 'p2',
    name: 'Desktop DIY Christmas Tree Kit — Table-Top Decoration Set',
    nameZh: 'Home Desktop Christmas Tree DIY Kit — Mini Holiday Decoration Set',
    badge: 'Popular · 200+ orders · 25.86% repeat buyers',
    category: 'Desktop & Mini Trees',
    description: 'Compact all-in-one DIY Christmas tree decoration kit for home table displays, hotel lobbies, and retail spaces. Comes with LED light strip, ornament balls, star topper, and tree skirt. Multiple size and color options for bulk wholesale.',
    specs: [
      { label: 'Material', value: 'PVC foliage, plastic base' },
      { label: 'Includes', value: 'Tree + LED strip + ornament balls + tree skirt' },
      { label: 'Light', value: 'LED light strip, included' },
      { label: 'Assembly', value: 'Quick plug-in, no tools needed' },
      { label: 'MOQ', value: 'Contact us' },
      { label: 'OEM/ODM', value: 'Custom packaging, gift box available' },
      { label: 'Certification', value: 'CE, EN71' },
    ],
    colorGroups: [
      {
        color: 'Gold & Coffee (with LED)',
        colorKey: 'gold-coffee',
        sizes: [
          { label: '45cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01serwAa1kfEGOZuXs7_!!963724710-0-cib.jpg_.webp' },
          { label: '60cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01oJaW5l1kfEGTL2tNd_!!963724710-0-cib.jpg_.webp' },
          { label: '90cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01hUKllV1kfEGb1RUtE_!!963724710-0-cib.jpg_.webp' },
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01vi26fj1kfEGOZy6Jv_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Red & White (with LED)',
        colorKey: 'red-white',
        sizes: [
          { label: '45cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01V9DD8x1kfEGXmSs9b_!!963724710-0-cib.jpg_.webp' },
          { label: '60cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01pDeTFt1kfEGUhyFBM_!!963724710-0-cib.jpg_.webp' },
          { label: '90cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01DUQh8y1kfEGdgefcv_!!963724710-0-cib.jpg_.webp' },
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01p8oBLQ1kfEGXmTLHp_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Gold & White (with LED)',
        colorKey: 'gold-white',
        sizes: [
          { label: '60cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01jstPJC1kfEGVSBD56_!!963724710-0-cib.jpg_.webp' },
          { label: '90cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01YpeLTv1kfEGVSACid_!!963724710-0-cib.jpg_.webp' },
          { label: '120cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01VT9r7d1kfEGgS5fFC_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Basic 60cm Kit',
        colorKey: 'basic',
        sizes: [
          { label: '60cm Value', image: 'https://cbu01.alicdn.com/img/ibank/O1CN010th51i1kfEGb1QUTu_!!963724710-0-cib.jpg_.webp' },
          { label: '60cm Full Set', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01ZJotUx1kfEMOcyG1v_!!963724710-0-cib.jpg_.webp' },
        ],
      },
    ],
    gallery: [
      'https://cbu01.alicdn.com/img/ibank/O1CN01vfja9K1kfEGOZzVlZ_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01ULwlwa1kfEGXmVxag_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01xGG9kb1kfEGbspA1w_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01serwAa1kfEGOZuXs7_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01oJaW5l1kfEGTL2tNd_!!963724710-0-cib.jpg_.webp',
    ],
  },
  {
    id: 'p3',
    name: 'Full-Size PE+PVC Flocked Christmas Tree — Snow Effect',
    nameZh: 'Full-Size PE+PVC Realistic Snow-Flocked Christmas Tree — Premium Floor Standing',
    badge: 'Top Export · Europe & North America',
    category: 'Flocked Snow Trees',
    description: 'Premium full-size artificial Christmas tree with realistic PE needle tips and dense PVC inner branches. Uniform white snow flocking on all branch tips for a consistent winter look. Heavy-duty powder-coated metal stand included. Best-selling in Europe, North America, and Australia.',
    specs: [
      { label: 'Material', value: 'PE tips + PVC inner branches' },
      { label: 'Snow Effect', value: 'Uniform white flocking on all tips' },
      { label: 'Stand', value: 'Powder-coated iron, included' },
      { label: 'Assembly', value: '3-section hinged easy fold' },
      { label: 'MOQ', value: 'Contact us' },
      { label: 'OEM/ODM', value: 'Custom box, label, color' },
      { label: 'Certification', value: 'CE, BS EN 71, RoHS' },
    ],
    colorGroups: [
      {
        color: 'Classic Green',
        colorKey: 'green',
        sizes: [
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01xNoIXN1kfEU6X9Ou7_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01IGhRyf1kfEU6jcIvu_!!963724710-0-cib.jpg_.webp' },
          { label: '240cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01kslv9V1kfEU600Y02_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Flocked White Snow',
        colorKey: 'flocked',
        sizes: [
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Pd63i91kfEU62A50j_!!963724710-0-cib.jpg_.webp' },
          { label: '240cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01okJByu1kfEU78ZAc3_!!963724710-0-cib.jpg_.webp' },
        ],
      },
      {
        color: 'Gold & Coffee Decor',
        colorKey: 'gold-decor',
        sizes: [
          { label: '150cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01fZ9Ojv1kfEU6pYCVw_!!963724710-0-cib.jpg_.webp' },
          { label: '180cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN015kXtVI1kfETziO67v_!!963724710-0-cib.jpg_.webp' },
          { label: '210cm', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01trvARx1kfEU6pa0tQ_!!963724710-0-cib.jpg_.webp' },
        ],
      },
    ],
    gallery: [
      'https://cbu01.alicdn.com/img/ibank/O1CN01vfja9K1kfEGOZzVlZ_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01ULwlwa1kfEGXmVxag_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01xGG9kb1kfEGbspA1w_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp',
    ],
  },
];

const FALLBACK = 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80';

function ProductDetail({ product }) {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [activeThumbIdx, setActiveThumbIdx] = useState(null);

  const colorGroup = product.colorGroups[activeColorIdx];
  const sizeVariant = colorGroup.sizes[activeSizeIdx];
  const mainImage = activeThumbIdx !== null ? product.gallery[activeThumbIdx] : sizeVariant.image;

  const handleColorChange = (i) => { setActiveColorIdx(i); setActiveSizeIdx(0); setActiveThumbIdx(null); };
  const handleSizeChange = (i) => { setActiveSizeIdx(i); setActiveThumbIdx(null); };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* ── LEFT: Image Panel ── */}
        <div className="lg:w-[380px] shrink-0 bg-muted/30 p-5 flex flex-col gap-3">
          {/* Main image */}
          <div className="relative rounded-xl overflow-hidden bg-white aspect-square border border-border">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
              onError={e => { e.target.src = FALLBACK; }}
            />
            <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-inter font-bold px-2.5 py-1 rounded-full leading-none">
              {product.badge}
            </span>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveThumbIdx(null)}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeThumbIdx === null ? 'border-gold' : 'border-transparent hover:border-border'}`}
            >
              <img src={sizeVariant.image} alt="" className="w-full h-full object-cover" onError={e => { e.target.src = FALLBACK; }} />
            </button>
            {product.gallery.slice(0, 4).map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveThumbIdx(i)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeThumbIdx === i ? 'border-gold' : 'border-transparent hover:border-border'}`}
              >
                <img src={g} alt="" className="w-full h-full object-cover" onError={e => { e.target.src = FALLBACK; }} />
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div className="flex-1 p-7 flex flex-col gap-5">

          {/* Header */}
          <div>
            <div className="text-gold font-inter text-[11px] font-bold tracking-widest uppercase mb-2">{product.category}</div>
            <h3 className="font-playfair text-2xl font-bold text-navy leading-snug">{product.name}</h3>
          </div>

          {/* Color selector */}
          <div>
            <div className="font-inter text-[11px] font-bold text-navy uppercase tracking-widest mb-2.5">
              Color — <span className="text-gold font-semibold normal-case tracking-normal">{colorGroup.color}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.colorGroups.map((cg, i) => (
                <button
                  key={cg.colorKey}
                  onClick={() => handleColorChange(i)}
                  title={cg.color}
                  className={`w-9 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                    activeColorIdx === i ? 'border-gold ring-2 ring-gold/30' : 'border-border hover:border-navy/40'
                  }`}
                >
                  <img src={cg.sizes[0].image} alt={cg.color} className="w-full h-full object-cover" onError={e => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div>
            <div className="font-inter text-[11px] font-bold text-navy uppercase tracking-widest mb-2.5">
              Size — <span className="text-gold font-semibold normal-case tracking-normal">{colorGroup.sizes[activeSizeIdx].label}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {colorGroup.sizes.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => handleSizeChange(i)}
                  className={`text-xs font-inter px-4 py-2 rounded-lg border transition-all ${
                    activeSizeIdx === i
                      ? 'bg-navy text-white border-navy font-semibold'
                      : 'bg-white text-navy border-border hover:border-navy'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 border-t border-border pt-5">
            {product.specs.map(s => (
              <div key={s.label} className="flex gap-2 text-sm font-inter">
                <span className="text-navy font-semibold shrink-0 min-w-[80px]">{s.label}</span>
                <span className="text-muted-foreground">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-1 mt-auto">
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}&color=${encodeURIComponent(colorGroup.color)}&size=${encodeURIComponent(colorGroup.sizes[activeSizeIdx].label)}`}
              className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 bg-gold text-white font-inter text-sm font-semibold py-3 rounded-lg hover:bg-gold/90 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" /> Get Wholesale Price
            </Link>
            <a
              href="mailto:summer@yucore.ltd"
              className="inline-flex items-center justify-center gap-2 border border-border text-navy font-inter text-sm font-semibold px-5 py-3 rounded-lg hover:border-navy transition-colors duration-200"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="tel:+8615018485957"
              className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground font-inter text-sm px-4 py-3 rounded-lg hover:border-gold hover:text-gold transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProductsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Our Products</div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Christmas Tree Wholesale Catalog</h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Select a color theme and size to preview each product. Contact us for wholesale pricing, OEM/ODM, and custom packaging.
          </p>
        </motion.div>
        <div className="space-y-8">
          {PRODUCTS.map(p => <ProductDetail key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}