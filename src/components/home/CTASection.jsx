import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=1800&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-4">Start Your Order Today</div>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Source Premium<br />Christmas Decorations?
        </h2>
        <p className="font-inter text-white/70 text-lg mb-10">
          Contact Ms. Summer for a free quotation. OEM/ODM, flexible MOQ, fast delivery worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-white font-inter font-semibold px-8 py-4 rounded-sm hover:bg-gold/90 transition-colors text-sm">
            Request a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="mailto:summer@yucore.ltd" className="inline-flex items-center gap-2 border border-white/30 text-white font-inter font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors text-sm">
            <Mail className="w-4 h-4" /> Email Us Directly
          </a>
        </div>
        <p className="font-inter text-white/40 text-xs mt-8">
          Guangzhou Xiaoyu Import & Export Co., Ltd. · summer@yucore.ltd · +86 15018485957
        </p>
      </motion.div>
    </section>
  );
}