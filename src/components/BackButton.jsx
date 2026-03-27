import { useNavigate, useLocation } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()

  // Don't show on home page
  if (location.pathname === '/') return null

  return (
    <button 
      onClick={() => navigate('/')}
      className="btn-back"
      aria-label="Back to home"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Home</span>
      <style dangerouslySetInnerHTML={{ __html: `
        .btn-back {
          position: absolute;
          top: 130px;
          left: 40px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 0.8;
        }
        .btn-back:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-4px);
          border-color: var(--orange);
          color: var(--orange);
        }
        @media (max-width: 1024px) {
          .btn-back {
            top: 110px;
            left: 24px;
            padding: 6px 14px 6px 10px;
          }
        }
        @media (max-width: 768px) {
          .btn-back {
            top: 105px;
            left: 20px;
            padding: 5px 12px 5px 8px;
            font-size: 12px;
            backdrop-filter: none;
            background: rgba(255,255,255,0.08);
          }
        }
      `}} />
    </button>
  )
}
