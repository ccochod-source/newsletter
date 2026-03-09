const reviews = [
  { quote:'Ma lecture du matin indispensable. En 5 minutes je suis au courant de tout ce qui compte dans la tech.', name:'Marie L.', role:'Product Manager @ Doctolib', avatar:'M', color:'#A78BFA' },
  { quote:'Enfin une newsletter tech en français qui va droit au but. Qualité éditoriale au niveau des meilleures US.', name:'Thomas R.', role:'Lead Dev @ Qonto', avatar:'T', color:'#34D399' },
  { quote:"J'ai découvert la levée de fonds de mon prochain partenaire grâce à TechPulse. Ce genre de signal vaut de l'or.", name:'Sophie M.', role:'Fondatrice @ Startup', avatar:'S', color:'#FBBF24' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: 999,
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
            color: '#C4B5FD', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24,
          }}>
            Témoignages
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900,
            color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            Ils nous lisent chaque matin
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(237,237,245,0.48)', lineHeight: 1.7, maxWidth: 420, margin: '0 auto' }}>
            Plus de 12&nbsp;000 professionnels font confiance à TechPulse.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {reviews.map(r => (
            <div key={r.name} style={{
              padding: '32px 28px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3 }}>
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={r.color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p style={{ fontSize: 15, color: 'rgba(237,237,245,0.6)', lineHeight: 1.7, flex: 1 }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  background: `${r.color}14`, color: r.color,
                  border: `1px solid ${r.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 14,
                }}>{r.avatar}</div>
                <div>
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: 14, lineHeight: 1.3 }}>{r.name}</p>
                  <p style={{ color: 'rgba(237,237,245,0.3)', fontSize: 12, marginTop: 2 }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
