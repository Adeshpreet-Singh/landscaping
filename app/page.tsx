'use client';
import { useState } from 'react';

const serviceImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
  'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  'https://images.unsplash.com/photo-1598902108854-d1446391b505?w=600&q=80',
  'https://images.unsplash.com/photo-1530968464165-7a1dbca9ebc1?w=600&q=80',
];

const services = [
  {
    name: 'Landscape Design',
    desc: 'Our certified landscape architects create custom 3D plans tailored to your property, lifestyle, and budget. We evaluate sun exposure, drainage patterns, soil composition, and your long-term maintenance preferences before a single plant goes in the ground. Every design includes detailed planting schedules, material specifications, and phased implementation options so you can build your dream yard all at once or over time.',
    icon: '📐',
    img: serviceImages[0],
  },
  {
    name: 'Hardscaping',
    desc: 'Custom patios, walkways, retaining walls, fire pits, outdoor kitchens, and seating areas built with natural stone, concrete pavers, and premium masonry materials. Our hardscape crews have over 20 years of combined experience crafting durable structures that withstand freeze-thaw cycles. Every project includes proper base preparation, drainage planning, and a five-year structural warranty.',
    icon: '🧱',
    img: serviceImages[1],
  },
  {
    name: 'Planting & Garden Design',
    desc: 'Layered perennial borders, specimen trees, ornamental grasses, and seasonal color beds designed to thrive in your specific microclimate. We select plants for year-round interest, pollinator support, and low-maintenance beauty. From intimate herb gardens to sweeping native meadows, our planting designs transform bare soil into living tapestries that evolve and improve with every passing season.',
    icon: '🌿',
    img: serviceImages[2],
  },
  {
    name: 'Irrigation & Drainage',
    desc: 'Smart irrigation system design, installation, and repair using industry-leading controllers and water-efficient components. Our drip systems, rotor heads, and rain sensors can reduce your outdoor water usage by 30 to 50 percent while keeping every zone perfectly hydrated. We also solve drainage challenges with French drains, dry creek beds, and grading corrections that protect your foundation.',
    icon: '💧',
    img: serviceImages[3],
  },
  {
    name: 'Outdoor Lighting',
    desc: 'Transform your landscape after dark with professionally designed low-voltage LED lighting systems. We install path lights, uplighting for specimen trees, accent lights for architectural features, deck and step lighting, and smart-controlled string light systems. All fixtures are commercial-grade brass or copper with lifetime warranties, emphasizing safety, security, and ambiance.',
    icon: '💡',
    img: serviceImages[4],
  },
  {
    name: 'Maintenance & Care',
    desc: 'Professional mowing, edging, aeration, overseeding, fertilization, pruning, bed maintenance, and seasonal cleanups customized to your property needs. Our turf specialists use organic-based fertilizers and integrated pest management to keep your landscape lush, green, and healthy through every season. Weekly, bi-weekly, and monthly service schedules available.',
    icon: '🌱',
    img: serviceImages[5],
  },
];

const portfolioProjects = [
  {
    name: 'Hillside Terraced Garden',
    type: 'Full Design + Build',
    category: 'Residential',
    desc: 'A steep, eroding hillside transformed into three levels of natural stone terraces with native groundcovers, ornamental grasses, and a cascading dry creek bed that manages stormwater beautifully while creating a stunning visual focal point visible from every room in the house.',
    img: serviceImages[0],
  },
  {
    name: 'Modern Courtyard Retreat',
    type: 'Hardscape + Planting',
    category: 'Residential',
    desc: 'A bare concrete slab surrounded by chain-link fencing became a sleek porcelain paver patio with built-in gas fire table, privacy screening bamboo, Japanese maple specimens, and ambient string lighting for sophisticated evening entertaining.',
    img: serviceImages[1],
  },
  {
    name: 'English Cottage Garden',
    type: 'Planting Design',
    category: 'Residential',
    desc: 'Winding gravel paths through layered perennial borders featuring lavender, delphiniums, foxglove, and climbing roses with a central herb garden and birdbath focal point — a flat, uninspired backyard reborn as a romantic garden sanctuary.',
    img: serviceImages[2],
  },
  {
    name: 'Commercial Entry Landscape',
    type: 'Commercial Design + Build',
    category: 'Commercial',
    desc: 'A dramatic entry sequence with illuminated columnar trees, low-maintenance perennial beds, decorative steel planters, accessible paver walkways, and branded monument signage surrounded by year-round color that elevated the entire corporate campus.',
    img: serviceImages[3],
  },
  {
    name: 'Night Garden Oasis',
    type: 'Lighting + Planting',
    category: 'Residential',
    desc: 'A complete outdoor lighting transformation paired with strategic specimen plantings. Moonlighting from canopy trees, illuminated water features, and pathway lighting create an enchanting after-dark experience that extends outdoor living well into the evening hours.',
    img: serviceImages[4],
  },
  {
    name: 'Drought-Tolerant Meadow',
    type: 'Sustainable Design',
    category: 'Residential',
    desc: 'A water-hungry traditional lawn replaced with a sweeping native meadow of buffalo grass, blue grama, wildflowers, and pollinator habitat. Water usage dropped 70% while biodiversity soared, creating a landscape that is both ecologically responsible and breathtakingly beautiful.',
    img: serviceImages[5],
  },
];

