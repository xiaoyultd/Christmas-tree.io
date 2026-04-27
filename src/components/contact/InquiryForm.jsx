import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function InquiryForm() {
  const [form, setForm] = useState({
    company_name: '', contact_name: '', email: '', phone: '', country: '',
    product_interest: '', quantity: '', message: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    if (product) setForm(f => ({ ...f, product_interest: product }));
  }, []);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);

    const FORMSPREE_ID = 'xwvajqpa';

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.contact_name,
          company: form.company_name,
          email: form.email,
          phone: form.phone,
          country: form.country,
          product_interest: form.product_interest,
          quantity: form.quantity,
          message: form.message,
          privacy_agreed: 'Yes',
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        alert('Submission failed. Please email us directly at summer@yucore.ltd');
      }
    } catch {
      alert('Submission failed. Please email us directly at summer@yucore.ltd');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <CheckCircle className="w-16 h-16 text-gold mb-4" />
        <h3 className="font-playfair text-2xl font-bold text-navy mb-2">Inquiry Sent!</h3>
        <p className="font-inter text-muted-foreground">Thank you! Ms. Summer will reply within 24 hours at <strong>{form.email}</strong>.</p>
        <button onClick={() => { setSuccess(false); setAgreed(false); setForm({ company_name:'', contact_name:'', email:'', phone:'', country:'', product_interest:'', quantity:'', message:'' }); }}
          className="mt-6 text-sm font-inter text-gold underline">
          Send another inquiry
        </button>
      </motion.div>
    );
  }

  const inputClass = "w-full font-inter text-sm px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";
  const labelClass = "block font-inter text-sm font-medium text-navy mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Contact Name *</label>
          <input className={inputClass} required value={form.contact_name} onChange={e => set('contact_name', e.target.value)} placeholder="Your full name" />
        </div>
        <div>
          <label className={labelClass}>Company Name</label>
          <input className={inputClass} value={form.company_name} onChange={e => set('company_name', e.target.value)} placeholder="Your company" />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input className={inputClass} type="email" required value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" />
        </div>
        <div>
          <label className={labelClass}>Phone / WhatsApp</label>
          <input className={inputClass} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+1 234 567 890" />
        </div>
        <div>
          <label className={labelClass}>Country</label>
          <input className={inputClass} value={form.country} onChange={e => set('country', e.target.value)} placeholder="e.g. United States" />
        </div>
        <div>
          <label className={labelClass}>Product Interest</label>
          <input className={inputClass} value={form.product_interest} onChange={e => set('product_interest', e.target.value)} placeholder="e.g. Christmas Trees, Ornaments" />
        </div>
        <div>
          <label className={labelClass}>Estimated Quantity</label>
          <input className={inputClass} value={form.quantity} onChange={e => set('quantity', e.target.value)} placeholder="e.g. 500 pcs, 10 cartons" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Message *</label>
        <textarea className={`${inputClass} resize-none h-32`} required value={form.message} onChange={e => set('message', e.target.value)} placeholder="Describe your requirements, target price, delivery date, custom needs..." />
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 border border-border rounded-sm">
        <input
          id="privacy"
          type="checkbox"
          checked={agreed}
          onChange={e => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold cursor-pointer"
        />
        <label htmlFor="privacy" className="font-inter text-sm text-muted-foreground leading-relaxed cursor-pointer">
          I agree to the{' '}
          <span className="font-semibold text-navy">Privacy Policy</span> of Guangzhou Xiaoyu Import &amp; Export Co., Ltd.
          I consent to the collection and use of my personal information (name, email, company, phone) solely for the purpose of responding to this business inquiry.
          My data will not be shared with third parties or used for marketing without my explicit consent.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !agreed}
        className="w-full flex items-center justify-center gap-2 bg-gold text-white font-inter font-semibold py-4 rounded-sm hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : 'Send Inquiry'}
      </button>
      {!agreed && (
        <p className="font-inter text-xs text-center text-amber-600">Please agree to the Privacy Policy before submitting.</p>
      )}
    </form>
  );
}
