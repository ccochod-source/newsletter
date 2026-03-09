export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '36px 32px' }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>TechPulse</span>
        </div>
        <p style={{ color: 'rgba(237,237,245,0.2)', fontSize: 13 }}>© 2026 TechPulse. Tous droits réservés.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Confidentialité', 'Se désinscrire', 'Contact'].map(l => (
            <a key={l} href="#" style={{ color: 'rgba(237,237,245,0.25)', fontSize: 13 }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
