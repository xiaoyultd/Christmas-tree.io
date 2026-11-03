import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CATALOG_PRODUCTS } from '@/data/catalogProducts';

const PICKS = [2, 50, 70, 83].map((index) => CATALOG_PRODUCTS[index]);

export default function HomeProductShowcase() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-12">
          <div><div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Buyer shortlist</div><h2 className="text-4xl md:text-5xl font-bold text-navy">Start with a proven direction.</h2></div>
          <Link to="/products" className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-2 self-start">View all 106 series <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PICKS.map((product) => (
            <article key={product.id} className="group bg-[#f7f5f0] rounded-xl overflow-hidden">
              <Link to="/products" className="block aspect-[4/5] overflow-hidden bg-stone-100"><img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></Link>
              <div className="p-5">
                <div className="text-[10px] text-gold font-bold tracking-wider uppercase mb-2">{product.category}</div>
                <h3 className="font-playfair text-xl text-navy font-bold leading-snug min-h-[52px]">{product.name}</h3>
                <div className="mt-4 pt-4 border-t border-navy/10 flex items-center justify-between text-xs text-muted-foreground"><span>{product.id}</span><span className="truncate ml-3">{product.sizes}</span></div>
                <Link to={`/contact?product=${encodeURIComponent(`${product.id} ${product.name}`)}`} className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-md text-sm font-semibold hover:bg-gold"><MessageCircle className="w-4 h-4" /> Request price</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
