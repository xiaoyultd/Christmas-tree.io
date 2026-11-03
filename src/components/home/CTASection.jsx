import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative min-h-[620px] flex items-center overflow-hidden">
      <img src="/products/catalog-012-1.webp" alt="Christmas tree retail display" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/20" />
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative max-w-7xl w-full mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-5">Build your seasonal range</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Send us the products you want to quote.</h2>
          <p className="text-white/70 text-lg leading-8 mb-9">Choose catalog models and tell us the quantity, destination and target delivery date. Ms. Summer will follow up with the product details needed for a wholesale quotation.</p>
          <div className="flex flex-wrap gap-3 mb-9"><Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-md hover:bg-gold/90">Start an inquiry <ArrowRight className="w-4 h-4" /></Link><Link to="/products" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-md hover:bg-white/10">Browse catalog</Link></div>
          <div className="flex flex-col sm:flex-row gap-5 text-sm text-white/60"><a href="mailto:summer@yucore.ltd" className="flex items-center gap-2 hover:text-gold"><Mail className="w-4 h-4" />summer@yucore.ltd</a><a href="tel:+8615018485957" className="flex items-center gap-2 hover:text-gold"><Phone className="w-4 h-4" />+86 150 1848 5957</a></div>
        </div>
      </motion.div>
    </section>
  );
}
