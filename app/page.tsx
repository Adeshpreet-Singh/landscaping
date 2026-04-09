'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-green-950 text-green-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-400 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* EMERGENCY BANNER */}
      <div className="bg-green-400 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency Service Available — Call Now</div>
      <nav className="sticky top-0 z-50 bg-green-950/95 backdrop-blur-md border-b border-current/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-2xl font-black uppercase">GreenScape Designs</h1><p className="text-xs text-green-300 uppercase tracking-wider">Est. 2011</p></div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-sm font-bold text-green-300 hover:text-green-400 uppercase">Services</button>
            <button onClick={() => scrollTo('book')} className="bg-green-400 text-white px-6 py-2 font-bold uppercase">Free Estimate</button>
          </div>
        </div>
      </nav>
      <main id="main" role="main">
        {/* HERO with inline booking form */}
        <section className="pt-4">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6 whitespace-pre-line">Outdoor
living, perfected.</h2>
              <p className="text-xl text-green-300 mb-8">Full-service landscape design, installation, and maintenance for residential and commercial properties.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-green-400">500+</div><div className="text-sm text-green-300 mt-1">Projects</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-green-400">12</div><div className="text-sm text-green-300 mt-1">Years</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-green-400">Licensed</div><div className="text-sm text-green-300 mt-1">Irrigators</div></div>
              </div>
            </div>
            <div>
              <form id="book" className="bg-green-900 rounded-xl p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold mb-4">Free Estimate</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold mb-1">Name</label><input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                  <div><label className="block text-sm font-bold mb-1">Phone</label><input type="tel" placeholder="(555) 000-0000" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                </div>
                <div><label className="block text-sm font-bold mb-1">Service</label>
                  <select className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent">
                    <option>Select service</option>                    <option>Landscape Design</option>
                    <option>Hardscaping</option>
                    <option>Planting</option>
                    <option>Irrigation</option>
                    <option>Outdoor Living</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold mb-1">Describe the issue</label><textarea rows={3} placeholder="What's going on?" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent resize-none" /></div>
                <button type="submit" className="w-full bg-green-400 text-white py-4 rounded-lg font-black uppercase text-lg">Free Estimate</button>
              </form>
            </div>
          </div>
        </section>
        {/* SERVICES with pricing */}
        <section id="services" className="py-24 bg-green-900" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services & Pricing</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🌿</div>
              <div><h3 className="font-bold text-lg">Landscape Design</h3><p className="text-sm text-green-300">Custom plans and 3D renders.</p></div>
            </div>
            <div className="bg-green-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🪨</div>
              <div><h3 className="font-bold text-lg">Hardscaping</h3><p className="text-sm text-green-300">Patios, walkways, retaining walls.</p></div>
            </div>
            <div className="bg-green-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🌳</div>
              <div><h3 className="font-bold text-lg">Planting</h3><p className="text-sm text-green-300">Trees, shrubs, perennials.</p></div>
            </div>
            <div className="bg-green-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">💧</div>
              <div><h3 className="font-bold text-lg">Irrigation</h3><p className="text-sm text-green-300">Smart sprinkler systems.</p></div>
            </div>
            <div className="bg-green-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏡</div>
              <div><h3 className="font-bold text-lg">Outdoor Living</h3><p className="text-sm text-green-300">Fire pits, kitchens, pergolas.</p></div>
            </div>
            <div className="bg-green-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🚜</div>
              <div><h3 className="font-bold text-lg">Maintenance</h3><p className="text-sm text-green-300">Weekly mowing and seasonal cleanup.</p></div>
            </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="py-24" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="team-heading" className="text-4xl font-black uppercase">Our Crew</h2></div>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center text-2xl font-bold text-green-400">TE</div>
              <h3 className="font-bold">Tom Erikson</h3><p className="text-sm text-green-400">Lead Designer</p><p className="text-sm text-green-300 mt-1">CLD certified</p></div>
            <div className="bg-green-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center text-2xl font-bold text-green-400">SK</div>
              <h3 className="font-bold">Sarah Kim</h3><p className="text-sm text-green-400">Horticulturist</p><p className="text-sm text-green-300 mt-1">CSU grad</p></div>
            <div className="bg-green-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center text-2xl font-bold text-green-400">CR</div>
              <h3 className="font-bold">Carlos Rivera</h3><p className="text-sm text-green-400">Hardscape Crew</p><p className="text-sm text-green-300 mt-1">ICPI certified</p></div>
            <div className="bg-green-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center text-2xl font-bold text-green-400">EP</div>
              <h3 className="font-bold">Emily Park</h3><p className="text-sm text-green-400">Maintenance Mgr</p><p className="text-sm text-green-300 mt-1">Landscape pro</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-24 bg-green-900" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-black uppercase">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Free estimate?<span className="ml-4 text-green-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-green-300 text-sm leading-relaxed">Yes, on-site estimates always free.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Design fee?<span className="ml-4 text-green-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-green-300 text-sm leading-relaxed">$500 design fee, credited toward installation.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Maintenance?<span className="ml-4 text-green-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-green-300 text-sm leading-relaxed">Weekly, bi-weekly, and seasonal plans available.</p></details></div>
          </div>
        </section>
        {/* CONTACT INFO */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-green-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📞</div><div className="font-bold text-lg mb-1">Call Us</div><a href="tel:(555) 345-6781" className="text-green-400">(555) 345-6781</a></div>
            <div className="bg-green-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📍</div><div className="font-bold text-lg mb-1">Visit Us</div><p className="text-green-300">Serving Metro Denver, CO</p></div>
            <div className="bg-green-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">⏰</div><div className="font-bold text-lg mb-1">Hours</div><p className="text-green-300">Mon–Sat 7 AM – 6 PM</p></div>
          </div>
        </section>
      </main>
      <footer className="bg-green-900 py-8 text-center text-sm text-green-300">&copy; 2026 GreenScape Designs</footer>
    </div>
  );
}
