'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* Data */
const SERVICES = [
 {
 title: 'Bespoke Design',
 stat: '600+',
 desc: 'Award-winning landscape architecture. CAD renderings, plant palettes, and hardscape plans crafted around your lifestyle.',
 icon: '',
 img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
 },
 {
 title: 'Master Installation',
 stat: '1,400+',
 desc: 'From mature specimen trees to hand-set natural stone. Every installation executed with surgical precision.',
 icon: '',
 img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
 },
 {
 title: 'Living Maintenance',
 stat: 'Premium',
 desc: 'White-glove seasonal care. Pruning, soil health monitoring, irrigation tuning, and proactive pest management.',
 icon: '',
 img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
 },
 {
 title: 'Artisan Hardscaping',
 stat: 'Lifetime',
 desc: 'Bluestone patios, dry-stacked walls, water features. Crafted by master masons using materials that age beautifully.',
 icon: '',
 img: 'https://images.unsplash.com/photo-1598902108854-d1446677dc01?w=600&q=80',
 },
 {
 title: 'Atmospheric Lighting',
 stat: 'LED+',
 desc: 'Layered illumination design. Moonlighting, path accents, and architectural uplighting that transforms evenings.',
 icon: '',
 img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
 },
];

const BEFORE_AFTER = [
 {
 before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
 after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
 label: 'Woodland Garden Revival',
 location: 'Lake Oswego Estate',
 scope: 'Full redesign, native plantings, flagstone path',
 },
 {
 before: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=800&q=80',
 after: 'https://images.unsplash.com/photo-1598902108854-d1446677dc01?w=800&q=80',
 label: 'Entertainer\'s Courtyard',
 location: 'West Linn Residence',
 scope: 'Bluestone patio, fire pit, outdoor kitchen',
 },
 {
 before: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
 after: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
 label: 'Front Entry Transformation',
 location: 'Portland Heights',
 scope: 'Boxwood parterre, lighting, custom gates',
 },
 {
 before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
 after: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
 label: 'Zen Water Garden',
 location: 'Tigard Modern Home',
 scope: 'Koi pond, waterfall, moss garden, bamboo screen',
 },
];

const TESTIMONIALS = [
 {
 name: 'The Martinez Family',
 location: 'Oakwood Estates',
 text: 'Terraverde turned our quarter-acre into something you\'d see in a magazine. The stone work alone is a masterpiece. Neighbors stop to photograph it.',
 metric: '42% property value increase',
 stars: 5,
 },
 {
 name: 'Sarah & James Whitfield',
 location: 'Riverside Drive',
 text: 'The smart irrigation system cut our water usage by 40% while the garden has never looked lusher. Their horticulture knowledge is genuinely impressive.',
 metric: '$2,800/year saved',
 stars: 5,
 },
 {
 name: 'Dr. Amara Chen',
 location: 'Portland West Hills',
 text: 'They designed our garden around how we actually live — morning coffee spot, kids\' play area hidden by ornamental grasses, a fire pit for evenings. Pure genius.',
 metric: 'Featured in Portland Monthly',
 stars: 5,
 },
];

const PROCESS_STEPS = [
 { num: '01', title: 'Discovery', desc: 'An unhurried walk through your property. We listen, observe sun paths, test soil, and understand how you dream of living outdoors.', icon: '' },
 { num: '02', title: 'Design', desc: 'Hand-rendered concept boards and 3D fly-throughs. Material samples on-site so you can touch every stone and smell every plant.', icon: '' },
 { num: '03', title: 'Craft', desc: 'Our master crews bring the design to life. Clean sites, respectful timelines, and a level of care that borders on obsessive.', icon: '' },
 { num: '04', title: 'Nurture', desc: 'Seasonal tune-ups, proactive care, and a dedicated account manager. Your landscape gets better every year, not just the first.', icon: '' },
];

