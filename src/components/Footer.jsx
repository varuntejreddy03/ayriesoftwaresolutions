import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/contact',  label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#0A0A0A', color: '#9CA3AF', position: 'relative', zIndex: 1 }}>
      <div className="divider" />

      <div className="container" style={{ padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.4fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/logo.jpeg" alt="Ayrie" style={{ height: '36px', width: 'auto', borderRadius: '6px' }} />
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#F5F5F5' }}>
                Ayrie <span style={{ color: '#F97316' }}>Software</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.75, maxWidth: '280px', marginBottom: '24px' }}>
              Premium Salesforce, AI, Data & ML solutions for enterprises. Building the future, one system at a time.
            </p>
            <a href="https://www.linkedin.com/company/ayriesoft/posts/?feedView=all" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '9px 18px', borderRadius: '8px',
                border: '1px solid rgba(249,115,22,0.4)', color: '#F97316',
                fontSize: '13px', fontWeight: 600, transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.1)'; e.currentTarget.style.borderColor = '#F97316' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#F5F5F5', fontWeight: 600, fontSize: '14px', marginBottom: '20px' }}>Quick Links</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(l => (
                <NavLink key={l.to} to={l.to}
                  style={{ fontSize: '14px', color: '#9CA3AF', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#F5F5F5', fontWeight: 600, fontSize: '14px', marginBottom: '20px' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <span>📱 +91 9550260709</span>
              <a href="mailto:careers@ayriesoft.com" style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}>
                ✉️ careers@ayriesoft.com
              </a>
              <span style={{ lineHeight: 1.6 }}>📍 102, 2nd Cross, 5th Main, NRI Layout,<br />Ramamurthy Nagar, Bangalore – 560016</span>
              <span>🕐 Mon–Fri: 9:00 AM – 7:00 PM</span>
              <span>📅 Sat–Sun: Holiday</span>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '24px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px' }}>© {year} Ayrie Software Solutions. All rights reserved.</p>
          <p style={{ fontSize: '13px' }}>Built with ❤️</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
