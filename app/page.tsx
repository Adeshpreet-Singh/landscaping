'use client';
import { useState } from 'react';
const services = [
  { name: 'Landscape Design', desc: 'Custom 3D landscape plans tailored to your property, lifestyle, and budget. We consider sun exposure, drainage, soil type, and your maintenance preferences.', icon: '📐' },
  { name: 'Hardscaping', desc: 'Patios, walkways, retaining walls, fire pits, and outdoor kitchens. Natural stone, pavers, and concrete work built to last decades.', icon: '🧱' },
  { name: 'Planting & Softscaping', desc: 'Tree and shrub installation, perennial gardens, lawn installation, and seasonal color beds. Native and drought-tolerant plantings available.', icon: '🌿' },
  { name: 'Irrigation', desc: 'Smart irrigation system design and installation. Drip systems, rotors, and rain sensors. Water-efficient systems that save 30-50% on water bills.', icon: '💧' },
  { name: 'Outdoor Lighting', desc: 'Path lights, uplighting, string lights, and security lighting. LED systems with smart controls. Transform your yard after dark.', icon: '💡' },
  { name: 'Maintenance', desc: 'Weekly mowing, seasonal cleanups, pruning, fertilization, and pest management. Keep your landscape looking its best year-round.', icon: '✂️' },
];
const projects = [
  { name: 'Hillside Terraces', type: 'Full Design + Build', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80' },
  { name: 'Modern Courtyard', type: 'Hardscape + Planting', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&q=80' },
  { name: 'English Garden', type: 'Planting Design', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=500&q=80' },
  { name: 'Pool & Patio', type: 'Full Outdoor Living', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80' },
];
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: '#1a1a1a' }}>
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#f8f6f0ee', backdropFilter: 'blur(12px)', borderBottom: '1px solid #d4c9b8' }}>
        <div><h1 className="heading-land text-xl" style={{ color: 'var(--green)' }}>Verdant</h1><p className="text-[9px] tracking-[0.2em] uppercase opacity-50">Landscapes · Denver</p></div>
        <div className="hidden md:flex gap-8 text-sm opacity-70">{['services', 'work', 'contact'].map(s => <button key={s} onClick={() => scrollTo(s)} className="capitalize">{s}</button>)}</div>
        <button onClick={() => scrollTo('contact')} className="text-sm px-5 py-2 rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>Free Estimate</button>
      </nav>
      <main>
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--sage)' }}>Design · Install · Maintain</p>
              <h2 className="heading-land text-5xl md:text-6xl mb-6" style={{ color: 'var(--green)' }}>Outdoor living,<br/><em>perfected.</em></h2>
              <p className="text-lg opacity-60 mb-8 leading-relaxed max-w-lg">We design and build outdoor spaces that become your favorite room. Patios, gardens, outdoor kitchens, and everything in between.</p>
              <button onClick={() => scrollTo('contact')} className="px-8 py-3 rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>Get Free Estimate</button>
            </div>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Landscape" className="w-full h-96 object-cover rounded-2xl" loading="lazy" />
          </div>
        </section>
        <section id="services" className="py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>What We Do</p>
            <h2 className="heading-land text-4xl mb-12">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <div key={s.name} className="p-6 rounded-lg" style={{ border: '1px solid #e8e0d4' }}>
                  <p className="text-2xl mb-3">{s.icon}</p>
                  <h3 className="font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>Portfolio</p>
            <h2 className="heading-land text-4xl mb-12">Our Work</h2>
            <div className="grid grid-cols-2 gap-4">
              {projects.map(p => (
                <div key={p.name} className="project-card aspect-[4/3]">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="text-xs opacity-70">{p.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 px-8" style={{ background: 'var(--green)', color: 'white' }}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-70">Start</p>
              <h2 className="heading-land text-4xl mb-6">Free Estimate</h2>
              <p className="opacity-70 mb-6 leading-relaxed">We visit your property, discuss your vision, and provide a detailed estimate within 48 hours. No obligation.</p>
              <div className="space-y-2 text-sm opacity-70"><p>📍 Serving Denver Metro & Front Range</p><p>📞 <a href="tel:(303) 555-0178" className="underline">(303) 555-0178</a></p><p>📧 <a href="mailto:hello@verdantlandscapes.com" className="underline">hello@verdantlandscapes.com</a></p></div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex items-center"><div><p className="heading-land text-2xl">Booked!</p><p className="opacity-70 text-sm mt-2">We will call to schedule your site visit.</p></div></div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" style={{ color: '#1a1a1a' }}>
                  <input type="text" placeholder="Name" required className="w-full" />
                  <input type="tel" placeholder="Phone" required className="w-full" />
                  <input type="text" placeholder="Address" className="w-full" />
                  <select className="w-full"><option value="">Service</option>{services.map(s => <option key={s.name}>{s.name}</option>)}</select>
                  <textarea rows={3} placeholder="Describe your project..." className="w-full" />
                  <button type="submit" className="w-full py-3 rounded-full font-medium" style={{ background: 'var(--earth)', color: 'white' }}>Request Estimate</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-xs opacity-40"><p>Verdant Landscapes. Denver, CO.</p></footer>
    </div>
  );
}