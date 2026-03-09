const articles = [
  { tag:'IA', color:'#A78BFA', num:1,
    title:'OpenAI lève 40 Md$ et change de stratégie',
    excerpt:"Sam Altman officialise le pivot for-profit. Ce que ça change pour les devs et les entreprises qui utilisent l'API.",
    read:'3 min' },
  { tag:'Startups', color:'#34D399', num:2,
    title:'Mistral AI dépasse 1 Md$ de valorisation',
    excerpt:"La pépite française finalise sa série B. On décrypte leur modèle open-weight et pourquoi les géants s'y intéressent.",
    read:'2 min' },
  { tag:'Produits', color:'#FBBF24', num:3,
    title:'5 outils IA qui changent votre façon de travailler',
    excerpt:'De Cursor à Perplexity en passant par Notion AI — notre sélection des outils testés ce mois-ci.',
    read:'4 min' },
]

export default function SampleEdition() {
  return (
    <section id="sample" style={{ padding: '96px 32px', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: 999,
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
            color: '#C4B5FD', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24,
          }}>
            Exemple d&apos;édition
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900,
            color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
          }}>
            À quoi ça ressemble ?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(237,237,245,0.48)', lineHeight: 1.7 }}>
            Un aperçu réel de ce qui arrive dans ta boîte mail chaque matin.
          </p>
        </div>

        {/* Email card */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, overflow: 'hidden',
        }}>
          {/* Chrome */}
          <div style={{
            padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />)}
            </div>
            <p style={{ flex: 1, textAlign: 'center', fontSize: 12, color: 'rgba(237,237,245,0.2)' }}>
              TechPulse · Édition #342 · Lundi 9 mars 2026
            </p>
          </div>

          {/* Content */}
          <div style={{ padding: '36px 40px' }}>
            {/* Sender */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                background: 'linear-gradient(135deg,#7C3AED,#4F46E5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
                </svg>
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: 14, lineHeight: 1.3 }}>TechPulse</p>
                <p style={{ color: 'rgba(237,237,245,0.3)', fontSize: 12 }}>newsletter@techpulse.fr</p>
              </div>
            </div>

            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Bonjour 👋</h3>
            <p style={{ color: 'rgba(237,237,245,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
              C&apos;est lundi. Voici vos 3 actualités tech de la semaine. Bonne lecture — 5 minutes suffisent.
            </p>

            <div>
              {articles.map((a, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 16,
                  paddingBottom: i < articles.length-1 ? 24 : 0,
                  marginBottom: i < articles.length-1 ? 24 : 0,
                  borderBottom: i < articles.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                    background: `${a.color}18`, color: a.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, marginTop: 1,
                  }}>{a.num}</div>
                  <div>
                    <span style={{
                      display: 'inline-block', fontSize: 11, fontWeight: 700,
                      padding: '2px 10px', borderRadius: 999, marginBottom: 8,
                      background: `${a.color}15`, color: a.color,
                    }}>{a.tag}</span>
                    <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 6, lineHeight: 1.4 }}>{a.title}</h4>
                    <p style={{ color: 'rgba(237,237,245,0.42)', fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>{a.excerpt}</p>
                    <span style={{ color: 'rgba(237,237,245,0.22)', fontSize: 12 }}>Lecture : {a.read}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <p style={{ fontSize: 12, color: 'rgba(237,237,245,0.2)' }}>
                Tu reçois cet email car tu es abonné(e) à TechPulse ·{' '}
                <span style={{ color: '#A78BFA', cursor: 'pointer' }}>Se désinscrire</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
