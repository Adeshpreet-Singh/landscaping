'use client';

import { useState } from 'react';

const SERVICES = [
  { title: 'Landscape Design', stat: '500+', desc: 'Custom designs that blend beauty with function. 3D renderings before we break ground.', icon: '📐' },
  { title: 'Installation', stat: '1,200+', desc: 'Projects completed. From plantings to patios, executed with precision and care.', icon: '🌱' },
  { title: 'Maintenance', stat: 'Weekly', desc: 'Ongoing care programs. Mowing, pruning, fertilizing, and seasonal cleanups.', icon: '✂️' },
  { title: 'Hardscaping', stat: 'All Stone', desc: 'Patios, walkways, retaining walls, fire pits. Built to last generations.', icon: '🪨' },
];

const STEPS = [
  { num: '01', title: 'Site Visit', desc: 'We walk your property, assess conditions, listen to your vision, and take measurements.', icon: '🏡' },
  { num: '02', title: 'Design Plan', desc: 'Our designers create a detailed plan with plant selections, materials, and 3D renderings.', icon: '🖊️' },
  { num: '03', title: 'Build & Plant', desc: 'Our crews bring the design to life. Clean, efficient, and respectful of your property.', icon: '🌳' },
  { num: '04', title: 'Grow & Maintain', desc: 'We nurture your landscape through the seasons so it matures beautifully.', icon: '🌿' },
];

