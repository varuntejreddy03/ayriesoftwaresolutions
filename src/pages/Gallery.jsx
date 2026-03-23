import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const FILTERS = ['All', 'Salesforce', 'AI/ML', 'Data', 'Software']

const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    label: 'Salesforce Solutions',
    tags: ['Salesforce'],
  },
  {
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    label: 'AI Development',
    tags: ['AI/ML'],
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    label: 'Data Analytics',
    tags: ['Data'],
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    label: 'Software Engineering',
    tags: ['Software'],
  },
  {
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    label: 'Machine Learning',
    tags: ['AI/ML', 'Data'],
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    label: 'Team Collaboration',
    tags: ['Software', 'Salesforce'],
  },
]

function GalleryCard({ p, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        aspectRatio: '4/3',
        background: '#161616',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.45)' : 'rgba(249,115,22,0.1)'}`,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 0 30px rgba(249,115,22,0.15)' : 'none',
      }}
    >
      {/* Image */}
      <img
        src={p.img}
        alt={p.label}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          display: 'block',
        }}
      />

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(249,115,22,0.55) 0%, rgba(13,13,13,0.88) 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '12px',
        padding: '24px',
      }}>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', textAlign: 'center' }}>{p.label}</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {p.tags.map(t => (
            <span key={t} style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, background: 'rgba(249,115,22,0.25)', color: '#FBBF24', border: '1px solid rgba(249,115,22,0.4)' }}>{t}</span>
          ))}
        </div>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginTop: '4px', opacity: 0.85 }}>View Project →</span>
      </div>

      {/* Always-visible bottom label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '20px 18px 16px',
        background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 100%)',
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#F5F5F5', marginBottom: '5px' }}>{p.label}</p>
        <div style={{ display: 'flex', gap: '5px' }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize: '11px', color: '#F97316', fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const revealRef = useReveal()

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter))

  return (
    <main ref={revealRef}>

      {/* ── PAGE HERO ── */}
      <section style={{ padding: '80px 0 72px', background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="label animate-fade-up" style={{ marginBottom: '16px' }}>OUR WORK</p>
          <h1 className="heading-1 animate-fade-up delay-1" style={{ marginBottom: '16px' }}>Gallery</h1>
          <p className="body-lg animate-fade-up delay-2" style={{ maxWidth: '440px', margin: '0 auto' }}>
            A showcase of our solutions and expertise.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section style={{ padding: '40px 0 0', background: '#0D0D0D' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  padding: '9px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  border: `1px solid ${activeFilter === f ? '#F97316' : 'rgba(249,115,22,0.2)'}`,
                  background: activeFilter === f ? 'rgba(249,115,22,0.12)' : 'transparent',
                  color: activeFilter === f ? '#F97316' : '#9CA3AF',
                  cursor: 'pointer', transition: 'all 0.25s',
                  borderBottom: activeFilter === f ? '2px solid #F97316' : '1px solid rgba(249,115,22,0.2)',
                }}
                onMouseEnter={e => { if (activeFilter !== f) e.currentTarget.style.color = '#F5F5F5' }}
                onMouseLeave={e => { if (activeFilter !== f) e.currentTarget.style.color = '#9CA3AF' }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className="reveal" style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>🚀</div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '28px', fontWeight: 700, color: '#F5F5F5', marginBottom: '10px' }}>Coming Soon</h2>
              <p className="body-lg">Projects in this category are on their way.</p>
            </div>
          ) : (
            <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
              {filtered.map((p, i) => (
                <div key={`${activeFilter}-${i}`} className={`reveal reveal-delay-${(i % 3) + 1}`}
                  style={{ animation: 'fadeIn 0.4s ease both', animationDelay: `${i * 0.07}s` }}>
                  <GalleryCard p={p} i={i} />
                </div>
              ))}
            </div>
          )}
        </div>
        <style>{`
          @media(max-width:900px){ .gallery-grid{ grid-template-columns:repeat(2,1fr)!important; } }
          @media(max-width:560px){ .gallery-grid{ grid-template-columns:1fr!important; } }
        `}</style>
      </section>

    </main>
  )
}
