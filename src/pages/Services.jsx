import { useState, useEffect, useRef } from 'react'

const SERVICE_SECTIONS = [
  {
    id: 'ai-ml',
    label: 'Artificial Intelligence',
    title: 'Applied AI Systems',
    desc: 'From copilots to predictive engines, we design AI workflows that move directly into day-to-day operations.',
    features: [
      { t: 'AI Process Automation', d: 'Workflow orchestration with intelligent triggers, approvals, and summarization.' },
      { t: 'Computer Vision', d: 'Image and video intelligence for monitoring, quality checks, and anomaly detection.' },
      { t: 'NLP Assistants', d: 'Context-aware copilots for support, sales, and internal operations.' }
    ],
    outcomes: ['Faster decisions', 'Reduced manual effort', 'Higher forecasting accuracy'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  },
  {
    id: 'data-eng',
    label: 'Data Infrastructure',
    title: 'Data Engineering Core',
    desc: 'We architect reliable data foundations that keep your dashboards, models, and teams operating from one source of truth.',
    features: [
      { t: 'Realtime Pipelines', d: 'Streaming and batch pipelines built for accuracy, speed, and monitoring.' },
      { t: 'Cloud Warehousing', d: 'Warehouse modeling optimized for BI, governance, and query performance.' },
      { t: 'Data Quality Layer', d: 'Validation and observability to ensure trusted reporting and analytics.' }
    ],
    outcomes: ['Single source of truth', 'Reliable reporting', 'Scalable analytics stack'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10M18.4 4.6l-6.4 6.4m11 5a10 10 0 1 1-19 0"/></svg>
  },
  {
    id: 'salesforce',
    label: 'Salesforce CRM',
    title: 'Salesforce Transformation',
    desc: 'We optimize Salesforce from strategy to implementation so your revenue and service workflows run with less friction.',
    features: [
      { t: 'Platform Consulting', d: 'Roadmap design and architecture guidance aligned with business goals.' },
      { t: 'Custom Implementations', d: 'Lightning components, automation, and integrations tailored to your teams.' },
      { t: 'Enablement & Support', d: 'Training, documentation, and managed support to sustain adoption.' }
    ],
    outcomes: ['Higher CRM adoption', 'Cleaner pipelines', 'Better conversion visibility'],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zM6.7 13a4.8 4.8 0 0 0 10.6 0"/></svg>
  }
]

const DELIVERY_MODEL = [
  {
    step: '01',
    title: 'Discovery Sprint',
    desc: 'A focused diagnostic phase to map business goals, bottlenecks, and technical constraints.'
  },
  {
    step: '02',
    title: 'Solution Blueprint',
    desc: 'We define architecture, priorities, and rollout plan with clear scope and measurable outcomes.'
  },
  {
    step: '03',
    title: 'Build & Validate',
    desc: 'Implementation with transparent progress tracking, QA checks, and iterative stakeholder reviews.'
  },
  {
    step: '04',
    title: 'Launch & Scale',
    desc: 'Go-live, adoption support, and continuous optimization as your teams and operations grow.'
  }
]

const TRUST_METRICS = [
  { value: '16+', label: 'Active Clients' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '3', label: 'Core Practice Areas' },
  { value: '24/7', label: 'Delivery Support' }
]

export default function Services() {
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
      <section className="hero-section" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '42px', alignItems: 'center' }}>
            <div className="drift-in" ref={addToRefs}>
              <span className="section-label">Solutions</span>
              <h1 className="hero-headline-new" style={{ marginBottom: '24px' }}>Services Built For Scalable Growth</h1>
              <p className="body-lg" style={{ maxWidth: '760px', opacity: 0.86 }}>
                We combine Salesforce expertise, AI execution, and data engineering to help enterprises move from fragmented systems to connected performance.
              </p>
            </div>

            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <div className="premium-card" style={{ background: 'linear-gradient(180deg, rgba(255,85,0,0.12), rgba(255,255,255,0.02))' }}>
                <p className="section-label" style={{ marginBottom: '14px' }}>Service Architecture</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                    <strong>Strategic Consulting</strong>
                  </div>
                  <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                    <strong>Engineering Delivery</strong>
                  </div>
                  <div>
                    <strong>Ongoing Optimization</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {SERVICE_SECTIONS.map((s, i) => (
        <section key={s.id} style={{ borderTop: '1px solid var(--divider)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
          <div className="section-container">
            <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px', alignItems: 'center' }}>
               
               <div className="drift-in" ref={addToRefs} style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                  <span className="section-label">{s.label}</span>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,85,0,0.1)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginBottom: '24px' }}>
                     {s.icon}
                  </div>
                  <h2 className="section-title" style={{ marginBottom: '24px' }}>{s.title}</h2>
                  <p className="body-md" style={{ marginBottom: '40px', opacity: 0.8 }}>{s.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {s.outcomes.map((o) => (
                      <span key={o} style={{ border: '1px solid var(--glass-border)', borderRadius: '999px', padding: '8px 12px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {o}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="drift-in" ref={addToRefs} style={{ order: i % 2 !== 0 ? 1 : 2, transitionDelay: '0.2s' }}>
                  <div className="premium-card">
                     {s.features.map((f, fi) => (
                       <div key={fi} style={{ marginBottom: fi < s.features.length - 1 ? '24px' : '0', paddingBottom: fi < s.features.length - 1 ? '24px' : '0', borderBottom: fi < s.features.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                          <h4 style={{ marginBottom: '8px', color: 'var(--orange)' }}>{f.t}</h4>
                          <p className="body-sm" style={{ opacity: 0.7 }}>{f.d}</p>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── DELIVERY MODEL ── */}
      <section style={{ borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '54px' }}>
            <span className="section-label">Execution Model</span>
            <h2 className="section-title">How Engagement Works</h2>
          </div>

          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {DELIVERY_MODEL.map((item, i) => (
              <div key={item.title} className="premium-card drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--orange)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>{item.step}</div>
                <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                <p className="body-sm" style={{ opacity: 0.74 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div className="section-container" style={{ padding: '58px 24px' }}>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {TRUST_METRICS.map((m, i) => (
              <div key={m.label} className="drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div style={{ fontSize: '50px', fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{m.value}</div>
                <p className="body-sm" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.68, marginTop: '10px' }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="section-container">
          <div className="premium-card drift-in" ref={addToRefs} style={{ textAlign: 'center', background: 'linear-gradient(145deg, rgba(255,85,0,0.18), rgba(255,255,255,0.02))' }}>
            <span className="section-label">Next Step</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Need A Tailored Service Plan?</h2>
            <p className="body-md" style={{ maxWidth: '720px', margin: '0 auto', opacity: 0.82 }}>
              We can structure a focused engagement around your current priorities, from CRM modernization to AI-powered automation.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
