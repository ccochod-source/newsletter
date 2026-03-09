export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(13,13,26,0.88)',
      backdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto', padding: '0 32px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.025em' }}>TechPulse</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <a href="#features" style={{ color: 'rgba(237,237,245,0.5)', fontSize: 14, fontWeight: 500 }}>Rubriques</a>
          <a href="#sample" style={{ color: 'rgba(237,237,245,0.5)', fontSize: 14, fontWeight: 500 }}>Exemple</a>
          <a href="#testimonials" style={{ color: 'rgba(237,237,245,0.5)', fontSize: 14, fontWeight: 500 }}>Avis</a>
          <a href="#subscribe" style={{
            background: '#7C3AED', color: '#fff', fontWeight: 700,
            fontSize: 14, padding: '10px 22px', borderRadius: 10,
          }}>
            S&apos;inscrire gratuitement
          </a>
        </div>
      </div>
    </nav>
  )
}
