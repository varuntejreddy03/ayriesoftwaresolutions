import { useState, useEffect, useRef } from 'react'

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
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <div className="section-container">
          <div className="drift-in" ref={addToRefs} style={{ textAlign: 'center' }}>
            <span className="section-label">Contact Us</span>
            <h1 className="hero-headline-new" style={{ margin: '0 auto 32px' }}>
              Connect With Us
            </h1>
            <p className="hero-subtext-new" style={{ margin: '0 auto', opacity: 0.8 }}>
              Synchronize your architectural roadmap with our engineering team. 
              We're ready to help you build the future of your enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section style={{ borderTop: '1px solid var(--divider)' }}>
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(40px, 8vw, 80px)',
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
                   <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                     <span className="section-label">Send a Message</span>
                     <div style={{ 
                       display: 'grid', 
                       gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
                       gap: '24px' 
                     }}>
                        <input className="input" placeholder="Full Name" required style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', outline: 'none', width: '100%' }} />
                        <input className="input" placeholder="Email Address" required type="email" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', outline: 'none', width: '100%' }} />
                     </div>
                     <textarea className="input" placeholder="How can we help you?" required rows={6} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '16px', color: '#fff', borderRadius: 'var(--radius-sm)', resize: 'none', outline: 'none', width: '100%' }} />
                     <button type="submit" className="btn btn-primary" style={{ padding: '16px', width: '100%' }}>
                        {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                     </button>
                   </form>
                 )}
               </div>
            </div>

            {/* Info */}
            <div className="drift-in" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                  <div>
                    <span className="section-label" style={{ opacity: 0.5 }}>Communication</span>
                    <p className="section-title" style={{ color: 'var(--orange)', fontSize: '24px', margin: '16px 0 8px' }}>+91 9550260709</p>
                    <p className="body-md" style={{ opacity: 0.8 }}>careers@ayriesoft.com</p>
                  </div>
                  <div>
                    <span className="section-label" style={{ opacity: 0.5 }}>Headquarters</span>
                    <p className="body-md" style={{ marginTop: '16px', lineHeight: 1.8 }}>NRI Layout, Ramamurthy Nagar,<br />Bangalore – 560016</p>
                  </div>
                  <div>
                    <span className="section-label" style={{ opacity: 0.5 }}>Social Sync</span>
                    <a href="https://linkedin.com/company/ayriesoft" target="_blank" rel="noreferrer" className="body-md" style={{ display: 'block', marginTop: '16px', textDecoration: 'underline', color: 'var(--orange)', fontWeight: 700 }}>LinkedIn Profile ↗</a>
                  </div>
                </div>
                
                <div style={{ marginTop: '60px', padding: '40px', background: 'rgba(255,85,0,0.04)', border: '1px solid var(--orange)', borderRadius: 'var(--radius-md)' }}>
                   <p className="body-sm" style={{ opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Global HQ Bangalore: Active</p>
                   <p className="body-sm" style={{ opacity: 0.6, marginTop: '8px', fontSize: '11px' }}>12.9716° N, 77.5946° E</p>
                </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
