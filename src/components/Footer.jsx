import client from '../client.json'

const navLinks = ['/', '/about', '/services', '/gallery', '/contact']
const navLabels = ['Home', 'About', 'Services', 'Gallery', 'Contact']
const socials = [
  { key:'facebook',  label:'Facebook',  icon:'f' },
  { key:'instagram', label:'Instagram', icon:'ig' },
  { key:'linkedin',  label:'LinkedIn',  icon:'in' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background:'#0a0a0a', color:'#a1a1aa' }}>

      {/* CTA band */}
      <div style={{ background:'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', padding:'56px 24px', textAlign:'center' }}>
        <div className="container">
          <p style={{ fontSize:'12px', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.75)', marginBottom:'12px' }}>
            Ready to get started?
          </p>
          <h2 style={{ color:'#fff', fontSize:'clamp(24px,3vw,38px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:'24px' }}>
            Let's build something great together
          </h2>
          <a href="/contact" className="btn" style={{ background:'#fff', color:'var(--primary)', fontWeight:700, boxShadow:'0 4px 20px rgba(0,0,0,0.15)' }}>
            Contact Us Today →
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="container" style={{ padding:'64px 24px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:'48px', marginBottom:'48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
              <span style={{ width:'36px', height:'36px', borderRadius:'9px', background:'var(--primary)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:'16px', flexShrink:0 }}>
                {client.businessName.charAt(0)}
              </span>
              <span style={{ color:'#fff', fontWeight:700, fontSize:'17px' }}>{client.businessName}</span>
            </div>
            <p style={{ fontSize:'14px', lineHeight:1.75, maxWidth:'300px', marginBottom:'24px' }}>
              {(client.about || '').slice(0, 120)}{(client.about || '').length > 120 ? '…' : ''}
            </p>
            <div style={{ display:'flex', gap:'10px' }}>
              {socials.filter(s => client[s.key]).map(s => (
                <a key={s.key} href={client[s.key]} target="_blank" rel="noreferrer"
                  style={{ width:'38px', height:'38px', borderRadius:'8px', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', color:'#fff', fontWeight:700, transition:'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='var(--primary)'; e.currentTarget.style.borderColor='var(--primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ color:'#fff', fontWeight:600, fontSize:'14px', marginBottom:'20px' }}>Quick Links</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {navLinks.map((to, i) => (
                <a key={to} href={to} style={{ fontSize:'14px', transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='#fff'}
                  onMouseLeave={e => e.currentTarget.style.color='#a1a1aa'}
                >
                  {navLabels[i]}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color:'#fff', fontWeight:600, fontSize:'14px', marginBottom:'20px' }}>Contact</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', fontSize:'14px' }}>
              {client.phone   && <span>📱 {client.phone}</span>}
              {client.email   && <span>✉️ {client.email}</span>}
              {client.address && <span>📍 {client.address}</span>}
              {client.hoursMF && <span>🕐 {client.hoursMF}</span>}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
          <p style={{ fontSize:'13px' }}>© {year} {client.businessName}. All rights reserved.</p>
          <p style={{ fontSize:'13px' }}>Built with ❤️</p>
        </div>
      </div>

      <style>{`
        @media (max-width:768px) {
          footer .ft-grid { grid-template-columns:1fr !important; gap:32px !important; }
        }
      `}</style>
    </footer>
  )
}
