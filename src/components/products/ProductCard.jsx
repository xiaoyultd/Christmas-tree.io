import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';

export default function ProductCard({ product, index = 0 }) {
  const fallbackImages = {
    'Christmas Trees': 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80',
    'Christmas Ornaments': 'https://images.unsplash.com/photo-1545622783-b3e021430fee?w=600&q=80',
    'LED Lights & Garlands': 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=600&q=80',
    'DIY Decoration Kits': 'https://images.unsplash.com/photo-1606041011872-596597976b25?w=600&q=80',
    'Holiday Gifts': 'https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=600&q=80',
    'Party Supplies': 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
  };

  const imgSrc = product.image_url || fallbackImages[product.category] || 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-xl border border-border hover:border-gold/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.src = fallbackImages[product.category] || fallbackImages['Christmas Trees']; }}
        />
        {product.is_featured && (
          <div className="absolute top-3 left-3 bg-gold text-white text-xs font-inter font-semibold px-2.5 py-1 rounded-sm">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 bg-navy/80 text-white text-xs font-inter px-2.5 py-1 rounded-sm">
          {product.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-playfair font-bold text-navy text-base mb-2 line-clamp-2">{product.name}</h3>
        {product.description && (
          <p className="font-inter text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        )}
        <div className="space-y-1.5 mb-4">
          {product.moq && (
            <div className="flex items-center gap-1.5 text-xs font-inter text-muted-foreground">
              <Tag className="w-3 h-3 text-gold" /> <span className="font-medium text-navy">MOQ:</span> {product.moq}
            </div>
          )}
          {product.material && (
            <div className="text-xs font-inter text-muted-foreground">
              <span className="font-medium text-navy">Material:</span> {product.material}
            </div>
          )}
          {product.sizes_available && (
            <div className="text-xs font-inter text-muted-foreground">
              <span className="font-medium text-navy">Sizes:</span> {product.sizes_available}
            </div>
          )}
        </div>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="w-full block text-center bg-navy text-white font-inter text-sm font-semibold py-2.5 rounded-sm hover:bg-gold transition-colors duration-200"
        >
          Inquire Now
        </Link>
      </div>
    </motion.div>
  );
}