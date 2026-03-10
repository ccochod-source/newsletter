import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import SampleEdition from '@/components/SampleEdition'
import Testimonials from '@/components/Testimonials'
import SuggestSite from '@/components/SuggestSite'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0D0D1A' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <SampleEdition />
      <Testimonials />
      <SuggestSite />

      {/* CTA Final */}
      <section style={{
        padding: '120px 32px',
        position: 'relative', overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: 999,
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
            color: '#C4B5FD', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 28,
          }}>
            Rejoindre TechPulse
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900,
            color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1,
            marginBottom: 18,
          }}>
            Commencez demain matin à 7h00
          </h2>

          <p style={{
            fontSize: 17, color: 'rgba(237,237,245,0.48)', lineHeight: 1.7,
            maxWidth: 380, margin: '0 auto', marginBottom: 48,
          }}>
            Gratuit pour toujours. 12&nbsp;000 professionnels déjà abonnés.
          </p>

          <LeadForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
