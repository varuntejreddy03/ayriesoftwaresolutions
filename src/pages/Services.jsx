import { Link } from 'react-router-dom'
import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const SERVICES = [
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    icon: '⚡',
    title: 'Salesforce Consulting & Implementation',
    tagline: 'Strategy-first CRM transformation',
    desc: 'We don\'t just configure Salesforce — we architect it around your business. From discovery workshops to go-live, our certified consultants ensure every module drives measurable ROI.',
    features: ['CRM Audit & Roadmap Planning', 'Sales Cloud & Service Cloud Setup', 'CPQ & Revenue Cloud', 'User Training & Change Management', 'Post-launch Support & Optimization'],
    tags: ['Salesforce', 'CRM', 'CPQ'],
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80',
    icon: '🎯',
    title: 'Custom Salesforce Development',
    tagline: 'Beyond out-of-the-box capabilities',
    desc: 'When standard Salesforce isn\'t enough, we build exactly what you need. Our developers craft high-performance custom solutions using the full Salesforce platform stack.',
    features: ['Apex Classes, Triggers & Batch Jobs', 'Lightning Web Components (LWC)', 'Salesforce Flows & Process Builder', 'REST/SOAP API Integrations', 'AppExchange Package Development'],
    tags: ['Apex', 'LWC', 'API'],
  },
  {
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80',
    icon: '🛡️',
    title: 'AI-Powered Application Development',
    tagline: 'Intelligent apps for the modern enterprise',
    desc: 'We build production-ready AI applications that solve real business problems — from intelligent document processing to conversational AI and computer vision systems.',
    features: ['LLM Integration (GPT-4, Claude, Gemini)', 'RAG Pipelines & Vector Databases', 'Computer Vision & OCR Systems', 'NLP & Sentiment Analysis', 'AI Chatbots & Virtual Assistants'],
    tags: ['LLM', 'NLP', 'GenAI'],
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80',
    icon: '🚀',
    title: 'Software Product Development & Maintenance',
    tagline: 'From idea to scalable product',
    desc: 'Full-cycle product engineering with a focus on scalability, security, and speed. We take ownership of your product — from architecture decisions to CI/CD pipelines.',
    features: ['Product Architecture & Tech Stack Selection', 'Agile Development (2-week sprints)', 'Cloud-native Deployment (AWS/GCP/Azure)', 'CI/CD Pipeline Setup', 'Ongoing Maintenance & SLA Support'],
    tags: ['React', 'Node.js', 'AWS'],
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    icon: '💡',
    title: 'Data Engineering & Data Analytics',
    tagline: 'Turn raw data into business intelligence',
    desc: 'We design and build modern data infrastructure — from ingestion to visualization. Our data engineers ensure your data is clean, reliable, and ready for analysis at any scale.',
    features: ['ETL/ELT Pipeline Development', 'Data Warehouse Design (Snowflake, BigQuery)', 'Real-time Streaming (Kafka, Spark)', 'BI Dashboards (Tableau, Power BI)', 'Data Quality & Governance Frameworks'],
    tags: ['Snowflake', 'Spark', 'dbt'],
  },
  {
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&q=80',
    icon: '🤖',
    title: 'Machine Learning Model Development & Deployment',
    tagline: 'ML that works in production, not just notebooks',
    desc: 'We build, validate, and deploy ML models that deliver real business value. Our MLOps-first approach ensures models stay accurate, monitored, and maintainable over time.',
    features: ['Predictive & Classification Models', 'Time Series Forecasting', 'Recommendation Engines', 'MLOps & Model Monitoring (MLflow)', 'Model APIs & Microservice Deployment'],
    tags: ['Python', 'MLflow', 'TensorFlow'],
  },
  {
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80',
    icon: '📊',
    title: 'AI for Salesforce & Data Services',
    tagline: 'Smarter Salesforce with embedded intelligence',
    desc: 'Combine the power of Salesforce with AI/ML to automate decisions, predict outcomes, and surface insights directly inside your CRM — without switching tools.',
    features: ['Einstein AI & Salesforce AI Integration', 'Predictive Lead Scoring', 'Automated Case Classification', 'AI-driven Forecasting in Salesforce', 'Custom AI Models via Salesforce APIs'],
    tags: ['Einstein', 'Salesforce AI', 'ML'],
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your goals, pain points, and technical landscape in a focused 60-minute session.' },
  { step: '02', title: 'Solution Design', desc: 'Our architects propose a tailored solution with clear scope, timeline, and cost breakdown.' },
  { step: '03', title: 'Agile Delivery', desc: 'We build in 2-week sprints with regular demos, keeping you in the loop at every stage.' },
  { step: '04', title: 'Launch & Support', desc: 'We go live with you, handle post-launch issues, and provide ongoing SLA-backed support.' },
]

