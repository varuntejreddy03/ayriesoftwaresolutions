import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const FEATURES_WHY = [
  { title: 'Fast & Efficient', desc: 'Solutions delivered quickly with optimized workflows' },
  { title: 'Results Driven', desc: 'Engineering that directly improves your revenue' },
  { title: 'Always Available', desc: 'Round-the-clock support and system monitoring' }
]

const SERVICES_CARDS = [
  {
    title: 'AI & Machine Learning',
    desc: 'Custom AI model integration, image & video intelligence, and smart forecasting systems.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Image & Video Intelligence']
  },
  {
    title: 'Data Engineering',
    desc: 'Reliable data storage, management, and live data pipelines for instant business decisions.',
    features: ['Real-time Data Pipelines', 'Cloud Data Warehousing', 'BI Dashboards']
  },
  {
    title: 'Salesforce Solutions',
    desc: 'End-to-end Salesforce setup, optimization, and CRM transformation for your team.',
    features: ['CRM Customization', 'Marketing Automation', 'Einstein AI Integration']
  }
]

const TESTIMONIALS = [
  { name: 'Sameer Mehra', role: 'CTO, TechFlow', quote: 'The Salesforce integration completely transformed how our sales team operates. Seamless and incredibly fast.' },
  { name: 'Aditi Rao', role: 'Operations Head', quote: 'Ayrie\'s AI solutions provided us with insights we didn\'t think were possible with our current data.' },
  { name: 'Jason Miller', role: 'Founder, Scaleup', quote: 'The Data engineering team at Ayrie is world-class. Our pipelines are now faster and more reliable.' }
]

const PROCESS_STEPS = [
  { step: '01', title: 'Discover', desc: 'We learn your business goals and challenges' },
  { step: '02', title: 'Design', desc: 'We plan the right tech solution for you' },
  { step: '03', title: 'Build', desc: 'We develop, test, and refine everything' },
  { step: '04', title: 'Deliver', desc: 'We launch, support, and scale with you' }
]

const IMPACT_NUMS = [
  { value: '16+', label: 'Happy Clients' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '3+', label: 'Years of Excellence' }
]

