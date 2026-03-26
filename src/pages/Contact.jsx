import { useState, useEffect, useRef } from 'react'

const CONTACT_CHANNELS = [
  { title: 'Call', value: '+91 9550260709', note: 'Mon-Sat, 9:00 AM - 8:00 PM IST' },
  { title: 'Email', value: 'careers@ayriesoft.com', note: 'Share requirements and timelines' },
  { title: 'LinkedIn', value: 'linkedin.com/company/ayriesoft', note: 'For partnerships and updates' }
]

const TRUST_POINTS = [
  'Consulting-led discovery before implementation',
  'Transparent delivery with milestone check-ins',
  'Post-launch optimization and support continuity'
]

const NEXT_STEPS = [
  {
    step: '01',
    title: 'Requirement Review',
    desc: 'We evaluate your goals, current stack, and constraints to identify the right path.'
  },
  {
    step: '02',
    title: 'Strategy Call',
    desc: 'A focused consultation to define priorities, scope boundaries, and expected outcomes.'
  },
  {
    step: '03',
    title: 'Execution Plan',
    desc: 'You receive a practical action plan covering architecture, timelines, and delivery phases.'
  }
]

export default function Contact() {
  const [loaded, setLoaded] = useState(false)
  const [status, setStatus] = useState(null)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <main className={loaded ? 'loading-ready' : ''}>
      {/* ── HERO ── */}
      <section className="hero-section" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="section-container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
            <div className="drift-in" ref={addToRefs}>
              <span className="section-label">Contact Us</span>
              <h1 className="hero-headline-new" style={{ marginBottom: '22px' }}>
                Start A Strategic Conversation
              </h1>
              <p className="body-lg" style={{ maxWidth: '760px', opacity: 0.82 }}>
                Tell us what you are building. We will map the right delivery path across Salesforce, AI, and data engineering.
              </p>
            </div>
            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <div className="premium-card" style={{ background: 'linear-gradient(180deg, rgba(255,85,0,0.12), rgba(255,255,255,0.02))' }}>
                <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--glass-border)', marginBottom: '14px' }}>
                  <img
                    src="/about_hero_tech_office_1774505464547.png"
                    alt="Ayrie team workspace"
                    style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <p className="section-label" style={{ marginBottom: '10px' }}>Response Window</p>
                <h3 style={{ fontSize: '30px', color: 'var(--orange)', marginBottom: '6px' }}>Within 24 Hours</h3>
                <p className="body-sm" style={{ opacity: 0.75 }}>
                  Every inquiry is reviewed by our consulting team before a technical follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section style={{ borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="section-container">
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(30px, 6vw, 64px)',
          }}>
            
            {/* Form */}
            <div className="drift-in" ref={addToRefs}>
               <div className="premium-card">
                 {status === 'sent' ? (
                   <div style={{ textAlign: 'center', padding: '40px 0' }}>
                     <h2 className="section-title" style={{ fontSize: '32px', color: 'var(--orange)', marginBottom: '24px' }}>Message Sent</h2>
                     <p className="body-md" style={{ marginBottom: '40px' }}>Our team will get back to you within 24 hours.</p>
                     <button className="btn btn-ghost" onClick={() => setStatus(null)}>Send Another Message</button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                     <span className="section-label">Send a Message</span>
                     <div style={{ 
                       display: 'grid', 
                       gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
                       gap: '16px' 
                     }}>
                        <input className="input" placeholder="Full Name" required style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', outline: 'none', width: '100%' }} />
                        <input className="input" placeholder="Email Address" required type="email" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', outline: 'none', width: '100%' }} />
                     </div>
                     <div style={{ 
                       display: 'grid', 
                       gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
                       gap: '16px' 
                     }}>
                        <input className="input" placeholder="Company Name" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', outline: 'none', width: '100%' }} />
                        <select className="input" defaultValue="" required style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', outline: 'none', width: '100%' }}>
                          <option value="" disabled>Select Service</option>
                          <option value="salesforce">Salesforce Solutions</option>
                          <option value="ai">AI & Machine Learning</option>
                          <option value="data">Data Engineering</option>
                          <option value="combined">Combined Engagement</option>
                        </select>
                     </div>
                     <textarea className="input" placeholder="Tell us about your project goals, current challenge, and expected timeline." required rows={6} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', resize: 'none', outline: 'none', width: '100%' }} />
                     <p className="body-sm" style={{ opacity: 0.58, margin: 0 }}>
                       By sending this form, you agree to be contacted by our team regarding your request.
                     </p>
                     <button type="submit" className="btn btn-primary" style={{ padding: '16px', width: '100%' }}>
                        {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                     </button>
                   </form>
                 )}
               </div>
            </div>

            {/* Info */}
            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                  {CONTACT_CHANNELS.map((channel) => (
                    <div key={channel.title} className="premium-card" style={{ padding: '24px' }}>
                      <span className="section-label" style={{ opacity: 0.6, marginBottom: '8px' }}>{channel.title}</span>
                      {channel.title === 'LinkedIn' ? (
                        <a href="https://linkedin.com/company/ayriesoft" target="_blank" rel="noreferrer" className="body-md" style={{ display: 'block', textDecoration: 'underline', color: 'var(--orange)', fontWeight: 700, marginBottom: '6px' }}>
                          {channel.value}
                        </a>
                      ) : (
                        <p className="body-md" style={{ color: 'var(--orange)', fontWeight: 700, margin: '0 0 6px' }}>{channel.value}</p>
                      )}
                      <p className="body-sm" style={{ opacity: 0.68, margin: 0 }}>{channel.note}</p>
                      {channel.title === 'Call' && (
                        <a href="tel:+919550260709" className="btn btn-ghost" style={{ marginTop: '14px', padding: '10px 14px', fontSize: '12px' }}>
                          Call Now
                        </a>
                      )}
                      {channel.title === 'Email' && (
                        <a href="mailto:careers@ayriesoft.com" className="btn btn-ghost" style={{ marginTop: '14px', padding: '10px 14px', fontSize: '12px' }}>
                          Send Email
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="premium-card" style={{ background: 'rgba(255,85,0,0.05)', borderColor: 'rgba(255,85,0,0.35)' }}>
                  <span className="section-label" style={{ marginBottom: '12px' }}>Why Teams Choose Ayrie</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {TRUST_POINTS.map((item) => (
                      <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--orange)', lineHeight: 1 }}>•</span>
                        <p className="body-sm" style={{ margin: 0, opacity: 0.82 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--divider)' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ marginBottom: '40px', textAlign: 'center' }}>
            <span className="section-label">After You Reach Out</span>
            <h2 className="section-title">What Happens Next</h2>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {NEXT_STEPS.map((item, index) => (
              <div key={item.title} className="premium-card drift-in" ref={addToRefs} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div style={{ color: 'var(--orange)', fontSize: '26px', fontWeight: 800, marginBottom: '10px', fontFamily: 'var(--font-display)' }}>
                  {item.step}
                </div>
                <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                <p className="body-sm" style={{ opacity: 0.74 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