const STATS = [
 { value: '20+', label: 'Years of Mastery' },
 { value: '4.9', label: 'Client Rating' },
 { value: '1,400+', label: 'Projects Delivered' },
 { value: '98%', label: 'Client Retention' },
];

const SERVICE_AREAS = [
 'Portland', 'Lake Oswego', 'West Linn', 'Tigard', 'Beaverton',
 'Milwaukie', 'Oregon City', 'Clackamas', 'Gresham', 'Happy Valley',
 'Tualatin', 'Wilsonville', 'Canby', 'Sandy', 'Estacada',
];

/* Before/After Slider Component */
function BeforeAfterSlider({ before, after, label, location, scope }: { before: string; after: string; label: string; location: string; scope: string }) {
 const [position, setPosition] = useState(50);
 const containerRef = useRef<HTMLDivElement>(null);
 const isDragging = useRef(false);

 const handleMove = useCallback((clientX: number) => {
 if (!containerRef.current) return;
 const rect = containerRef.current.getBoundingClientRect();
 const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
 setPosition((x / rect.width) * 100);
 }, []);

 const handleMouseDown = () => { isDragging.current = true; };
 const handleMouseUp = () => { isDragging.current = false; };
 const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
 const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

 useEffect(() => {
 const handleGlobalUp = () => { isDragging.current = false; };
 window.addEventListener('mouseup', handleGlobalUp);
 window.addEventListener('touchend', handleGlobalUp);
 return () => {
 window.removeEventListener('mouseup', handleGlobalUp);
 window.removeEventListener('touchend', handleGlobalUp);
 };
 }, []);

 return (
 <div className="land-ba-card">
 <div
 ref={containerRef}
 className="land-ba-container"
 onMouseMove={handleMouseMove}
 onTouchMove={handleTouchMove}
 >
 {/* After (full background) */}
 <img src={after} alt={`After: ${label}`} className="land-ba-img" draggable={false} />
 {/* Before (clipped) */}
 <div className="land-ba-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
 <img src={before} alt={`Before: ${label}`} className="land-ba-img" draggable={false} />
 </div>
 {/* Slider handle */}
 <div className="land-ba-handle" style={{ left: `${position}%` }} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}>
 <div className="land-ba-line" />
 <div className="land-ba-knob">
 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </div>
 </div>
 {/* Labels */}
 <span className="land-ba-label land-ba-label-before">BEFORE</span>
 <span className="land-ba-label land-ba-label-after">AFTER</span>
 </div>
 <div className="land-ba-info">
 <h3 className="heading">{label}</h3>
 <p className="text-sm opacity-70">{location}</p>
 <p className="text-sm mt-1">{scope}</p>
 </div>
 </div>
 );
}

/* Star Rating */
function Stars({ count }: { count: number }) {
 return (
 <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
 {Array.from({ length: 5 }).map((_, i) => (
 <span key={i} className={i < count ? 'text-amber-400' : 'text-gray-300'}></span>
 ))}
 </div>
 );
}

