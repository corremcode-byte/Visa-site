'use client'
import { useState, useEffect } from 'react'

const INITIAL = { name: '', phone: '', destination: '', travelDate: '', message: '' }

export default function FloatingButtons() {
  const [panelOpen, setPanelOpen] = useState(false)
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const openPanel = () => { setPanelOpen(true); setSent(false); setError('') }
  const closePanel = () => setPanelOpen(false)

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = panelOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [panelOpen])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Name and phone number are required.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setSent(true); setForm(INITIAL) }
      else setError('Something went wrong. Please try again.')
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      {/* Modal overlay */}
      {panelOpen && (
        <div
          className="enq-overlay open"
          onClick={closePanel}
          role="dialog"
          aria-modal="true"
          aria-label="Quick enquiry form"
        >
          <div className="enq-modal" onClick={e => e.stopPropagation()}>
            <div className="cb-head">
              <div className="cb-head-txt">
                <h4>Quick Enquiry</h4>
                <p>We&apos;ll get back to you shortly</p>
              </div>
              <button className="cb-close" onClick={closePanel} aria-label="Close">✕</button>
            </div>
            <div className="cb-body">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '52px', marginBottom: '14px' }}>✅</div>
                  <p style={{ fontWeight: 700, color: 'var(--g700)', fontFamily: 'var(--font-poppins,"Poppins",sans-serif)', fontSize: 17, marginBottom: 8 }}>Enquiry Submitted!</p>
                  <p style={{ fontSize: 14, color: 'var(--txt-m)', marginBottom: 20 }}>Our team will reach out to you soon.</p>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={closePanel}>Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="fg">
                    <label htmlFor="eq-name">Full Name *</label>
                    <input type="text" id="eq-name" name="name" className="finput"
                      placeholder="Rahul Sharma" value={form.name} onChange={set} required />
                  </div>
                  <div className="fg">
                    <label htmlFor="eq-phone">Phone Number *</label>
                    <input type="tel" id="eq-phone" name="phone" className="finput"
                      placeholder="+91 98765 43210" value={form.phone} onChange={set} required />
                  </div>
                  <div className="fg">
                    <label htmlFor="eq-dest">Destination Country</label>
                    <input type="text" id="eq-dest" name="destination" className="finput"
                      placeholder="e.g. UK, Canada, Schengen" value={form.destination} onChange={set} />
                  </div>
                  <div className="fg">
                    <label htmlFor="eq-date">Travel Date</label>
                    <input type="date" id="eq-date" name="travelDate" className="finput"
                      value={form.travelDate} onChange={set} />
                  </div>
                  <div className="fg">
                    <label htmlFor="eq-msg">Your Message</label>
                    <textarea id="eq-msg" name="message" className="finput"
                      placeholder="Tell us briefly about your travel plan..."
                      value={form.message} onChange={set}
                      rows={3} style={{ resize: 'vertical' }} />
                  </div>
                  {error && <p style={{ fontSize: 13, color: '#DC2626', marginBottom: 10 }}>{error}</p>}
                  <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {loading ? 'Submitting…' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating buttons */}
      <div className="float-wrap" role="complementary" aria-label="Quick contact options">

        {/* Call */}
        <a
          href="tel:01145040637"
          className="float-btn"
          style={{ background: '#fff' }}
          aria-label="Call us at 011 4504 0637"
        >
          <span className="fb-tip">Call Us</span>
          <svg viewBox="0 0 24 24" width="24" height="24" style={{ fill: '#111' }}
 aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918796925533?text=Hello%2C%20I%20need%20help%20with%20my%20visa%20application."
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn"
          style={{ background: '#fff' }}
          aria-label="Chat on WhatsApp"
        >
          <span className="fb-tip">WhatsApp</span>
          <svg viewBox="0 0 24 24" width="24" height="24" style={{ fill: '#111' }}
 aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Enquiry form toggle */}
        <button
          className="float-btn"
          style={{ background: '#fff' }}
          aria-label="Open quick enquiry form"
          aria-expanded={panelOpen}
          onClick={() => (panelOpen ? closePanel() : openPanel())}
        >
          <span className="fb-tip">{panelOpen ? 'Close' : 'Quick Enquiry'}</span>
          {panelOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" style={{ fill: '#111' }}
 aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" style={{ fill: '#111' }}
 aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}
