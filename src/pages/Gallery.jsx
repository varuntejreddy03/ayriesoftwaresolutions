import { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  { img: '/salesforce_dashboard_1774495905195.png', label: 'Salesforce Core', tags: ['Salesforce'] },
  { img: '/ai_neural_architecture_1774495922008.png', label: 'AI Agent X', tags: ['AI/ML'] },
  { img: '/data_viz_interface_1774495942040.png', label: 'Data Vis 01', tags: ['Data'] },
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
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ textAlign: 'center' }}>
            <span className="section-label">Case Studies</span>
            <h1 className="hero-headline-new" style={{ margin: '0 auto 32px' }}>
              Project Gallery
            </h1>
            <p className="hero-subtext-new" style={{ margin: '0 auto', opacity: 0.8 }}>
              Visualizing the architecture of intelligent systems. 
              A selection of our core tactical deployments.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ borderTop: '1px solid var(--divider)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="card-orbital drift-in" ref={addToRefs} style={{ 
                padding: '0', overflow: 'hidden', border: '1px solid var(--glass-border)',
                transitionDelay: `${i * 0.15}s`
              }}>
                 <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                   <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(1)' }} />
                   <div style={{ 
                     position: 'absolute', inset: 0, 
                     background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)' 
                   }} />
                 </div>
                 <div style={{ padding: '40px' }}>
                   <h3 className="section-title" style={{ fontSize: '24px', marginBottom: '12px' }}>{p.label}</h3>
                   <div style={{ display: 'flex', gap: '8px' }}>
                     {p.tags.map(t => <span key={t} className="section-label" style={{ fontSize: '10px', margin: 0 }}>{t}</span>)}
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE ── */}
      <section style={{ textAlign: 'center', borderTop: '1px solid var(--divider)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs}>
             <h2 className="section-title" style={{ margin: '0 auto 32px' }}>Upcoming Projects</h2>
             <p className="body-md" style={{ opacity: 0.6 }}>Currently documenting more case studies for orbital deployment.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
