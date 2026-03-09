const topics = [
  '⚡ Intelligence Artificielle','🚀 Levées de fonds','🔬 Deep Tech',
  '🤖 LLMs','📱 Nouveaux produits','🌍 Tech & Société',
  '💡 Startups EU','🔐 Cybersécurité','🧬 Biotech','🛸 Space Tech',
  '⚙️ Open Source','📊 Data & Analytics',
]

export default function Marquee() {
  const all = [...topics, ...topics]
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(255,255,255,0.01)',
      padding: '16px 0', overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ position:'absolute',left:0,top:0,bottom:0,width:80,background:'linear-gradient(to right,#0D0D1A,transparent)',zIndex:1,pointerEvents:'none' }} />
      <div style={{ position:'absolute',right:0,top:0,bottom:0,width:80,background:'linear-gradient(to left,#0D0D1A,transparent)',zIndex:1,pointerEvents:'none' }} />
      <div className="marquee">
        {all.map((t, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0 24px', fontSize: 13, fontWeight: 500,
            color: 'rgba(237,237,245,0.32)', whiteSpace: 'nowrap',
          }}>
            {t}
            <span style={{ color: 'rgba(167,139,250,0.35)', fontSize: 9 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
