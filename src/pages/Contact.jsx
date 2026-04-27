import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InquiryForm from '@/components/contact/InquiryForm';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Request a Free Quote</h1>
            <p className="font-inter text-white/60 max-w-xl mx-auto">Fill in your requirements below and Ms. Summer will respond within 24 hours with a competitive quotation.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="md:col-span-1 space-y-6">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Contact Details</h2>
              <p className="font-inter text-sm text-muted-foreground">Our team is ready to assist you with product inquiries, samples, and bulk orders.</p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-inter text-xs text-muted-foreground mb-0.5">Email</div>
                  <a href="mailto:summer@yucore.ltd" className="font-inter text-sm font-semibold text-navy hover:text-gold transition-colors">summer@yucore.ltd</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-inter text-xs text-muted-foreground mb-0.5">Phone / WhatsApp</div>
                  <a href="tel:+8615018485957" className="font-inter text-sm font-semibold text-navy hover:text-gold transition-colors">+86 15018485957</a>
                  <div className="font-inter text-xs text-muted-foreground mt-0.5">Contact: Ms. Summer</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-inter text-xs text-muted-foreground mb-0.5">Office Address</div>
                  <div className="font-inter text-sm text-navy leading-relaxed">A256, 1st Floor, Shop 114, No. 3 & 4, Zhongjing 4th Street, Nansha District, Guangzhou, China</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-inter text-xs text-muted-foreground mb-0.5">Business Hours</div>
                  <div className="font-inter text-sm text-navy">Mon–Fri: 9:00 AM – 6:00 PM (CST)</div>
                  <div className="font-inter text-xs text-muted-foreground">Weekend inquiries replied on Monday</div>
                </div>
              </div>

              <a
                href="https://wa.me/8615018485957"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-500 rounded-xl text-white hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <div>
                  <div className="font-inter text-sm font-semibold">Chat on WhatsApp</div>
                  <div className="font-inter text-xs text-white/80">Ms. Summer · Quick Response</div>
                </div>
              </a>
            </div>

            {/* Company name in Chinese */}
            <div className="p-4 bg-white rounded-xl border border-border text-center">
              <div className="font-inter text-xs text-muted-foreground mb-1">Company</div>
              <div className="font-playfair text-sm font-bold text-navy">Guangzhou Xiaoyu Import & Export Co., Ltd.</div>
              <div className="font-inter text-xs text-muted-foreground mt-0.5">广州市小彧進出口有限公司</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="md:col-span-2 bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Send Your Inquiry</h2>
            <p className="font-inter text-sm text-muted-foreground mb-8">Tell us about your order requirements and we'll prepare a detailed quotation for you.</p>
            <InquiryForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}