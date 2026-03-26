import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const SERVICE_LINKS = [
  { to: '/services', label: 'Salesforce Transformation' },
  { to: '/services', label: 'Applied AI Systems' },
  { to: '/services', label: 'Data Engineering Core' }
]

const CONTACT_LINKS = [
  { href: 'tel:+919550260709', label: '+91 9550260709' },
  { href: 'mailto:careers@ayriesoft.com', label: 'careers@ayriesoft.com' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--divider)',
        background: 'radial-gradient(circle at 85% 20%, rgba(255,85,0,0.16), transparent 40%), var(--bg)',
        padding: '0 0 34px'
      }}
    >
      <div className="section-container" style={{ paddingBottom: '34px' }}>
        <div
          className="premium-card"
          style={{
            background: 'linear-gradient(140deg, rgba(255,85,0,0.28), rgba(255,255,255,0.03))',
            borderColor: 'rgba(255,85,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: '8px', color: '#FFD4BF' }}>Let Us Build With You</span>
            <h3 style={{ marginBottom: '6px' }}>Need a custom digital roadmap?</h3>
            <p className="body-sm" style={{ opacity: 0.85, margin: 0 }}>From strategy to deployment, we support every stage of growth.</p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
            Book Consultation
          </Link>
        </div>
      </div>

      <div
        className="section-container footer-grid"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr',
          gap: '44px'
        }}
      >
        <div className="footer-col">
          <img src="/logo-removebg-preview.png" alt="Ayrie" style={{ height: '46px', marginBottom: '18px' }} />
          <p className="body-sm" style={{ marginBottom: '20px', opacity: 0.8, maxWidth: '300px' }}>
            Ayrie engineers intelligent systems across Salesforce, AI, and Data so ambitious teams can operate faster and scale confidently.
          </p>
          <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--glass-border)', marginBottom: '16px', maxWidth: '280px' }}>
            <img
              src="/data_viz_interface_1774495942040.png"
              alt="Data intelligence dashboard"
              style={{ width: '100%', height: '112px', objectFit: 'cover', display: 'block', opacity: 0.9 }}
            />
          </div>
          <a href="https://linkedin.com/company/ayriesoft" target="_blank" rel="noreferrer" className="footer-social" aria-label="Ayrie LinkedIn">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

        <div className="footer-col">
          <h4 className="section-label footer-heading">Navigate</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="section-label footer-heading">Capabilities</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SERVICE_LINKS.map((service) => (
              <Link key={service.label} to={service.to} className="footer-link">
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="section-label footer-heading">Get In Touch</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {CONTACT_LINKS.map((item) => (
              <a key={item.label} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
            <p className="body-sm" style={{ opacity: 0.7, lineHeight: 1.6, marginTop: '8px' }}>
              NRI Layout, Ramamurthy Nagar
              <br />
              Bangalore - 560016
            </p>
          </div>
        </div>
      </div>

      <div
        className="section-container footer-bottom"
        style={{
          paddingTop: '28px',
          paddingBottom: 0,
          marginTop: '56px',
          borderTop: '1px solid var(--divider)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.45)'
        }}
      >
        <div>© {currentYear} Ayrie Software Solutions. All rights reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          Built by <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Ayrie</span>
        </div>
      </div>
    </footer>
  )
}
