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
  const [filters, setFilters] = useState([])
  const [newCol, setNewCol] = useState('name')
  const [newVal, setNewVal] = useState('')

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

  const COLS = [
    { key: 'name',        label: 'Name' },
    { key: 'phone',       label: 'Phone' },
    { key: 'destination', label: 'Destination' },
    { key: 'travelDate',  label: 'Travel Date' },
    { key: 'lead',        label: 'Lead Type (hot/warm/cold)' },
  ]

  const addFilter = () => {
    if (!newVal.trim()) return
    setFilters(prev => [...prev, { col: newCol, val: newVal.trim() }])
    setNewVal('')
  }

  const removeFilter = idx => setFilters(prev => prev.filter((_, i) => i !== idx))

  const filtered = enquiries.filter(e => {
    const lead = classifyLead(e.travelDate)
    return filters.every(f => {
      if (f.col === 'lead') return lead === f.val.toLowerCase()
      return (e[f.col] || '').toLowerCase().includes(f.val.toLowerCase())
    })
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

        {/* Filters */}
        <div className="admin-toolbar">
          <div className="admin-filter-builder">
            <select
              className="admin-col-select"
              value={newCol}
              onChange={e => setNewCol(e.target.value)}
            >
              {COLS.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
            <input
              type="text"
              className="finput admin-filter-input"
              placeholder="Enter value…"
              value={newVal}
              onChange={e => setNewVal(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addFilter()}
            />
            <button className="btn btn-primary btn-sm" onClick={addFilter}>+ Add Filter</button>
            {filters.length > 0 && (
              <button className="btn btn-sm admin-clear-btn" onClick={() => setFilters([])}>Clear All</button>
            )}
          </div>
          {filters.length > 0 && (
            <div className="admin-filter-chips">
              {filters.map((f, i) => (
                <div key={i} className="admin-filter-chip">
                  <span>{COLS.find(c => c.key === f.col)?.label}: <strong>{f.val}</strong></span>
                  <button onClick={() => removeFilter(i)} aria-label="Remove filter">✕</button>
                </div>
              ))}
            </div>
          )}
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
                      <td className="admin-td-name" data-label="Name">{e.name}</td>
                      <td data-label="Phone">
                        <a href={`tel:${e.phone}`} className="admin-phone">{e.phone}</a>
                      </td>
                      <td data-label="Destination">{e.destination || <span style={{ color: 'var(--txt-m)' }}>—</span>}</td>
                      <td data-label="Travel Date">{formatDate(e.travelDate)}</td>
                      <td data-label="Days Left">
                        {days !== null ? (
                          <span className={days <= 0 ? 'admin-days-past' : days <= 30 ? 'admin-days-hot' : ''}>
                            {days <= 0 ? 'Passed' : `${days}d`}
                          </span>
                        ) : <span style={{ color: 'var(--txt-m)' }}>—</span>}
                      </td>
                      <td data-label="Lead"><span className={`lead-badge ${lead}`}>{LEAD_LABELS[lead]}</span></td>
                      <td className="admin-td-time" data-label="Submitted">{formatTime(e.submittedAt)}</td>
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
