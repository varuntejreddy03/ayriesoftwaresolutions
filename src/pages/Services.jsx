import { Link } from 'react-router-dom'
import client from '../client.json'

const icons = ['⚡','🎯','🛡️','🚀','💡','🔧','📊','🌟','🎨','🤝','📱','🔒']

export default function Services() {
  return (
    <main>

      {/* Hero */}
      <section style={{ padding:'72px 0 64px', background:'var(--bg-2)', borderBottom:'1px solid var(--border)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <p className="label" style={{ marginBottom:'12px' }}>What We Offer</p>
          <h1 className="heading-1" style={{ marginBottom:'20px' }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="body-lg" style={{ maxWidth:'520px', margin:'0 auto' }}>
            Comprehensive solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'24px' }}>
            {client.services.map((service, i) => (
              <div key={i} className="card" style={{ display:'flex', flexDirection:'column', gap:'16px', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:'linear-gradient(90deg, var(--primary), var(--primary-dark))' }} />
                <div className="icon-box icon-box-lg" style={{ marginTop:'8px' }}>{icons[i % icons.length]}</div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom:'10px', color:'var(--text)' }}>{service}</h3>
                  <p className="body-md">Professional {service.toLowerCase()} with a focus on quality, efficiency, and results that matter.</p>
                </div>
                <Link to="/contact" style={{ marginTop:'auto', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'13px', fontWeight:600, color:'var(--primary)' }}>
                  Get a quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background:'var(--bg-2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'56px' }}>
            <p className="label" style={{ marginBottom:'12px' }}>How It Works</p>
            <h2 className="heading-2">Our simple process</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'32px' }}>
            {[
              {step:'01', title:'Consultation', desc:'We start with a free consultation to understand your needs.'},
              {step:'02', title:'Planning',     desc:'We create a tailored plan and timeline for your project.'},
              {step:'03', title:'Execution',    desc:'Our team gets to work, keeping you updated throughout.'},
              {step:'04', title:'Delivery',     desc:'We deliver results and provide ongoing support.'},
            ].map((p,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ width:'56px', height:'56px', borderRadius:'50%', background:'var(--primary)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:'16px', margin:'0 auto 20px', boxShadow:'0 4px 14px var(--primary-glow)' }}>
                  {p.step}
                </div>
                <h3 className="heading-3" style={{ marginBottom:'10px' }}>{p.title}</h3>
                <p className="body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign:'center' }}>
          <h2 className="heading-2" style={{ marginBottom:'16px' }}>Ready to get started?</h2>
          <p className="body-lg" style={{ marginBottom:'32px', maxWidth:'440px', margin:'0 auto 32px' }}>
            Contact us today and let's discuss how we can help your business grow.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Consultation →</Link>
        </div>
      </section>

    </main>
  )
}
