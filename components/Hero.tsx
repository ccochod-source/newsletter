import LeadForm from './LeadForm'

export default function Hero() {
  const partners = ['Google', 'Mistral', 'Doctolib', 'BlaBlaCar', 'Qonto', 'Ledger']
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      padding: '120px 32px 140px',
      textAlign: 'center',
    }}>
      {/* Glow de fond */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 18px', borderRadius: 999,
          background: 'rgba(124,58,237,0.12)',
          border: '1px solid rgba(124,58,237,0.3)',
          marginBottom: 40,
        }}>
          <span className="dot-live" style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#4ADE80', display: 'inline-block',
          }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#C4B5FD', letterSpacing: '0.04em' }}>
            Nouvelle édition chaque matin à 7h00
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.6rem, 6vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: '#fff',
          marginBottom: 28,
        }}>
          La newsletter tech<br />
          <span style={{
            background: 'linear-gradient(90deg, #C4B5FD 0%, #A78BFA 50%, #7C3AED 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', display: 'inline-block',
          }}>
            qui vous garde en avance.
          </span>
        </h1>

        {/* Sous-titre */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: 'rgba(237,237,245,0.52)',
          lineHeight: 1.75,
          maxWidth: 520, margin: '0 auto',
          marginBottom: 52,
        }}>
          Chaque matin en 5 minutes : IA, startups, produits, science.
          Tout ce qui compte dans la tech — condensé, clair, actionnable.
        </p>

        {/* Formulaire */}
        <div id="subscribe" style={{ marginBottom: 56 }}>
          <LeadForm />
        </div>

        {/* Social proof */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 40 }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(237,237,245,0.22)',
            marginBottom: 20,
          }}>
            Lu par des professionnels chez
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 28px' }}>
            {partners.map(p => (
              <span key={p} style={{ color: 'rgba(237,237,245,0.2)', fontWeight: 600, fontSize: 14 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
