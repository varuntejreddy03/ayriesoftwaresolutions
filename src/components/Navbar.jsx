import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import client from '../client.json'

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
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
    transition: 'all 0.3s ease',
  }

  return (
    <>
      <nav style={navStyle}>
        <div className="container flex-between" style={{ height: '68px' }}>

          {/* Logo */}
          <NavLink to="/" style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            {client.hasLogo
              ? <img src={`/${client.logoFile}`} alt={client.businessName} style={{ height:'36px', width:'auto' }} />
              : <>
                  <span style={{ width:'34px', height:'34px', borderRadius:'9px', background:'var(--primary)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:'16px' }}>
                    {client.businessName.charAt(0)}
                  </span>
                  <span style={{ fontWeight:700, fontSize:'17px', color:'var(--text)', letterSpacing:'-0.02em' }}>
                    {client.businessName}
                  </span>
                </>
            }
          </NavLink>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display:'flex', alignItems:'center', gap:'4px' }}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} style={({ isActive }) => ({
                padding:'8px 14px', borderRadius:'8px', fontSize:'14px', fontWeight:500,
                color: isActive ? 'var(--primary)' : 'var(--text-2)',
                background: isActive ? 'var(--primary-light)' : 'transparent',
                transition:'all var(--transition)',
              })}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn btn-primary btn-sm" style={{ marginLeft:'12px' }}>
              Get in Touch
            </NavLink>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            style={{ display:'none', flexDirection:'column', gap:'5px', background:'none', border:'none', padding:'8px' }}
            className="show-mobile">
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:'block', width:'22px', height:'2px',
                background:'var(--text)', borderRadius:'2px', transition:'all 0.2s',
                transform: open
                  ? i===0 ? 'rotate(45deg) translate(5px,5px)'
                  : i===2 ? 'rotate(-45deg) translate(5px,-5px)'
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
          position:'fixed', top:'68px', left:0, right:0, bottom:0, zIndex:999,
          background:'rgba(255,255,255,0.97)', backdropFilter:'blur(20px)',
          padding:'24px', display:'flex', flexDirection:'column', gap:'8px',
          animation:'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                padding:'14px 16px', borderRadius:'10px', fontSize:'16px', fontWeight:500,
                color: isActive ? 'var(--primary)' : 'var(--text)',
                background: isActive ? 'var(--primary-light)' : 'transparent',
              })}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)}
            className="btn btn-primary" style={{ marginTop:'12px', justifyContent:'center' }}>
            Get in Touch
          </NavLink>
        </div>
      )}

      <div style={{ height:'68px' }} />

      <style>{`
        @media (max-width:768px) {
          .show-mobile { display:flex !important; }
          .hide-mobile { display:none !important; }
        }
      `}</style>
    </>
  )
}
