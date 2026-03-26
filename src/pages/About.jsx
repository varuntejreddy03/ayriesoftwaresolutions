import { useState, useEffect, useRef } from 'react'

const MILESTONES = [
  { year: '2023', title: 'Ayrie Founded', desc: 'Started in Bangalore with a mission to simplify Salesforce' },
  { year: '2024', title: 'AI Integration', desc: 'Launched our AI & ML division for predictive analytics' },
  { year: '2025', title: 'Global Scale', desc: 'Serving 16+ clients across India and international markets' }
]

export default function About() {
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
      <section className="hero-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="drift-in" ref={addToRefs}>
               <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <img src="/about_hero_tech_office_1774505464547.png" alt="Tech Hub" style={{ width: '100%', display: 'block' }} />
               </div>
            </div>
            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <span className="section-label">Our Story</span>
              <h1 className="hero-headline-new">Scaling Innovation.</h1>
              <p className="body-md" style={{ marginTop: '24px', opacity: 0.8 }}>
                Ayrie is a Bangalore-based technology firm dedicated to building the architecture of digital intelligence. 
                We specialize in merging heavy-duty engineering with intuitive business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section style={{ borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '60px' }}>
            <span className="section-label">History</span>
            <h2 className="section-title">The Path So Far</h2>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {MILESTONES.map((m, i) => (
              <div key={i} className="premium-card drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ color: 'var(--orange)', fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>{m.year}</div>
                <h4 style={{ marginBottom: '12px' }}>{m.title}</h4>
                <p className="body-sm" style={{ opacity: 0.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
