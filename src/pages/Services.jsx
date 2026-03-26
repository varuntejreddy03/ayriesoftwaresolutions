import { useState, useEffect, useRef } from 'react'

const SERVICE_SECTIONS = [
  {
    id: 'ai-ml',
    label: 'Artificial Intelligence',
    title: 'Custom AI Models',
    desc: 'From image recognition to predictive forecasting, we build AI that works.',
    features: [
      { t: 'Video Analytics', d: 'Live processing for smart object detection.' },
      { t: 'Natural Language', d: 'Automated chatbots and document analysis.' }
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  },
  {
    id: 'data-eng',
    label: 'Data Infrastructure',
    title: 'Engineering Flow',
    desc: 'We design data pipelines that are fast, secure, and always reliable.',
    features: [
      { t: 'Live Pipelines', d: 'Real-time data synchronization across clouds.' },
      { t: 'Cloud Warehouse', d: 'Scaled storage optimized for BI results.' }
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10M18.4 4.6l-6.4 6.4m11 5a10 10 0 1 1-19 0"/></svg>
  },
  {
    id: 'salesforce',
    label: 'Salesforce CRM',
    title: 'CRM Transformation',
    desc: 'We maximize your Salesforce investment with deep customization.',
    features: [
      { t: 'Optimization', d: 'Clean workflows and automated lead capture.' },
      { t: 'Custom Apps', d: 'Dedicated lightning components for your team.' }
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zM6.7 13a4.8 4.8 0 0 0 10.6 0"/></svg>
  }
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
      <section className="hero-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <div className="drift-in" ref={addToRefs}>
             <span className="section-label">Solutions</span>
             <h1 className="hero-headline-new" style={{ margin: '0 auto 32px' }}>What We Do</h1>
             <p className="body-lg" style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
                Engineering precision for the intelligent enterprise. We help you scale using the three pillars of modern digital growth.
             </p>
          </div>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      {SERVICE_SECTIONS.map((s, i) => (
        <section key={s.id} style={{ borderTop: '1px solid var(--divider)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
          <div className="section-container">
            <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px', alignItems: 'center' }}>
               
               <div className="drift-in" ref={addToRefs} style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,85,0,0.1)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginBottom: '24px' }}>
                     {s.icon}
                  </div>
                  <h2 className="section-title" style={{ marginBottom: '24px' }}>{s.title}</h2>
                  <p className="body-md" style={{ marginBottom: '40px', opacity: 0.8 }}>{s.desc}</p>
               </div>

               <div className="drift-in" ref={addToRefs} style={{ order: i % 2 !== 0 ? 1 : 2, transitionDelay: '0.2s' }}>
                  <div className="premium-card">
                     {s.features.map((f, fi) => (
                       <div key={fi} style={{ marginBottom: fi < 1 ? '32px' : '0' }}>
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

    </main>
  )
}
