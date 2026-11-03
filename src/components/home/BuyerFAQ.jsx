const faqs = [
  ['What Christmas products do you supply?', 'We supply artificial Christmas trees, including full-size, slim, pencil, desktop, pre-lit, flocked and specialty models, plus ornaments, LED lights and coordinated holiday decoration kits.'],
  ['Do you offer OEM, ODM and private-label production?', 'Yes. B2B buyers can request custom tree specifications, colors, lighting, ornaments, branding and retail or bulk packaging. Feasibility and minimum quantities depend on the design.'],
  ['Who do you work with?', 'We serve importers, distributors, wholesalers, retailers, e-commerce brands, event contractors and commercial decoration projects worldwide.'],
  ['What is the minimum order quantity?', 'MOQ varies by product, size, material and customization. Standard products can support more flexible order quantities; custom molds, colors and packaging usually require higher quantities.'],
  ['How long does production take?', 'Lead time depends on the product mix, order size, customization and seasonal capacity. Buyers should send the target quantity and required delivery date for a current production and shipping plan.'],
  ['Can you arrange international shipping?', 'Yes. We support export documentation and international shipping by sea, air or express, depending on volume, destination and timing.'],
];

export default function BuyerFAQ() {
  return (
    <section className="py-24 bg-white" aria-labelledby="buyer-faq-title">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-gold font-inter text-sm font-semibold tracking-widest uppercase mb-3">Buyer Questions</div>
          <h2 id="buyer-faq-title" className="font-playfair text-3xl md:text-4xl font-bold text-navy">Wholesale Christmas Decorations FAQ</h2>
          <p className="font-inter text-muted-foreground mt-4">Clear answers for importers, distributors, retailers and project buyers.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map(([question, answer]) => (
            <article key={question} className="border border-border rounded-lg p-6 bg-background">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-3">{question}</h3>
              <p className="font-inter text-sm leading-7 text-muted-foreground">{answer}</p>
            </article>
          ))}
        </div>
        <p className="font-inter text-sm text-center text-muted-foreground mt-10">
          Need a model-specific answer? Email <a className="text-gold underline" href="mailto:summer@yucore.ltd">summer@yucore.ltd</a> with product, quantity, destination and delivery date.
        </p>
      </div>
    </section>
  );
}
