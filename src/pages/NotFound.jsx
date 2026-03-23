import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ textAlign:'center', paddingTop:'120px', paddingBottom:'120px' }}>
      <div style={{ fontSize:'80px', marginBottom:'16px' }}>404</div>
      <h1 className="heading-2" style={{ marginBottom:'12px' }}>Page not found</h1>
      <p className="body-lg" style={{ marginBottom:'32px' }}>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary btn-lg">← Back to Home</Link>
    </section>
  )
}
