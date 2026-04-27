import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-playfair text-2xl font-bold mb-1">Christmas Tree House</div>
          <div className="text-gold text-xs tracking-widest uppercase mb-4 font-inter">Wholesale Supplier</div>
          <p className="text-white/60 text-sm leading-relaxed font-inter">
            Your trusted B2B partner for Christmas & holiday decorations. Factory-direct, global shipping, OEM/ODM available.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70 font-inter">
            {[['Home', '/'], ['Products', '/products'], ['About Us', '/about'], ['Services', '/services'], ['Contact', '/contact']].map(([label, path]) => (
              <li key={path}><Link to={path} className="hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">Products</h4>
          <ul className="space-y-2 text-sm text-white/70 font-inter">
            {['Full-Size Christmas Trees', 'Desktop & Mini Trees', 'Slim & Pencil Trees', 'Pre-Lit LED Trees', 'Flocked Snow Trees', 'Creative & Specialty Trees'].map(cat => (
              <li key={cat}><Link to={`/products?category=${encodeURIComponent(cat)}`} className="hover:text-gold transition-colors">{cat}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">Contact Us</h4>
          <div className="text-xs text-white/70 font-inter mb-4">
            <div className="text-white/80 font-semibold mb-3">Guangzhou Xiaoyu Import & Export Co., Ltd.</div>
          </div>
          <ul className="space-y-3 text-sm text-white/70 font-inter">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>A256, 1st Floor, Shop 114, No. 3 & 4, Zhongjing 4th Street, Nansha District, Guangzhou, China</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:summer@yucore.ltd" className="hover:text-gold transition-colors">summer@yucore.ltd</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+8615018485957" className="hover:text-gold transition-colors">+86 15018485957</a>
            </li>
          </ul>
          <div className="mt-4 text-xs text-white/50 font-inter">
            <div>Contact: Ms. Summer</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40 font-inter">
          <span>© {new Date().getFullYear()} Christmas Tree House · Guangzhou, China. All rights reserved.</span>
          <span>Guangzhou, China · B2B Holiday Decorations</span>
        </div>
      </div>
    </footer>
  );
}