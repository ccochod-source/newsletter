const stats = [
  { value: '12 000+', label: 'Abonnés actifs',     color: '#A78BFA' },
  { value: '98%',     label: "Taux d'ouverture",    color: '#34D399' },
  { value: '365',     label: 'Éditions par an',     color: '#FBBF24' },
  { value: '5 min',   label: 'Lecture quotidienne', color: '#F472B6' },
]

export default function Stats() {
  return (
    <section style={{ padding: '0 32px 80px' }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 18, overflow: 'hidden',
        background: 'rgba(255,255,255,0.02)',
      }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{
            padding: '44px 20px', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <div style={{
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900,
              color: s.color, letterSpacing: '-0.04em',
              lineHeight: 1, marginBottom: 10,
            }}>{s.value}</div>
            <div style={{ fontSize: 13, color: 'rgba(237,237,245,0.38)', fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
