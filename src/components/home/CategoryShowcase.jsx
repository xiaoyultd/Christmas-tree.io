import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Full-Size Christmas Trees',
    desc: 'PE+PVC mixed, pre-lit & flocked full-size trees — 150cm to 240cm',
    image: 'https://images.unsplash.com/photo-1544637566-11b148a4b15a?w=600&q=80',
    count: '10+ styles',
  },
  {
    name: 'Desktop & Mini Trees',
    desc: 'Tabletop and desktop Christmas trees — 20cm to 120cm',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
    count: '8+ styles',
  },
  {
    name: 'Slim & Pencil Trees',
    desc: 'Space-saving slim pencil-style trees for apartments and retail',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80',
    count: '5+ styles',
  },
  {
    name: 'Pre-Lit LED Trees',
    desc: 'Factory pre-wired warm white LED Christmas trees — plug & display',
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=600&q=80',
    count: '6+ styles',
  },
  {
    name: 'Flocked Snow Trees',
    desc: 'White snow-flocked Christmas trees — uniform flocking on all tips',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80',
    count: '6+ styles',
  },
  {
    name: 'Creative & Specialty Trees',
    desc: 'Inverted, upside-down, and unique statement Christmas trees',
    image: 'https://images.unsplash.com/photo-1545622783-b3e021430fee?w=600&q=80',
    count: '4+ styles',
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Product Range</div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Christmas Tree Collections</h2>
          <p className="font-inter text-muted-foreground max-w-xl mx-auto">Wholesale Christmas trees in every style and size. All support custom branding, private label, and bulk pricing.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/products"
                className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-gold text-xs font-inter font-medium mb-1">{cat.count}</div>
                  <h3 className="font-playfair text-lg font-bold text-white mb-1">{cat.name}</h3>
                  <p className="font-inter text-white/70 text-xs leading-snug mb-3">{cat.desc}</p>
                  <div className="flex items-center gap-1 text-gold text-xs font-inter font-semibold">
                    View Products <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-inter font-semibold px-8 py-3 rounded-sm hover:bg-navy hover:text-white transition-colors">
            View All Trees <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}