import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { profile, signOut, isAdmin } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🏀</span>
          <div>
            <div style={styles.logoTitle}>Round By Round</div>
            <div style={styles.logoSub}>Madness</div>
          </div>
        </div>
        <div style={styles.headerRight}>
          {isAdmin && (
            <button style={styles.adminBtn} onClick={() => navigate('/admin')}>
              ⚙️ Admin
            </button>
          )}
          <button style={styles.signOutBtn} onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.welcome}>
          <h1 style={styles.welcomeTitle}>
            Welcome, {profile?.name?.split(' ')[0] || 'Player'}! 👋
          </h1>
          <p style={styles.welcomeText}>
            The tournament hasn't started yet. Check back soon for picks!
          </p>
        </div>

        <div style={styles.cards}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🗳️</div>
            <div style={styles.cardTitle}>My Picks</div>
            <div style={styles.cardText}>No active rounds yet</div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🏆</div>
            <div style={styles.cardTitle}>Leaderboard</div>
            <div style={styles.cardText}>Season not started</div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>💰</div>
            <div style={styles.cardTitle}>Entry Fee</div>
            <div style={styles.cardText}>$10.00</div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>⭐</div>
            <div style={styles.cardTitle}>Champion Pick</div>
            <div style={styles.cardText}>Not set yet</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', background: '#0f172a', color: '#fff' },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '16px 24px', background: '#1e293b',
    borderBottom: '1px solid #334155'
  },
  logo: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoIcon: { fontSize: '28px' },
  logoTitle: { color: '#f0a500', fontWeight: '800', fontSize: '16px', lineHeight: 1.2 },
  logoSub: { color: '#fff', fontWeight: '600', fontSize: '14px' },
  headerRight: { display: 'flex', gap: '10px', alignItems: 'center' },
  adminBtn: {
    padding: '8px 14px', background: '#7c3aed', color: '#fff',
    border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'
  },
  signOutBtn: {
    padding: '8px 14px', background: '#334155', color: '#fff',
    border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'
  },
  content: { padding: '32px 24px', maxWidth: '900px', margin: '0 auto' },
  welcome: { marginBottom: '32px' },
  welcomeTitle: { color: '#f0a500', fontSize: '28px', margin: '0 0 8px' },
  welcomeText: { color: '#94a3b8', fontSize: '16px', margin: 0 },
  cards: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px'
  },
  card: {
    background: '#1e293b', borderRadius: '12px', padding: '24px',
    textAlign: 'center', border: '1px solid #334155'
  },
  cardIcon: { fontSize: '32px', marginBottom: '12px' },
  cardTitle: { color: '#f0a500', fontWeight: '700', fontSize: '15px', marginBottom: '6px' },
  cardText: { color: '#94a3b8', fontSize: '13px' }
}