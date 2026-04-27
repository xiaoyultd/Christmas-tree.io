import { motion } from 'framer-motion';
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
            <p className="font-inter text-white/60 max-w-xl mx-auto">Select color and size to preview each product. Contact us for wholesale pricing, OEM/ODM, and custom packaging.</p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 bg-background">
        <FeaturedProductsSection />
      </main>

      <Footer />
    </div>
  );
}