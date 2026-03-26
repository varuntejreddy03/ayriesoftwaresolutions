import { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  {
    img: '/salesforce_dashboard_1774495905195.png',
    label: 'Salesforce Revenue Engine',
    sector: 'B2B SaaS',
    summary: 'Rebuilt lead routing and lifecycle automation to reduce manual handling and improve conversion visibility.',
    impact: '32% faster lead qualification',
    tags: ['Salesforce', 'Automation', 'CRM']
  },
  {
    img: '/ai_neural_architecture_1774495922008.png',
    label: 'AI Operations Copilot',
    sector: 'Enterprise Ops',
    summary: 'Designed an internal AI assistant for ticket triage, knowledge retrieval, and response drafting.',
    impact: '41% lower response turnaround time',
    tags: ['AI/ML', 'NLP', 'Workflow']
  },
  {
    img: '/data_viz_interface_1774495942040.png',
    label: 'Unified Data Command Center',
    sector: 'Retail Analytics',
    summary: 'Connected cross-platform data pipelines into a single visualization layer for leadership decisions.',
    impact: 'Real-time executive reporting',
    tags: ['Data', 'Pipelines', 'BI']
  }
]

const GALLERY_FACTS = [
  { value: '50+', label: 'Deployments' },
  { value: '16+', label: 'Enterprise Clients' },
  { value: '3', label: 'Core Domains' }
]

export default function Gallery() {
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
      <section className="hero-section" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center', paddingTop: '150px' }}>
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
            <div className="drift-in" ref={addToRefs}>
              <span className="section-label">Case Studies</span>
              <h1 className="hero-headline-new" style={{ marginBottom: '24px' }}>
                Gallery Of Real Delivery Outcomes
              </h1>
              <p className="body-lg" style={{ maxWidth: '760px', opacity: 0.82 }}>
                A curated look at how we design, build, and scale intelligent systems across Salesforce, AI, and data engineering.
              </p>
            </div>
            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <div className="premium-card" style={{ background: 'linear-gradient(180deg, rgba(255,85,0,0.12), rgba(255,255,255,0.02))' }}>
                <p className="section-label" style={{ marginBottom: '10px' }}>Snapshot</p>
                {GALLERY_FACTS.map((f) => (
                  <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--glass-border)' }}>
                    <strong style={{ color: 'var(--orange)' }}>{f.value}</strong>
                    <span className="body-sm" style={{ opacity: 0.75 }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section style={{ borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-container">
          <div style={{ marginBottom: '44px' }}>
            <span className="section-label">Recent Work</span>
            <h2 className="section-title">Selected Projects</h2>
          </div>

          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px' }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="card-orbital drift-in" ref={addToRefs} style={{ 
                padding: '0', overflow: 'hidden', border: '1px solid var(--glass-border)',
                transitionDelay: `${i * 0.15}s`
              }}>
                 <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                   <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, filter: 'grayscale(0.2)' }} />
                   <div style={{ 
                     position: 'absolute', inset: 0, 
                     background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)' 
                   }} />
                 </div>
                 <div style={{ padding: '28px' }}>
                   <span className="section-label" style={{ opacity: 0.8, marginBottom: '10px' }}>{p.sector}</span>
                   <h3 style={{ fontSize: '23px', marginBottom: '10px' }}>{p.label}</h3>
                   <p className="body-sm" style={{ opacity: 0.74, marginBottom: '16px' }}>{p.summary}</p>
                   <div style={{ marginBottom: '16px', padding: '10px 12px', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', background: 'rgba(255,85,0,0.06)' }}>
                     <span className="body-sm" style={{ color: 'var(--orange)', fontWeight: 700 }}>{p.impact}</span>
                   </div>
                   <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                     {p.tags.map(t => <span key={t} className="section-label" style={{ fontSize: '10px', margin: 0 }}>{t}</span>)}
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section style={{ textAlign: 'center', borderTop: '1px solid var(--divider)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs}>
             <span className="section-label">More Coming</span>
             <h2 className="section-title" style={{ margin: '0 auto 18px' }}>More Case Studies In Progress</h2>
             <p className="body-md" style={{ opacity: 0.7, maxWidth: '640px', margin: '0 auto' }}>
               We continuously publish high-impact projects from current engagements as they complete delivery milestones.
             </p>
          </div>
        </div>
      </section>
    </main>
  )
}
