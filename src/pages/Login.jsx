import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { user, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  if (user) return <Navigate to="/dashboard" replace />

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    if (isSignUp) {
      const { error } = await signUpWithEmail(email, password, name)
      if (error) setError(error.message)
      else setMessage('Account created! You can now sign in.')
    } else {
      const { error } = await signInWithEmail(email, password)
      if (error) setError('Invalid email or password.')
    }
    setLoading(false)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>🏀</div>
        <h1 style={styles.title}>Round By Round</h1>
        <h2 style={styles.subtitle}>Madness</h2>
        <p style={styles.tagline}>{isSignUp ? 'Create your account' : 'Sign in to play'}</p>

        <button onClick={signInWithGoogle} style={styles.googleBtn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            width="20" alt="Google" style={{ marginRight: 10 }} />
          Continue with Google
        </button>

        <div style={styles.divider}><span style={styles.dividerText}>or</span></div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignUp && (
            <input
              style={styles.input}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          )}
          <input
            style={styles.input}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          {message && <p style={styles.success}>{message}</p>}
          <button type="submit" style={styles.submitBtn} disabled={loading}>
            {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <p style={styles.toggle}>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <span style={styles.link} onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage('') }}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
    padding: '20px'
  },
  card: {
    background: '#1e293b', borderRadius: '16px', padding: '40px',
    width: '100%', maxWidth: '400px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
    textAlign: 'center'
  },
  logo: { fontSize: '48px', marginBottom: '8px' },
  title: { color: '#f0a500', margin: '0', fontSize: '28px', fontWeight: '800' },
  subtitle: { color: '#ffffff', margin: '0 0 8px', fontSize: '22px', fontWeight: '600' },
  tagline: { color: '#94a3b8', margin: '0 0 24px', fontSize: '14px' },
  googleBtn: {
    width: '100%', padding: '12px', background: '#ffffff', color: '#333',
    border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '20px'
  },
  divider: {
    display: 'flex', alignItems: 'center', margin: '0 0 20px',
    '::before': { content: '""', flex: 1, borderBottom: '1px solid #334155' }
  },
  dividerText: { color: '#64748b', padding: '0 10px', fontSize: '13px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: {
    padding: '12px 16px', background: '#0f172a', border: '1px solid #334155',
    borderRadius: '8px', color: '#fff', fontSize: '15px', outline: 'none'
  },
  submitBtn: {
    padding: '13px', background: '#f0a500', color: '#0f172a', border: 'none',
    borderRadius: '8px', fontSize: '16px', fontWeight: '700', cursor: 'pointer',
    marginTop: '4px'
  },
  error: { color: '#f87171', fontSize: '13px', margin: '0' },
  success: { color: '#4ade80', fontSize: '13px', margin: '0' },
  toggle: { color: '#94a3b8', marginTop: '20px', fontSize: '14px' },
  link: { color: '#f0a500', cursor: 'pointer', fontWeight: '600' }
}