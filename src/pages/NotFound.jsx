import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'clamp(80px, 15vw, 160px)', 
          fontWeight: 800, 
          lineHeight: 1, 
          color: 'var(--orange)',
          marginBottom: '16px' 
        }}>
          404
        </div>
        <h1 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'clamp(24px, 4vw, 40px)', 
          fontWeight: 700, 
          color: 'var(--text-primary)', 
          marginBottom: '16px' 
        }}>
          Page Not Found
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: 'var(--text-secondary)', 
          marginBottom: '40px', 
          maxWidth: '480px', 
          margin: '0 auto 40px' 
        }}>
          The architectural node you're looking for doesn't exist or has been relocated.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </main>
  )
}
