import { useState } from 'react'
import client from '../client.json'

export default function Contact() {
  const [form, setForm]   = useState({name:'', email:'', phone:'', message:''})
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  const contactItems = [
    client.phone   && {icon:'📱', label:'Phone',   value:client.phone,   href:`tel:${client.phone}`},
    client.email   && {icon:'✉️', label:'Email',   value:client.email,   href:`mailto:${client.email}`},
    client.address && {icon:'📍', label:'Address', value:client.address, href:null},
    client.hoursMF && {icon:'🕐', label:'Hours',   value:client.hoursMF, href:null},
  ].filter(Boolean)

  return (
    <main>

      {/* Hero */}
      <section style={{ padding:'72px 0 64px', background:'var(--bg-2)', borderBottom:'1px solid var(--border)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <p className="label" style={{ marginBottom:'12px' }}>Get In Touch</p>
          <h1 className="heading-1" style={{ marginBottom:'20px' }}>
            Let's <span className="gradient-text">talk</span>
          </h1>
          <p className="body-lg" style={{ maxWidth:'480px', margin:'0 auto' }}>
            Have a question or ready to start a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="section-sm">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'16px' }}>
            {contactItems.map((item, i) => (
              <div key={i} className="card" style={{ display:'flex', gap:'16px', alignItems:'flex-start', padding:'24px' }}>
                <div className="icon-box" style={{ flexShrink:0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize:'12px', fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'4px' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontSize:'14px', fontWeight:500, color:'var(--primary)' }}>{item.value}</a>
                    : <p style={{ fontSize:'14px', fontWeight:500, color:'var(--text)' }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ paddingTop:'32px' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'64px', alignItems:'start' }}>

            <div>
              <h2 className="heading-2" style={{ marginBottom:'16px' }}>We're here to help</h2>
              <p className="body-lg" style={{ marginBottom:'36px' }}>Reach out through any channel and we'll get back to you as soon as possible.</p>
              {(client.facebook || client.instagram || client.linkedin) && (
                <div>
                  <p style={{ fontSize:'13px', fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'16px' }}>Follow Us</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                    {[
                      {key:'facebook',  label:'Facebook',  icon:'f'},
                      {key:'instagram', label:'Instagram', icon:'ig'},
                      {key:'linkedin',  label:'LinkedIn',  icon:'in'},
                    ].filter(s => client[s.key]).map(s => (
                      <a key={s.key} href={client[s.key]} target="_blank" rel="noreferrer"
                        style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px', borderRadius:'var(--radius-sm)', border:'1px solid var(--border)', fontSize:'14px', fontWeight:500, color:'var(--text)', transition:'all var(--transition)' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.color='var(--primary)'; e.currentTarget.style.background='var(--primary-light)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='transparent' }}
                      >
                        <span style={{ width:'28px', height:'28px', borderRadius:'6px', background:'var(--bg-3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:700 }}>{s.icon}</span>
                        {s.label}
                        <span style={{ marginLeft:'auto', fontSize:'12px', color:'var(--muted)' }}>→</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="card" style={{ padding:'40px' }}>
              {status === 'sent' ? (
                <div style={{ textAlign:'center', padding:'32px 0' }}>
                  <div style={{ fontSize:'56px', marginBottom:'16px' }}>✅</div>
                  <h3 className="heading-3" style={{ marginBottom:'8px' }}>Message sent!</h3>
                  <p className="body-md">We'll get back to you within 24 hours.</p>
                  <button className="btn btn-outline" style={{ marginTop:'24px' }}
                    onClick={() => { setStatus(null); setForm({name:'',email:'',phone:'',message:''}) }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  <h3 className="heading-3" style={{ marginBottom:'8px' }}>Send us a message</h3>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                    <div>
                      <label style={{ fontSize:'13px', fontWeight:500, color:'var(--text-2)', display:'block', marginBottom:'6px' }}>Full Name *</label>
                      <input className="input" placeholder="Your name" required value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
                    </div>
                    <div>
                      <label style={{ fontSize:'13px', fontWeight:500, color:'var(--text-2)', display:'block', marginBottom:'6px' }}>Phone</label>
                      <input className="input" type="tel" placeholder="Your phone" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize:'13px', fontWeight:500, color:'var(--text-2)', display:'block', marginBottom:'6px' }}>Email *</label>
                    <input className="input" type="email" placeholder="you@email.com" required value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
                  </div>
                  <div>
                    <label style={{ fontSize:'13px', fontWeight:500, color:'var(--text-2)', display:'block', marginBottom:'6px' }}>Message *</label>
                    <textarea className="input" placeholder="Tell us about your project..." required rows={5} value={form.message} onChange={e => setForm({...form, message:e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={status==='sending'}
                    style={{ justifyContent:'center', opacity:status==='sending'?0.7:1 }}>
                    {status === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>
                  <p style={{ fontSize:'12px', color:'var(--muted)', textAlign:'center' }}>We typically respond within 24 hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