const designSteps = [
  {
    step: '01',
    title: 'Discovery Consultation',
    desc: 'We begin with a complimentary on-site visit to understand your vision, lifestyle, and how you want to use your outdoor space. We assess your property conditions, take measurements and photographs, discuss your budget range, and listen carefully to your goals. This conversation forms the foundation for everything that follows.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Concept Design',
    desc: 'Our design team creates a conceptual plan that translates your ideas into a cohesive vision. You will receive hand-drawn sketches, mood boards with material and plant palettes, and preliminary cost estimates. We present these in person, walking you through every decision point and refining the direction based on your feedback.',
    icon: '✏️',
  },
  {
    step: '03',
    title: 'Detailed Master Plan',
    desc: 'Once the concept is approved, we develop a comprehensive master plan with precise measurements, detailed planting lists, material specifications, construction drawings, and itemized pricing. For larger projects, we provide photorealistic 3D renderings so you can visualize the finished space before any ground is broken.',
    icon: '📐',
  },
  {
    step: '04',
    title: 'Expert Installation',
    desc: 'Our skilled crews bring the design to life with meticulous attention to detail. A dedicated project manager oversees every phase, keeping you informed with regular updates and ensuring the work stays on schedule and on budget. We maintain clean, safe job sites and conduct a thorough walkthrough with you upon completion.',
    icon: '🏗️',
  },
  {
    step: '05',
    title: 'Ongoing Care & Support',
    desc: 'Your relationship with Verdant does not end at project completion. We offer tailored maintenance plans to protect your investment, seasonal enhancement services to keep your landscape evolving, and a one-year plant establishment guarantee with five-year structural warranty on all hardscape work. We are your long-term landscape partner.',
    icon: '🤝',
  },
];

const maintenancePlans = [
  {
    name: 'Essential',
    price: '$189',
    period: '/month',
    desc: 'Perfect for homeowners who want a tidy, well-maintained yard without the hassle.',
    features: [
      'Weekly mowing, edging, and blowing',
      'Seasonal fertilization program (4 applications)',
      'Spring and fall bed cleanups',
      'Basic shrub pruning (2x per year)',
      'Irrigation system startup and winterization',
      'Priority scheduling for additional services',
    ],
  },
  {
    name: 'Premier',
    price: '$329',
    period: '/month',
    desc: 'Our most popular plan for properties that deserve a higher level of care and attention.',
    features: [
      'Everything in Essential, plus:',
      'Bi-weekly detail pruning of ornamentals',
      'Monthly bed weeding and maintenance',
      'Annual mulch refresh (up to 3 inches)',
      'Pre-emergent and targeted weed control',
      'Tree health monitoring by certified arborist',
      'Seasonal color bed installation (2x per year)',
      'Dedicated account manager',
    ],
    popular: true,
  },
  {
    name: 'Estate',
    price: '$549',
    period: '/month',
    desc: 'Comprehensive grounds management for large properties, estates, and discerning homeowners.',
    features: [
      'Everything in Premier, plus:',
      'Weekly property inspections and reporting',
      'Full irrigation management and repairs',
      'Annual landscape design consultation',
      'Holiday lighting installation and removal',
      'Snow and ice management (4 events included)',
      'Organic lawn care program available',
      '24/7 emergency response for storm damage',
      'Quarterly property enhancement budget ($500/quarter)',
    ],
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Cherry Creek',
    text: 'Verdant transformed our backyard from a mud pit into an absolute paradise. The design process was collaborative and fun, and the construction crew was professional, on time, and left the site clean every single day. We now spend every evening outside. Our neighbors keep asking who did the work.',
  },
  {
    name: 'David & Karen T.',
    location: 'Highlands Ranch',
    text: 'We have been on the Premier maintenance plan for three years and our property has never looked better. Our account manager, Miguel, is incredibly responsive and proactive. He caught an irrigation leak before it caused any damage and always suggests improvements that fit our budget. Worth every penny.',
  },
  {
    name: 'James R.',
    location: 'Boulder',
    text: 'After interviewing five different landscaping companies, we chose Verdant because of their detailed proposal and honest pricing. The retaining wall they built solved our drainage problem and looks absolutely stunning. The five-year warranty gave us peace of mind, but honestly the craftsmanship speaks for itself.',
  },
  {
    name: 'Linda K.',
    location: 'Greenwood Village',
    text: 'The night lighting Verdant installed has completely changed how we use our yard. We entertain outdoors year-round now, and the uplighting on our old cottonwoods is genuinely breathtaking. Their designer had a vision we never would have imagined on our own. Truly artists with light and landscape.',
  },
];

