'use client'
import { useState } from 'react'

export default function LeadForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) { setStatus('success'); setEmail('') }
      else { setStatus('error'); setErrorMsg(data.error || 'Une erreur est survenue.') }
    } catch {
      setStatus('error')
      setErrorMsg('Connexion impossible. Réessaie plus tard.')
    }
  }

  if (status === 'success') return (
    <div style={{
      maxWidth: 500, margin: '0 auto', padding: '28px 32px', textAlign: 'center',
      background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%', margin: '0 auto 16px',
        background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#34D399" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <p style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 8 }}>Tu es dans la liste !</p>
      <p style={{ color: 'rgba(237,237,245,0.45)', fontSize: 14 }}>Première édition demain matin à 7h00.</p>
    </div>
  )

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <form onSubmit={submit} style={{ display: 'flex', gap: 10 }}>
        <input
          type="email" required placeholder="ton@email.com"
          value={email} onChange={e => setEmail(e.target.value)}
          style={{
            flex: 1, padding: '14px 18px', borderRadius: 12, fontSize: 15,
            color: '#fff', outline: 'none',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            transition: 'border-color .2s',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
        />
        <button
          type="submit" disabled={status === 'loading'}
          style={{
            padding: '14px 26px', borderRadius: 12, fontSize: 15,
            fontWeight: 700, color: '#fff', whiteSpace: 'nowrap',
            background: status === 'loading' ? '#5B21B6' : '#7C3AED',
            border: 'none', cursor: 'pointer',
            transition: 'background .2s, transform .2s',
            boxShadow: '0 4px 20px rgba(124,58,237,0.35)',
          }}
        >
          {status === 'loading' ? 'Inscription…' : 'Rejoindre gratuitement →'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ marginTop: 10, fontSize: 13, color: '#F87171', textAlign: 'center' }}>{errorMsg}</p>
      )}
      <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(237,237,245,0.22)', textAlign: 'center', letterSpacing: '0.02em' }}>
        Gratuit · Pas de spam · Désinscription en 1 clic
      </p>
    </div>
  )
}
