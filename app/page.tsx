'use client';

import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = ['Services', 'Portfolio', 'Process', 'Booking', 'Contact'];

const SERVICES = [
  {
    icon: '🌿',
    title: 'Landscape Design',
    desc: 'Bespoke garden plans that harmonize architecture with nature. From concept sketches to full 3D renderings, we shape outdoor spaces that breathe life into every corner of your property.',
  },
  {
    icon: '🪨',
    title: 'Hardscaping',
    desc: 'Expertly crafted patios, retaining walls, walkways, and fire pits using natural stone, porcelain pavers, and architectural concrete built to endure decades of weathering.',
  },
  {
    icon: '🌳',
    title: 'Tree & Shrub Care',
    desc: 'Certified arborist services including structural pruning, cabling, disease diagnosis, deep-root fertilization, and heritage-tree preservation programs.',
  },
  {
    icon: '💧',
    title: 'Irrigation Systems',
    desc: 'Smart drip and rotor systems with moisture sensors and weather-responsive controllers that cut water usage by up to 45 percent while keeping every zone lush.',
  },
  {
    icon: '🌸',
    title: 'Seasonal Color',
    desc: 'Rotating flower-bed programs with bulbs, annuals, and perennials chosen for continuous bloom from early spring through late autumn in your hardiness zone.',
  },
  {
    icon: '🏡',
    title: 'Outdoor Living',
    desc: 'Custom kitchens, pergolas, lighting, and soundscapes that extend your living space into the garden. We design for year-round entertainment and quiet retreat alike.',
  },
];

