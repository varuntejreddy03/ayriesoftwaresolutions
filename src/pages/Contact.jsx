import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const INFO = [
  { icon: '📱', label: 'Phone',    value: '+91 9550260709',                                          href: 'tel:+919550260709' },
  { icon: '✉️', label: 'Email',    value: 'careers@ayriesoft.com',                                   href: 'mailto:careers@ayriesoft.com' },
  { icon: '📍', label: 'Address',  value: '102, 2nd Cross, 5th Main, NRI Layout, Ramamurthy Nagar, Bangalore – 560016', href: null },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Fri: 9:00 AM – 7:00 PM | Sat–Sun: Holiday',           href: null },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/company/ayriesoft',                          href: 'https://www.linkedin.com/company/ayriesoft/posts/?feedView=all' },
]

const SERVICES_LIST = [
  'Salesforce Consulting & Implementation',
  'Custom Salesforce Development',
  'AI-Powered Application Development',
  'Software Product Development & Maintenance',
  'Data Engineering & Data Analytics',
  'ML Model Development & Deployment',
  'AI for Salesforce & Data Services',
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null)
  const revealRef = useReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <main ref={revealRef}>

      {/* ── PAGE HERO ── */}
      <section style={{ padding: '80px 0 72px', background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="label animate-fade-up" style={{ marginBottom: '16px' }}>Get In Touch</p>
          <h1 className="heading-1 animate-fade-up delay-1" style={{ marginBottom: '16px' }}>
            Let's Build Something{' '}
            <span className="gradient-text">Great Together</span>
          </h1>
          <p className="body-lg animate-fade-up delay-2" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '56px', alignItems: 'start' }}>

            {/* LEFT — Form */}
            <div className="reveal">
              <div style={{ background: '#161616', border: '1px solid rgba(249,115,22,0.12)', borderRadius: '24px', padding: '40px' }}>
                {status === 'sent' ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                    <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '22px', color: '#F5F5F5', marginBottom: '8px' }}>Message Sent!</h3>
                    <p className="body-md" style={{ marginBottom: '24px' }}>We'll get back to you within 24 hours.</p>
                    <button className="btn btn-ghost" onClick={() => { setStatus(null); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#F5F5F5', marginBottom: '4px' }}>Send Us a Message</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 500, color: '#9CA3AF', display: 'block', marginBottom: '7px' }}>Full Name *</label>
                        <input className="input" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 500, color: '#9CA3AF', display: 'block', marginBottom: '7px' }}>Phone</label>
                        <input className="input" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: '#9CA3AF', display: 'block', marginBottom: '7px' }}>Email *</label>
                      <input className="input" type="email" placeholder="you@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: '#9CA3AF', display: 'block', marginBottom: '7px' }}>Service</label>
                      <select className="input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service…</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: '#9CA3AF', display: 'block', marginBottom: '7px' }}>Message *</label>
                      <textarea className="input" placeholder="Tell us about your project…" required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={status === 'sending'}
                      style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, width: '100%', padding: '15px' }}>
                      {status === 'sending' ? 'Sending…' : 'Send Message →'}
                    </button>
                    <p style={{ fontSize: '12px', color: '#6B7280', textAlign: 'center' }}>We typically respond within 24 hours.</p>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT — Info cards */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {INFO.map((item, i) => (
                <div key={i} className="card-glass" style={{ padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                          style={{ fontSize: '14px', color: '#F97316', fontWeight: 500, transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                          {item.value}
                        </a>
                      : <p style={{ fontSize: '14px', color: '#D1D5DB', fontWeight: 400, lineHeight: 1.6 }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div style={{
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(249,115,22,0.15)',
                height: '180px', background: '#161616',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)' }} />
                <span style={{ fontSize: '32px' }}>📍</span>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#F5F5F5' }}>Ramamurthy Nagar, Bangalore</p>
                <a href="https://maps.google.com/?q=Ramamurthy+Nagar+Bangalore" target="_blank" rel="noreferrer"
                  style={{ fontSize: '12px', color: '#F97316', fontWeight: 600 }}>
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
      </section>

    </main>
  )
}
