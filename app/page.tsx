'use client';
import { useState } from 'react';

const services = [
  { name: 'Landscape Design', desc: 'Our certified landscape architects create custom 3D plans tailored to your property, lifestyle, and budget. We evaluate sun exposure, drainage patterns, soil composition, and your long-term maintenance preferences before a single plant goes in the ground. Every design includes detailed planting schedules, material specifications, and phased implementation options so you can build your dream yard all at once or over time.', icon: '📐' },
  { name: 'Lawn Care', desc: 'Professional mowing, edging, aeration, overseeding, and fertilization programs customized to your grass type and soil conditions. Our turf specialists use organic-based fertilizers and integrated pest management to keep your lawn lush, green, and healthy through every season. We offer weekly, bi-weekly, and on-demand service schedules to fit your needs.', icon: '🌱' },
  { name: 'Tree Service', desc: 'Expert tree trimming, pruning, removal, stump grinding, and health assessments by ISA-certified arborists. We handle everything from routine crown thinning to emergency storm damage cleanup. Our team also provides deep-root fertilization, disease treatment, and cabling for structurally weak trees to protect your property and preserve your canopy.', icon: '🌳' },
  { name: 'Irrigation', desc: 'Smart irrigation system design, installation, and repair using industry-leading controllers and water-efficient components. Our drip systems, rotor heads, and rain sensors can reduce your outdoor water usage by 30 to 50 percent while keeping every zone perfectly hydrated. We offer seasonal startup, winterization, and mid-season audits to ensure peak performance year after year.', icon: '💧' },
  { name: 'Hardscaping', desc: 'Custom patios, walkways, retaining walls, fire pits, outdoor kitchens, and seating areas built with natural stone, concrete pavers, and premium masonry materials. Our hardscape crews have over 20 years of combined experience crafting durable structures that withstand Colorado freeze-thaw cycles. Every project includes proper base preparation, drainage planning, and a five-year structural warranty.', icon: '🧱' },
  { name: 'Outdoor Lighting', desc: 'Transform your landscape after dark with professionally designed low-voltage LED lighting systems. We install path lights, uplighting for specimen trees, accent lights for architectural features, deck and step lighting, and smart-controlled string light systems. All fixtures are commercial-grade brass or copper with lifetime warranties, and our designs emphasize safety, security, and ambiance.', icon: '💡' },
  { name: 'Seasonal Cleanup', desc: 'Comprehensive spring and fall cleanup services that prepare your landscape for the months ahead. Spring cleanups include debris removal, bed edging, mulch installation, perennial cutbacks, pre-emergent weed application, and irrigation startup. Fall cleanups cover leaf removal, plant winterization, gutter clearing, final mowing, and sprinkler blowout to protect your investment through winter.', icon: '🍂' },
  { name: 'Snow Removal', desc: 'Reliable commercial and residential snow removal with automatic trigger-depth dispatching. Our fleet of plow trucks, skid steers, and walk-behind units handles driveways, parking lots, sidewalks, and entries. We apply eco-friendly ice melt products safe for concrete, pets, and plants. Seasonal contracts guarantee priority response so you never worry about winter storms again.', icon: '❄️' },
];

