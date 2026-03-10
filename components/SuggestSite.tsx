'use client'
import { useState } from 'react'

const sources = [
  { label: 'TechCrunch', color: '#22C55E' },
  { label: 'Hacker News', color: '#F97316' },
  { label: 'MIT Tech Review', color: '#3B82F6' },
  { label: 'The Verge', color: '#A855F7' },
  { label: 'Wired', color: '#EAB308' },
  { label: 'ArXiv', color: '#EC4899' },
]

export default function SuggestSite() {
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, description }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setUrl('')
        setDescription('')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Une erreur est survenue.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Connexion impossible. Réessaie plus tard.')
    }
  }

  const reset = () => setStatus('idle')

  return (
    <section style={{
      padding: '100px 32px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '30%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999, marginBottom: 20,
            background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <span style={{ color: '#93C5FD', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Sources communautaires
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900,
            color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 14,
          }}>
            Tu connais une source incontournable ?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(237,237,245,0.45)', lineHeight: 1.7 }}>
            Partage les sites web que tu lis chaque semaine. On les analysera pour enrichir TechPulse avec les meilleures sources tech.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'start' }}>

          {/* Form */}
          <div style={{
            padding: '32px', borderRadius: 20,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%', margin: '0 auto 16px',
                  background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#60A5FA" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Suggestion reçue !</p>
                <p style={{ color: 'rgba(237,237,245,0.4)', fontSize: 13, marginBottom: 24 }}>
                  Merci, on va regarder ça de près.
                </p>
                <button onClick={reset} style={{
                  padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)',
                  color: '#93C5FD', cursor: 'pointer',
                }}>
                  Suggérer une autre source
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(237,237,245,0.55)', fontSize: 12, fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    URL du site *
                  </label>
                  <input
                    type="url" required placeholder="https://example.com"
                    value={url} onChange={e => setUrl(e.target.value)}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: 14,
                      color: '#fff', outline: 'none', boxSizing: 'border-box',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      transition: 'border-color .2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(237,237,245,0.55)', fontSize: 12, fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Pourquoi cette source ? <span style={{ color: 'rgba(237,237,245,0.25)', fontWeight: 400 }}>(optionnel)</span>
                  </label>
                  <textarea
                    placeholder="Un site sur l'IA, les startups, les nouvelles techno..."
                    value={description} onChange={e => setDescription(e.target.value)}
                    rows={3}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: 14,
                      color: '#fff', outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      transition: 'border-color .2s', fontFamily: 'inherit',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: 13, color: '#F87171', margin: 0 }}>{errorMsg}</p>
                )}

                <button
                  type="submit" disabled={status === 'loading'}
                  style={{
                    padding: '13px', borderRadius: 10, fontSize: 14, fontWeight: 700,
                    color: '#fff', border: 'none', cursor: 'pointer',
                    background: status === 'loading' ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)',
                    border: '1px solid rgba(59,130,246,0.35)',
                    color: status === 'loading' ? 'rgba(147,197,253,0.5)' : '#93C5FD',
                    transition: 'background .2s',
                  }}
                >
                  {status === 'loading' ? 'Envoi…' : 'Envoyer la suggestion →'}
                </button>
              </form>
            )}
          </div>

          {/* Sources already used */}
          <div>
            <p style={{ color: 'rgba(237,237,245,0.3)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              Sources déjà intégrées
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {sources.map(({ label, color }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 14px', borderRadius: 999,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                  <span style={{ color: 'rgba(237,237,245,0.6)', fontSize: 13 }}>{label}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 32, padding: '20px 24px', borderRadius: 14,
              background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.12)',
            }}>
              <p style={{ color: 'rgba(237,237,245,0.5)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                Chaque suggestion est examinée manuellement. Si le site est retenu, il sera mentionné dans la prochaine édition.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