const TESTIMONIALS = [
  { name: 'The Martinez Family', location: 'Oakwood Estates', text: 'Verdant transformed our bare backyard into an oasis. The patio, the plantings, the lighting — it\'s like a resort now. Worth every penny for the memories we\'re making.', savings: '35% property value increase' },
  { name: 'Council Member Diane Brooks', location: 'City of Maple Ridge', text: 'They\'ve maintained our municipal parks for 8 years. Consistently excellent, responsive, and their sustainable practices align with our city\'s green goals.', savings: '8 years partnership' },
  { name: 'Thomas & Grace Whitfield', location: 'Riverside', text: 'The irrigation system alone saved us 40% on water bills. Smart, efficient, and our lawn has never looked better. True professionals.', savings: '$2,400/year saved' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream text-earth leaf-pattern">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sage text-white px-4 py-2 rounded-xl z-[100] font-medium">Skip to main content</a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-xl">🌿</div>
              <div>
                <h1 className="text-xl font-bold text-earth tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Verdant</h1>
                <p className="text-[10px] text-sage tracking-[0.15em] uppercase">Landscapes</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['services', 'process', 'stories'].map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-sm text-warm-gray hover:text-earth transition-colors capitalize">{item}</button>
              ))}
              <button onClick={() => scrollTo('contact')} className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage-light transition-colors">Free Estimate</button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-earth" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-cream border-t border-sand px-6 py-4 space-y-1">
              {['services', 'process', 'stories', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-4 py-3 text-warm-gray hover:text-earth rounded-lg capitalize">{item}</button>
              ))}
            </div>
          )}
        </nav>
      </header>

      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Landscaping",
            "url": "https://landscaping.com",
            "description": "Professional landscaping services.",
          })}}
        />

        <main id="main" role="main">
        <section className="pt-28 pb-20 md:pb-32 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4">Crafting outdoor spaces since 2005</p>
                <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Your yard is a<br /><span className="text-sage">living canvas.</span>
                </h2>
                <p className="text-xl text-warm-gray mb-8 max-w-lg leading-relaxed">
                  We design, build, and maintain landscapes that grow more beautiful with time. Sustainable practices, native plants, and craftsmanship you can see.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <button onClick={() => scrollTo('contact')} className="bg-sage text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-light transition-all">Get Free Estimate</button>
                  <button onClick={() => scrollTo('services')} className="border-2 border-sage text-sage px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-bg transition-all">View Services</button>
                </div>
                <div className="flex items-center gap-8 text-sm text-warm-gray">
                  <div className="flex items-center gap-2"><span className="text-sage text-lg">✓</span><span>Licensed & insured</span></div>
                  <div className="flex items-center gap-2"><span className="text-sage text-lg">✓</span><span>5-year warranty</span></div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-80 h-80 bg-sage/10 rounded-full" aria-hidden="true" />
                <div className="relative w-72 h-72 blob-2 overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Beautiful landscaped garden with stone pathway and native plantings" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-sand">
                  <div className="text-2xl font-bold text-sage">20+</div>
                  <div className="text-sm text-warm-gray">Years designing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-sage-bg" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sage text-sm tracking-widest uppercase mb-3">Our Services</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Rooted in excellence</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s, i) => (
                <div key={i} className="warm-card rounded-2xl p-6 transition-all duration-300">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <div className="text-3xl font-bold text-sage mb-1">{s.stat}</div>
                  <h3 className="text-lg font-bold text-earth mb-2">{s.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-terracotta text-sm tracking-widest uppercase mb-3">Our Process</p>
              <h2 id="process-heading" className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>From vision to reality</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <div key={i} className="relative">
                  {i < STEPS.length - 1 && (<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-sand -translate-x-4" aria-hidden="true" />)}
                  <div className="warm-card rounded-2xl p-6 relative">
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <div className="text-sage text-sm font-mono mb-2">{step.num}</div>
                    <h3 className="text-xl font-bold text-earth mb-2">{step.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="py-24" aria-labelledby="stories-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sage text-sm tracking-widest uppercase mb-3">Client Stories</p>
              <h2 id="stories-heading" className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Landscapes that speak</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="warm-card rounded-2xl p-6">
                  <div className="text-sage text-sm font-mono mb-4">{t.savings}</div>
                  <p className="text-earth mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-sand pt-4">
                    <div className="font-bold text-earth">{t.name}</div>
                    <div className="text-warm-gray text-sm">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-sage-bg" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-terracotta text-sm tracking-widest uppercase mb-3">Start Your Project</p>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>Let's grow something beautiful</h2>
              <p className="text-warm-gray text-lg max-w-xl mx-auto">Free site visit and estimate. No obligation, just possibilities.</p>
            </div>
            <div className="warm-card rounded-3xl p-8 md:p-10 max-w-2xl mx-auto">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-earth mb-2">Full Name</label>
                    <input id="name" type="text" placeholder="Jane Smith" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-earth mb-2">Email</label>
                    <input id="email" type="email" placeholder="jane@example.com" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-earth mb-2">Phone</label>
                    <input id="phone" type="tel" placeholder="(555) 000-0000" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-earth mb-2">Service Needed</label>
                    <select id="service" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="design">Landscape Design</option>
                      <option value="install">Installation</option>
                      <option value="maintain">Maintenance</option>
                      <option value="hardscape">Hardscaping</option>
                      <option value="irrigation">Irrigation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-earth mb-2">Project Details</label>
                  <textarea id="message" rows={4} placeholder="Describe your outdoor space and vision..." className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-sage text-white py-4 rounded-full text-lg font-medium hover:bg-sage-light transition-all">Request Free Estimate</button>
              {submitted && <p className="text-center text-green-500 text-sm mt-2 animate-pulse">Sent! We will be in touch soon.</p>}
                <p className="text-center text-warm-gray text-xs">Free site visit within 48 hours. No obligation.</p>
              </form>
            </div>
          </div>
        </section>
      
        
        {/* Gallery Section */}
        <section className="py-24" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
              <p className="text-current/60">A selection of recent projects.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
          {title: 'Before & After', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80', desc: 'Complete renovation project'},
          {title: 'Residential Job', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80', desc: 'Professional service delivery'},
          {title: 'Commercial Project', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80', desc: 'Large-scale commercial work'},
          {title: 'Emergency Call', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80', desc: 'Same-day emergency response'},
          {title: 'Custom Solution', img: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&q=80', desc: 'Tailored to client needs'},
          {title: 'Team in Action', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', desc: 'Our expert team at work'}
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="font-bold text-sm">{item.title}</div>
                      <div className="text-xs text-white/70">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-current/60">Everything you need to know.</p>
            </div>
            <div className="space-y-4">
              {[
          {question: 'How do I schedule an appointment?', answer: 'Call us, text us, or fill out the contact form. We typically respond within 1 hour during business hours.'},
          {question: 'Are you licensed and insured?', answer: 'Yes. We are fully licensed, bonded, and carry comprehensive liability insurance.'},
          {question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation estimates for all services. Call or fill out our form to get started.'},
          {question: 'What areas do you serve?', answer: 'We serve the entire metro area. Contact us to confirm service availability in your specific location.'}
              ].map((faq, i) => (
                <details key={i} className="group border border-current/10 rounded-xl p-5 [&_summary]:cursor-pointer">
                  <summary className="font-medium flex justify-between items-center list-none">
                    {faq.question}
                    <span className="ml-4 text-current/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-current/60 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-earth text-cream py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Verdant Landscapes</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-warm-gray">
              <span>Licensed & Insured</span>
              <span>5-Year Warranty</span>
              <span>Sustainable Practices</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-earth-light text-center text-sm text-warm-gray">
            © 2026 Verdant Landscapes. Growing beauty since 2005.
          </div>
        
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
      </footer>
    </div>
  );
}
