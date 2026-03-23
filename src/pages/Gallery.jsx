import { useState } from 'react'
import client from '../client.json'

const placeholders = [
  {span:2, emoji:'🏢', label:'Our Workspace'},
  {span:1, emoji:'🎨', label:'Creative Work'},
  {span:1, emoji:'🤝', label:'Client Meeting'},
  {span:1, emoji:'🚀', label:'Project Launch'},
  {span:1, emoji:'💼', label:'Our Team'},
  {span:2, emoji:'🌟', label:'Featured Work'},
  {span:1, emoji:'📸', label:'Behind the Scenes'},
  {span:1, emoji:'🏆', label:'Awards'},
]

// assign span pattern to real images for visual variety
const spanPattern = [2,1,1,1,1,2,1,1]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)
  const hasImages = client.galleryImages && client.galleryImages.length > 0
  const items = hasImages ? client.galleryImages : placeholders

  return (
    <main>

      {/* Hero */}
      <section style={{ padding:'72px 0 64px', background:'var(--bg-2)', borderBottom:'1px solid var(--border)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <p className="label" style={{ marginBottom:'12px' }}>Our Work</p>
          <h1 className="heading-1" style={{ marginBottom:'20px' }}>
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="body-lg" style={{ maxWidth:'480px', margin:'0 auto' }}>
            A glimpse into our work, our team, and the results we deliver.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridAutoRows:'240px', gap:'16px' }}>
            {items.map((item, i) => {
              const isReal   = hasImages
              const spanVal  = isReal ? spanPattern[i % spanPattern.length] : item.span
              const imgSrc   = isReal ? `/${item}` : null
              const label    = isReal ? `Photo ${i+1}` : item.label
              const emoji    = isReal ? null : item.emoji

              return (
                <div key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    gridColumn: spanVal === 2 ? 'span 2' : 'span 1',
                    borderRadius:'var(--radius-lg)',
                    background: isReal ? '#111' : `hsl(${i*37},25%,94%)`,
                    border:'1px solid var(--border)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    position:'relative', overflow:'hidden', cursor:'pointer',
                    transition:'transform 0.2s, box-shadow 0.2s',
                    transform: hovered===i ? 'scale(1.01)' : 'scale(1)',
                    boxShadow: hovered===i ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  }}>

                  {/* real image */}
                  {isReal && (
                    <img src={imgSrc} alt={label} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.3s', transform: hovered===i ? 'scale(1.05)' : 'scale(1)' }} />
                  )}

                  {/* placeholder emoji */}
                  {!isReal && <span style={{ fontSize:'56px', opacity:0.4 }}>{emoji}</span>}

                  {/* hover overlay */}
                  <div style={{
                    position:'absolute', inset:0,
                    background:'rgba(0,0,0,0.55)',
                    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'8px',
                    opacity: hovered===i ? 1 : 0, transition:'opacity 0.2s',
                  }}>
                    {!isReal && <span style={{ fontSize:'28px' }}>{emoji}</span>}
                    <p style={{ color:'#fff', fontWeight:600, fontSize:'15px' }}>{label}</p>
                    {!isReal && <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'12px' }}>Replace with your photo</p>}
                  </div>
                </div>
              )
            })}
          </div>

          {/* hint only shown when no real images */}
          {!hasImages && (
            <div className="card" style={{ marginTop:'40px', background:'var(--primary-light)', border:'1px solid rgba(0,0,0,0.06)', textAlign:'center', padding:'32px' }}>
              <p style={{ fontSize:'20px', marginBottom:'8px' }}>📸</p>
              <p style={{ fontWeight:600, color:'var(--text)', marginBottom:'6px' }}>No gallery images uploaded</p>
              <p className="body-md">Upload photos via the intake form, or add <code style={{ background:'rgba(0,0,0,0.06)', padding:'2px 6px', borderRadius:'4px', fontSize:'13px' }}>&lt;img&gt;</code> tags pointing to images in <code style={{ background:'rgba(0,0,0,0.06)', padding:'2px 6px', borderRadius:'4px', fontSize:'13px' }}>/public</code>.</p>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
