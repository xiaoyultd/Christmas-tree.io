import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedProductsSection from '@/components/products/FeaturedProductsSection';

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Our Catalog</div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Wholesale Christmas<br />Tree Catalog</h1>
            <p className="font-inter text-white/65 max-w-2xl mx-auto">Explore 20 buyer-ready selections from our 106-series master catalog. Request the complete catalog or ask us to build a shortlist for your market.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#catalog-selection" className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-inter text-sm font-semibold text-white hover:bg-gold/90">Browse All 106 Series</a>
              <Link to="/contact?product=Full%20106-Series%20Christmas%20Tree%20Catalog" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-inter text-sm font-semibold text-white hover:border-gold hover:text-gold">Request Full Catalog</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[['106', 'Product series'], ['4', 'Core collections'], ['OEM / ODM', 'Private label ready'], ['Export', 'Market support']].map(([value, label]) => (
            <div key={label}><div className="font-playfair text-2xl font-bold text-navy">{value}</div><div className="mt-1 font-inter text-xs text-muted-foreground">{label}</div></div>
          ))}
        </div>
      </section>

      <main className="flex-1 bg-background">
        <FeaturedProductsSection />
      </main>

      <Footer />
    </div>
  );
}