const projects = [
  { name: 'Hillside Terraced Garden', type: 'Full Design + Build', before: 'A steep, eroding hillside with patchy weeds and exposed soil that washed into the neighbor\'s yard every rainstorm.', after: 'Three levels of natural stone terraces with native groundcovers, ornamental grasses, and a cascading dry creek bed that manages stormwater beautifully.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80' },
  { name: 'Modern Courtyard Retreat', type: 'Hardscape + Planting', before: 'A bare concrete slab surrounded by chain-link fencing and compacted construction soil with zero vegetation.', after: 'A sleek porcelain paver patio with built-in gas fire table, privacy screening bamboo, Japanese maple specimens, and ambient string lighting for evening entertaining.', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80' },
  { name: 'English Cottage Garden', type: 'Planting Design', before: 'A flat, uninspired backyard with only a struggling lawn and a single overgrown lilac bush along the fence.', after: 'Winding gravel paths through layered perennial borders featuring lavender, delphiniums, foxglove, and climbing roses with a central herb garden and birdbath focal point.', img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=600&q=80' },
  { name: 'Poolside Outdoor Living', type: 'Full Outdoor Living', before: 'An aging concrete pool deck with cracked coping, no shade, and a mud pit where the kids destroyed the grass.', after: 'A travertine pool surround with a covered outdoor kitchen, built-in grill, bar seating, pergola with retractable shade sails, and drought-tolerant perimeter plantings.', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
  { name: 'Front Yard Curb Appeal', type: 'Landscape Renovation', before: 'An overgrown foundation planting of mismatched boxwoods, cracked concrete walkway, and patchy brown lawn visible from the street.', after: 'A welcoming flagstone entry walk with layered foundation plantings, seasonal color beds, a custom mailbox planter, and a lush eco-lawn that thrives with minimal irrigation.', img: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&q=80' },
  { name: 'Commercial Entry Landscape', type: 'Commercial Design + Build', before: 'A barren corporate entrance with aging asphalt, dead shrubs, and no defined pedestrian path from the parking lot.', after: 'A dramatic entry sequence with illuminated columnar trees, low-maintenance perennial beds, decorative steel planters, accessible paver walkways, and branded monument signage surrounded by year-round color.', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
];

const maintenancePlans = [
  { name: 'Essential', price: '$189', period: '/month', desc: 'Perfect for homeowners who want a tidy, well-maintained yard without the hassle.', features: ['Weekly mowing, edging, and blowing', 'Seasonal fertilization program (4 applications)', 'Spring and fall bed cleanups', 'Basic shrub pruning (2x per year)', 'Irrigation system startup and winterization', 'Priority scheduling for additional services'] },
  { name: 'Premier', price: '$329', period: '/month', desc: 'Our most popular plan for properties that deserve a higher level of care and attention.', features: ['Everything in Essential, plus:', 'Bi-weekly detail pruning of ornamentals', 'Monthly bed weeding and maintenance', 'Annual mulch refresh (up to 3 inches)', 'Pre-emergent and targeted weed control', 'Tree health monitoring by certified arborist', 'Seasonal color bed installation (2x per year)', 'Dedicated account manager'], popular: true },
  { name: 'Estate', price: '$549', period: '/month', desc: 'Comprehensive grounds management for large properties, estates, and discerning homeowners.', features: ['Everything in Premier, plus:', 'Weekly property inspections and reporting', 'Full irrigation management and repairs', 'Annual landscape design consultation', 'Holiday lighting installation and removal', 'Snow and ice management (4 events included)', 'Organic lawn care program available', '24/7 emergency response for storm damage', 'Quarterly property enhancement budget ($500/quarter)'] },
];

const testimonials = [
  { name: 'Sarah M.', location: 'Cherry Creek', text: 'Verdant transformed our backyard from a mud pit into an absolute paradise. The design process was collaborative and fun, and the construction crew was professional, on time, and left the site clean every single day. We now spend every evening outside. Our neighbors keep asking who did the work.' },
  { name: 'David & Karen T.', location: 'Highlands Ranch', text: 'We have been on the Premier maintenance plan for three years and our property has never looked better. Our account manager, Miguel, is incredibly responsive and proactive. He caught an irrigation leak before it caused any damage and always suggests improvements that fit our budget. Worth every penny.' },
  { name: 'James R.', location: 'Boulder', text: 'After interviewing five different landscaping companies, we chose Verdant because of their detailed proposal and honest pricing. The retaining wall they built solved our drainage problem and looks absolutely stunning. The five-year warranty gave us peace of mind, but honestly the craftsmanship speaks for itself.' },
];

const faqs = [
  { q: 'How long does a typical landscape project take from design to completion?', a: 'Most residential design-build projects take four to eight weeks from the initial consultation to final walkthrough, depending on scope and complexity. Smaller projects like patio installations can be completed in one to two weeks, while full-property transformations with multiple features may take ten to twelve weeks. We provide a detailed timeline in your proposal so you always know what to expect.' },
  { q: 'Do you offer financing for larger projects?', a: 'Yes, we partner with two lending institutions to offer flexible financing options including zero-percent interest for 12 months and low-interest plans extending up to 60 months. Most projects over $5,000 qualify. Our team can walk you through the application process during your design consultation.' },
  { q: 'What is included in the free estimate?', a: 'Our free estimate includes an on-site visit where we assess your property, discuss your goals and budget, take measurements and photos, identify any challenges like drainage or access issues, and provide a detailed written proposal with itemized pricing within 48 hours. There is absolutely no obligation.' },
  { q: 'Are your crews insured and background-checked?', a: 'Absolutely. Every member of our team is fully insured with general liability and workers compensation coverage. All employees undergo background checks and drug screening before hire. We are happy to provide certificates of insurance upon request. Your property and safety are our top priorities.' },
  { q: 'What happens if I am not satisfied with the work?', a: 'Your satisfaction is guaranteed. We conduct a thorough walkthrough with you upon project completion and create a punch list of any items that need attention. We do not consider the job finished until you are completely happy. Additionally, all hardscape work carries a five-year structural warranty and plantings come with a one-year establishment guarantee.' },
  { q: 'Do you work year-round in Colorado?', a: 'Yes, we operate all twelve months. Spring through fall is our peak construction and maintenance season, but winter is an excellent time for design work, planning, and hardscape projects when ground conditions allow. Our snow removal division keeps properties safe all winter, and our crews use heated enclosures when needed to pour concrete or set stone in cold weather.' },
];

const serviceAreas = [
  'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Thornton',
  'Centennial', 'Highlands Ranch', 'Littleton', 'Broomfield', 'Boulder',
  'Louisville', 'Lafayette', 'Superior', 'Broomfield', 'Parker',
  'Castle Rock', 'Golden', 'Wheat Ridge', 'Englewood', 'Cherry Hills Village',
  'Greenwood Village', 'Lonetree', 'Erie', 'Firestone', 'Frederick',
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: '#1a1a1a' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#f8f6f0ee', backdropFilter: 'blur(12px)', borderBottom: '1px solid #d4c9b8' }}>
        <div>
          <h1 className="heading-land text-xl" style={{ color: 'var(--green)' }}>Verdant</h1>
          <p className="text-base tracking-[0.2em] uppercase opacity-80">Landscapes · Denver</p>
        </div>
        <div className="hidden md:flex gap-8 text-base opacity-90">
          {['services', 'work', 'plans', 'testimonials', 'faq', 'contact'].map(s => (
            <button style={{ cursor: "pointer" }} key={s} onClick={() => scrollTo(s)} className="capitalize">{s}</button>
          ))}
        </div>
        <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="text-base px-5 py-2 rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>Free Estimate</button>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero py-28 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--sage)' }}>Design · Install · Maintain</p>
              <h2 className="heading-land text-5xl md:text-6xl mb-6" style={{ color: 'var(--green)' }}>Outdoor living,<br /><em>perfected.</em></h2>
              <p className="text-lg opacity-85 mb-8 leading-relaxed max-w-lg">
                For over 15 years, Verdant Landscapes has been Denver&apos;s premier full-service landscape company. We design, build, and maintain extraordinary outdoor environments that bring families together, increase property value, and connect you with nature right outside your door. From intimate courtyard gardens to sprawling estate landscapes, our team of certified designers, skilled craftspeople, and dedicated maintenance crews deliver results that exceed expectations every single time. Whether you are dreaming of a new patio for summer entertaining, need reliable weekly lawn care, or want a complete outdoor living transformation, we have the expertise and passion to make it happen. Let us show you what your property can become.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="px-8 py-3 rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>Get Free Estimate</button>
                <button style={{ cursor: "pointer" }} onClick={() => scrollTo('work')} className="px-8 py-3 rounded-full font-medium" style={{ border: '2px solid var(--green)', color: 'var(--green)', background: 'transparent' }}>View Our Work</button>
              </div>
              <div className="flex gap-8 mt-10 text-sm">
                <div><p className="heading-land text-2xl" style={{ color: 'var(--green)' }}>500+</p><p className="opacity-80">Projects Completed</p></div>
                <div><p className="heading-land text-2xl" style={{ color: 'var(--green)' }}>15</p><p className="opacity-80">Years Experience</p></div>
                <div><p className="heading-land text-2xl" style={{ color: 'var(--green)' }}>4.9★</p><p className="opacity-80">Google Rating</p></div>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Beautiful landscape design by Verdant Landscapes" className="w-full h-96 object-cover rounded-2xl img-hover" loading="lazy" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="reveal section-alt py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>What We Do</p>
              <h2 className="heading-land text-4xl mb-4">Comprehensive Landscape Services</h2>
              <p className="opacity-85 max-w-2xl mx-auto">From initial concept through ongoing care, we handle every aspect of your outdoor environment. Our integrated approach ensures design intent is preserved through construction and maintained for years to come.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(s => (
                <div key={s.name} className="card p-6 rounded-lg hover:shadow-lg transition-shadow" style={{ border: '1px solid #e8e0d4' }}>
                  <p className="text-2xl mb-3">{s.icon}</p>
                  <h3 className="font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section id="work" className="reveal py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>Portfolio</p>
              <h2 className="heading-land text-4xl mb-4">Before & After Transformations</h2>
              <p className="opacity-85 max-w-2xl mx-auto">See the dramatic results our clients enjoy. Every project begins with a challenge and ends with an outdoor space that transforms how our clients live, entertain, and connect with their homes.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(p => (
                <div key={p.name} className="card rounded-xl overflow-hidden" style={{ border: '1px solid #e8e0d4' }}>
                  <div className="aspect-[4/3] relative img-hover">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                    <div className="badge absolute top-3 right-3 px-3 py-1 text-xs rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>{p.type}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-3">{p.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 rounded-lg" style={{ background: '#fef2f2' }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#b91c1c' }}>Before</p>
                        <p className="opacity-90 leading-relaxed">{p.before}</p>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: '#f0fdf4' }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#15803d' }}>After</p>
                        <p className="opacity-90 leading-relaxed">{p.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section id="plans" className="reveal section-alt py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>Year-Round Care</p>
              <h2 className="heading-land text-4xl mb-4">Maintenance Plans</h2>
              <p className="opacity-85 max-w-2xl mx-auto">Protect your landscape investment with a proactive maintenance program. Our plans are designed to keep your property looking stunning in every season while preventing costly problems before they start.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {maintenancePlans.map(plan => (
                <div key={plan.name} className="card rounded-xl p-8 relative" style={{ border: plan.popular ? '2px solid var(--green)' : '1px solid #e8e0d4', background: plan.popular ? '#f0fdf4' : 'white' }}>
                  {plan.popular && <div className="badge absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>Most Popular</div>}
                  <h3 className="heading-land text-2xl mb-2">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="heading-land text-4xl" style={{ color: 'var(--green)' }}>{plan.price}</span>
                    <span className="opacity-80 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm opacity-85 mb-6 leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span style={{ color: 'var(--green)' }} className="mt-0.5">✓</span>
                        <span className="opacity-90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="w-full py-3 rounded-full font-medium text-sm" style={{ background: 'var(--green)', color: 'white' }}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="reveal py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>The Verdant Difference</p>
              <h2 className="heading-land text-4xl mb-4">Why Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🎓', title: 'Certified Professionals', desc: 'Our team includes ISA-certified arborists, ICPI-certified paver installers, and state-licensed irrigation technicians. Continuous training keeps us at the forefront of industry best practices.' },
                { icon: '📋', title: 'Detailed Proposals', desc: 'Every estimate includes itemized pricing, material specifications, 3D renderings when applicable, and a clear timeline. No hidden fees, no vague language, no surprises.' },
                { icon: '🛡️', title: 'Rock-Solid Warranties', desc: 'Five-year structural warranty on all hardscape work, one-year plant establishment guarantee, and lifetime warranties on lighting fixtures. We stand behind every project.' },
                { icon: '🤝', title: 'Local & Family-Owned', desc: 'Born and raised in Denver, we are invested in this community. Our reputation is everything, and we build every project as if it were our own home.' },
              ].map(item => (
                <div key={item.title} className="text-center">
                  <p className="text-4xl mb-4">{item.icon}</p>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="reveal section-alt py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>What Clients Say</p>
              <h2 className="heading-land text-4xl mb-4">Testimonials</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map(t => (
                <div key={t.name} className="card rounded-xl p-8" style={{ border: '1px solid #e8e0d4' }}>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: '#f59e0b' }}>★</span>)}
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-sm opacity-80">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="reveal py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>Coverage</p>
              <h2 className="heading-land text-4xl mb-4">Service Areas</h2>
              <p className="opacity-85 max-w-2xl mx-auto">Proudly serving the Denver Metro area and Front Range communities. If you do not see your city listed, give us a call — we are always expanding our service territory.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map(area => (
                <span key={area} className="badge px-4 py-2 rounded-full text-sm" style={{ background: '#e8e0d4' }}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="reveal section-alt py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--sage)' }}>Questions</p>
              <h2 className="heading-land text-4xl mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card rounded-xl overflow-hidden" style={{ border: '1px solid #e8e0d4' }}>
                  <button style={{ cursor: "pointer" }} className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-stone-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} >
                    <span className="font-semibold text-sm">{faq.q}</span>
                    <span className="text-lg opacity-90 shrink-0" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-sm opacity-85 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Estimate Form */}
        <section id="contact" className="reveal py-24 px-8" style={{ background: 'var(--green)', color: 'white' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-90">Start Your Project</p>
              <h2 className="heading-land text-4xl mb-6">Request a Free Estimate</h2>
              <p className="opacity-90 mb-6 leading-relaxed">
                Ready to transform your outdoor space? Fill out the form and one of our landscape consultants will contact you within one business day to schedule your complimentary on-site consultation. We will visit your property, discuss your vision and budget, take measurements, and deliver a detailed written proposal within 48 hours. There is absolutely no obligation and no pressure — just honest advice from professionals who love what they do.
              </p>
              <div className="space-y-3 text-sm opacity-90 mb-8">
                <p>📍 Serving Denver Metro &amp; Front Range since 2009</p>
                <p>📞 <a href="tel:(303) 555-0178" className="underline">(303) 555-0178</a></p>
                <p>📧 <a href="mailto:hello@verdantlandscapes.com" className="underline">hello@verdantlandscapes.com</a></p>
                <p>🕐 Mon–Fri 7am–6pm · Sat 8am–2pm</p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <p className="text-sm font-semibold mb-2">What to Expect</p>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>✓ Response within one business day</li>
                  <li>✓ Complimentary on-site consultation</li>
                  <li>✓ Detailed proposal within 48 hours</li>
                  <li>✓ No obligation, no pressure</li>
                </ul>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-5xl mb-4">🎉</p>
                    <p className="heading-land text-2xl">Request Received!</p>
                    <p className="opacity-90 text-sm mt-2">A member of our team will call you within one business day to schedule your free site visit. We look forward to meeting you.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" style={{ color: '#1a1a1a' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #e8e0d4', background: 'white' }} />
                    <input type="text" placeholder="Last Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #e8e0d4', background: 'white' }} />
                  </div>
                  <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #e8e0d4', background: 'white' }} />
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-lg border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #e8e0d4', background: 'white' }} />
                  <input type="text" placeholder="Property Address" className="w-full px-4 py-3 rounded-lg border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #e8e0d4', background: 'white' }} />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 " style={{ border: '1px solid #e8e0d4', background: 'white' }}>
                    <option value="">Select a Service</option>
                    {services.map(s => <option key={s.name}>{s.name}</option>)}
                    <option>Multiple Services</option>
                    <option>Not Sure — Need Consultation</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 " style={{ border: '1px solid #e8e0d4', background: 'white' }}>
                    <option value="">Estimated Budget Range</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000+</option>
                    <option>Not Sure Yet</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your project, timeline, and any inspiration or ideas you have..." className="w-full px-4 py-3 rounded-lg border border-gray-300 " style={{ border: '1px solid #e8e0d4', background: 'white' }} />
                  <button style={{ cursor: "pointer" }} type="submit" className="w-full py-3 rounded-full font-medium" style={{ background: 'var(--green)', color: 'white' }}>Submit Request</button>
                  <p className="text-sm text-center opacity-80" style={{ color: '#666' }}>By submitting, you agree to receive communications from Verdant Landscapes. We never share your information.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8" style={{ borderTop: '1px solid #d4c9b8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="heading-land text-lg mb-2" style={{ color: 'var(--green)' }}>Verdant</h3>
              <p className="text-sm opacity-80 leading-relaxed">Denver&apos;s premier full-service landscape company. Designing, building, and maintaining extraordinary outdoor spaces since 2009.</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Services</p>
              <div className="space-y-1 text-sm opacity-80">
                {services.slice(0, 4).map(s => <p key={s.name}>{s.name}</p>)}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">More</p>
              <div className="space-y-1 text-sm opacity-80">
                {services.slice(4).map(s => <p key={s.name}>{s.name}</p>)}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Contact</p>
              <div className="space-y-1 text-sm opacity-80">
                <p>(303) 555-0178</p>
                <p>hello@verdantlandscapes.com</p>
                <p>Denver, CO 80202</p>
                <p>License #LA-2024-1847</p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm opacity-80 pt-6" style={{ borderTop: '1px solid #e8e0d4' }}>
            <p>&copy; 2024 Verdant Landscapes LLC. All rights reserved. Denver, Colorado.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
