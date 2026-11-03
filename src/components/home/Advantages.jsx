import { motion } from 'framer-motion';
import { CheckCircle2, FileText, PackageCheck, Ship } from 'lucide-react';

const steps = [
  { icon: FileText, num: '01', title: 'Define the requirement', text: 'Send the model, quantity, destination market and required delivery window.' },
  { icon: CheckCircle2, num: '02', title: 'Confirm product details', text: 'Align size, material, finish, lighting, packaging and private-label requirements.' },
  { icon: PackageCheck, num: '03', title: 'Sample & order confirmation', text: 'Approve the selected specification before the bulk production arrangement.' },
  { icon: Ship, num: '04', title: 'Production & export', text: 'Coordinate packing, shipment method and the export documents required for delivery.' },
];

export default function Advantages() {
  return (
    <section className="bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Working with Xiaoyu</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-7">A clear route from catalog to shipment.</h2>
          <p className="text-white/65 leading-7 mb-12 max-w-xl">We translate the catalog into an order plan buyers can act on. Every inquiry starts with a model and specification, then moves through confirmation, packaging and export coordination.</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-9">
            {steps.map((step) => <div key={step.num} className="border-t border-white/15 pt-5"><div className="flex items-center justify-between mb-4"><step.icon className="w-5 h-5 text-gold" /><span className="text-xs text-white/35">{step.num}</span></div><h3 className="font-playfair text-xl font-bold mb-2">{step.title}</h3><p className="text-sm text-white/55 leading-6">{step.text}</p></div>)}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 min-h-[620px] lg:min-h-full">
          <img src="/products/catalog-015-1.webp" alt="Christmas tree product presentation" className="w-full h-full object-cover row-span-2" />
          <img src="/products/catalog-055-1.webp" alt="Green Christmas tree product detail" className="w-full h-full object-cover" />
          <img src="/products/catalog-092-1.webp" alt="Tabletop Christmas tree collection" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
