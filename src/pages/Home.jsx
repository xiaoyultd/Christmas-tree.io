import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Advantages from '@/components/home/Advantages';
import CTASection from '@/components/home/CTASection';
import BuyerFAQ from '@/components/home/BuyerFAQ';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Advantages />
        <BuyerFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
