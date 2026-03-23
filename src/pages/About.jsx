import useReveal from '../hooks/useReveal'

export default function About() {
  const revealRef = useReveal()

  return (
    <main ref={revealRef}>

      {/* ── PAGE HERO ── */}
      <section style={{ padding: '80px 0 72px', background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="label animate-fade-up" style={{ marginBottom: '16px' }}>Our Story</p>
          <h1 className="heading-1 animate-fade-up delay-1" style={{ marginBottom: '16px' }}>
            Who We <span style={{ position: 'relative', display: 'inline-block' }}>
              Are
              <span style={{ position: 'absolute', bottom: '-6px', left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#F97316,#D97706)', borderRadius: '2px' }} />
            </span>
          </h1>
          <p className="body-lg animate-fade-up delay-2" style={{ maxWidth: '560px', margin: '24px auto 0' }}>
            Ayrie Software Solutions is a premium Salesforce, AI, Data & ML company based in Bangalore — helping enterprises build smarter, faster, and more intelligently.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container">
          <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
            <div className="reveal">
              <p className="label" style={{ marginBottom: '16px' }}>Our Mission</p>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, lineHeight: 1.1, color: '#F5F5F5', marginBottom: '0' }}>
                "Empowering businesses through{' '}
                <span className="gradient-text">intelligent technology</span>{' '}
                that scales."
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: '#D1D5DB', marginBottom: '20px' }}>
                Ayrie Software Solutions provides Salesforce, AI, Data, and Machine Learning based software solutions and custom development services.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9CA3AF' }}>
                We help businesses streamline their operations, build intelligent applications, and unlock insights from their data through modern, scalable technology. From day one, our focus has been simple: understand what our clients truly need and deliver it with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section" style={{ background: '#111', borderTop: '1px solid rgba(249,115,22,0.08)', borderBottom: '1px solid rgba(249,115,22,0.08)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="label" style={{ marginBottom: '12px' }}>Why Choose Us</p>
            <h2 className="heading-1">
              We deliver results,{' '}
              <span className="gradient-text">not just promises</span>
            </h2>
          </div>

          <div className="about-why" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            {/* Feature rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { icon: '⚡', title: 'Fast & Efficient',  desc: 'We respect your time and deliver on schedule. No delays, no excuses — just results.' },
                { icon: '🎯', title: 'Results Focused',   desc: 'Every decision is driven by your goals. We measure success by your outcomes, not our effort.' },
                { icon: '💛', title: 'Always Available',  desc: 'Dedicated support whenever you need us. Our team is reachable and responsive.' },
              ].map((f, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '24px', background: '#161616', borderRadius: '16px', border: '1px solid rgba(249,115,22,0.1)', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.1)'}
                >
                  <div className="icon-box" style={{ flexShrink: 0, fontSize: '22px' }}>{f.icon}</div>
                  <div>
                    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, color: '#F5F5F5', marginBottom: '6px', fontSize: '17px' }}>{f.title}</p>
                    <p className="body-md">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted card */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card-glass" style={{ padding: '32px' }}>
                <p className="label" style={{ marginBottom: '16px' }}>Trusted by Clients</p>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  {['🧑','👩','👨','🧑','👩'].map((e, i) => (
                    <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: `hsl(${i * 40},40%,20%)`, border: '2px solid #161616', marginLeft: i > 0 ? '-10px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{e}</div>
                  ))}
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F97316', border: '2px solid #161616', marginLeft: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff' }}>+95</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', background: 'rgba(249,115,22,0.08)', borderRadius: '10px', border: '1px solid rgba(249,115,22,0.15)' }}>
                  <span style={{ fontSize: '22px' }}>⭐</span>
                  <div>
                    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '20px', color: '#F97316' }}>5.0 ★ Average Rating</p>
                    <p style={{ fontSize: '12px', color: '#9CA3AF' }}>Based on client feedback</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-glass" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '22px', color: '#F97316' }}>🕐</span>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#F5F5F5' }}>Business Hours</p>
                </div>
                {[
                  { label: 'Monday – Friday', value: '9:00 AM – 7:00 PM', active: true },
                  { label: 'Saturday',         value: 'Holiday',           active: false },
                  { label: 'Sunday',           value: 'Holiday',           active: false },
                ].map((h, i, arr) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span style={{ fontSize: '14px', color: '#D1D5DB' }}>{h.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: h.active ? '#F97316' : '#6B7280', background: h.active ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.04)', padding: '3px 10px', borderRadius: '999px' }}>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.mission-grid,.about-why{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
      </section>

    </main>
  )
}
