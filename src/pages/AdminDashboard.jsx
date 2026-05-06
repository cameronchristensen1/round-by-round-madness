import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const { profile, signOut } = useAuth()
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
            <div style={styles.logoSub}>Madness — Admin</div>
          </div>
        </div>
        <div style={styles.headerRight}>
          <button style={styles.backBtn} onClick={() => navigate('/dashboard')}>
            ← Back
          </button>
          <button style={styles.signOutBtn} onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.pageTitle}>⚙️ Admin Panel</h1>
        <p style={styles.pageSubtitle}>Welcome, {profile?.name}. Manage your contest below.</p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>📅</div>
            <div style={styles.cardTitle}>Seasons</div>
            <div style={styles.cardText}>Create & manage yearly contests</div>
            <button style={styles.cardBtn}>Coming Soon</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🗳️</div>
            <div style={styles.cardTitle}>Rounds</div>
            <div style={styles.cardText}>Open, close & score rounds</div>
            <button style={styles.cardBtn}>Coming Soon</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>👥</div>
            <div style={styles.cardTitle}>Contestants</div>
            <div style={styles.cardText}>Manage users & payment status</div>
            <button style={styles.cardBtn}>Coming Soon</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🏆</div>
            <div style={styles.cardTitle}>Leaderboard</div>
            <div style={styles.cardText}>View standings & prizes</div>
            <button style={styles.cardBtn}>Coming Soon</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>🔔</div>
            <div style={styles.cardTitle}>Notifications</div>
            <div style={styles.cardText}>Send alerts to all contestants</div>
            <button style={styles.cardBtn}>Coming Soon</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>💰</div>
            <div style={styles.cardTitle}>Payments</div>
            <div style={styles.cardText}>Track entry fees & prizes</div>
            <button style={styles.cardBtn}>Coming Soon</button>
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
    borderBottom: '2px solid #7c3aed'
  },
  logo: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoIcon: { fontSize: '28px' },
  logoTitle: { color: '#f0a500', fontWeight: '800', fontSize: '16px', lineHeight: 1.2 },
  logoSub: { color: '#a78bfa', fontWeight: '600', fontSize: '14px' },
  headerRight: { display: 'flex', gap: '10px', alignItems: 'center' },
  backBtn: {
    padding: '8px 14px', background: '#334155', color: '#fff',
    border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'
  },
  signOutBtn: {
    padding: '8px 14px', background: '#334155', color: '#fff',
    border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'
  },
  content: { padding: '32px 24px', maxWidth: '960px', margin: '0 auto' },
  pageTitle: { color: '#a78bfa', fontSize: '28px', margin: '0 0 8px' },
  pageSubtitle: { color: '#94a3b8', margin: '0 0 32px' },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px'
  },
  card: {
    background: '#1e293b', borderRadius: '12px', padding: '24px',
    textAlign: 'center', border: '1px solid #334155'
  },
  cardIcon: { fontSize: '32px', marginBottom: '12px' },
  cardTitle: { color: '#f0a500', fontWeight: '700', fontSize: '15px', marginBottom: '6px' },
  cardText: { color: '#94a3b8', fontSize: '13px', marginBottom: '16px' },
  cardBtn: {
    padding: '8px 16px', background: '#334155', color: '#94a3b8',
    border: 'none', borderRadius: '6px', cursor: 'not-allowed', fontSize: '13px'
  }
}