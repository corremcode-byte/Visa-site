'use client'
import { useState } from 'react'

function classifyLead(dateStr) {
  if (!dateStr) return 'cold'
  const days = Math.floor((new Date(dateStr) - new Date()) / 86400000)
  if (days <= 30) return 'hot'
  if (days <= 90) return 'warm'
  return 'cold'
}

const LEAD_LABELS = {
  hot:  '🔴 Hot Lead — Travel within 30 days',
  warm: '🟡 Warm Lead — Travel in 1–3 months',
  cold: '🔵 Planning Ahead — 3+ months away',
}
const LEAD_MSGS = {
  hot:  'Our team will contact you immediately!',
  warm: "We'll be in touch with you shortly.",
  cold: "We'll help you plan your application well in advance.",
}

export default function EligibilityForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [lead, setLead] = useState('cold')
  const [data, setData] = useState({
    destination: '', purpose: '', date: '',
    passport: '', name: '', phone: '', contact: '',
  })

  const set = (key, val) => setData(d => ({ ...d, [key]: val }))

  const handleSubmit = () => {
    const type = classifyLead(data.date)
    setLead(type)
    setSubmitted(true)
    const dateStr = data.date
      ? new Date(data.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'Not specified'
    const msg = encodeURIComponent(
      `*New Visa Enquiry — Zeno Global*\n\nName: ${data.name}\nPhone: ${data.phone}\nDestination: ${data.destination}\nPurpose: ${data.purpose}\nTravel Date: ${dateStr}\nPassport: ${data.passport}\nPreferred Contact: ${data.contact}\n\n*Lead Type: ${LEAD_LABELS[type]}*`
    )
    setTimeout(() => window.open(`https://wa.me/918796925533?text=${msg}`, '_blank'), 800)
  }

  return (
    <div className="glass-card form-card">
      {/* Progress */}
      <div className="form-progress" aria-label="Form progress">
        {[1, 2, 3].map((n, i) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', flex: i < 2 ? '1' : 'none' }}>
            <div className={`s-dot ${step === n ? 'active' : step > n ? 'done' : ''}`}>{n}</div>
            {i < 2 && <div className={`s-line ${step > n ? 'done' : ''}`} />}
          </div>
        ))}
      </div>

      {submitted ? (
        /* Result */
        <div style={{ textAlign: 'center', padding: '8px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '14px' }}>🎉</div>
          <h3 style={{ fontFamily: 'var(--font-poppins,"Poppins",sans-serif)', color: 'var(--g700)', marginBottom: '10px' }}>
            You&apos;re All Set!
          </h3>
          <span className={`lead-badge ${lead}`}>{LEAD_LABELS[lead]}</span>
          <p style={{ fontSize: '15px', color: 'var(--txt-m)', margin: '0 0 10px' }}>{LEAD_MSGS[lead]}</p>
          <p style={{ fontSize: '13px', color: 'var(--txt-m)', marginBottom: '20px' }}>
            Opening WhatsApp with your details so we can reach you quickly.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            View Contact Details
          </a>
        </div>
      ) : (
        <>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <p className="form-step-hdr">Where are you headed? ✈️</p>
              <div className="fg">
                <label htmlFor="elig-dest">Destination Country *</label>
                <input
                  type="text" id="elig-dest" className="finput"
                  placeholder="e.g. UK, Canada, Australia"
                  value={data.destination}
                  onChange={e => set('destination', e.target.value)}
                  required
                />
              </div>
              <div className="fg">
                <label htmlFor="elig-purpose">Purpose of Travel *</label>
                <select
                  id="elig-purpose" className="fselect"
                  value={data.purpose}
                  onChange={e => set('purpose', e.target.value)}
                  required
                >
                  <option value="" disabled>Select purpose</option>
                  <option value="Tourist">Tourist / Holiday</option>
                  <option value="Business">Business / Corporate</option>
                  <option value="Study">Study / Education</option>
                  <option value="Work">Work / Employment</option>
                  <option value="Medical">Medical Treatment</option>
                  <option value="Religious">Religious / Pilgrimage</option>
                  <option value="Transit">Transit</option>
                  <option value="Family / Dependent">Family / Dependent</option>
                </select>
              </div>
              <div className="form-nav">
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setStep(2)}>
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <p className="form-step-hdr">When are you travelling? 📅</p>
              <div className="fg">
                <label htmlFor="elig-date">Planned Travel Date *</label>
                <input
                  type="date" id="elig-date" className="finput"
                  value={data.date}
                  onChange={e => set('date', e.target.value)}
                  required
                />
              </div>
              <div className="fg">
                <label>Do you have a valid passport?</label>
                <div className="radio-row">
                  {[['yes', '✅ Yes, I do'], ['no', '❌ Not yet']].map(([val, label]) => (
                    <div key={val} className="r-opt">
                      <input type="radio" id={`pass-${val}`} name="passport" value={val}
                        checked={data.passport === val} onChange={() => set('passport', val)} />
                      <label htmlFor={`pass-${val}`} className="r-lbl">{label}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-nav">
                <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={() => setStep(3)}>Next Step →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <p className="form-step-hdr">Almost there! 🙌</p>
              <div className="fg">
                <label htmlFor="elig-name">Your Full Name *</label>
                <input
                  type="text" id="elig-name" className="finput"
                  placeholder="Rahul Sharma"
                  value={data.name}
                  onChange={e => set('name', e.target.value)}
                  required
                />
              </div>
              <div className="fg">
                <label htmlFor="elig-phone">Phone Number *</label>
                <input
                  type="tel" id="elig-phone" className="finput"
                  placeholder="+91 98765 43210"
                  value={data.phone}
                  onChange={e => set('phone', e.target.value)}
                  required
                />
              </div>
              <div className="fg">
                <label>How would you like us to contact you?</label>
                <div className="radio-row">
                  {[['call', '📞 Call'], ['whatsapp', '💬 WhatsApp']].map(([val, label]) => (
                    <div key={val} className="r-opt">
                      <input type="radio" id={`contact-${val}`} name="contact"
                        value={val} checked={data.contact === val} onChange={() => set('contact', val)} />
                      <label htmlFor={`contact-${val}`} className="r-lbl">{label}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-nav">
                <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(2)}>← Back</button>
                <button className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={handleSubmit}>
                  Check Eligibility ✓
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
