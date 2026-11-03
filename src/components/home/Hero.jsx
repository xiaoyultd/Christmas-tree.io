import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#102039] text-white">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_25%,#c69b48_0,transparent_34%)]" />
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[0.92fr_1.08fr] min-h-[760px]">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="px-6 md:px-12 lg:pl-20 lg:pr-12 py-20 lg:py-28 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-7"><MapPin className="w-4 h-4" /> Guangzhou · China</div>
          <h1 className="font-playfair text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.03] mb-7">Christmas trees<br /><span className="text-gold">built for retail.</span></h1>
          <p className="font-inter text-white/70 text-base md:text-lg leading-8 max-w-xl mb-9">A focused wholesale collection for importers, distributors, retailers and commercial projects. Explore 106 product series with size, material and variant details ready for quotation.</p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link to="/products" className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-md hover:bg-gold/90">Explore the full catalog <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-md hover:bg-white/10">Request a quotation</Link>
          </div>
          <div className="grid grid-cols-3 gap-5 border-t border-white/15 pt-7 max-w-xl">
            <div><div className="font-playfair text-2xl font-bold text-white">106</div><div className="text-[11px] text-white/50 mt-1">Product series</div></div>
            <div><div className="font-playfair text-2xl font-bold text-white">4</div><div className="text-[11px] text-white/50 mt-1">Core collections</div></div>
            <div><div className="font-playfair text-2xl font-bold text-white">OEM</div><div className="text-[11px] text-white/50 mt-1">Private label support</div></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative min-h-[560px] lg:min-h-full">
          <img src="/products/catalog-003-1.webp" alt="Decorated luxury Christmas tree collection" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102039]/50 via-transparent to-transparent hidden lg:block" />
          <div className="absolute left-5 right-5 bottom-5 md:left-8 md:right-auto md:w-[360px] bg-white/95 backdrop-blur text-navy p-5 rounded-xl shadow-2xl">
            <div className="text-[10px] text-gold uppercase font-bold tracking-[0.18em] mb-2">Featured collection</div>
            <div className="font-playfair text-xl font-bold">Luxury Decorated Trees</div>
            <div className="text-xs text-muted-foreground mt-2 leading-5">Retail-ready visual concepts with multiple height, finish and decoration options.</div>
          </div>
        </motion.div>
      </div>
      <a href="mailto:summer@yucore.ltd" className="absolute right-5 top-5 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-xs text-white/75 hover:text-gold"><Mail className="w-3.5 h-3.5" /> summer@yucore.ltd</a>
    </section>
  );
}
