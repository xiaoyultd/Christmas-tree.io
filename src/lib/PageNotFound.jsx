import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <div className="font-playfair text-8xl font-bold text-gold mb-4">404</div>
      <h1 className="font-playfair text-3xl font-bold text-navy mb-3">Page Not Found</h1>
      <p className="font-inter text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-gold text-white font-inter font-semibold px-7 py-3.5 rounded-sm hover:bg-gold/90 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
