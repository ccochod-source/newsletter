"use client"
const features = [
  { icon: '⚡', title: '5 minutes chrono',    desc: 'Les news tech les plus importantes, condensées pour toi chaque matin.' },
  { icon: '🤖', title: 'IA & Deep Tech',      desc: 'GPT, Gemini, Mistral… Suivi des modèles qui changent le monde.' },
  { icon: '🚀', title: 'Startups & Levées',   desc: "Les deals et acquisitions avant qu'ils fassent la une." },
  { icon: '🔬', title: 'Science & Recherche', desc: 'Des travaux complexes traduits en insights actionnables.' },
  { icon: '📱', title: 'Produits & Outils',   desc: 'Les apps, APIs et frameworks à tester cette semaine.' },
  { icon: '🌍', title: 'Tech & Société',      desc: 'Réglementation, éthique, impact — la tech dans le monde réel.' },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header de section */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: 999,
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
            color: '#C4B5FD', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24,
          }}>
            Au programme
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900,
            color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1,
            marginBottom: 18,
          }}>
            Six rubriques, zéro bruit
          </h2>

          <p style={{
            fontSize: 17, color: 'rgba(237,237,245,0.48)', lineHeight: 1.7,
            maxWidth: 460, margin: '0 auto',
          }}>
            Chaque édition couvre l&apos;essentiel de l&apos;actualité tech mondiale.
          </p>
        </div>

        {/* Grille */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              padding: '32px 28px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              transition: 'border-color .3s, transform .3s, box-shadow .3s',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(124,58,237,0.35)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 40px rgba(124,58,237,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 18, lineHeight: 1 }}>{f.icon}</div>
              <h3 style={{
                fontSize: 16, fontWeight: 700, color: '#fff',
                marginBottom: 12, letterSpacing: '-0.015em',
              }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(237,237,245,0.45)', lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
