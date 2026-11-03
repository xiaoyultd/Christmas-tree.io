import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, MessageCircle, Package, Search, X } from 'lucide-react';
import { CATALOG_PRODUCTS } from '@/data/catalogProducts';

const ALL = 'All Products';

function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [showAllVariants, setShowAllVariants] = useState(false);
  const variants = showAllVariants ? product.variants : product.variants.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm overflow-y-auto p-4 md:p-8" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl relative">
        <button onClick={onClose} className="absolute right-4 top-4 z-10 w-10 h-10 bg-white/95 rounded-full shadow flex items-center justify-center text-navy" aria-label="Close product details"><X className="w-5 h-5" /></button>
        <div className="grid lg:grid-cols-2">
          <div className="bg-stone-100 p-5 md:p-8">
            <div className="aspect-square bg-white rounded-xl overflow-hidden"><img src={product.images[activeImage]} alt={`${product.name} - view ${activeImage + 1}`} className="w-full h-full object-contain" /></div>
            {product.images.length > 1 && <div className="flex gap-3 mt-4">{product.images.map((image, index) => <button key={image} onClick={() => setActiveImage(index)} className={`w-20 h-20 bg-white rounded-lg overflow-hidden border-2 ${activeImage === index ? 'border-gold' : 'border-transparent'}`}><img src={image} alt="" className="w-full h-full object-cover" /></button>)}</div>}
          </div>
          <div className="p-7 md:p-10">
            <div className="text-gold text-xs font-inter font-bold tracking-widest uppercase mb-3">{product.category}</div>
            <h2 className="font-playfair text-3xl font-bold text-navy leading-tight mb-3">{product.name}</h2>
            <div className="flex flex-wrap gap-2 mb-6"><span className="text-xs bg-navy text-white px-3 py-1.5 rounded-full">Model {product.id}</span></div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-5 mb-6 text-sm font-inter">
              <div><dt className="text-muted-foreground">Catalog reference</dt><dd className="font-semibold text-navy mt-1">{product.id}</dd></div>
              <div><dt className="text-muted-foreground">Material</dt><dd className="font-semibold text-navy mt-1">{product.material}</dd></div>
              <div><dt className="text-muted-foreground">Available sizes</dt><dd className="font-semibold text-navy mt-1">{product.sizes || 'Ask for details'}</dd></div>
              <div><dt className="text-muted-foreground">Origin</dt><dd className="font-semibold text-navy mt-1">{product.origin}</dd></div>
            </dl>
            <h3 className="font-playfair text-xl font-bold text-navy mb-3">Available catalog variants</h3>
            <ul className="space-y-2 mb-3">{variants.map((variant) => <li key={variant} className="flex gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />{variant}</li>)}</ul>
            {product.variants.length > 6 && <button onClick={() => setShowAllVariants(!showAllVariants)} className="text-sm text-gold font-semibold mb-6">{showAllVariants ? 'Show fewer variants' : `Show all ${product.variants.length} variants`}</button>}
            <div className="bg-stone-50 rounded-xl p-4 text-sm text-muted-foreground mb-6"><strong className="text-navy">Wholesale note:</strong> MOQ, export voltage, packaging, lead time and compliance documents are confirmed according to the selected variant and destination market.</div>
            <Link to={`/contact?product=${encodeURIComponent(`${product.id} ${product.name}`)}`} className="w-full inline-flex items-center justify-center gap-2 bg-gold text-white font-inter font-semibold py-4 rounded-lg hover:bg-gold/90"><MessageCircle className="w-5 h-5" /> Request Wholesale Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProductsSection() {
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const categories = [ALL, ...new Set(CATALOG_PRODUCTS.map((product) => product.category))];
  const filtered = useMemo(() => CATALOG_PRODUCTS.filter((product) => {
    const haystack = `${product.name} ${product.id}`.toLowerCase();
    return (category === ALL || product.category === category) && haystack.includes(query.trim().toLowerCase());
  }), [category, query]);

  return (
    <section id="catalog-selection" className="py-16 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Complete 2026 Collection</div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">106 Wholesale Christmas Tree Series</h2>
          <p className="font-inter text-muted-foreground max-w-3xl mx-auto">Browse our complete official catalog across luxury, green, snow-flocked and tabletop collections. Search by model or filter by collection, then send the exact product directly with your inquiry.</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 mb-8 flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`text-xs font-inter font-semibold px-4 py-2 rounded-full border ${category === item ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-border hover:border-gold'}`}>{item}</button>)}</div>
          <label className="relative min-w-[260px]"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search model or product" className="w-full border border-border rounded-full pl-10 pr-4 py-2 text-sm font-inter outline-none focus:border-gold" /></label>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => <article key={product.id} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all group"><button onClick={() => setSelected(product)} className="block w-full text-left"><div className="aspect-square bg-stone-100 overflow-hidden relative"><img src={product.images[0]} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-5"><div className="text-[10px] text-gold font-bold tracking-wider uppercase mb-2">{product.category}</div><h3 className="font-playfair text-lg font-bold text-navy leading-snug line-clamp-2 min-h-[48px]">{product.name}</h3><div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Package className="w-3.5 h-3.5 text-gold" />{product.id}</span><span className="text-right truncate">{product.sizes || product.material}</span></div><div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm font-semibold text-gold">View specifications <ChevronDown className="w-4 h-4" /></div></div></button></article>)}
        </div>
        {!filtered.length && <p className="text-center text-muted-foreground py-16">No matching products. Try another category or model.</p>}
      </div>
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