const TECH = [
  { category: 'Salesforce', items: ['Sales Cloud', 'Service Cloud', 'CPQ', 'LWC', 'Apex', 'Einstein AI'] },
  { category: 'AI & ML', items: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'MLflow'] },
  { category: 'Data', items: ['Snowflake', 'BigQuery', 'dbt', 'Apache Spark', 'Kafka', 'Airflow'] },
  { category: 'Cloud & Dev', items: ['AWS', 'GCP', 'Azure', 'React', 'Node.js', 'Docker'] },
]

const FAQS = [
  { q: 'How long does a typical Salesforce implementation take?', a: 'A standard Sales Cloud implementation takes 6–12 weeks depending on complexity. We provide a detailed timeline after the discovery call.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We have engagement models for early-stage startups and large enterprises. Our pricing scales with your needs.' },
  { q: 'Can you integrate Salesforce with our existing tools?', a: 'Yes — we specialize in integrating Salesforce with ERPs, marketing platforms, data warehouses, and custom internal systems via REST/SOAP APIs and middleware.' },
  { q: 'What does your post-launch support look like?', a: 'We offer tiered SLA support plans — from basic bug fixes to dedicated support engineers available during business hours.' },
  { q: 'How do you handle data security and compliance?', a: 'We follow Salesforce security best practices, implement field-level security, and can assist with GDPR/HIPAA compliance requirements.' },
]

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
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.45)' : 'rgba(249,115,22,0.1)'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 0 40px rgba(249,115,22,0.12)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,22,22,1) 0%, rgba(22,22,22,0.3) 50%, transparent 100%)' }} />
        {/* Icon badge */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(13,13,13,0.75)', backdropFilter: 'blur(8px)', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
          {s.icon}
        </div>
        {/* Tags */}
        <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '5px' }}>
          {s.tags.map(t => (
            <span key={t} style={{ padding: '3px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, background: 'rgba(249,115,22,0.2)', color: '#FBBF24', border: '1px solid rgba(249,115,22,0.3)', backdropFilter: 'blur(6px)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>{s.tagline}</p>
          <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#F5F5F5', lineHeight: 1.35 }}>{s.title}</h3>
        </div>
        <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#9CA3AF' }}>{s.desc}</p>

        {/* Feature list */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', margin: '4px 0' }}>
          {s.features.map((f, fi) => (
            <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#D1D5DB' }}>
              <span style={{ color: '#F97316', fontWeight: 700, marginTop: '1px', flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <Link to="/contact" style={{
          marginTop: 'auto', paddingTop: '12px',
          fontSize: '13px', fontWeight: 600, color: '#F97316',
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          borderTop: '1px solid rgba(249,115,22,0.1)',
          transition: 'gap 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.gap = '8px'}
          onMouseLeave={e => e.currentTarget.style.gap = '4px'}
        >
          Get a Quote →
        </Link>
      </div>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(249,115,22,0.1)', overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'none', border: 'none', cursor: 'pointer',
        padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
        textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '15px', color: '#F5F5F5' }}>{q}</span>
        <span style={{ color: '#F97316', fontSize: '20px', flexShrink: 0, transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#9CA3AF', paddingBottom: '20px' }}>{a}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const revealRef = useReveal()

  return (
    <main ref={revealRef}>

      {/* ── PAGE HERO ── */}
      <section style={{ padding: '80px 0 72px', background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(249,115,22,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="label animate-fade-up" style={{ marginBottom: '16px' }}>What We Offer</p>
          <h1 className="heading-1 animate-fade-up delay-1" style={{ marginBottom: '20px' }}>Our Services</h1>
          <p className="body-lg animate-fade-up delay-2" style={{ maxWidth: '560px', margin: '0 auto 32px' }}>
            Deep expertise across Salesforce, AI, Data & ML — delivered end-to-end with a team that takes full ownership.
          </p>
          <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Consultation →</Link>
            <a href="#process" className="btn btn-ghost btn-lg">See How We Work</a>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p className="label" style={{ marginBottom: '12px' }}>7 Core Services</p>
            <h2 className="heading-2">Everything under one roof</h2>
          </div>
          <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
            {SERVICES.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
          </div>
        </div>
        <style>{`@media(max-width:960px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:580px){.svc-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="section" style={{ background: '#111', borderTop: '1px solid rgba(249,115,22,0.08)', borderBottom: '1px solid rgba(249,115,22,0.08)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="label" style={{ marginBottom: '12px' }}>How We Work</p>
            <h2 className="heading-2">Our Delivery Process</h2>
            <p className="body-lg" style={{ maxWidth: '440px', margin: '16px auto 0' }}>A proven 4-step process that keeps projects on time, on budget, and on point.</p>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', position: 'relative' }}>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: '36px', left: '12.5%', right: '12.5%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), rgba(249,115,22,0.3), transparent)', pointerEvents: 'none' }} className="hide-mobile" />
            {PROCESS.map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center', padding: '8px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg,#F97316,#D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '18px', color: '#fff', boxShadow: '0 0 24px rgba(249,115,22,0.35)' }}>
                  {p.step}
                </div>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#F5F5F5', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#9CA3AF' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.process-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p className="label" style={{ marginBottom: '12px' }}>Technologies</p>
            <h2 className="heading-2">Our Tech Stack</h2>
            <p className="body-lg" style={{ maxWidth: '400px', margin: '16px auto 0' }}>We work with best-in-class tools across every layer of the stack.</p>
          </div>
          <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            {TECH.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 4) + 1}`} style={{ background: '#161616', border: '1px solid rgba(249,115,22,0.1)', borderRadius: '16px', padding: '24px' }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#F97316', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.category}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {t.items.map(item => (
                    <span key={item} style={{ padding: '5px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, background: 'rgba(255,255,255,0.05)', color: '#D1D5DB', border: '1px solid rgba(255,255,255,0.08)' }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.tech-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.tech-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── WHY AYRIE ── */}
      <section className="section" style={{ background: '#111', borderTop: '1px solid rgba(249,115,22,0.08)', borderBottom: '1px solid rgba(249,115,22,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
            <div className="reveal">
              <p className="label" style={{ marginBottom: '14px' }}>Why Ayrie</p>
              <h2 className="heading-2" style={{ marginBottom: '20px' }}>
                Not just a vendor —{' '}
                <span className="gradient-text">a technology partner</span>
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9CA3AF', marginBottom: '28px' }}>
                We embed ourselves in your team, understand your business deeply, and take full accountability for outcomes — not just deliverables.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { stat: '100+', label: 'Projects Delivered', sub: 'Across Salesforce, AI & Data' },
                  { stat: '5★',   label: 'Client Rating',      sub: 'Consistent across all engagements' },
                  { stat: '24h',  label: 'Response SLA',        sub: 'For all support requests' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 20px', background: '#161616', borderRadius: '12px', border: '1px solid rgba(249,115,22,0.1)' }}>
                    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '28px', color: '#F97316', minWidth: '64px' }}>{item.stat}</div>
                    <div>
                      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '15px', color: '#F5F5F5' }}>{item.label}</p>
                      <p style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Team working" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', aspectRatio: '4/3', border: '1px solid rgba(249,115,22,0.12)' }} />
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.why-ayrie{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="label" style={{ marginBottom: '12px' }}>FAQ</p>
            <h2 className="heading-2">Common Questions</h2>
          </div>
          <div className="reveal reveal-delay-1">
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="reveal" style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(217,119,6,0.08) 100%)',
            border: '1px solid rgba(249,115,22,0.25)',
            borderRadius: '24px', padding: '72px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p className="label" style={{ marginBottom: '16px' }}>Ready to Start?</p>
              <h2 className="heading-1" style={{ marginBottom: '16px' }}>
                Ready to transform your business?{' '}
                <span className="gradient-text">Let's talk.</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
                Book a free 60-minute consultation. No commitment, no sales pitch — just a focused conversation about your goals.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today →</Link>
                <a href="mailto:careers@ayriesoft.com" className="btn btn-ghost btn-lg">careers@ayriesoft.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
