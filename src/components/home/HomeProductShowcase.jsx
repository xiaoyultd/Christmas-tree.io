import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Luxury Full-Size Christmas Tree',
    sub: 'Red & Gold · Champagne · Gold Coffee · Pink White',
    sizes: '120cm / 150cm / 180cm / 210cm',
    badge: 'Best Seller',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp',
    thumbs: [
      'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01fZ9Ojv1kfEU6pYCVw_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01frI69o1kfEU4lXQwl_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01SSFSMl1kfEU78u337_!!963724710-0-cib.jpg_.webp',
    ],
    labels: ['Red & Gold', 'Gold Coffee', 'Champagne', 'Pink White'],
  },
  {
    id: 'p2',
    name: 'Desktop DIY Christmas Tree Kit',
    sub: 'Gold Coffee · Red White · Gold White',
    sizes: '45cm / 60cm / 90cm / 120cm',
    badge: '200+ orders',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01k0RRl71kfEGUhx2TY_!!963724710-0-cib.jpg_.webp',
    thumbs: [
      'https://cbu01.alicdn.com/img/ibank/O1CN01k0RRl71kfEGUhx2TY_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01serwAa1kfEGOZuXs7_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01V9DD8x1kfEGXmSs9b_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01jstPJC1kfEGVSBD56_!!963724710-0-cib.jpg_.webp',
    ],
    labels: ['Full Set', 'Gold Coffee', 'Red White', 'Gold White'],
  },
  {
    id: 'p3',
    name: 'Full-Size Flocked Snow Christmas Tree',
    sub: 'Classic Green · Flocked White · Gold Decor',
    sizes: '150cm / 180cm / 210cm / 240cm',
    badge: 'Top Export',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp',
    thumbs: [
      'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01xNoIXN1kfEU6X9Ou7_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp',
      'https://cbu01.alicdn.com/img/ibank/O1CN01fZ9Ojv1kfEU6pYCVw_!!963724710-0-cib.jpg_.webp',
    ],
    labels: ['Classic Green', 'Flocked White', 'Champagne', 'Gold Coffee'],
  },
];

const FALLBACK = 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80';

function ProductCard({ product, index }) {
  const [active, setActive] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.thumbs[active]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.src = FALLBACK; }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-gold text-white text-[11px] font-inter font-bold px-2.5 py-1 rounded-sm">{product.badge}</span>
        </div>
      </div>

      {/* Color thumbs */}
      <div className="flex gap-2 px-4 pt-4">
        {product.thumbs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            title={product.labels[i]}
            className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all shrink-0 ${active === i ? 'border-gold' : 'border-border hover:border-navy/40'}`}
          >
            <img src={t} alt={product.labels[i]} className="w-full h-full object-cover" onError={e => { e.target.src = FALLBACK; }} />
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="px-4 pb-5 pt-3">
        <div className="font-inter text-xs text-gold font-semibold mb-1">{product.labels[active]}</div>
        <h3 className="font-playfair font-bold text-navy text-base leading-snug mb-1">{product.name}</h3>
        <div className="font-inter text-xs text-muted-foreground mb-1">{product.sub}</div>
        <div className="font-inter text-xs text-muted-foreground mb-4">Sizes: {product.sizes}</div>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="w-full flex items-center justify-center gap-2 bg-navy text-white font-inter text-sm font-semibold py-2.5 rounded-sm hover:bg-gold transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" /> Get Wholesale Price
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomeProductShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Wholesale Catalog</div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Our 3 Flagship Products</h2>
          <p className="font-inter text-muted-foreground max-w-xl mx-auto text-sm">
            Click the color swatches to preview each variant. Contact us directly for wholesale pricing, OEM/ODM, and bulk orders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-navy text-navy font-inter font-semibold px-8 py-3 rounded-sm hover:bg-navy hover:text-white transition-colors"
          >
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}