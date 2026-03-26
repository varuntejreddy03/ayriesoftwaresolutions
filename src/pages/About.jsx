import { useState, useEffect, useRef } from 'react'

const MILESTONES = [
  { year: '2023', title: 'Ayrie Founded', desc: 'Started in Bangalore with a mission to simplify Salesforce' },
  { year: '2024', title: 'AI Integration', desc: 'Launched our AI & ML division for predictive analytics' },
  { year: '2025', title: 'Global Scale', desc: 'Serving 16+ clients across India and international markets' }
]

const PRINCIPLES = [
  {
    title: 'Build For Adoption',
    desc: 'Every workflow we design starts with the people who use it daily. The best platform is the one your team enjoys using.'
  },
  {
    title: 'Engineer With Clarity',
    desc: 'From architecture to dashboards, we favor clean systems and measurable outcomes over complexity for complexity\'s sake.'
  },
  {
    title: 'Scale Without Friction',
    desc: 'Our solutions are designed to evolve with your business, so growth never requires rebuilding from zero.'
  }
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

      {/* ── STORY DEEP DIVE ── */}
      <section style={{ borderTop: '1px solid var(--divider)' }}>
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'start' }}>
            <div className="drift-in" ref={addToRefs}>
              <span className="section-label">Beyond The Timeline</span>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>How Ayrie Grew Into A Delivery Partner</h2>
              <p className="body-md" style={{ opacity: 0.8, marginBottom: '16px' }}>
                Ayrie began with a small group of consultants and engineers who believed digital transformation should feel practical, not overwhelming.
                In our first year, we were deeply embedded in delivery teams, observing where systems slowed people down and where data became disconnected.
              </p>
              <p className="body-md" style={{ opacity: 0.8, marginBottom: '16px' }}>
                That field experience shaped our model: combine consulting depth, platform engineering, and automation thinking into one team.
                Instead of delivering isolated features, we build end-to-end flows that connect sales, service, analytics, and decision-making.
              </p>
              <p className="body-md" style={{ opacity: 0.8 }}>
                Today, clients work with us not only for implementation, but for long-term modernization. We stay close after launch,
                continuously refining systems as markets, customer behavior, and internal operations evolve.
              </p>
            </div>

            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <div className="premium-card" style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>What Makes Our Story Different</h4>
                <p className="body-sm" style={{ opacity: 0.75 }}>
                  We did not scale by chasing volume. We scaled by delivering repeatable impact in complex business environments.
                </p>
              </div>
              <div className="premium-card" style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>Our Focus</h4>
                <p className="body-sm" style={{ opacity: 0.75 }}>
                  Salesforce consulting, AI-led automation, and cloud-first architecture designed to improve speed, accuracy, and confidence.
                </p>
              </div>
              <div className="premium-card">
                <h4 style={{ marginBottom: '10px' }}>Our Promise</h4>
                <p className="body-sm" style={{ opacity: 0.75 }}>
                  Strategic thinking at the top, reliable execution at the ground level, and transparent collaboration throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section style={{ borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '44px' }}>
            <span className="section-label">How We Operate</span>
            <h2 className="section-title">Our Working Principles</h2>
          </div>

          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px' }}>
            {PRINCIPLES.map((item, i) => (
              <article key={item.title} className="premium-card drift-in" ref={addToRefs} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--orange-glow)', color: 'var(--orange)', display: 'grid', placeItems: 'center', fontWeight: 800, marginBottom: '14px' }}>
                  0{i + 1}
                </div>
                <h4 style={{ marginBottom: '12px' }}>{item.title}</h4>
                <p className="body-sm" style={{ opacity: 0.75 }}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
