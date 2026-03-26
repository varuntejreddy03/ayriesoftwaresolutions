import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--orange)', 
      background: 'var(--bg)', 
      padding: '80px 0 40px' 
    }}>
      <div className="section-container footer-grid" style={{ 
        paddingTop: 0, 
        paddingBottom: 0,
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '60px' 
      }}>
        
        {/* Col 1: Logo & Tagline */}
        <div className="footer-col">
          <img 
            src="/logo-removebg-preview.png" 
            alt="Ayrie" 
            style={{ height: '44px', marginBottom: '24px' }} 
          />
          <p className="body-sm" style={{ marginBottom: '24px', opacity: 0.8, maxWidth: '240px' }}>
            Smart software solutions for the businesses of tomorrow. Built to scale from day one.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://linkedin.com/company/ayriesoft" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: '0.3s' }} className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
           <h4 className="section-label" style={{ marginBottom: '32px', color: 'var(--text-primary)', fontSize: '13px' }}>Quick Links</h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {links.map(l => (
               <Link key={l.to} to={l.to} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: '0.3s' }} onMouseOver={e => e.target.style.color = 'var(--orange)'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                 {l.label}
               </Link>
             ))}
           </div>
        </div>

        {/* Col 3: Services */}
        <div className="footer-col">
           <h4 className="section-label" style={{ marginBottom: '32px', color: 'var(--text-primary)', fontSize: '13px' }}>Our Services</h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {['AI Systems', 'Data Engineering', 'Salesforce Solutions'].map(s => (
               <Link key={s} to="/services" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: '0.3s' }} onMouseOver={e => e.target.style.color = 'var(--orange)'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                 {s}
               </Link>
             ))}
           </div>
        </div>

        {/* Col 4: Contact */}
        <div className="footer-col">
           <h4 className="section-label" style={{ marginBottom: '32px', color: 'var(--text-primary)', fontSize: '13px' }}>Contact</h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
              <p>+91 9550260709</p>
              <p>careers@ayriesoft.com</p>
              <p style={{ marginTop: '8px', lineHeight: 1.6 }}>NRI Layout, Ramamurthy Nagar,<br />Bangalore – 560016</p>
           </div>
        </div>

      </div>

      <div className="section-container footer-bottom" style={{ paddingBottom: 0, marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
           <div>© 2026 Ayrie Software Solutions.</div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Built by <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Ayrie</span>
              <a href="https://staffarc.in" target="_blank" rel="noreferrer" style={{ opacity: 0.5, marginLeft: '8px' }}>
                <img src="https://www.staffarc.in/images/Staffarc-logo.png" alt="StaffArc" style={{ height: '20px', filter: 'brightness(0) invert(1)' }} />
              </a>
           </div>
      </div>
    </footer>
  )
}
