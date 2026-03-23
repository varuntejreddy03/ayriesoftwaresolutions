import client from '../client.json'

export default function About() {
  return (
    <main>

      {/* Hero */}
      <section style={{ padding:'72px 0 64px', background:'var(--bg-2)', borderBottom:'1px solid var(--border)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <p className="label" style={{ marginBottom:'12px' }}>Our Story</p>
          <h1 className="heading-1" style={{ marginBottom:'20px' }}>
            About <span className="gradient-text">{client.businessName}</span>
          </h1>
          <p className="body-lg" style={{ maxWidth:'520px', margin:'0 auto' }}>
            Learn who we are, what drives us, and why clients trust us.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
            <div>
              <p className="label" style={{ marginBottom:'12px' }}>Who We Are</p>
              <h2 className="heading-2" style={{ marginBottom:'20px' }}>Built on trust, driven by results</h2>
              <p style={{ fontSize:'16px', lineHeight:1.85, color:'var(--text-2)', marginBottom:'20px' }}>
                {client.about || `${client.businessName} is a dedicated team of professionals committed to delivering exceptional results.`}
              </p>
              <p style={{ fontSize:'15px', lineHeight:1.8, color:'var(--muted)' }}>
                From day one, our focus has been simple: understand what our clients truly need and deliver it with excellence.
              </p>
            </div>
            {/* right: about image or stat cards */}
            {client.hasAboutImage
              ? <div style={{ borderRadius:'var(--radius-xl)', overflow:'hidden', boxShadow:'var(--shadow-lg)', aspectRatio:'4/3' }}>
                  <img src={`/${client.aboutImageFile}`} alt={client.businessName} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
              : <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                  {[
                    {icon:'🏆', label:'Award Winning',  sub:'Recognized excellence'},
                    {icon:'👥', label:'Expert Team',    sub:'Skilled professionals'},
                    {icon:'📍', label:'Local Presence', sub: client.address || 'Serving your area'},
                    {icon:'💬', label:'Always Here',    sub:'Responsive support'},
                  ].map((item,i) => (
                    <div key={i} className="card" style={{ textAlign:'center', padding:'28px 20px' }}>
                      <div style={{ fontSize:'32px', marginBottom:'10px' }}>{item.icon}</div>
                      <p style={{ fontWeight:700, fontSize:'14px', color:'var(--text)', marginBottom:'4px' }}>{item.label}</p>
                      <p style={{ fontSize:'12px', color:'var(--muted)' }}>{item.sub}</p>
                    </div>
                  ))}
                </div>
            }
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background:'var(--bg-2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'56px' }}>
            <p className="label" style={{ marginBottom:'12px' }}>Our Values</p>
            <h2 className="heading-2">What we stand for</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'24px' }}>
            {[
              {icon:'🎯', title:'Mission Driven',   desc:"Every action we take is aligned with delivering real value to our clients."},
              {icon:'💎', title:'Quality First',    desc:"We never compromise on quality — it's the foundation of everything we do."},
              {icon:'🤝', title:'Client Focused',   desc:'Your success is our success. We treat every client like a long-term partner.'},
              {icon:'🚀', title:'Always Improving', desc:'We continuously evolve our skills and processes to stay ahead.'},
            ].map((v,i) => (
              <div key={i} className="card" style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
                <div className="icon-box icon-box-lg">{v.icon}</div>
                <h3 className="heading-3">{v.title}</h3>
                <p className="body-md">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      {(client.hoursMF || client.hoursSat || client.hoursSun) && (
        <section className="section">
          <div className="container">
            <div style={{ maxWidth:'520px', margin:'0 auto' }}>
              <div style={{ textAlign:'center', marginBottom:'40px' }}>
                <p className="label" style={{ marginBottom:'12px' }}>Availability</p>
                <h2 className="heading-2">Business Hours</h2>
              </div>
              <div className="card" style={{ padding:'40px' }}>
                {[
                  {label:'Monday – Friday', value:client.hoursMF},
                  {label:'Saturday',        value:client.hoursSat},
                  {label:'Sunday',          value:client.hoursSun},
                ].filter(h => h.value).map((h,i,arr) => (
                  <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 0', borderBottom: i < arr.length-1 ? '1px solid var(--border)' : 'none' }}>
                    <span style={{ fontSize:'15px', color:'var(--text-2)', fontWeight:500 }}>{h.label}</span>
                    <span style={{ fontSize:'14px', fontWeight:600, color:'var(--primary)', background:'var(--primary-light)', padding:'4px 12px', borderRadius:'999px' }}>{h.value}</span>
                  </div>
                ))}
              </div>
              {(client.phone || client.email) && (
                <div style={{ textAlign:'center', marginTop:'28px' }}>
                  <p className="body-md" style={{ marginBottom:'16px' }}>Need to reach us outside hours?</p>
                  <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
                    {client.phone && <a href={`tel:${client.phone}`} className="btn btn-outline">{client.phone}</a>}
                    {client.email && <a href={`mailto:${client.email}`} className="btn btn-primary">{client.email}</a>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
