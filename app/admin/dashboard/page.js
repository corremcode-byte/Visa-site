'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

function classifyLead(travelDate) {
  if (!travelDate) return 'cold'
  const days = Math.floor((new Date(travelDate) - new Date()) / 86400000)
  if (days <= 30) return 'hot'
  if (days <= 90) return 'warm'
  return 'cold'
}

function daysUntil(travelDate) {
  if (!travelDate) return null
  return Math.floor((new Date(travelDate) - new Date()) / 86400000)
}

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatTime(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const LEAD_LABELS = { hot: '🔴 Hot', warm: '🟡 Warm', cold: '🔵 Cold' }
const LEAD_CSS = { hot: 'badge-hot', warm: 'badge-warm', cold: 'badge-cold' }

export default function AdminDashboard() {
  const router = useRouter()
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const fetchEnquiries = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/enquiry', {
        headers: { 'x-admin-key': 'zeno-admin-key' },
      })
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setEnquiries(data)
    } catch {
      setError('Failed to load enquiries. Please refresh.')
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('zeno_admin_auth') !== 'true') {
      router.replace('/admin')
      return
    }
    fetchEnquiries()
  }, [router, fetchEnquiries])

  const handleLogout = () => {
    sessionStorage.removeItem('zeno_admin_auth')
    router.push('/')
  }

  const today = new Date().toDateString()
  const todayCount = enquiries.filter(e => new Date(e.submittedAt).toDateString() === today).length
  const hotCount = enquiries.filter(e => classifyLead(e.travelDate) === 'hot').length
  const warmCount = enquiries.filter(e => classifyLead(e.travelDate) === 'warm').length

  const filtered = enquiries.filter(e => {
    const lead = classifyLead(e.travelDate)
    if (filter !== 'all' && lead !== filter) return false
    if (search) {
      const q = search.toLowerCase()
      return (
        e.name?.toLowerCase().includes(q) ||
        e.phone?.toLowerCase().includes(q) ||
        e.destination?.toLowerCase().includes(q)
      )
    }
    return true
  })

  return (
    <div className="admin-layout">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-header-brand">
            <div className="logo-mark" style={{ width: 38, height: 38, fontSize: 18, borderRadius: 10 }}>✈</div>
            <div>
              <div style={{ fontFamily: 'var(--font-poppins,"Poppins",sans-serif)', fontWeight: 700, fontSize: 16, color: '#fff' }}>Zeno Global</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 1 }}>Admin Dashboard</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} onClick={fetchEnquiries}>
              ↻ Refresh
            </button>
            <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="admin-body">
        {/* Stats */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-n">{enquiries.length}</div>
            <div className="admin-stat-lbl">Total Enquiries</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-n">{todayCount}</div>
            <div className="admin-stat-lbl">Today</div>
          </div>
          <div className="admin-stat-card hot">
            <div className="admin-stat-n">{hotCount}</div>
            <div className="admin-stat-lbl">🔴 Hot Leads</div>
          </div>
          <div className="admin-stat-card warm">
            <div className="admin-stat-n">{warmCount}</div>
            <div className="admin-stat-lbl">🟡 Warm Leads</div>
          </div>
        </div>

        {/* Filters + Search */}
        <div className="admin-toolbar">
          <div className="admin-filters">
            {['all', 'hot', 'warm', 'cold'].map(f => (
              <button
                key={f}
                className={`admin-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : LEAD_LABELS[f]}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="finput admin-search"
            placeholder="Search by name, phone, destination…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="admin-empty">Loading enquiries…</div>
        ) : error ? (
          <div className="admin-empty" style={{ color: '#DC2626' }}>{error}</div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty">
            {enquiries.length === 0 ? 'No enquiries yet. Submissions will appear here.' : 'No enquiries match your filter.'}
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Destination</th>
                  <th>Travel Date</th>
                  <th>Days Left</th>
                  <th>Lead</th>
                  <th>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e, i) => {
                  const lead = classifyLead(e.travelDate)
                  const days = daysUntil(e.travelDate)
                  return (
                    <tr key={e.id} className={`admin-row ${lead}`}>
                      <td className="admin-td-num">{filtered.length - i}</td>
                      <td className="admin-td-name">{e.name}</td>
                      <td>
                        <a href={`tel:${e.phone}`} className="admin-phone">{e.phone}</a>
                      </td>
                      <td>{e.destination || <span style={{ color: 'var(--txt-m)' }}>—</span>}</td>
                      <td>{formatDate(e.travelDate)}</td>
                      <td>
                        {days !== null ? (
                          <span className={days <= 0 ? 'admin-days-past' : days <= 30 ? 'admin-days-hot' : ''}>
                            {days <= 0 ? 'Passed' : `${days}d`}
                          </span>
                        ) : <span style={{ color: 'var(--txt-m)' }}>—</span>}
                      </td>
                      <td><span className={`lead-badge ${lead}`}>{LEAD_LABELS[lead]}</span></td>
                      <td className="admin-td-time">{formatTime(e.submittedAt)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
