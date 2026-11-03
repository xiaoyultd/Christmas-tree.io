import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, Globe2, Mail, MapPin, Network, PackageCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';

const capabilities = [
  { icon: Network, title: 'Manufacturer coordination', text: 'We work with production partners to match catalog models, specifications and order requirements for international buyers.' },
  { icon: PackageCheck, title: 'Product & packaging alignment', text: 'Size, material, finish, decoration, labeling and packaging are confirmed against the selected model before order placement.' },
  { icon: Globe2, title: 'Export communication', text: 'We coordinate commercial details, packing information and shipment requirements from Guangzhou for overseas orders.' },
];

const buyerTypes = ['Importers & distributors', 'Retail and e-commerce brands', 'Commercial decoration projects', 'Seasonal wholesalers'];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] min-h-[680px]">
            <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} className="relative z-10 px-6 md:px-12 lg:pl-20 lg:pr-14 py-20 lg:py-28 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-7"><Building2 className="w-4 h-4" /> Guangzhou Xiaoyu Import & Export</div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.06] mb-7">A practical export partner for Christmas tree buyers.</h1>
              <p className="text-white/68 text-lg leading-8 mb-9 max-w-xl">We connect international buyers with a focused Christmas tree catalog and coordinate product selection, specification, packaging and export communication with our manufacturing partners.</p>
              <div className="flex flex-wrap gap-3"><Link to="/products" className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-md hover:bg-gold/90">Explore our catalog <ArrowRight className="w-4 h-4" /></Link><Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-md hover:bg-white/10">Talk to our team</Link></div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative min-h-[520px] lg:min-h-full">
              <img src="/products/catalog-023-1.webp" alt="Xiaoyu Christmas tree product collection" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-transparent to-transparent hidden lg:block" />
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[390px] bg-white/95 text-navy rounded-xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest"><MapPin className="w-4 h-4" /> Guangzhou, China</div>
                <p className="text-sm text-muted-foreground leading-6 mt-3">An export-focused company presenting 106 Christmas tree series across four core collections.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[#f5f1e9]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28">
              <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Our role</div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">We make the sourcing process clearer.</h2>
              <p className="text-muted-foreground leading-7 mb-7">Xiaoyu is an import and export company—not a claim of owning every factory behind the catalog. Our role is to help buyers identify suitable products and coordinate the commercial details with the manufacturers that can produce them.</p>
              <a href="mailto:summer@yucore.ltd" className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-2"><Mail className="w-4 h-4" /> summer@yucore.ltd</a>
            </motion.div>
            <div className="space-y-5">
              {capabilities.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-white rounded-2xl p-7 md:p-9 border border-navy/5 flex gap-5"><div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><item.icon className="w-6 h-6 text-gold" /></div><div><h3 className="text-2xl font-bold text-navy mb-3">{item.title}</h3><p className="text-muted-foreground leading-7">{item.text}</p></div></motion.article>)}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6 mb-20">
              <div className="grid grid-cols-2 gap-3 min-h-[580px]"><img src="/products/catalog-054-1.webp" alt="Green Christmas tree range" className="w-full h-full object-cover rounded-2xl row-span-2" /><img src="/products/catalog-074-1.webp" alt="Snow flocked Christmas tree" className="w-full h-full object-cover rounded-2xl" /><img src="/products/catalog-096-1.webp" alt="Tabletop Christmas tree" className="w-full h-full object-cover rounded-2xl" /></div>
              <div className="bg-navy rounded-2xl p-8 md:p-12 text-white flex flex-col justify-center">
                <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-5">What buyers can source</div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">A catalog built around real buying needs.</h2>
                <p className="text-white/65 leading-7 mb-9">The collection covers premium decorated trees, classic green trees, snow-flocked trees and compact tabletop models. Each series includes model-level information for a more specific inquiry.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-9">{buyerTypes.map((type) => <div key={type} className="flex items-center gap-3 border-t border-white/15 pt-4 text-sm text-white/75"><CheckCircle2 className="w-4 h-4 text-gold shrink-0" />{type}</div>)}</div>
                <Link to="/products" className="inline-flex items-center gap-2 text-gold font-semibold self-start">Browse 106 product series <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-14"><div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">How we work</div><h2 className="text-4xl md:text-5xl font-bold text-navy mb-5">From a catalog model to an order plan.</h2><p className="text-muted-foreground leading-7">Clear information first, then product confirmation and export coordination.</p></div>
            <div className="grid md:grid-cols-4 border border-border rounded-2xl overflow-hidden">
              {[
                ['01', 'Choose models', 'Send the product IDs or images you are interested in.'],
                ['02', 'Share requirements', 'Add quantity, destination, packaging and delivery timing.'],
                ['03', 'Confirm details', 'Align the selected specification and available options.'],
                ['04', 'Arrange the order', 'Proceed with sample or bulk-order coordination and shipment.'],
              ].map(([num, title, text], index) => <div key={num} className={`p-7 md:p-8 bg-white ${index < 3 ? 'md:border-r border-border' : ''}`}><div className="font-playfair text-3xl text-gold font-bold mb-8">{num}</div><h3 className="text-xl font-bold text-navy mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-6">{text}</p></div>)}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
