'use client';

import { useState } from 'react';

const SERVICES = [
 { title: 'Landscape Design', stat: '500+', desc: 'Custom designs that blend beauty with function. 3D renderings before we break ground.', icon: '📐' },
 { title: 'Installation', stat: '1,200+', desc: 'Projects completed. From plantings to patios, executed with precision and care.', icon: '🌱' },
 { title: 'Maintenance', stat: 'Weekly', desc: 'Ongoing care programs. Mowing, pruning, fertilizing, and seasonal cleanups.', icon: '✂️' },
 { title: 'Hardscaping', stat: 'All Stone', desc: 'Patios, walkways, retaining walls, fire pits. Built to last generations.', icon: '🪨' },
 { title: 'Outdoor Lighting', stat: 'LED+', desc: 'Path lights, uplighting, accent fixtures. Extend your outdoor living into the evening.', icon: '💡' },
];

const STEPS = [
 { num: '01', title: 'Site Visit', desc: 'We walk your property, assess conditions, listen to your vision, and take measurements.', icon: '🏡' },
 { num: '02', title: 'Design Plan', desc: 'Our designers create a detailed plan with plant selections, materials, and 3D renderings.', icon: '🖊️' },
 { num: '03', title: 'Build & Plant', desc: 'Our crews bring the design to life. Clean, efficient, and respectful of your property.', icon: '🌳' },
 { num: '04', title: 'Grow & Maintain', desc: 'We nurture your landscape through the seasons so it matures beautifully.', icon: '🌿' },
];

const TESTIMONIALS = [
 { name: 'The Martinez Family', location: 'Oakwood Estates', text: "Verdant transformed our bare backyard into an oasis. The patio, the plantings, the lighting — it's like a resort now. Worth every penny for the memories we're making.", savings: '35% property value increase' },
 { name: 'Council Member Diane Brooks', location: 'City of Maple Ridge', text: "They've maintained our municipal parks for 8 years. Consistently excellent, responsive, and their sustainable practices align with our city's green goals.", savings: '8 years partnership' },
 { name: 'Thomas & Grace Whitfield', location: 'Riverside', text: 'The irrigation system alone saved us 40% on water bills. Smart, efficient, and our lawn has never looked better. True professionals.', savings: '$2,400/year saved' },
];

