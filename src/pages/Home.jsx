import { Link } from 'react-router-dom'
import client from '../client.json'

const icons = ['⚡','🎯','🛡️','🚀','💡','🔧','📊','🌟','🎨','🤝','📱','🔒']

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section style={{
        position:'relative', overflow:'hidden',
        padding: client.hasHeroImage ? '120px 0 140px' : '80px 0 96px',
        background: client.hasHeroImage ? '#000' : 'var(--bg)',
      }}>
        {/* hero image or gradient */}
        {client.hasHeroImage
          ? <img src={`/${client.heroImageFile}`} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.45 }} />
          : <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 50% at 50% 0%, var(--primary-glow), transparent)', pointerEvents:'none' }} />
        }
        {/* dark overlay for text readability on photo */}
        {client.hasHeroImage && <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)' }} />}

        <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <div className="animate-fade-up" style={{ marginBottom:'20px' }}>
            <span className="badge" style={ client.hasHeroImage ? { background:'rgba(255,255,255,0.15)', color:'#fff', borderColor:'rgba(255,255,255,0.3)' } : {} }>
              ✦ Welcome to {client.businessName}
            </span>
          </div>
          <h1 className="display animate-fade-up delay-1" style={{ marginBottom:'24px', color: client.hasHeroImage ? '#fff' : 'var(--text)' }}>
            {client.businessName}
          </h1>
          <p className="body-lg animate-fade-up delay-2" style={{ maxWidth:'580px', margin:'0 auto 40px', color: client.hasHeroImage ? 'rgba(255,255,255,0.85)' : 'var(--muted)' }}>
            {(client.about || '').slice(0, 160)}{(client.about||'').length > 160 ? '…' : ''}
          </p>
          <div className="animate-fade-up delay-3" style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Started Today →</Link>
            <Link to="/services" className="btn btn-outline btn-lg" style={ client.hasHeroImage ? { borderColor:'rgba(255,255,255,0.6)', color:'#fff' } : {} }>View Our Services</Link>
          </div>
          <div className="animate-fade-up delay-4" style={{ display:'flex', gap:'24px', justifyContent:'center', marginTop:'56px', flexWrap:'wrap' }}>
            {['Trusted & Reliable','Fast Delivery','Quality Guaranteed'].map((t,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'13px', color: client.hasHeroImage ? 'rgba(255,255,255,0.75)' : 'var(--muted)', fontWeight:500 }}>
                <span style={{ color:'var(--primary)' }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:'var(--bg-3)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'48px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'32px', textAlign:'center' }}>
            {[{n:'100+',l:'Happy Clients'},{n:'5★',l:'Average Rating'},{n:'24h',l:'Response Time'},{n:'100%',l:'Satisfaction'}].map((s,i) => (
              <div key={i}>
                <div className="stat-number gradient-text">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'56px' }}>
            <p className="label" style={{ marginBottom:'12px' }}>What We Do</p>
            <h2 className="heading-1" style={{ marginBottom:'16px' }}>Our Services</h2>
            <p className="body-lg" style={{ maxWidth:'480px', margin:'0 auto' }}>Everything you need, delivered with expertise and care.</p>
          </div>
          <div className="grid-auto">
            {client.services.map((service, i) => (
              <div key={i} className="card" style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <div className="icon-box icon-box-lg">{icons[i % icons.length]}</div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom:'8px', color:'var(--text)' }}>{service}</h3>
                  <p className="body-md">Professional {service.toLowerCase()} tailored to your specific needs.</p>
                </div>
                <Link to="/contact" style={{ fontSize:'13px', fontWeight:600, color:'var(--primary)', marginTop:'auto', display:'flex', alignItems:'center', gap:'4px' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section" style={{ background:'var(--bg-2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
            <div>
              <p className="label" style={{ marginBottom:'12px' }}>Why Choose Us</p>
              <h2 className="heading-1" style={{ marginBottom:'20px' }}>
                We deliver results, <span className="gradient-text">not just promises</span>
              </h2>
              <p className="body-lg" style={{ marginBottom:'36px' }}>
                {client.about || `At ${client.businessName}, we combine expertise with dedication to deliver exceptional results.`}
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                {[
                  {icon:'⚡', title:'Fast & Efficient', desc:'We respect your time and deliver on schedule.'},
                  {icon:'🎯', title:'Results Focused',  desc:'Every decision is driven by your goals.'},
                  {icon:'🤝', title:'Always Available', desc:'Dedicated support whenever you need us.'},
                ].map((f,i) => (
                  <div key={i} style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                    <div className="icon-box" style={{ flexShrink:0 }}>{f.icon}</div>
                    <div>
                      <p style={{ fontWeight:600, color:'var(--text)', marginBottom:'4px' }}>{f.title}</p>
                      <p className="body-md">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position:'relative', height:'400px' }}>
              <div style={{ position:'absolute', top:'20px', right:'20px', width:'85%', height:'360px', background:'var(--primary-light)', borderRadius:'var(--radius-xl)', border:'1px solid rgba(0,0,0,0.06)' }} />
              <div className="card" style={{ position:'absolute', top:0, left:0, width:'85%', boxShadow:'var(--shadow-lg)', padding:'32px' }}>
                <div style={{ fontSize:'36px', marginBottom:'14px' }}>🏆</div>
                <h3 className="heading-3" style={{ marginBottom:'8px' }}>Trusted by clients</h3>
                <p className="body-md" style={{ marginBottom:'20px' }}>Join hundreds of satisfied customers who chose {client.businessName}.</p>
                <div style={{ display:'flex' }}>
                  {['🧑','👩','👨','🧑','👩'].map((e,i) => (
                    <div key={i} style={{ width:'34px', height:'34px', borderRadius:'50%', background:`hsl(${i*40},60%,85%)`, border:'2px solid #fff', marginLeft:i>0?'-8px':'0', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }}>{e}</div>
                  ))}
                  <div style={{ width:'34px', height:'34px', borderRadius:'50%', background:'var(--primary)', border:'2px solid #fff', marginLeft:'-8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:700, color:'#fff' }}>+99</div>
                </div>
              </div>
              <div className="card card-glass" style={{ position:'absolute', bottom:0, right:0, width:'55%', padding:'18px', boxShadow:'var(--shadow-md)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <span style={{ fontSize:'26px' }}>⭐</span>
                  <div>
                    <p style={{ fontWeight:700, fontSize:'20px', color:'var(--text)' }}>5.0</p>
                    <p style={{ fontSize:'12px', color:'var(--muted)' }}>Average rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container" style={{ textAlign:'center' }}>
          <p className="label" style={{ marginBottom:'12px' }}>Testimonials</p>
          <h2 className="heading-1" style={{ marginBottom:'48px' }}>What clients say</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px' }}>
            {[
              {quote:'Absolutely outstanding service. They exceeded every expectation and delivered on time.',name:'Sarah M.',role:'Business Owner'},
              {quote:'Professional, responsive, and genuinely cares about results. Highly recommended!',name:'James K.',role:'Entrepreneur'},
              {quote:'The best decision we made was working with this team. Quality is unmatched.',name:'Priya R.',role:'CEO'},
            ].map((t,i) => (
              <div key={i} className="card" style={{ textAlign:'left' }}>
                <div style={{ color:'var(--primary)', fontSize:'18px', marginBottom:'14px', letterSpacing:'2px' }}>★★★★★</div>
                <p style={{ fontSize:'15px', lineHeight:1.75, color:'var(--text-2)', marginBottom:'20px', fontStyle:'italic' }}>"{t.quote}"</p>
                <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <div style={{ width:'40px', height:'40px', borderRadius:'50%', background:'var(--primary-light)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'var(--primary)', fontSize:'16px' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight:600, fontSize:'14px', color:'var(--text)' }}>{t.name}</p>
                    <p style={{ fontSize:'12px', color:'var(--muted)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
