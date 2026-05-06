import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', height: '100vh',
        background: '#0f172a', color: '#f0a500',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  return children
}

export function AdminRoute({ children }) {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', height: '100vh',
        background: '#0f172a', color: '#f0a500',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />
  if (profile?.role !== 'admin') return <Navigate to="/dashboard" replace />

  return children
}