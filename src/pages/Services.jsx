import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';
import { Link } from 'react-router-dom';
import { Palette, Package, ShieldCheck, Truck, Search, HandshakeIcon } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'OEM / ODM Custom Production',
    desc: 'Design your own Christmas decorations from scratch or customize our existing product lines. Custom colors, packaging, labels, and even product shapes available. We work with your designers or our in-house team.',
    points: ['Private label & brand logo printing', 'Custom color & size specifications', 'Packaging design support', 'Sample prototyping before bulk production'],
  },
  {
    icon: Package,
    title: 'Bulk Wholesale Supply',
    desc: 'Access our full catalog at factory-direct wholesale prices. Whether you need 100 pieces or 100,000 — we scale with your business. Flexible payment terms for established buyers.',
    points: ['Competitive FOB/CIF pricing', 'MOQ as low as 50 pcs per item', 'Mixed container loading', 'Volume discount tiers'],
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control & Inspection',
    desc: 'Every order goes through rigorous QC inspection before shipment. We ensure that what you see in the sample is exactly what arrives at your door.',
    points: ['Pre-production sample approval', 'In-line & final inspection', 'Third-party QC available', 'Defect policy & after-sales support'],
  },
  {
    icon: Truck,
    title: 'Global Logistics & Shipping',
    desc: 'We handle end-to-end export logistics from Guangzhou port. Sea freight, air freight, express delivery, and door-to-door DDP/DAP options available.',
    points: ['Sea freight (LCL & FCL)', 'Air freight for urgent orders', 'DDP / DAP to your warehouse', 'Shipping documentation support'],
  },
  {
    icon: Search,
    title: 'Sourcing & Procurement',
    desc: 'Can\'t find a specific product in our catalog? We source it for you. With our deep factory network in Yiwu and Guangzhou, we can find virtually any Christmas or gift item.',
    points: ['Product sourcing on request', 'Factory vetting & auditing', 'Price benchmarking', 'Supplier management'],
  },
  {
    icon: HandshakeIcon,
    title: 'Long-term Partnership',
    desc: 'We don\'t just fulfill orders — we build lasting business relationships. Get a dedicated account manager, priority production slots, and exclusive seasonal deals.',
    points: ['Dedicated contact (Ms. Summer)', 'Early access to new products', 'Seasonal catalog previews', 'Flexible credit terms for regulars'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">What We Do</div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">B2B Export Services</h1>
            <p className="font-inter text-white/60 max-w-xl mx-auto">From factory sourcing to door-to-door delivery — we provide a complete one-stop export solution for global buyers.</p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-border p-8 hover:border-gold/40 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs font-inter text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center">
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">How It Works</div>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-12">Simple 4-Step Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ['01', 'Send Inquiry', 'Tell us your product needs, quantity, and delivery requirements'],
                ['02', 'Get Quotation', 'We reply within 24h with competitive FOB/CIF pricing'],
                ['03', 'Approve Sample', 'Confirm quality with a physical sample before bulk order'],
                ['04', 'Production & Delivery', 'We produce, QC inspect, and ship to your door'],
              ].map(([num, title, desc]) => (
                <div key={num} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-lg font-bold text-gold">{num}</span>
                  </div>
                  <h4 className="font-inter font-semibold text-navy text-sm mb-2">{title}</h4>
                  <p className="font-inter text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-white font-inter font-semibold px-8 py-4 rounded-sm hover:bg-gold/90 transition-colors">
              Start Your Order Today
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}