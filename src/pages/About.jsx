import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';
import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2006', event: 'Founded in Yiwu as a leading Christmas goods trading company' },
  { year: '2012', event: 'Expanded to Guangzhou with direct factory partnerships' },
  { year: '2016', event: 'Reached 30+ export countries, 500+ product SKUs' },
  { year: '2020', event: 'Launched OEM/ODM private label services for global brands' },
  { year: '2024', event: 'Established Guangzhou Xiaoyu Import & Export Co., Ltd.' },
];

const values = [
  'Factory-direct sourcing with strict QC',
  'OEM/ODM & custom packaging available',
  'Flexible MOQ — suitable for all order sizes',
  'Reliable logistics — air, sea, express',
  '98.6% buyer satisfaction rate',
  'Dedicated export team with 18+ years experience',
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">About Xiaoyu Import & Export</h1>
            <p className="font-inter text-white/60 max-w-xl mx-auto">Your trusted China-based B2B partner for wholesale Christmas trees.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Our Story</div>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-6">18+ Years Connecting Chinese Factories to the World</h2>
            <p className="font-inter text-muted-foreground leading-relaxed mb-4">
              Guangzhou Xiaoyu Import and Export Co., Ltd. is a professional B2B trading company specializing in Christmas decorations, holiday gifts, and festive home accessories for global wholesale buyers.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed mb-4">
              Based in Nansha District, Guangzhou — one of China's most strategic export hubs — we maintain direct partnerships with leading manufacturers in Yiwu and Guangdong, ensuring the best combination of quality, price, and delivery speed.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              From a single buyer to large-scale retail chains, we tailor our services to meet every client's needs: custom branding, private label packaging, seasonal sourcing, and comprehensive logistics support.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=800&q=80"
                alt="Guangzhou China warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-playfair text-xl font-bold">Guangzhou, China</div>
                <div className="font-inter text-sm text-white/70">Nansha District Export Hub</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</div>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-8">Our Core Commitments</h2>
            <ul className="space-y-4">
              {values.map((v, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="font-inter text-sm text-foreground">{v}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Milestones */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</div>
            <h2 className="font-playfair text-3xl font-bold text-navy mb-8">Milestones</h2>
            <div className="relative border-l-2 border-gold/30 pl-8 space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative">
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-gold border-2 border-white shadow" />
                  <div className="font-inter text-xs text-gold font-bold tracking-wider mb-1">{m.year}</div>
                  <div className="font-inter text-sm text-foreground">{m.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[['18+', 'Years in Business'], ['50+', 'Export Countries'], ['500+', 'Product SKUs'], ['98.6%', 'Satisfaction Rate']].map(([v, l]) => (
            <motion.div key={l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="font-playfair text-4xl font-bold text-gold mb-2">{v}</div>
              <div className="font-inter text-white/60 text-sm">{l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}