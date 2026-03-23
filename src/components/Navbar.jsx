import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(249,115,22,0.2)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div className="container flex-between" style={{ height: '70px' }}>

          {/* Logo */}
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo-removebg-preview.png" alt="Ayrie Software Solutions" style={{ height: '48px', width: 'auto', display: 'block', objectFit: 'contain' }} />
          </NavLink>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} style={({ isActive }) => ({
                padding: '8px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: 500,
                color: isActive ? '#F97316' : '#9CA3AF',
                borderBottom: isActive ? '2px solid #F97316' : '2px solid transparent',
                transition: 'all 0.3s ease',
              })}
              onMouseEnter={e => { if (!e.currentTarget.style.borderBottomColor.includes('249')) e.currentTarget.style.color = '#F5F5F5' }}
              onMouseLeave={e => { if (!e.currentTarget.style.borderBottomColor.includes('249')) e.currentTarget.style.color = '#9CA3AF' }}
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" style={{
              marginLeft: '16px', padding: '12px 28px',
              fontSize: '15px', fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              color: '#fff',
              background: 'linear-gradient(135deg, #F97316, #D97706)',
              borderRadius: '9999px',
              display: 'inline-flex', alignItems: 'center',
              transition: 'all 300ms ease',
              boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
              border: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(249,115,22,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(249,115,22,0.3)' }}
            >
              Get in Touch
            </NavLink>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="show-mobile"
            style={{ background: 'none', border: 'none', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: '#F5F5F5', borderRadius: '2px', transition: 'all 0.25s',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, bottom: 0, zIndex: 999,
          background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(20px)',
          padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px',
          animation: 'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                padding: '14px 16px', borderRadius: '10px', fontSize: '16px', fontWeight: 500,
                color: isActive ? '#F97316' : '#F5F5F5',
                background: isActive ? 'rgba(249,115,22,0.1)' : 'transparent',
                borderLeft: isActive ? '3px solid #F97316' : '3px solid transparent',
              })}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)}
            className="btn btn-primary" style={{ marginTop: '16px', justifyContent: 'center' }}>
            Get in Touch
          </NavLink>
        </div>
      )}

      <div style={{ height: '70px' }} />
    </>
  )
}
