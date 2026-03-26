import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1200,
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        transition: 'all 0.5s var(--ease)',
        height: scrolled ? '70px' : '90px',
        display: 'flex', alignItems: 'center'
      }}>
        <div style={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '100%', width: '100%',
          padding: '0 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1301, textDecoration: 'none', marginLeft: '-8px' }}>
            <img 
              src="/logo-removebg-preview.png" alt="Ayrie" 
              style={{ height: '44px', width: 'auto', display: 'block' }} 
            />
          </Link>

          <div className="hide-mobile" style={{ 
            display: 'flex', alignItems: 'center', gap: '32px',
            position: 'absolute', left: '50%', transform: 'translateX(-50%)'
          }}>
            {links.map((l) => (
              <NavLink 
                key={l.to} to={l.to} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={l.to === '/'} 
                style={{ fontSize: '13px', fontWeight: 600, color: '#fff', textDecoration: 'none', opacity: 0.8 }}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hide-mobile" style={{ minWidth: '160px', textAlign: 'right' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '12px' }}>
              Book a Call
            </Link>
          </div>

          <button 
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', color: '#fff', cursor: 'pointer',
              zIndex: 1301, padding: '12px', marginRight: '-12px'
            }}
          >
            <div style={{ width: '24px', height: '2px', background: 'currentColor', marginBottom: '6px', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }} />
            <div style={{ width: '24px', height: '2px', background: 'currentColor', transition: '0.3s', opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: '24px', height: '2px', background: 'currentColor', marginTop: '6px', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div style={{
        position: 'fixed', top: scrolled ? '70px' : '90px', left: 0, right: 0, bottom: 0,
        background: 'var(--bg)', zIndex: 1150,
        display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start',
        padding: '24px 20px',
        gap: '24px',
        transition: 'all 0.5s var(--ease)',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
        pointerEvents: menuOpen ? 'all' : 'none'
      }}>
        {links.map(l => (
          <NavLink 
            key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
            style={{ fontSize: '24px', fontWeight: 800, color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-display)' }}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: '20px', width: '100%' }}>
          Book a Call
        </Link>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
      `}} />
    </>
  )
}
