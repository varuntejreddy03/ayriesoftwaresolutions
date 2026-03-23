import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0D0D0D' }}>
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(80px,15vw,160px)', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg,#F97316,#D97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '16px' }}>
          404
        </div>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#F5F5F5', marginBottom: '12px' }}>Page Not Found</h1>
        <p style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '32px', maxWidth: '360px', margin: '0 auto 32px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">← Back to Home</Link>
      </div>
    </main>
  )
}
