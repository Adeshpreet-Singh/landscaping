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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream text-earth leaf-pattern px-4 md:px-8">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sage text-white px-4 py-2 rounded-xl z-[100] font-medium px-4 md:px-8">Skip to main content</a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md px-4 md:px-8">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center gap-3 px-4 md:px-8">
              <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-xl px-4 md:px-8">🌿</div>
              <div>
                <h1 className="text-xl font-bold text-earth tracking-tight px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }} style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: "1.2" }}>Verdant</h1>
                <p className="text-[10px] text-sage tracking-[0.15em] uppercase px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Landscapes</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 px-4 md:px-8">
              {['services', 'process', 'stories'].map((item) => (
                <button key={item} onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo(item)} className="text-sm text-warm-gray hover:text-earth transition-colors capitalize px-4 md:px-8">{item}</button>
              ))}
              <button onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('contact')} className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage-light transition-colors px-4 md:px-8">Free Estimate</button>
            </div>
            <button onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> setMenuOpen(!menuOpen)} className="md:hidden text-earth px-4 md:px-8" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <svg className="w-6 h-6 px-4 md:px-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" / style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" / style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>)}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-cream border-t border-sand px-6 py-4 space-y-1 px-4 md:px-8">
              {['services', 'process', 'stories', 'contact'].map((item) => (
                <button key={item} onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo(item)} className="block w-full text-left px-4 py-3 text-warm-gray hover:text-earth rounded-lg capitalize px-4 md:px-8">{item}</button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        <section className="pt-28 pb-20 md:pb-32 overflow-hidden px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-8">
              <div>
                <p className="text-sage text-sm font-medium tracking-widest uppercase mb-4 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Crafting outdoor spaces since 2005</p>
                <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }} style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Your yard is a<br /><span className="text-sage px-4 md:px-8">living canvas.</span>
                </h2>
                <p className="text-xl text-warm-gray mb-8 max-w-lg leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  We design, build, and maintain landscapes that grow more beautiful with time. Sustainable practices, native plants, and craftsmanship you can see.
                </p>
                <div className="flex flex-wrap gap-4 mb-12 px-4 md:px-8">
                  <button onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('contact')} className="bg-sage text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-light transition-all px-4 md:px-8">Get Free Estimate</button>
                  <button onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('services')} className="border-2 border-sage text-sage px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-bg transition-all px-4 md:px-8">View Services</button>
                </div>
                <div className="flex items-center gap-8 text-sm text-warm-gray px-4 md:px-8">
                  <div className="flex items-center gap-2 px-4 md:px-8"><span className="text-sage text-lg px-4 md:px-8">✓</span><span>Licensed & insured</span></div>
                  <div className="flex items-center gap-2 px-4 md:px-8"><span className="text-sage text-lg px-4 md:px-8">✓</span><span>5-year warranty</span></div>
                </div>
              </div>
              <div className="relative flex items-center justify-center px-4 md:px-8">
                <div className="absolute w-80 h-80 bg-sage/10 rounded-full px-4 md:px-8" aria-hidden="true" />
                <div className="relative w-72 h-72 blob-2 overflow-hidden shadow-2xl px-4 md:px-8">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Beautiful landscaped garden with stone pathway and native plantings" className="w-full h-full object-cover px-4 md:px-8" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-sand px-4 md:px-8">
                  <div className="text-2xl font-bold text-sage px-4 md:px-8">20+</div>
                  <div className="text-sm text-warm-gray px-4 md:px-8">Years designing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-sage-bg px-4 md:px-8" aria-labelledby="services-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-sage text-sm tracking-widest uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Our Services</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }} style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>Rooted in excellence</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {SERVICES.map((s, i) => (
                <div key={i} className="warm-card rounded-2xl p-6 transition-all duration-300 px-4 md:px-8">
                  <div className="text-4xl mb-4 px-4 md:px-8">{s.icon}</div>
                  <div className="text-3xl font-bold text-sage mb-1 px-4 md:px-8">{s.stat}</div>
                  <h3 className="text-lg font-bold text-earth mb-2 px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{s.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24 px-4 md:px-8" aria-labelledby="process-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-terracotta text-sm tracking-widest uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Our Process</p>
              <h2 id="process-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }} style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>From vision to reality</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 px-4 md:px-8">
              {STEPS.map((step, i) => (
                <div key={i} className="relative px-4 md:px-8">
                  {i < STEPS.length - 1 && (<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-sand -translate-x-4 px-4 md:px-8" aria-hidden="true" />)}
                  <div className="warm-card rounded-2xl p-6 relative px-4 md:px-8">
                    <div className="text-3xl mb-4 px-4 md:px-8">{step.icon}</div>
                    <div className="text-sage text-sm font-mono mb-2 px-4 md:px-8">{step.num}</div>
                    <h3 className="text-xl font-bold text-earth mb-2 px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{step.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="py-24 px-4 md:px-8" aria-labelledby="stories-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-sage text-sm tracking-widest uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Client Stories</p>
              <h2 id="stories-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }} style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>Landscapes that speak</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 px-4 md:px-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="warm-card rounded-2xl p-6 px-4 md:px-8">
                  <div className="text-sage text-sm font-mono mb-4 px-4 md:px-8">{t.savings}</div>
                  <p className="text-earth mb-6 leading-relaxed italic px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-sand pt-4 px-4 md:px-8">
                    <div className="font-bold text-earth px-4 md:px-8">{t.name}</div>
                    <div className="text-warm-gray text-sm px-4 md:px-8">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-sage-bg px-4 md:px-8" aria-labelledby="contact-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-4xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-12 px-4 md:px-8">
              <p className="text-terracotta text-sm tracking-widest uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Start Your Project</p>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4 px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }} style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>Let's grow something beautiful</h2>
              <p className="text-warm-gray text-lg max-w-xl mx-auto px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Free site visit and estimate. No obligation, just possibilities.</p>
            </div>
            <div className="warm-card rounded-3xl p-8 md:p-10 max-w-2xl mx-auto px-4 md:px-8">
              <form className="space-y-5 px-4 md:px-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5 px-4 md:px-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-earth mb-2 px-4 md:px-8">Full Name</label>
                    <input id="name" type="text" placeholder="Jane Smith" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none px-4 md:px-8" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-earth mb-2 px-4 md:px-8">Email</label>
                    <input id="email" type="email" placeholder="jane@example.com" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none px-4 md:px-8" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 px-4 md:px-8">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-earth mb-2 px-4 md:px-8">Phone</label>
                    <input id="phone" type="tel" placeholder="(555) 000-0000" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none px-4 md:px-8" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-earth mb-2 px-4 md:px-8">Service Needed</label>
                    <select id="service" className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none px-4 md:px-8">
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
                  <label htmlFor="message" className="block text-sm font-medium text-earth mb-2 px-4 md:px-8">Project Details</label>
                  <textarea id="message" rows={4} placeholder="Describe your outdoor space and vision..." className="w-full border border-sand rounded-xl px-4 py-3 text-earth bg-cream placeholder:text-warm-gray/50 focus:border-sage focus:ring-2 focus:ring-sage/20 focus:outline-none resize-none px-4 md:px-8" />
                </div>
                <button type="submit" className="w-full bg-sage text-white py-4 rounded-full text-lg font-medium hover:bg-sage-light transition-all px-4 md:px-8" style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>Request Free Estimate</button>
                <p className="text-center text-warm-gray text-xs px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Free site visit within 48 hours. No obligation.</p>
              </form>
            </div>
          </div>
        </section>
      
      <section style={{ padding: "5rem 1rem", background: "var(--primary)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>Contact us today to discuss your project and get a free consultation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "white", color: "var(--primary)", border: "none", cursor: "pointer" }}>Get Free Quote</button>
            <button style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "transparent", color: "white", border: "2px solid white", cursor: "pointer" }}>Schedule a Call</button>
          </div>
        </div>
      </section>

  </main>

      <footer className="bg-earth text-cream py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8">
            <div className="flex items-center gap-3 px-4 md:px-8">
              <span className="text-2xl px-4 md:px-8">🌿</span>
              <span className="text-xl font-bold px-4 md:px-8" style={{ fontFamily: 'Georgia, serif' }}>Verdant Landscapes</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-warm-gray px-4 md:px-8">
              <span>Licensed & Insured</span>
              <span>5-Year Warranty</span>
              <span>Sustainable Practices</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-earth-light text-center text-sm text-warm-gray px-4 md:px-8">
            © 2026 Verdant Landscapes. Growing beauty since 2005.
          </div>
        </div>
      </footer>
    </div>
  );
}