const GALLERY = [
 { before: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=70', after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=70', label: 'Backyard Transformation' },
 { before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=70', after: 'https://images.unsplash.com/photo-1598902108854-d1446677dc01?w=400&q=70', label: 'Patio & Hardscape' },
 { before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=70', after: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&q=70', label: 'Garden Plantings' },
];

const SERVICE_AREAS = [
 'Portland', 'Lake Oswego', 'West Linn', 'Tigard', 'Beaverton',
 'Milwaukie', 'Oregon City', 'Clackamas', 'Gresham', 'Happy Valley',
 'Tualatin', 'Wilsonville', 'Canby', 'Sandy', 'Estacada',
];

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [galleryIndex, setGalleryIndex] = useState(0);
 const [showAfter, setShowAfter] = useState(false);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 setMenuOpen(false);
 };

 const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);
 try {
 const res = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 if (res.ok) {
 setFormStatus('sent');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 return (
 <div className="min-h-screen">
 {/* Skip link */}
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--land-forest)] text-white px-4 py-2 rounded-xl z-[100] font-medium">
 Skip to main content
 </a>

 {/* ─── NAVIGATION ─── */}
 <header>
 <nav role="navigation" aria-label="Main navigation" className="land-nav fixed top-0 left-0 right-0 z-50">
 <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
 <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 bg-transparent border-none p-0">
 <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl">🌿</div>
 <div>
 <h1 className="text-xl font-bold tracking-tight">Verdant</h1>
 <p>Landscapes</p>
 </div>
 </button>

 <div className="hidden md:flex items-center gap-8">
 {['services', 'gallery', 'process', 'stories', 'contact'].map((item) => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="land-nav-link capitalize">{item}</button>
 ))}
 <a href="tel:+15035551234" className="land-btn">Free Estimate</a>
 </div>

 <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden bg-transparent border-none" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
 )}
 </svg>
 </button>
 </div>

 {menuOpen && (
 <div className="md:hidden px-6 py-4 space-y-1">
 {['services', 'gallery', 'process', 'stories', 'contact'].map((item) => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 land-nav-link capitalize rounded-lg">{item}</button>
 ))}
 <a href="tel:+15035551234" className="land-btn block text-center mt-2">Free Estimate</a>
 </div>
 )}
 </nav>
 </header>

 <main id="main" role="main">
 {/* ─── HERO ─── */}
 <section className="land-hero land-reveal">
 <div className="max-w-6xl mx-auto px-6">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <span className="land-badge mb-4 inline-block">Serving Portland since 2005</span>
 <h2 className="heading">
 Your yard is a<br /><span>living canvas.</span>
 </h2>
 <p>
 We design, build, and maintain landscapes that grow more beautiful with time. Sustainable practices, native plants, and craftsmanship you can see.
 </p>
 <div className="flex flex-wrap gap-4 mb-8">
 <button onClick={() => scrollToSection('contact')} className="land-btn">Get Free Estimate</button>
 <button onClick={() => scrollToSection('services')} className="land-btn-outline">View Services</button>
 </div>
        <div className="flex items-center gap-6 flex-wrap text-sm font-medium">
          <span className="flex items-center gap-2"><span aria-hidden="true">✓</span> Licensed &amp; Insured</span>
          <span className="flex items-center gap-2"><span aria-hidden="true">✓</span> 5-Year Warranty</span>
        </div>
 </div>
 <div className="relative flex items-center justify-center">
 <div className="absolute" aria-hidden="true" />
 <div className="relative land-img-wrap">
 <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Beautiful landscaped garden with stone pathway and native plantings" />
 </div>
 <div className="land-card">
 <div>20+</div>
 <div>Years designing</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── SERVICES ─── */}
 <section id="services" className="land-section-alt land-reveal" aria-labelledby="services-heading">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center">
 <span className="land-badge mb-3 inline-block">Our Services</span>
 <h2 id="services-heading" className="heading">Rooted in excellence</h2>
 </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
 {SERVICES.map((s, i) => (
 <div key={i} className="land-card land-reveal">
 <div className="land-icon-circle mb-4">{s.icon}</div>
 <div>{s.stat}</div>
 <h3 className="heading">{s.title}</h3>
 <p>{s.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ─── BEFORE / AFTER GALLERY ─── */}
 <section id="gallery" className="land-reveal" aria-labelledby="gallery-heading">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center">
 <span className="land-badge mb-3 inline-block">Before &amp; After</span>
 <h2 id="gallery-heading" className="heading">See the transformation</h2>
 </div>

 <div className="flex justify-center gap-3 mb-8 flex-wrap">
 {GALLERY.map((g, i) => (
 <button
 key={i}
 onClick={() => { setGalleryIndex(i); setShowAfter(false); }}
 className={i === galleryIndex ? 'land-btn' : 'land-btn-outline'}

 >
 {g.label}
 </button>
 ))}
 </div>

 <div className="land-card">
 <div className="land-img-wrap">
 <img
 src={showAfter ? GALLERY[galleryIndex].after : GALLERY[galleryIndex].before}
 alt={`${showAfter ? 'After' : 'Before'}: ${GALLERY[galleryIndex].label}`}

 />
 <span>
 {showAfter ? 'AFTER' : 'BEFORE'}
 </span>
 </div>
 <div className="p-6 text-center">
 <p className="heading">{GALLERY[galleryIndex].label}</p>
 <button
 onClick={() => setShowAfter(!showAfter)}
 className="land-btn"

 >
 Show {showAfter ? 'Before' : 'After'}
 </button>
 </div>
 </div>
 </div>
 </section>

 {/* ─── PROCESS ─── */}
 <section id="process" className="land-section-alt land-reveal" aria-labelledby="process-heading">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center">
 <span className="land-badge mb-3 inline-block">Our Process</span>
 <h2 id="process-heading" className="heading">From vision to reality</h2>
 </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
 {STEPS.map((step, i) => (
 <div key={i} className="land-card land-reveal relative">
 {i < STEPS.length - 1 && (
 <div className="hidden md:block" aria-hidden="true" />
 )}
 <div className="land-icon-circle mb-4">{step.icon}</div>
 <div>{step.num}</div>
 <h3 className="heading">{step.title}</h3>
 <p>{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ─── TESTIMONIALS ─── */}
 <section id="stories" className="land-reveal" aria-labelledby="stories-heading">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-center">
 <span className="land-badge mb-3 inline-block">Client Stories</span>
 <h2 id="stories-heading" className="heading">Landscapes that speak</h2>
 </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
 {TESTIMONIALS.map((t, i) => (
 <div key={i} className="land-card land-reveal">
 <div>{t.savings}</div>
 <p>&ldquo;{t.text}&rdquo;</p>
 <div>
 <div>{t.name}</div>
 <div>{t.location}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ─── SERVICE AREA ─── */}
 <section className="land-section-alt land-reveal" aria-labelledby="area-heading">
 <div className="max-w-6xl mx-auto px-6">
 <div className="grid md:grid-cols-2 gap-10 items-center">
 <div>
 <span className="land-badge mb-3 inline-block">Service Area</span>
 <h2 id="area-heading" className="heading">
 Serving Greater Portland
 </h2>
 <p>
 We proudly serve residential and commercial clients across the Portland metro area. Not sure if we cover your neighborhood? Give us a call.
 </p>
 <div className="flex flex-wrap gap-2">
 {SERVICE_AREAS.map((area) => (
 <span key={area} className="land-badge">{area}</span>
 ))}
 </div>
 </div>
 <div className="land-img-wrap">
 <iframe
 title="Verdant Landscapes service area map"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178849.8034099548!2d-122.75748!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f9d26c6d!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1"
 width="100%"
 height="350"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 </div>
 </div>
 </section>

 {/* ─── CONTACT / FREE ESTIMATE ─── */}
 <section id="contact" className="land-reveal" aria-labelledby="contact-heading">
 <div className="max-w-5xl mx-auto px-6">
 <div className="text-center">
 <span className="land-badge mb-3 inline-block">Start Your Project</span>
 <h2 id="contact-heading" className="heading">Let&apos;s grow something beautiful</h2>
 <p>Free site visit and estimate. No obligation, just possibilities.</p>
 </div>

 <div className="grid md:grid-cols-5 gap-8">
 {/* Contact info */}
 <div className="md:col-span-2 space-y-5">
 <div className="land-card">
 <h3 className="heading">Get in touch</h3>
 <div className="space-y-3">
 <a href="tel:+15035551234" className="flex items-center gap-3">
 <span className="land-icon-circle">📞</span>
 <span>(503) 555-1234</span>
 </a>
 <a href="mailto:hello@verdantlandscapes.com" className="flex items-center gap-3">
 <span className="land-icon-circle">✉️</span>
 <span>hello@verdantlandscapes.com</span>
 </a>
 <a href="https://wa.me/15035551234" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
 <span className="land-icon-circle">💬</span>
 <span>WhatsApp</span>
 </a>
 <div className="flex items-center gap-3">
 <span className="land-icon-circle">📍</span>
 <span>1234 Garden Way, Portland, OR 97201</span>
 </div>
 </div>
 </div>

 <div className="land-card">
 <h3 className="heading">Business Hours</h3>
 <div className="space-y-1">
 <div className="flex justify-between"><span>Mon – Fri</span><span>7:00 AM – 6:00 PM</span></div>
 <div className="flex justify-between"><span>Saturday</span><span>8:00 AM – 2:00 PM</span></div>
 <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
 </div>
 </div>

 <div className="flex gap-3">
 <a href="https://www.facebook.com/verdantlandscapes" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="land-icon-circle">📘</a>
 <a href="https://www.instagram.com/verdantlandscapes" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="land-icon-circle">📷</a>
 <a href="https://www.pinterest.com/verdantlandscapes" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="land-icon-circle">📌</a>
 </div>
 </div>

 {/* Form */}
 <div className="md:col-span-3">
 <div className="land-card">
 {formStatus === 'sent' ? (
 <div className="text-center">
 <div>✅</div>
 <h3 className="heading">Request Received!</h3>
 <p>We&apos;ll contact you within 48 hours to schedule your free site visit.</p>
 </div>
 ) : (
 <form onSubmit={handleFormSubmit} className="space-y-5">
 <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
 <input type="hidden" name="subject" value="New Free Estimate Request — Verdant Landscapes" />
 <input type="checkbox" name="botcheck" className="hidden" />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Full Name</label>
              <input id="name" name="name" type="text" required placeholder="Jane Smith" className="land-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email</label>
              <input id="email" name="email" type="email" required placeholder="jane@example.com" className="land-input" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" className="land-input" />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-1.5">Service Needed</label>
 <select id="service" name="service" className="land-input">
 <option value="">Select a service</option>
 <option value="design">Landscape Design</option>
 <option value="install">Installation</option>
 <option value="maintain">Maintenance</option>
 <option value="hardscape">Hardscaping</option>
 <option value="lighting">Outdoor Lighting</option>
 <option value="irrigation">Irrigation</option>
 </select>
 </div>
 </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1.5">Project Details</label>
 <textarea id="message" name="message" rows={4} placeholder="Describe your outdoor space and vision..." className="land-input" />
 </div>

 <button type="submit" className="land-btn w-full" disabled={formStatus === 'sending'}>
 {formStatus === 'sending' ? 'Sending...' : 'Request Free Estimate'}
 </button>

 {formStatus === 'error' && (
 <p>Something went wrong. Please try again or call us directly.</p>
 )}

 <p>Free site visit within 48 hours. No obligation.</p>
 </form>
 )}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── CTA BANNER ─── */}
 <section>
 <div>
 <h2 className="heading">Ready to Get Started?</h2>
 <p>Contact us today to discuss your project and get a free consultation.</p>
 <div className="flex gap-4 justify-center flex-wrap">
 <a href="tel:+15035551234" className="land-btn">Call (503) 555-1234</a>
 <button onClick={() => scrollToSection('contact')} className="land-btn-outline">Schedule a Visit</button>
 </div>
 </div>
 </section>
 </main>

 {/* ─── FOOTER ─── */}
 <footer>
 <div className="max-w-6xl mx-auto px-6">
 <div className="grid md:grid-cols-3 gap-8 mb-8">
 <div>
 <div className="flex items-center gap-3 mb-4">
 <span>🌿</span>
 <span className="heading">Verdant Landscapes</span>
 </div>
 <p>Designing, building, and maintaining beautiful outdoor spaces in the Greater Portland area since 2005.</p>
 </div>
 <div>
 <h4 className="heading">Quick Links</h4>
 <div className="space-y-2">
 {['services', 'gallery', 'process', 'contact'].map((item) => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block bg-transparent border-none p-0 capitalize">{item}</button>
 ))}
 </div>
 </div>
 <div>
 <h4 className="heading">Contact</h4>
 <div className="space-y-2">
 <a href="tel:+15035551234">(503) 555-1234</a>
 <a href="mailto:hello@verdantlandscapes.com">hello@verdantlandscapes.com</a>
 <p>1234 Garden Way<br />Portland, OR 97201</p>
 </div>
 </div>
 </div>
 <div>
 <div className="flex justify-center gap-6 mb-3 flex-wrap">
 <span>Licensed &amp; Insured</span>
 <span>5-Year Warranty</span>
 <span>Sustainable Practices</span>
 </div>
 &copy; 2026 Verdant Landscapes. Growing beauty since 2005.
 </div>
 </div>
 </footer>
 </div>
 );
}
