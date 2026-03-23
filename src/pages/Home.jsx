import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'

const SERVICES = [
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', title: 'Salesforce Consulting & Implementation', desc: 'End-to-end Salesforce strategy, setup, and rollout tailored to your business processes.' },
  { img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80', title: 'AI-Powered Application Development', desc: 'Intelligent apps powered by LLMs, computer vision, and predictive models.' },
  { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', title: 'Data Engineering & Analytics', desc: 'Pipelines, warehouses, and dashboards that turn raw data into business insight.' },
  { img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80', title: 'Custom Salesforce Development', desc: 'Bespoke Apex, LWC, and Flow solutions that extend Salesforce beyond its defaults.' },
  { img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80', title: 'ML Model Development & Deployment', desc: 'Production-grade machine learning models built, trained, and deployed at scale.' },
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', title: 'Software Product Development', desc: 'Full-cycle product engineering — from architecture to deployment and maintenance.' },
  { img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80', title: 'AI for Salesforce & Data Services', desc: 'Embed AI/ML intelligence directly into your Salesforce ecosystem and data stack.' },
]

const STATS = [
  { n: '100+', l: 'Happy Clients' },
  { n: '5★',   l: 'Average Rating' },
  { n: '24h',  l: 'Response Time' },
  { n: '100%', l: 'Satisfaction' },
]

const TESTIMONIALS = [
  { quote: 'Absolutely outstanding service. They exceeded every expectation and delivered on time.', name: 'Sarah M.', role: 'Business Owner' },
  { quote: 'Professional, responsive, and genuinely cares about results. Highly recommended!',       name: 'James K.', role: 'Entrepreneur' },
  { quote: 'The best decision we made was working with this team. Quality is unmatched.',            name: 'Priya R.', role: 'CEO' },
]

function StatCounter({ target }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const num = parseInt(target.replace(/\D/g, ''))
    if (!num) return
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(num / 50)
        const timer = setInterval(() => {
          start += step
          if (start >= num) { setVal(num); clearInterval(timer) }
          else setVal(start)
        }, 30)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const suffix = target.replace(/[0-9]/g, '')
  const num = parseInt(target.replace(/\D/g, ''))
  return <span ref={ref}>{num ? val + suffix : target}</span>
}

// CSS-only floating particles
function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`reveal reveal-delay-${(i % 3) + 1}`}
      style={{
        borderRadius: '20px', overflow: 'hidden',
        background: '#161616',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.45)' : 'rgba(249,115,22,0.12)'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 0 36px rgba(249,115,22,0.14)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ height: '180px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img
          src={s.img}
          alt={s.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered
            ? 'linear-gradient(160deg, rgba(249,115,22,0.35) 0%, rgba(13,13,13,0.5) 100%)'
            : 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)',
          transition: 'background 0.3s ease',
        }} />
      </div>
      {/* Content */}
      <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#F5F5F5', lineHeight: 1.35 }}>{s.title}</h3>
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF', flex: 1 }}>{s.desc}</p>
        <Link to="/services" style={{
          fontSize: '13px', fontWeight: 600, color: '#F97316',
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          marginTop: '4px', transition: 'gap 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.gap = '8px'}
          onMouseLeave={e => e.currentTarget.style.gap = '4px'}
        >
          Learn more →
        </Link>
      </div>
    </div>
  )
}

// CSS-only floating particles
function Particles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    size: 2 + (i % 4),
    x: 5 + (i * 8.3) % 90,
    y: 10 + (i * 7.7) % 80,
    dur: 4 + (i % 5),
    delay: -(i * 0.7),
  }))
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${p.x}%`, top: `${p.y}%`,
          width: `${p.size}px`, height: `${p.size}px`,
          borderRadius: '50%',
          background: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#FBBF24' : 'rgba(249,115,22,0.3)',
          animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          opacity: 0.4 + (i % 3) * 0.2,
        }} />
      ))}
      {/* Geometric shapes */}
      <div style={{ position: 'absolute', top: '15%', right: '8%', width: '80px', height: '80px', border: '1px solid rgba(249,115,22,0.15)', borderRadius: '16px', transform: 'rotate(15deg)', animation: 'float 6s ease-in-out -2s infinite' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '6%', width: '50px', height: '50px', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '50%', animation: 'float 5s ease-in-out -1s infinite' }} />
      <div style={{ position: 'absolute', top: '40%', right: '15%', width: '30px', height: '30px', background: 'rgba(249,115,22,0.06)', borderRadius: '6px', transform: 'rotate(30deg)', animation: 'float 7s ease-in-out -3s infinite' }} />
    </div>
  )
}

export default function Home() {
  const revealRef = useReveal()

  return (
    <main ref={revealRef}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0D0D0D' }}>
        {/* Mesh gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(249,115,22,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 80% 80%, rgba(217,119,6,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <Particles />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px' }}>
          {/* Badge */}
          <div className="animate-fade-up" style={{ marginBottom: '28px' }}>
            <span className="badge animate-pulse-badge">✦ Trusted by 100+ Clients</span>
          </div>

          {/* H1 */}
          <h1 className="display animate-fade-up delay-1" style={{ marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>
            Building the Future with{' '}
            <span className="gradient-text">Salesforce, AI & Data</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg animate-fade-up delay-2" style={{ maxWidth: '560px', margin: '0 auto 40px', fontSize: '20px' }}>
            We transform enterprises with intelligent Salesforce solutions, AI-powered applications, and data-driven insights.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Started Today →</Link>
            <Link to="/services" className="btn btn-ghost btn-lg">View Our Services</Link>
          </div>

          {/* Trust bar */}
          <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Trusted & Reliable', 'Fast Delivery', 'Quality Guaranteed'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>
                <span style={{ color: '#F97316', fontWeight: 700 }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#161616', borderTop: '1px solid rgba(249,115,22,0.1)', borderBottom: '1px solid rgba(249,115,22,0.1)', padding: '48px 0' }}>
        <div className="container">
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '16px 24px',
                borderRight: i < 3 ? '1px solid rgba(249,115,22,0.12)' : 'none',
              }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, color: '#F97316', lineHeight: 1, marginBottom: '8px' }}>
                  <StatCounter target={s.n} />
                </div>
                <div style={{ fontSize: '14px', color: '#9CA3AF' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}.stats-grid>div{border-right:none!important;border-bottom:1px solid rgba(249,115,22,0.12);}}`}</style>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="label" style={{ marginBottom: '12px' }}>What We Do</p>
            <h2 className="heading-1" style={{ marginBottom: '16px' }}>Our Services</h2>
            <p className="body-lg" style={{ maxWidth: '480px', margin: '0 auto' }}>Everything you need, delivered with expertise and care.</p>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} s={s} i={i} />
            ))}
          </div>
          <style>{`@media(max-width:900px){.services-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:560px){.services-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: '#111', borderTop: '1px solid rgba(249,115,22,0.08)', borderBottom: '1px solid rgba(249,115,22,0.08)' }}>
        <div className="container">
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="reveal">
              <p className="label" style={{ marginBottom: '12px' }}>Why Choose Us</p>
              <h2 className="heading-1" style={{ marginBottom: '24px' }}>
                We deliver results,{' '}
                <span className="gradient-text">not just promises</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
                {[
                  { icon: '⚡', title: 'Fast & Efficient',  desc: 'We respect your time and deliver on schedule.' },
                  { icon: '🎯', title: 'Results Focused',   desc: 'Every decision is driven by your goals.' },
                  { icon: '💛', title: 'Always Available',  desc: 'Dedicated support whenever you need us.' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div className="icon-box" style={{ flexShrink: 0 }}>{f.icon}</div>
                    <div>
                      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, color: '#F5F5F5', marginBottom: '4px', fontSize: '16px' }}>{f.title}</p>
                      <p className="body-md">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2" style={{ position: 'relative', height: '380px' }}>
              {/* Trusted card */}
              <div className="card-glass" style={{ position: 'absolute', top: 0, left: 0, width: '88%', padding: '32px' }}>
                <div style={{ fontSize: '32px', marginBottom: '14px' }}>🏆</div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>Trusted by Clients</h3>
                <p className="body-md" style={{ marginBottom: '20px' }}>Join 100+ satisfied clients who chose Ayrie Software Solutions.</p>
                <div style={{ display: 'flex' }}>
                  {['🧑','👩','👨','🧑','👩'].map((e, i) => (
                    <div key={i} style={{ width: '34px', height: '34px', borderRadius: '50%', background: `hsl(${i * 40},50%,25%)`, border: '2px solid #161616', marginLeft: i > 0 ? '-8px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>{e}</div>
                  ))}
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#F97316', border: '2px solid #161616', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff' }}>+95</div>
                </div>
              </div>
              {/* Rating card */}
              <div className="card-glass" style={{ position: 'absolute', bottom: 0, right: 0, width: '52%', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '28px' }}>⭐</span>
                  <div>
                    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#F97316' }}>5.0</p>
                    <p style={{ fontSize: '12px', color: '#9CA3AF' }}>Average Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr!important;gap:40px!important}.why-grid>div:last-child{height:auto!important}}`}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="label" style={{ marginBottom: '12px', letterSpacing: '0.15em' }}>TESTIMONIALS</p>
            <h2 className="heading-1">What Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`card-glass reveal reveal-delay-${i + 1}`} style={{ padding: '32px' }}>
                <div style={{ color: '#F97316', fontSize: '18px', letterSpacing: '3px', marginBottom: '16px' }}>★★★★★</div>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#D1D5DB', fontStyle: 'italic', marginBottom: '24px' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, color: '#F97316', fontSize: '16px' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#F5F5F5' }}>{t.name}</p>
                    <p style={{ fontSize: '12px', color: '#9CA3AF' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
