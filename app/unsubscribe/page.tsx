'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function UnsubscribePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Une erreur est survenue.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Connexion impossible. Réessaie plus tard.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0D0D1A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>

      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 56, textDecoration: 'none' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
          </svg>
        </div>
        <span style={{ fontWeight: 700, color: '#fff', fontSize: 17 }}>TechPulse</span>
      </Link>

      <div style={{ width: '100%', maxWidth: 460 }}>

        {status === 'success' ? (
          <div style={{
            padding: '40px 36px', borderRadius: 20, textAlign: 'center',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%', margin: '0 auto 20px',
              background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#34D399" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 20, marginBottom: 10 }}>Désinscription confirmée</h2>
            <p style={{ color: 'rgba(237,237,245,0.45)', fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>
              Tu ne recevras plus d'emails de TechPulse. Tu peux te réinscrire à tout moment.
            </p>
            <Link href="/" style={{
              display: 'inline-block', padding: '12px 24px', borderRadius: 10,
              background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: 14,
              textDecoration: 'none',
            }}>
              Retour à l'accueil
            </Link>
          </div>
        ) : (
          <div style={{
            padding: '40px 36px', borderRadius: 20,
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 24, marginBottom: 10, letterSpacing: '-0.02em' }}>
              Se désinscrire
            </h1>
            <p style={{ color: 'rgba(237,237,245,0.45)', fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>
              Entre ton adresse email pour ne plus recevoir la newsletter TechPulse.
            </p>

            <form onSubmit={submit}>
              <label style={{ display: 'block', color: 'rgba(237,237,245,0.6)', fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                Adresse email
              </label>
              <input
                type="email" required placeholder="ton@email.com"
                value={email} onChange={e => setEmail(e.target.value)}
                style={{
                  width: '100%', padding: '13px 16px', borderRadius: 10, fontSize: 15,
                  color: '#fff', outline: 'none', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'border-color .2s',
                  marginBottom: 16,
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              />

              {status === 'error' && (
                <p style={{ fontSize: 13, color: '#F87171', marginBottom: 14 }}>{errorMsg}</p>
              )}

              <button
                type="submit" disabled={status === 'loading'}
                style={{
                  width: '100%', padding: '13px', borderRadius: 10, fontSize: 15,
                  fontWeight: 700, color: '#fff', border: 'none', cursor: 'pointer',
                  background: status === 'loading' ? '#374151' : 'rgba(239,68,68,0.15)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  color: status === 'loading' ? 'rgba(237,237,245,0.4)' : '#F87171',
                  transition: 'background .2s',
                }}
              >
                {status === 'loading' ? 'Désinscription…' : 'Confirmer la désinscription'}
              </button>
            </form>

            <p style={{ marginTop: 20, fontSize: 12, color: 'rgba(237,237,245,0.2)', textAlign: 'center' }}>
              <Link href="/" style={{ color: 'rgba(124,58,237,0.7)', textDecoration: 'none' }}>
                ← Retour à l'accueil
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