const PORTFOLIO = [
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', title: 'Riverside Estate Revival', tag: 'Full Redesign' },
  { img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop', title: 'Modern Zen Courtyard', tag: 'Hardscape' },
  { img: 'https://images.unsplash.com/photo-1598902108854-d1446391b505?w=600&h=400&fit=crop', title: 'Wildflower Meadow Restoration', tag: 'Native Planting' },
  { img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&h=400&fit=crop', title: 'Coastal Drought Garden', tag: 'Xeriscape' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', title: 'Hillside Terrace Overlook', tag: 'Retaining Walls' },
  { img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&h=400&fit=crop', title: 'Formal Rose Parterre', tag: 'Seasonal Color' },
];

const PROCESS = [
  { step: '01', title: 'Discovery Walk', desc: 'We visit your site, listen to your vision, evaluate soil, sun, and drainage, and photograph every angle to inform the design brief.' },
  { step: '02', title: 'Concept Design', desc: 'Hand-sketched layouts evolve into mood boards and 3D walkthroughs so you can experience the garden before ground is broken.' },
  { step: '03', title: 'Build & Install', desc: 'Our crew brings the plan to life with precision grading, expert planting, and meticulous hardscape craftsmanship.' },
  { step: '04', title: 'Ongoing Care', desc: 'Seasonal maintenance visits keep your landscape maturing beautifully. We adjust irrigation, refresh mulch, and replace worn plantings.' },
];

const TESTIMONIALS = [
  { quote: 'They transformed a barren backyard into a sanctuary. Every evening feels like a retreat now.', name: 'Margaret Lawson', role: 'Homeowner, Oak Hill' },
  { quote: 'Professional from first sketch to final plant. Our commercial courtyard draws compliments daily.', name: 'Daniel Reeves', role: 'Property Manager, Apex Realty' },
  { quote: 'The smart irrigation system paid for itself in one summer. Our water bill dropped by forty percent.', name: 'Priya Nair', role: 'Homeowner, Cedar Ridge' },
];

const FAQS = [
  { q: 'How long does a typical landscape project take?', a: 'Most residential projects span four to eight weeks from groundbreaking to final walkthrough, depending on scope and weather windows.' },
  { q: 'Do you handle permits and HOA approvals?', a: 'Yes. We prepare all necessary drawings, coordinate with your HOA architectural review board, and pull municipal permits on your behalf.' },
  { q: 'What warranty do you offer on plantings?', a: 'All trees and shrubs carry a one-year establishment warranty. If a plant fails within twelve months, we replace it at no charge.' },
  { q: 'Can you work with my existing irrigation?', a: 'Absolutely. We audit existing systems, retrofit smart controllers, and extend zones as needed to match the new design.' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`land-reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ─── NAVIGATION ─── */}
      <nav className="land-nav" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '0 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.6rem' }}>🌿</span>
            <span className="heading" style={{ fontSize: '1.4rem', fontWeight: 600 }}>Verdant Studio</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="land-nav-link">{l}</a>
            ))}
            <a href="#booking" className="land-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.82rem' }}>Free Consultation</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="land-nav-link" style={{ display: 'none', fontSize: '1.5rem' }} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding: '1rem 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="land-nav-link" onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="land-hero" style={{ padding: '6rem 2rem 5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="land-badge">Award-Winning Landscape Architecture</span>
            <h1 className="heading" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', marginTop: '1.25rem', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Where Nature Meets<br />Thoughtful Design
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--land-text-muted)', marginBottom: '2rem', maxWidth: 480 }}>
              We craft outdoor environments that invite connection — with the land, the seasons, and the people who share the space. From intimate courtyards to sweeping estates, every project starts with listening.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#booking" className="land-btn">Book a Free Site Visit</a>
              <a href="#portfolio" className="land-btn-outline">View Our Work</a>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
              {[['25+', 'Years Experience'], ['600+', 'Projects Completed'], ['98%', 'Client Satisfaction']].map(([n, l]) => (
                <div key={l}>
                  <div className="heading" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--land-forest)' }}>{n}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--land-text-muted)', letterSpacing: '0.04em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="land-img-wrap" style={{ height: 460 }}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&h=520&fit=crop" alt="Lush garden design with stone pathway" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <h2 className="text-center" style={ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }>
            Meet Our Team
          </h2>
          <p className="text-center" style={ 
            color: 'var(--text-secondary)', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            fontSize: '1.125rem'
          }>
            Our talented team of professionals brings diverse expertise and passion to every project.
          </p>
          <div style={ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }>
            <div className="card hover-lift" style={ textAlign: 'center', padding: '2rem' }>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
                   alt="Team member" 
                   style={ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1rem' } />
              <h3 style={ fontSize: '1.25rem', fontWeight: 'bold' }>John Smith</h3>
              <p style={ color: '#16a34a', fontWeight: '600', marginBottom: '0.5rem' }>CEO & Founder</p>
              <p style={ color: 'var(--text-secondary)', fontSize: '0.9375rem' }>
                15+ years of industry experience leading successful projects.
              </p>
            </div>
            <div className="card hover-lift" style={ textAlign: 'center', padding: '2rem' }>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
                   alt="Team member" 
                   style={ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1rem' } />
              <h3 style={ fontSize: '1.25rem', fontWeight: 'bold' }>Sarah Johnson</h3>
              <p style={ color: '#16a34a', fontWeight: '600', marginBottom: '0.5rem' }>Creative Director</p>
              <p style={ color: 'var(--text-secondary)', fontSize: '0.9375rem' }>
                Award-winning designer with a passion for innovative solutions.
              </p>
            </div>
            <div className="card hover-lift" style={ textAlign: 'center', padding: '2rem' }>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                   alt="Team member" 
                   style={ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1rem' } />
              <h3 style={ fontSize: '1.25rem', fontWeight: 'bold' }>Michael Chen</h3>
              <p style={ color: '#16a34a', fontWeight: '600', marginBottom: '0.5rem' }>Technical Lead</p>
              <p style={ color: 'var(--text-secondary)', fontSize: '0.9375rem' }>
                Expert in modern technologies and scalable architecture.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ─── SERVICES ─── */}
      <section id="services" style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="land-badge">What We Do</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>Comprehensive Outdoor Services</h2>
              <p style={{ color: 'var(--land-text-muted)', maxWidth: 620, margin: '1rem auto 0' }}>
                From first pencil line to final planting, we handle every detail so you can step outside and simply enjoy.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={i}>
                <div className="land-card">
                  <div className="land-icon-circle" style={{ marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--land-text-muted)', fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="land-badge">Portfolio</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>Gardens We Have Brought to Life</h2>
              <p style={{ color: 'var(--land-text-muted)', maxWidth: 620, margin: '1rem auto 0' }}>
                Each project reflects the personality of its owner and the character of the land. Browse a selection of our recent work.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {PORTFOLIO.map((p, i) => (
              <Reveal key={i}>
                <div className="land-img-wrap" style={{ position: 'relative' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.65))', borderRadius: '0 0 var(--land-radius-lg) var(--land-radius-lg)' }}>
                    <span className="land-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '0.4rem' }}>{p.tag}</span>
                    <h3 className="heading" style={{ color: 'white', fontSize: '1.15rem' }}>{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="land-badge">Our Process</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>From Vision to Reality</h2>
              <p style={{ color: 'var(--land-text-muted)', maxWidth: 620, margin: '1rem auto 0' }}>
                A clear, collaborative process keeps every project on track and ensures results you will love for years.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {PROCESS.map((p, i) => (
              <Reveal key={i}>
                <div className="land-card" style={{ textAlign: 'center' }}>
                  <div className="heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--land-sage)', marginBottom: '0.5rem' }}>{p.step}</div>
                  <h3 className="heading" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--land-text-muted)', fontSize: '0.92rem' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT ─── */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, var(--land-forest-dark), var(--land-forest))', color: 'var(--land-cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div className="land-img-wrap">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=500&fit=crop" alt="Luxury estate garden at dusk" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
          </div>
          <div>
            <span className="land-badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--land-cream)' }}>Featured Project</span>
            <h2 className="heading" style={{ fontSize: '2.4rem', marginTop: '1rem', marginBottom: '1rem', color: 'var(--land-cream)' }}>The Willowbrook Estate</h2>
            <p style={{ opacity: 0.9, marginBottom: '1.5rem', lineHeight: 1.8 }}>
              A three-acre historic property transformed into a series of interconnected garden rooms. Native meadow plantings replaced high-maintenance lawns, stone terraces navigate the slope, and a moonlight-inspired lighting scheme turns evenings into magic.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              {[['3 acres', 'Total Area'], ['14 months', 'Build Duration'], ['120+ species', 'Plants Used'], ['45%', 'Water Savings']].map(([n, l]) => (
                <div key={l}>
                  <div className="heading" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--land-cream)' }}>{n}</div>
                  <div style={{ fontSize: '0.78rem', opacity: 0.7, letterSpacing: '0.04em' }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="#booking" className="land-btn" style={{ background: 'var(--land-cream)', color: 'var(--land-forest)' }}>Start Your Project</a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="land-badge">Testimonials</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>What Our Clients Say</h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i}>
                <div className="land-card">
                  <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--land-text)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--land-forest)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--land-text-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="land-badge">FAQ</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>Common Questions</h2>
            </div>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((f, i) => (
              <Reveal key={i}>
                <div className="land-faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="heading" style={{ fontSize: '1.05rem' }}>{f.q}</h3>
                    <span style={{ fontSize: '1.4rem', color: 'var(--land-sage)', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </div>
                  {openFaq === i && (
                    <p style={{ marginTop: '0.75rem', color: 'var(--land-text-muted)', fontSize: '0.95rem' }}>{f.a}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING ─── */}
      <section id="booking" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="land-badge">Book a Visit</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>Schedule Your Free Consultation</h2>
              <p style={{ color: 'var(--land-text-muted)', maxWidth: 500, margin: '1rem auto 0' }}>
                Tell us about your outdoor space and we will arrange a complimentary on-site walkthrough within 48 hours.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <form className="land-card" style={{ padding: '2.5rem' }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input className="land-input" placeholder="First Name" />
                <input className="land-input" placeholder="Last Name" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input className="land-input" placeholder="Email Address" type="email" />
                <input className="land-input" placeholder="Phone Number" type="tel" />
              </div>
              <input className="land-input" placeholder="Property Address" style={{ marginBottom: '1rem' }} />
              <select className="land-input" style={{ marginBottom: '1rem' }}>
                <option value="">Select Service Interest</option>
                <option>Landscape Design</option>
                <option>Hardscaping</option>
                <option>Tree & Shrub Care</option>
                <option>Irrigation</option>
                <option>Outdoor Living</option>
                <option>Full Redesign</option>
              </select>
              <textarea className="land-input" placeholder="Describe your project and goals..." rows={4} style={{ marginBottom: '1rem', borderRadius: 'var(--land-radius)' }} />
              <button type="submit" className="land-btn" style={{ width: '100%', textAlign: 'center' }}>Request Free Consultation</button>
              <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--land-text-muted)', marginTop: '1rem' }}>We respond within one business day. No obligation.</p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
      <section id="contact" style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { icon: '📍', label: 'Visit Us', val: '245 Garden Lane, Portland, OR 97201' },
            { icon: '📞', label: 'Call Us', val: '(503) 555-0178' },
            { icon: '✉️', label: 'Email Us', val: 'hello@verdantstudio.com' },
            { icon: '🕐', label: 'Hours', val: 'Mon–Sat 7 AM – 6 PM' },
          ].map(c => (
            <div key={c.label}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{c.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: 'var(--land-forest)' }}>{c.label}</div>
              <div style={{ color: 'var(--land-text-muted)', fontSize: '0.92rem' }}>{c.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      
      <section className="section reveal" style={ 
        background: `linear-gradient(135deg, #16a34a, #16a34add)`,
        color: 'white',
        textAlign: 'center'
      }>
        <div className="container">
          <h2 style={ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }>
            Ready to Transform Your Business?
          </h2>
          <p style={ 
            fontSize: '1.25rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }>
            Join hundreds of satisfied clients who have achieved remarkable results with our landscaping solutions.
          </p>
          <div style={ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }>
            <button className="btn-primary btn-lg" style={ background: 'white', color: '#16a34a' }>
              Start Your Project Today
            </button>
            <button className="btn-secondary btn-lg" style={ borderColor: 'white', color: 'white' }>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

<footer style={{ padding: '3rem 2rem 2rem', borderTop: '1px solid var(--land-border)', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🌿</span>
            <span className="heading" style={{ fontSize: '1.2rem', fontWeight: 600 }}>Verdant Studio</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--land-text-muted)', marginBottom: '1.5rem' }}>
            Award-winning landscape architecture and garden care since 1999.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="land-nav-link" style={{ fontSize: '0.82rem' }}>{l}</a>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--land-text-muted)' }}>&copy; 2026 Verdant Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
