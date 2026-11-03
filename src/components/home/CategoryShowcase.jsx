import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { name: 'Luxury Christmas Trees', count: '49 series', image: '/products/catalog-001-1.webp', copy: 'Decorated statement trees developed for retail displays, hospitality and premium seasonal programs.' },
  { name: 'Green Christmas Trees', count: '21 series', image: '/products/catalog-052-1.webp', copy: 'Classic green profiles in varied heights, tip structures and finishes for broad commercial use.' },
  { name: 'Snow Flocked Trees', count: '10 series', image: '/products/catalog-071-1.webp', copy: 'Winter-led flocked designs for immersive store, event and residential collections.' },
  { name: 'Tabletop & Mini Trees', count: '26 series', image: '/products/catalog-084-1.webp', copy: 'Compact, decorated products designed for shelves, desks, gifting and impulse retail.' },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f1e9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-end mb-14">
          <div><div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">The complete collection</div><h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">Four ranges.<br />One focused catalog.</h2></div>
          <p className="text-muted-foreground leading-7 max-w-2xl lg:ml-auto">Instead of a generic product list, the catalog is organized around how buyers source: premium decorated programs, commercial green trees, winter flocked ranges and compact tabletop products.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((category, index) => (
            <motion.article key={category.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group relative overflow-hidden rounded-2xl min-h-[460px] bg-navy">
              <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">{category.count}</div>
                <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
                <p className="text-sm text-white/70 leading-6 max-w-lg mb-5">{category.copy}</p>
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-gold">Browse collection <ArrowUpRight className="w-4 h-4" /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