/* Main Page */
export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [activeGallery, setActiveGallery] = useState(0);
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
 const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
 if (res.ok) { setFormStatus('sent'); form.reset(); } else { setFormStatus('error'); }
 } catch { setFormStatus('error'); }
 };

 return (
 <div className="min-h-screen">
 {/* Skip link */}
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--land-forest)] text-white px-4 py-2 rounded-xl z-[100] font-medium">
 Skip to main content
 </a>

 {/* NAVIGATION */}
 <header>
 <nav role="navigation" aria-label="Main navigation" className="land-nav fixed top-0 left-0 right-0 z-50">
 <div className=" section-container">
 <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 bg-transparent border-none p-0">
 <div className="land-logo-mark">
 <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
 <path d="M14 2C14 2 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 2 14 2Z" fill="currentColor" opacity="0.9"/>
 <path d="M14 8C14 8 10 12 10 16C10 18.2091 11.7909 20 14 20C16.2091 20 18 18.2091 18 16C18 12 14 8 14 8Z" fill="var(--land-cream)" opacity="0.4"/>
 </svg>
 </div>
 <div>
 <h1 className="text-lg font-bold tracking-tight leading-tight">Terraverde</h1>
 <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-60 leading-tight">Landscape Atelier</p>
 </div>
 </button>

 <div className="hidden md:flex items-center gap-8">
 {['Services', 'Portfolio', 'Process', 'Stories', 'Contact'].map((item) => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="land-nav-link">{item}</button>
 ))}
 <button onClick={() => scrollToSection('contact')} className="land-btn">Book Consultation</button>
 </div>

 <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden bg-transparent border-none p-2" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
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
 <div className="md:hidden px-6 py-4 space-y-1 bg-[var(--land-cream)] border-t border-[var(--land-border)]">
 {['Services', 'Portfolio', 'Process', 'Stories', 'Contact'].map((item) => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 land-nav-link rounded-lg">{item}</button>
 ))}
 <button onClick={() => scrollToSection('contact')} className="land-btn block w-full text-center mt-2">Book Consultation</button>
 </div>
 )}
 </nav>
 </header>

 <main id="main" role="main">
 {/* HERO */}
 <section className="land-hero">
 <div className=" section-container">
 <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
 <div className="land-reveal">
 <span className="land-badge mb-5 inline-block">Portland&lsquo;s Premier Landscape Atelier — Est. 2005</span>
 <h2 className="heading land-hero-heading">
 Where nature<br />meets <span className="land-accent">intention.</span>
 </h2>
 <p className="text-lg md:text-xl opacity-80 mb-8 max-w-lg leading-relaxed">
 We don&lsquo;t just plant gardens — we compose living environments. Every stone placed, every canopy shaped, every light angled to elevate how you experience home.
 </p>
 <div className="flex flex-wrap gap-4 mb-10">
 <button onClick={() => scrollToSection('contact')} className="land-btn">Book a Free Consultation</button>
 <button onClick={() => scrollToSection('portfolio')} className="land-btn-outline">View Our Work</button>
 </div>
 <div className="flex items-center gap-8 flex-wrap text-sm font-medium opacity-70">
 <span className="flex items-center gap-2"><span aria-hidden="true" className="text-[var(--land-forest)]"></span> Licensed &amp; Insured</span>
 <span className="flex items-center gap-2"><span aria-hidden="true" className="text-[var(--land-forest)]"></span> 5-Year Craftsmanship Warranty</span>
 <span className="flex items-center gap-2"><span aria-hidden="true" className="text-[var(--land-forest)]"></span> Sustainably Sourced Materials</span>
 </div>
 </div>
 <div className="relative land-reveal">
 <div className="land-hero-img-wrap">
 <img
 src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&q=85"
 alt="Lush garden pathway with native plantings and natural stone by Terraverde"
 className="w-full"
 />
 </div>
 <div className="land-hero-stat">
 <div className="text-3xl font-bold heading">20+</div>
 <div className="text-xs tracking-wider uppercase opacity-70">Years of Mastery</div>
 </div>
 {/* Decorative ring */}
 <div className="land-deco-ring" aria-hidden="true" />
 </div>
 </div>

 {/* Stats bar */}
 <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-6 mt-16 md:mt-24">
 {STATS.map((s, i) => (
 <div key={i} className="land-reveal text-center md:text-left">
 <div className="text-3xl md:text-4xl font-bold heading">{s.value}</div>
 <div className="text-sm opacity-60 mt-1">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SERVICES */}
 <section id="services" className="land-section-alt py-16 md:py-20" aria-labelledby="services-heading">
 <div className=" section-container">
 <div className="text-center mb-14 land-reveal">
 <span className="land-badge mb-3 inline-block">What We Do</span>
 <h2 id="services-heading" className="heading text-4xl md:text-5xl">Crafted with intention</h2>
 <p className="mt-4 opacity-70 max-w-2xl mx-auto">Five disciplines, one unified vision. Every Terraverde project is a collaboration between landscape architects, master horticulturists, and artisan builders.</p>
 </div>
 <div className="grid md:grid-cols-5 gap-5">
 {SERVICES.map((s, i) => (
 <div key={i} className="land-service-card land-reveal group">
 <div className="land-service-img-wrap">
 <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
 <div className="land-service-overlay" />
 </div>
 <div className="land-service-body">
 <div className="text-xs tracking-widest uppercase opacity-50 mb-2">{s.stat}</div>
 <h3 className="heading text-xl mb-2">{s.title}</h3>
 <p className="text-sm opacity-70 leading-relaxed">{s.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* BEFORE/AFTER PORTFOLIO */}
 <section id="portfolio" className="py-16 md:py-20" aria-labelledby="portfolio-heading">
 <div className=" section-container">
 <div className="text-center mb-14 land-reveal">
 <span className="land-badge mb-3 inline-block">Portfolio</span>
 <h2 id="portfolio-heading" className="heading text-4xl md:text-5xl">The transformation</h2>
 <p className="mt-4 opacity-70 max-w-2xl mx-auto">Drag the slider to reveal each transformation. Every project begins as an underperforming space and emerges as a living work of art.</p>
 </div>

 {/* Project selector tabs */}
 <div className="flex justify-center gap-3 mb-10 flex-wrap land-reveal">
 {BEFORE_AFTER.map((p, i) => (
 <button
 key={i}
 onClick={() => setActiveGallery(i)}
 className={i === activeGallery ? 'land-btn' : 'land-btn-outline'}
 >
 {p.label}
 </button>
 ))}
 </div>

 {/* Active slider */}
 <div className="land-reveal">
 <BeforeAfterSlider {...BEFORE_AFTER[activeGallery]} />
 </div>

 {/* Thumbnail strip */}
 <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-4 mt-8">
 {BEFORE_AFTER.map((p, i) => (
 <button
 key={i}
 onClick={() => setActiveGallery(i)}
 className={`land-ba-thumb land-reveal ${i === activeGallery ? 'active' : ''}`}
 >
 <img src={p.after} alt={p.label} className="w-full h-full object-cover" />
 <span className="land-ba-thumb-label">{p.label}</span>
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* PROCESS */}
 <section id="process" className="land-section-alt py-16 md:py-20" aria-labelledby="process-heading">
 <div className=" section-container">
 <div className="text-center mb-14 land-reveal">
 <span className="land-badge mb-3 inline-block">Our Approach</span>
 <h2 id="process-heading" className="heading text-4xl md:text-5xl">From vision to reality</h2>
 <p className="mt-4 opacity-70 max-w-2xl mx-auto">A deliberate, unhurried process that ensures every detail is considered and every expectation exceeded.</p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
 {PROCESS_STEPS.map((step, i) => (
 <div key={i} className="land-process-card land-reveal relative">
 {i < PROCESS_STEPS.length - 1 && (
 <div className="land-process-connector" aria-hidden="true" />
 )}
 <div className="land-process-num">{step.num}</div>
 <div className="land-icon-circle mb-4">{step.icon}</div>
 <h3 className="heading text-xl mb-2">{step.title}</h3>
 <p className="text-sm opacity-70 leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* TESTIMONIALS */}
 <section id="stories" className="py-16 md:py-20" aria-labelledby="stories-heading">
 <div className=" section-container">
 <div className="text-center mb-14 land-reveal">
 <span className="land-badge mb-3 inline-block">Client Stories</span>
 <h2 id="stories-heading" className="heading text-4xl md:text-5xl">Voices from our gardens</h2>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {TESTIMONIALS.map((t, i) => (
 <div key={i} className="land-testimonial-card land-reveal">
 <Stars count={t.stars} />
 <p className="mt-4 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
 <div className="mt-auto">
 <div className="land-testimonial-metric">{t.metric}</div>
 <div className="mt-3 font-semibold">{t.name}</div>
 <div className="text-sm opacity-60">{t.location}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SERVICE AREA */}
 <section className="land-section-alt py-16 md:py-20" aria-labelledby="area-heading">
 <div className=" section-container">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div className="land-reveal">
 <span className="land-badge mb-3 inline-block">Service Area</span>
 <h2 id="area-heading" className="heading text-4xl md:text-5xl">
 Serving Greater Portland
 </h2>
 <p className="mt-4 opacity-70 mb-6">
 We proudly serve residential and commercial clients across the Portland metro area. Not sure if we cover your neighborhood? Give us a call.
 </p>
 <div className="flex flex-wrap gap-2">
 {SERVICE_AREAS.map((area) => (
 <span key={area} className="land-badge">{area}</span>
 ))}
 </div>
 </div>
 <div className="land-img-wrap land-reveal h-[350px]">
 <iframe
 title="Terraverde Landscape Atelier service area map"
 src="[WEBSITE]/maps/embed?pb=!1m18!1m12!1m3!1d178849.8034099548!2d-122.75748!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f9d26c6d!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1"
 width="100%"
 height="350"
 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 className="rounded-2xl"
 />
 </div>
 </div>
 </div>
 </section>

 {/* CONTACT */}
 <section id="contact" className="py-16 md:py-20" aria-labelledby="contact-heading">
 <div className=" section-container">
 <div className="text-center mb-14 land-reveal">
 <span className="land-badge mb-3 inline-block">Begin Your Project</span>
 <h2 id="contact-heading" className="heading text-4xl md:text-5xl">Let&lsquo;s compose your landscape</h2>
 <p className="mt-4 opacity-70">A complimentary site visit and design consultation. No obligation — just possibilities.</p>
 </div>

 <div className="grid md:grid-cols-5 gap-8">
 {/* Contact info */}
 <div className="md:col-span-2 space-y-5 land-reveal">
 <div className="land-card">
 <h3 className="heading text-xl mb-4">Get in touch</h3>
 <div className="space-y-4">
 <a href="tel:+150****1234" className="flex items-center gap-3 group">
 <span className="land-icon-circle"></span>
 <span className="group-hover:text-[var(--land-forest)] transition-colors">+91 98765 43210</span>
 </a>
 <a href="mailto:[EMAIL]" className="flex items-center gap-3 group">
 <span className="land-icon-circle"></span>
 <span className="group-hover:text-[var(--land-forest)] transition-colors">[EMAIL]</span>
 </a>
 <div className="flex items-center gap-3">
 <span className="land-icon-circle"></span>
 <span>[ADDRESS]</span>
 </div>
 </div>
 </div>

 <div className="land-card">
 <h3 className="heading text-xl mb-3">Studio Hours</h3>
 <div className="space-y-2 text-sm">
 <div className="flex justify-between"><span>Mon – Fri</span><span className="font-medium">7:00 AM – 6:00 PM</span></div>
 <div className="flex justify-between"><span>Saturday</span><span className="font-medium">8:00 AM – 2:00 PM</span></div>
 <div className="flex justify-between"><span>Sunday</span><span className="font-medium opacity-50">By appointment</span></div>
 </div>
 </div>

 <div className="flex gap-3">
 <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="land-icon-circle"></a>
 <a href="[PINTEREST_URL]" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="land-icon-circle"></a>
 <a href="[FACEBOOK_URL]" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="land-icon-circle"></a>
 </div>
 </div>

 {/* Form */}
 <div className="md:col-span-3 land-reveal">
 <div className="land-card">
 {formStatus === 'sent' ? (
 <div className="text-center py-10">
 <div className="text-5xl mb-4"></div>
 <h3 className="heading text-2xl mb-2">Request Received!</h3>
 <p className="opacity-70">We&lsquo;ll reach out within 24 hours to schedule your complimentary site visit.</p>
 </div>
 ) : (
 <form onSubmit={handleFormSubmit} className="space-y-5">
 <input type="hidden" name="access_key" value="[WEB3FORMS_KEY]" />
 <input type="hidden" name="subject" value="New Consultation Request — Terraverde Landscape Atelier" />
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
 <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="land-input" />
 </div>
 <div>
 <label htmlFor="service" className="block text-sm font-semibold mb-1.5">Service Needed</label>
 <select id="service" name="service" className="land-input">
 <option value="">Select a service</option>
 <option value="design">Bespoke Design</option>
 <option value="install">Master Installation</option>
 <option value="maintain">Living Maintenance</option>
 <option value="hardscape">Artisan Hardscaping</option>
 <option value="lighting">Atmospheric Lighting</option>
 <option value="full">Full Transformation</option>
 </select>
 </div>
 </div>

 <div>
 <label htmlFor="message" className="block text-sm font-semibold mb-1.5">Tell us about your vision</label>
 <textarea id="message" name="message" rows={4} placeholder="Describe your outdoor space, your lifestyle, and how you dream of using it..." className="land-input" />
 </div>

 <button type="submit" className="land-btn w-full" disabled={formStatus === 'sending'}>
 {formStatus === 'sending' ? 'Sending...' : 'Request Free Consultation'}
 </button>

 {formStatus === 'error' && (
 <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
 )}

 <p className="text-xs opacity-50 text-center">Free site visit within 24 hours. No obligation.</p>
 </form>
 )}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA BANNER */}
 <section className="land-cta-banner py-16 md:py-20">
 <div className=" section-container">
 <h2 className="heading text-3xl md:text-5xl text-white mb-4">Your landscape is waiting.</h2>
 <p className="text-white/80 mb-8 text-lg">Every great outdoor space begins with a single conversation.</p>
 <div className="flex gap-4 justify-center flex-wrap">
 <button onClick={() => scrollToSection('contact')} className="land-btn-white">Book Consultation</button>
 <a href="tel:+150****1234" className="land-btn-outline-white">Call +91 98765 43210</a>
 </div>
 </div>
 </section>
 </main>

 {/* FOOTER */}
 <footer className="land-footer py-12 md:py-16">
 <div className=" section-container">
 <div className="grid md:grid-cols-4 gap-8 mb-10">
 <div className="md:col-span-2">
 <div className="flex items-center gap-3 mb-4">
 <div className="land-logo-mark">
 <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
 <path d="M14 2C14 2 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 2 14 2Z" fill="currentColor" opacity="0.9"/>
 </svg>
 </div>
 <span className="heading text-xl">Terraverde</span>
 </div>
 <p className="opacity-60 max-w-sm leading-relaxed">Composing living environments in the Greater Portland area since 2005. Licensed, insured, and obsessively committed to craft.</p>
 </div>
 <div>
 <h4 className="heading text-lg mb-4">Explore</h4>
 <div className="space-y-2">
 {['Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block bg-transparent border-none p-0 opacity-60 hover:opacity-100 hover:text-[var(--land-forest)] transition-all">{item}</button>
 ))}
 </div>
 </div>
 <div>
 <h4 className="heading text-lg mb-4">Contact</h4>
 <div className="space-y-2 opacity-60">
 <a href="tel:+150****1234" className="block hover:opacity-100">+91 98765 43210</a>
 <a href="mailto:[EMAIL]" className="block hover:opacity-100">[EMAIL]</a>
 <p>[ADDRESS]</p>
 </div>
 </div>
 </div>
 <div className="border-t border-[var(--land-border)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
 <div className="flex gap-6 flex-wrap text-sm opacity-50">
 <span>Licensed &amp; Insured</span>
 <span>5-Year Warranty</span>
 <span>Sustainable Practices</span>
 </div>
 <div className="text-sm opacity-50">&copy; 2026 Terraverde Landscape Atelier. All rights reserved.</div>
 </div>
 </div>
 
<div className="text-center py-3 text-xs opacity-50 hover:opacity-80 transition-opacity"><span>Designed by </span><a href="https://adeshpreet.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Adeshpreet Singh</a></div>
</footer>
 </div>
 );
}
