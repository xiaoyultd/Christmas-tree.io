import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Factory, Palette, Globe, HeadphonesIcon } from 'lucide-react';

const items = [
  { icon: Factory, title: 'Factory Direct', desc: 'Source directly from manufacturers. No middlemen, guaranteed competitive pricing.' },
  { icon: Palette, title: 'OEM / ODM', desc: 'Custom logo, packaging, and product design. Your brand, our expertise.' },
  { icon: ShieldCheck, title: 'Quality Assured', desc: '98.6% positive feedback. Strict QC inspection before every shipment.' },
  { icon: Truck, title: 'Fast Shipping', desc: 'Reliable global logistics from Guangzhou port. 48h dispatch commitment.' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving 50+ countries across Europe, Americas, Southeast Asia & beyond.' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', desc: 'Ms. Summer & team available via email, WhatsApp for responsive service.' },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Your Reliable Partner in<br />Holiday Decoration Supply</h2>
          <p className="font-inter text-muted-foreground max-w-xl mx-auto">With 18+ years in the industry, we deliver premium Christmas & holiday decorations with factory-direct pricing and flexible MOQ.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-xl border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-navy mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}