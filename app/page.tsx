'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#052e16] text-green-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052e16]/95 backdrop-blur-md border-b border-green-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold text-green-400">GreenScape Designs</h1><p className="text-[10px] tracking-[0.2em] text-green-600 uppercase">Landscaping — Denver</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-green-400 hover:text-green-200">Services</button>
            <button onClick={() => scrollTo('work')} className="text-sm text-green-400 hover:text-green-200">Our Work</button>
            <button onClick={() => scrollTo('contact')} className="bg-green-600 text-white px-5 py-2.5 text-sm rounded-full hover:bg-green-500">Free Estimate</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-24 relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-white">
            <p className="text-green-300 text-sm tracking-[0.3em] uppercase mb-4">Full-Service Landscaping — Denver, CO</p>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6">Outdoor<br />living, <span className="text-green-300">perfected.</span></h2>
            <p className="text-xl text-white/80 max-w-xl mb-10">Landscape design, installation, and maintenance for residential and commercial properties.</p>
            <div className="flex gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-green-600 text-white px-8 py-4 text-lg rounded-full hover:bg-green-500">Free Estimate</button>
              <button onClick={() => scrollTo('work')} className="border-2 border-white/50 text-white px-8 py-4 text-lg rounded-full hover:bg-white/10">Our Work</button>
            </div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-bold">Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Landscape Design', desc: 'Custom plans and 3D renders for your dream yard.', icon: '🌿', price: 'From $500' },
                { name: 'Hardscaping', desc: 'Patios, walkways, retaining walls, and fire pits.', icon: '🪨', price: 'From $3,000' },
                { name: 'Planting', desc: 'Trees, shrubs, perennials, and seasonal color.', icon: '🌳', price: 'From $500' },
                { name: 'Irrigation', desc: 'Smart sprinkler systems and drip irrigation.', icon: '💧', price: 'From $2,500' },
                { name: 'Outdoor Living', desc: 'Fire pits, outdoor kitchens, pergolas, and lighting.', icon: '🏡', price: 'From $5,000' },
                { name: 'Maintenance', desc: 'Weekly mowing, seasonal cleanup, and snow removal.', icon: '🚜', price: 'From $200/mo' },
              ].map((s, i) => (
                <div key={i} className="border border-green-800 rounded-xl p-8 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <p className="text-green-400 text-sm mb-3">{s.desc}</p>
                  <div className="text-green-300 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 bg-green-950/30" aria-labelledby="work-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="work-heading" className="text-4xl font-bold">Our Work</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80',
                'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
                'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80',
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden group">
                  <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24" aria-labelledby="contact-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 id="contact-heading" className="text-4xl font-bold mb-4">Free Estimate</h2>
            <p className="text-green-400 mb-10">On-site estimates always free. We respond within 24 hours.</p>
            <form className="border border-green-800 rounded-xl p-8 space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-green-400">Name</label><input type="text" placeholder="Your name" required className="w-full border border-green-800 bg-transparent px-4 py-3 rounded-lg placeholder:text-green-700 focus:border-green-500 focus:outline-none" /></div>
                <div><label className="block text-sm mb-2 text-green-400">Phone</label><input type="tel" placeholder="(555) 000-0000" required className="w-full border border-green-800 bg-transparent px-4 py-3 rounded-lg placeholder:text-green-700 focus:border-green-500 focus:outline-none" /></div>
              </div>
              <div><label className="block text-sm mb-2 text-green-400">Service</label>
                <select className="w-full border border-green-800 bg-[#052e16] px-4 py-3 rounded-lg focus:border-green-500 focus:outline-none text-green-100">
                  <option>Landscape Design</option><option>Hardscaping</option><option>Planting</option><option>Irrigation</option><option>Outdoor Living</option><option>Maintenance</option>
                </select>
              </div>
              <div><label className="block text-sm mb-2 text-green-400">Tell us about your project</label><textarea rows={3} placeholder="Describe your yard, goals, budget..." className="w-full border border-green-800 bg-transparent px-4 py-3 rounded-lg placeholder:text-green-700 focus:border-green-500 focus:outline-none resize-none" /></div>
              <button type="submit" disabled={submitted} className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-500 transition-colors disabled:opacity-60">{submitted ? '✓ Request Sent! We\'ll call within 24 hours' : 'Request Free Estimate'}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-900 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-green-600 text-sm">© {new Date().getFullYear()} GreenScape Designs. Denver, CO. Licensed Irrigators.</div></footer>
    </div>
  );
}
