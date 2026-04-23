'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ADMIN_USER = 'zeno@123'
const ADMIN_PASS = '123456'

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('zeno_admin_auth') === 'true') {
      router.replace('/admin/dashboard')
    }
  }, [router])

  const handleLogin = e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      if (username === ADMIN_USER && password === ADMIN_PASS) {
        sessionStorage.setItem('zeno_admin_auth', 'true')
        router.push('/admin/dashboard')
      } else {
        setError('Invalid username or password.')
        setLoading(false)
      }
    }, 400)
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <div className="logo-mark" style={{ width: 52, height: 52, fontSize: 24, borderRadius: 14 }}>✈</div>
          <div>
            <div className="logo-name" style={{ fontSize: 20, color: 'var(--g900)' }}>Zeno Global</div>
            <div className="logo-sub" style={{ fontSize: 11 }}>Admin Panel</div>
          </div>
        </div>
        <h1 className="admin-login-heading">Sign in to Dashboard</h1>
        <p className="admin-login-sub">Employee access only</p>
        <form onSubmit={handleLogin} noValidate>
          <div className="fg">
            <label htmlFor="admin-user">Username</label>
            <input
              type="text" id="admin-user" className="finput"
              placeholder="zeno@123"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required autoComplete="username"
            />
          </div>
          <div className="fg">
            <label htmlFor="admin-pass">Password</label>
            <input
              type="password" id="admin-pass" className="finput"
              placeholder="••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required autoComplete="current-password"
            />
          </div>
          {error && <p className="admin-login-error">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