function CountUp({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasScrolled) {
        setHasScrolled(true)
        let start = 0
        const duration = 2000
        const objEnd = parseInt(end)
        const timer = setInterval(() => {
          start += Math.ceil(objEnd / 50)
          if (start >= objEnd) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(start + (suffix || ''))
          }
        }, 40)
      }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, hasScrolled, suffix])

  return <span ref={ref}>{count}</span>
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const sectionsRef = useRef([])

  useEffect(() => {
    setLoaded(true)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    sectionsRef.current.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el)
  }

  return (
    <main className={loaded ? 'loading-ready' : ''}>
      
      {/* ── HERO ── */}
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="hero-glow" style={{ position: 'absolute', top: 0, right: 0, width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--orange-glow) 0%, transparent 70%)', opacity: 0.4, pointerEvents: 'none' }} />
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px', alignItems: 'center' }}>
            
            <div className="drift-in" ref={addToRefs} style={{ order: 2 }}>
               <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                  <img 
                    src="/home_hero_tech_abstract_1774505517038.png" 
                    alt="Tech Abstract" 
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                  />
               </div>
            </div>

            <div className="drift-in" ref={addToRefs} style={{ order: 1 }}>
              <div style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '100px', border: '1px solid var(--orange)', background: 'rgba(255,85,0,0.1)', color: 'var(--orange)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '24px' }}>
                SALESFORCE · AI · DATA
              </div>
              <h1 className="hero-headline-new" style={{ marginBottom: '24px' }}>
                Smarter Software.<br />
                <span style={{ color: 'var(--orange)' }}>Faster Business.</span>
              </h1>
              <p className="body-md" style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-secondary)' }}>
                We help ambitious businesses grow with custom AI, Salesforce, and Data solutions — built to scale from day one.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Start a Project</Link>
                <Link to="/services" className="btn btn-ghost">Our Services</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES TICKER ── */}
      <section style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ padding: '60px 0', textAlign: 'center' }}>
          <p className="section-label">Expertise in the leading digital stacks</p>
          <div className="marquee-container">
             <div className="marquee-content">
                {['AI & MACHINE LEARNING', 'DATA ENGINEERING', 'SALESFORCE SOLUTIONS', 'CLOUD TRANSFORMATION', 'CRM OPTIMIZATION'].map((s, i) => (
                  <span key={i} className="marquee-logo">{s}</span>
                ))}
                {['AI & MACHINE LEARNING', 'DATA ENGINEERING', 'SALESFORCE SOLUTIONS', 'CLOUD TRANSFORMATION', 'CRM OPTIMIZATION'].map((s, i) => (
                  <span key={i+'_clone'} className="marquee-logo">{s}</span>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section id="services">
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '60px' }}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
          </div>

          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
             {SERVICES_CARDS.map((s, i) => (
               <div key={i} className="premium-card drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <h3 style={{ marginBottom: '16px' }}>{s.title}</h3>
                  <p className="body-sm" style={{ marginBottom: '24px', opacity: 0.7 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {s.features.map((f, fi) => (
                      <li key={fi} style={{ display: 'flex', gap: '10px', fontSize: '13px', alignItems: 'center' }}>
                        <div style={{ width: '4px', height: '4px', background: 'var(--orange)', borderRadius: '50%' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase' }}>Learn More →</Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '80px', textAlign: 'center' }}>
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work</h2>
          </div>

          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', position: 'relative' }}>
             {PROCESS_STEPS.map((p, i) => (
               <div key={i} className="process-step drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s`, position: 'relative' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, marginBottom: '24px' }}>{p.step}</div>
                  <h4 style={{ marginBottom: '12px' }}>{p.title}</h4>
                  <p className="body-sm" style={{ opacity: 0.7 }}>{p.desc}</p>
               </div>
             ))}
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 768px) {
              .process-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
              .process-step { padding: 24px 0; border-left: 2px dotted var(--orange); padding-left: 24px; margin-left: 12px; }
              .process-step div { position: absolute; left: -21px; top: 24px; margin:0 !important; }
            }
          `}} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section>
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
             <div className="drift-in" ref={addToRefs}>
                <h2 className="section-title" style={{ marginBottom: '32px' }}>Why Choose Us</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                   <span style={{ fontSize: '80px', fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)', lineHeight: 0.8 }}>16+</span>
                   <span className="section-label" style={{ margin: 0 }}>Global Clients</span>
                </div>
             </div>
             <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
                {FEATURES_WHY.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: i < 2 ? '32px' : '0' }}>
                     <div style={{ flexShrink: 0, width: '32px', height: '32px', background: 'rgba(255,85,0,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </div>
                     <div>
                        <h4 style={{ marginBottom: '4px' }}>{f.title}</h4>
                        <p className="body-sm" style={{ opacity: 0.7 }}>{f.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS / IMPACT STRIP ── */}
      <section style={{ background: '#111', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div className="section-container" style={{ padding: '60px 24px' }}>
          <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
             {IMPACT_NUMS.map((n, i) => (
               <div key={i} className="drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: '56px', fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)', marginBottom: '4px' }}>
                    <CountUp end={n.value} suffix={n.value.includes('+') ? '+' : (n.value.includes('%') ? '%' : '')} />
                  </div>
                  <p className="body-sm" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6 }}>{n.label}</p>
               </div>
             ))}
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 768px) {
              .impact-grid { grid-template-columns: 1fr 1fr !important; }
              .impact-grid div div { font-size: 40px !important; }
              .impact-grid div p { font-size: 12px !important; }
            }
          `}} />
        </div>
      </section>

      {/* ── CLIENT REVIEWS ── */}
      <section>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '60px', textAlign: 'center' }}>
            <span className="section-label">Reviews</span>
            <h2 className="section-title">What Clients Say</h2>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
             {TESTIMONIALS.map((t, i) => (
               <div key={i} className="premium-card drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <p className="body-md" style={{ fontStyle: 'italic', marginBottom: '24px' }}>"{t.quote}"</p>
                  <div>
                    <div style={{ fontWeight: 800 }}>{t.name}</div>
                    <div style={{ color: 'var(--orange)', fontSize: '12px' }}>{t.role}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="section-container">
          <div className="premium-card drift-in" ref={addToRefs} style={{ background: 'var(--orange)', border: 'none', textAlign: 'center', padding: '60px 24px' }}>
             <h2 className="section-title" style={{ color: '#fff', marginBottom: '24px' }}>Ready to grow?</h2>
             <p className="body-lg" style={{ color: '#fff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
               Let's talk about what Ayrie can build for you.
             </p>
             <Link to="/contact" className="btn btn-ghost" style={{ borderColor: '#fff' }}>Book a Free Call</Link>
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 768px) {
              .hero-headline-new { font-size: 36px !important; }
            }
          `}} />
        </div>
      </section>

    </main>
  )
}