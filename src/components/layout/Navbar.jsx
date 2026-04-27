import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-xs py-2 px-6 hidden md:flex justify-between items-center">
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> summer@yucore.ltd</span>
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +86 15018485957</span>
        </span>
        <span className="text-white/70">Christmas Tree House · Guangzhou, China</span>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white'} border-b border-border`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-playfair text-xl font-bold text-navy">Christmas Tree House</span>
            <span className="text-[10px] tracking-widest text-gold uppercase font-inter font-medium">Wholesale Supplier</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-inter font-medium transition-colors relative group ${
                  location.pathname === l.path ? 'text-gold' : 'text-navy hover:text-gold'
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${location.pathname === l.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-gold/90 transition-colors">
            Get a Quote
          </Link>

          {/* Mobile toggle */}
          <button className="md:hidden text-navy" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map(l => (
                  <Link key={l.path} to={l.path} className={`font-inter text-sm font-medium ${location.pathname === l.path ? 'text-gold' : 'text-navy'}`}>
                    {l.label}
                  </Link>
                ))}
                <Link to="/contact" className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-sm text-center">
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}