import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const HERO_PRODUCTS = [
  {
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01k0RRl71kfEGUhx2TY_!!963724710-0-cib.jpg_.webp',
    label: 'Desktop DIY Kit',
    sub: '45–120cm · Gold / Red / White',
  },
  {
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01KuKsCf1kfEU78Y1mm_!!963724710-0-cib.jpg_.webp',
    label: 'Luxury Full-Size Tree',
    sub: '120–210cm · Red Gold / Champagne',
  },
  {
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Azy7EU1kfEU8lfSZg_!!963724710-0-cib.jpg_.webp',
    label: 'Flocked Snow Tree',
    sub: '150–240cm · Classic / Snow White',
  },
];

const FALLBACK = 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80';

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy">
      {/* Background blur from active product */}
      <div
        key={activeIdx}
        className="absolute inset-0 bg-cover bg-center opacity-15 transition-all duration-700"
        style={{ backgroundImage: `url('${HERO_PRODUCTS[activeIdx].image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/98 via-navy/85 to-navy/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 text-gold text-xs font-inter font-medium mb-6">
            B2B Wholesale Supplier · Guangzhou, China
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Premium<br />
            <span className="text-gold">Christmas Trees</span><br />
            Factory Direct
          </h1>

          <p className="font-inter text-white/65 text-base leading-relaxed mb-8 max-w-md">
            3 flagship product lines. OEM/ODM available. Flexible MOQ, global shipping from Guangzhou. Contact us for wholesale pricing.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/products" className="inline-flex items-center gap-2 bg-gold text-white font-inter font-semibold px-7 py-3.5 rounded-sm hover:bg-gold/90 transition-colors">
              View Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-inter font-semibold px-7 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              Get Wholesale Price
            </Link>
          </div>

          {/* Contact strip */}
          <div className="flex flex-wrap gap-5 text-xs font-inter text-white/50">
            <a href="mailto:summer@yucore.ltd" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" /> summer@yucore.ltd
            </a>
            <a href="tel:+8615018485957" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" /> +86 15018485957 · Ms. Summer
            </a>
          </div>
        </motion.div>

        {/* Right: product switcher */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex flex-col items-center gap-4"
        >
          {/* Main product image */}
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-square">
            <img
              key={activeIdx}
              src={HERO_PRODUCTS[activeIdx].image}
              alt={HERO_PRODUCTS[activeIdx].label}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={e => { e.target.src = FALLBACK; }}
            />
          </div>

          {/* Product thumb switcher */}
          <div className="flex gap-3">
            {HERO_PRODUCTS.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`flex flex-col items-center gap-1.5 transition-all ${activeIdx === i ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeIdx === i ? 'border-gold' : 'border-white/20'}`}>
                  <img src={p.image} alt={p.label} className="w-full h-full object-cover" onError={e => { e.target.src = FALLBACK; }} />
                </div>
                <span className={`text-[10px] font-inter font-medium ${activeIdx === i ? 'text-gold' : 'text-white/50'}`}>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Active product info */}
          <div className="bg-white/10 backdrop-blur border border-white/15 rounded-xl px-5 py-3 w-full max-w-sm text-center">
            <div className="font-playfair text-white font-bold text-lg">{HERO_PRODUCTS[activeIdx].label}</div>
            <div className="font-inter text-white/60 text-xs mt-0.5">{HERO_PRODUCTS[activeIdx].sub}</div>
            <div className="font-inter text-gold text-xs font-semibold mt-2">Contact us for price →</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}