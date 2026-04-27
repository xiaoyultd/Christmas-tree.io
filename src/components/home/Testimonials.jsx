import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'James K.', country: 'United Kingdom', text: 'Excellent quality Christmas trees. The DIY kits were a huge hit at our retail stores. Will definitely reorder next season!', rating: 5 },
  { name: 'Maria L.', country: 'Australia', text: 'Fast shipping and great packaging. MOQ was flexible for our first order. Summer was very responsive and professional.', rating: 5 },
  { name: 'Carlos R.', country: 'Mexico', text: 'Best wholesale supplier for Christmas ornaments. The gold and red color sets are beautiful. Our customers love them.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Client Feedback</div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Trusted by Buyers Worldwide</h2>
          <p className="font-inter text-muted-foreground">98.6% positive feedback · 25%+ repeat purchase rate</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array(r.rating).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-inter text-sm text-foreground leading-relaxed mb-6 italic">"{r.text}"</p>
              <div>
                <div className="font-inter font-semibold text-navy text-sm">{r.name}</div>
                <div className="font-inter text-xs text-muted-foreground">{r.country}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}