const serviceAreas = [
  'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Thornton',
  'Centennial', 'Highlands Ranch', 'Littleton', 'Boulder', 'Louisville',
  'Lafayette', 'Superior', 'Parker', 'Castle Rock', 'Golden',
  'Wheat Ridge', 'Englewood', 'Cherry Hills Village', 'Greenwood Village',
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState(0);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--land-cream)', color: 'var(--land-text)' }}>
      {/* Navigation */}
      <nav className="land-nav sticky top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center">
        <div>
          <h1 className="heading text-xl font-semibold" style={{ color: 'var(--land-forest)' }}>Verdant</h1>
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--land-text-muted)' }}>Landscapes · Denver</p>
        </div>
        <div className="hidden lg:flex gap-7">
          {['services', 'portfolio', 'process', 'plans', 'testimonials', 'contact'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="land-nav-link capitalize">{s}</button>
          ))}
        </div>
        <button onClick={() => scrollTo('contact')} className="land-btn text-sm">Free Estimate</button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="land-hero py-20 md:py-32 px-6 md:px-10 relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="land-badge mb-5">Design · Install · Maintain</p>
              <h2 className="heading text-5xl md:text-6xl lg:text-7xl mb-6" style={{ color: 'var(--land-forest)' }}>
                Outdoor living,<br /><em>perfected.</em>
              </h2>
              <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--land-text-muted)' }}>
                For over 15 years, Verdant Landscapes has been Denver&apos;s premier full-service landscape company. We design, build, and maintain extraordinary outdoor environments that bring families together, increase property value, and connect you with nature right outside your door. From intimate courtyard gardens to sprawling estate landscapes, our team of certified designers, skilled craftspeople, and dedicated maintenance crews deliver results that exceed expectations. Whether you dream of a new patio for summer entertaining, need reliable weekly lawn care, or want a complete outdoor living transformation, we have the expertise and passion to bring your vision to life.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => scrollTo('contact')} className="land-btn">Get Free Estimate</button>
                <button onClick={() => scrollTo('portfolio')} className="land-btn-outline">View Our Work</button>
              </div>
              <div className="flex gap-8 mt-10">
                {[
                  { num: '500+', label: 'Projects Completed' },
                  { num: '15', label: 'Years Experience' },
                  { num: '4.9★', label: 'Google Rating' },
                ].map(s => (
                  <div key={s.label}>
                    <p className="heading text-2xl font-semibold" style={{ color: 'var(--land-forest)' }}>{s.num}</p>
                    <p className="text-sm" style={{ color: 'var(--land-text-muted)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="land-img-wrap">
              <img
                src={serviceImages[0]}
                alt="Beautiful landscape design featuring terraced gardens and natural stone"
                className="w-full h-[28rem] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Services Section with Images */}
        <section id="services" className="land-reveal land-section-alt py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="land-badge mb-3">What We Do</p>
              <h2 className="heading text-4xl md:text-5xl mb-4">Comprehensive Landscape Services</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--land-text-muted)' }}>
                From initial concept through ongoing care, we handle every aspect of your outdoor environment. Our integrated approach ensures design intent is preserved through construction and maintained beautifully for years to come.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={s.name} className="land-card p-0 overflow-hidden">
                  <div className="land-img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="land-icon-circle mb-4">{s.icon}</div>
                    <h3 className="heading text-xl font-semibold mb-2">{s.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--land-text-muted)' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section id="portfolio" className="land-reveal py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="land-badge mb-3">Our Portfolio</p>
              <h2 className="heading text-4xl md:text-5xl mb-4">Featured Transformations</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--land-text-muted)' }}>
                Every project tells a story of transformation. Browse our portfolio to see how we turn challenging spaces into extraordinary outdoor environments that our clients love coming home to.
              </p>
            </div>

            {/* Gallery Featured Image */}
            <div className="mb-8">
              <div className="land-img-wrap">
                <img
                  src={portfolioProjects[activeGalleryItem].img}
                  alt={portfolioProjects[activeGalleryItem].name}
                  className="w-full h-[28rem] object-cover"
                />
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="heading text-2xl font-semibold">{portfolioProjects[activeGalleryItem].name}</h3>
                    <span className="land-badge">{portfolioProjects[activeGalleryItem].type}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--land-text-muted)' }}>
                    {portfolioProjects[activeGalleryItem].desc}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {portfolioProjects.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => setActiveGalleryItem(i)}
                      className="land-img-wrap w-20 h-20 shrink-0"
                      style={{
                        border: i === activeGalleryItem ? '3px solid var(--land-forest)' : '3px solid transparent',
                        borderRadius: 'var(--land-radius)',
                        opacity: i === activeGalleryItem ? 1 : 0.6,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((p, i) => (
                <div
                  key={p.name}
                  className="land-card p-0 overflow-hidden cursor-pointer"
                  onClick={() => setActiveGalleryItem(i)}
                  style={{
                    border: i === activeGalleryItem ? '2px solid var(--land-forest)' : undefined,
                  }}
                >
                  <div className="land-img-wrap">
                    <img src={p.img} alt={p.name} className="w-full h-52 object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="land-badge text-[0.6rem]">{p.category}</span>
                      <span className="land-badge text-[0.6rem]">{p.type}</span>
                    </div>
                    <h3 className="heading text-lg font-semibold">{p.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section id="process" className="land-reveal land-section-alt py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="land-badge mb-3">How We Work</p>
              <h2 className="heading text-4xl md:text-5xl mb-4">Our Design Process</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--land-text-muted)' }}>
                Great landscapes begin with a thoughtful process. Our five-step approach ensures every project is grounded in your vision, expertly planned, meticulously built, and supported long after the last plant is placed. Here is what you can expect when you partner with Verdant.
              </p>
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div
                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px"
                style={{ background: 'var(--land-border)' }}
              />
              <div className="space-y-12">
                {designSteps.map((step, i) => (
                  <div
                    key={step.step}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:text-right' : ''}`}
                  >
                    <div className={`${i % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
                      <div className="flex items-center gap-3 mb-3" style={{ justifyContent: i % 2 === 1 ? 'flex-end' : 'flex-start' }}>
                        <span
                          className="heading text-4xl font-bold"
                          style={{ color: 'var(--land-forest)', opacity: 0.2 }}
                        >
                          {step.step}
                        </span>
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      <h3 className="heading text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="leading-relaxed" style={{ color: 'var(--land-text-muted)' }}>{step.desc}</p>
                    </div>
                    <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="land-img-wrap">
                        <img
                          src={serviceImages[i % serviceImages.length]}
                          alt={step.title}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section id="plans" className="land-reveal py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="land-badge mb-3">Year-Round Care</p>
              <h2 className="heading text-4xl md:text-5xl mb-4">Maintenance Plans</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--land-text-muted)' }}>
                Protect your landscape investment with a proactive maintenance program tailored to your property. Our plans keep your grounds looking stunning in every season while preventing costly problems before they start. Choose the level of care that matches your needs and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {maintenancePlans.map(plan => (
                <div
                  key={plan.name}
                  className="land-card relative"
                  style={{
                    border: plan.popular ? '2px solid var(--land-forest)' : undefined,
                    background: plan.popular ? 'linear-gradient(180deg, #f0fdf4 0%, white 100%)' : 'white',
                  }}
                >
                  {plan.popular && (
                    <div
                      className="land-badge absolute -top-3 left-1/2 -translate-x-1/2"
                      style={{ background: 'var(--land-forest)', color: 'white' }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="heading text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="heading text-4xl font-bold" style={{ color: 'var(--land-forest)' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: 'var(--land-text-muted)' }}>{plan.period}</span>
                  </div>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--land-text-muted)' }}>{plan.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span style={{ color: 'var(--land-forest)' }} className="mt-0.5 shrink-0">✓</span>
                        <span style={{ color: 'var(--land-text-muted)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="land-btn w-full text-center"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="land-reveal land-section-alt py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="land-badge mb-3">What Clients Say</p>
              <h2 className="heading text-4xl md:text-5xl mb-4">Testimonials</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--land-text-muted)' }}>
                Our clients are our greatest advocates. Read what Denver homeowners and property managers have to say about working with Verdant Landscapes, from initial design through years of ongoing care.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map(t => (
                <div key={t.name} className="land-card">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} style={{ color: '#f59e0b' }}>★</span>
                    ))}
                  </div>
                  <p className="leading-relaxed mb-6 italic" style={{ color: 'var(--land-text-muted)' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm" style={{ color: 'var(--land-text-muted)' }}>{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="land-reveal py-16 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="land-badge mb-3">Coverage</p>
              <h2 className="heading text-3xl mb-4">Service Areas</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--land-text-muted)' }}>
                Proudly serving the Denver Metro area and Front Range communities.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map(area => (
                <span key={area} className="land-badge" style={{ background: 'var(--land-cream-earth)' }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Free Estimate Form */}
        <section id="contact" className="land-reveal py-24 px-6 md:px-10" style={{ background: 'var(--land-forest)', color: 'var(--land-cream)' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80">Start Your Project</p>
              <h2 className="heading text-4xl md:text-5xl mb-6">Request a Free Estimate</h2>
              <p className="opacity-90 mb-6 leading-relaxed">
                Ready to transform your outdoor space? Fill out the form and one of our landscape consultants will contact you within one business day to schedule your complimentary on-site consultation. We will visit your property, discuss your vision and budget, take measurements, and deliver a detailed written proposal within 48 hours. There is absolutely no obligation and no pressure — just honest advice from professionals who love what they do.
              </p>
              <div className="space-y-3 text-sm opacity-90 mb-8">
                <p>📍 Serving Denver Metro &amp; Front Range since 2009</p>
                <p>📞 (303) 555-0178</p>
                <p>📧 hello@verdantlandscapes.com</p>
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
                    <p className="text-5xl mb-4">🌿</p>
                    <p className="heading text-2xl font-semibold">Request Received!</p>
                    <p className="opacity-90 text-sm mt-2">
                      A member of our team will call you within one business day to schedule your free site visit. We look forward to meeting you and learning about your project.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" style={{ color: 'var(--land-text)' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="land-input" type="text" placeholder="First Name" required />
                    <input className="land-input" type="text" placeholder="Last Name" required />
                  </div>
                  <input className="land-input" type="email" placeholder="Email Address" required />
                  <input className="land-input" type="tel" placeholder="Phone Number" required />
                  <input className="land-input" type="text" placeholder="Property Address" />
                  <select className="land-input">
                    <option value="">Select a Service</option>
                    {services.map(s => <option key={s.name}>{s.name}</option>)}
                    <option>Multiple Services</option>
                    <option>Not Sure — Need Consultation</option>
                  </select>
                  <select className="land-input">
                    <option value="">Estimated Budget Range</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000+</option>
                    <option>Not Sure Yet</option>
                  </select>
                  <textarea className="land-input" rows={4} placeholder="Tell us about your project, timeline, and any inspiration or ideas you have..." />
                  <button type="submit" className="land-btn w-full text-center" style={{ background: 'var(--land-forest-deep)' }}>
                    Submit Request
                  </button>
                  <p className="text-xs text-center opacity-70">
                    By submitting, you agree to receive communications from Verdant Landscapes. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10" style={{ borderTop: '1px solid var(--land-border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="heading text-xl font-semibold mb-2" style={{ color: 'var(--land-forest)' }}>Verdant</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--land-text-muted)' }}>
                Denver&apos;s premier full-service landscape company. Designing, building, and maintaining extraordinary outdoor spaces since 2009.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--land-text-muted)' }}>Services</p>
              <div className="space-y-1 text-sm" style={{ color: 'var(--land-text-muted)' }}>
                {services.slice(0, 4).map(s => <p key={s.name}>{s.name}</p>)}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--land-text-muted)' }}>More</p>
              <div className="space-y-1 text-sm" style={{ color: 'var(--land-text-muted)' }}>
                {services.slice(4).map(s => <p key={s.name}>{s.name}</p>)}
                <p>Maintenance Plans</p>
                <p>Free Estimate</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--land-text-muted)' }}>Contact</p>
              <div className="space-y-1 text-sm" style={{ color: 'var(--land-text-muted)' }}>
                <p>(303) 555-0178</p>
                <p>hello@verdantlandscapes.com</p>
                <p>Denver, CO 80202</p>
                <p>License #LA-2024-1847</p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm pt-6" style={{ borderTop: '1px solid var(--land-border)', color: 'var(--land-text-muted)' }}>
            <p>&copy; 2024 Verdant Landscapes LLC. All rights reserved. Denver, Colorado.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
