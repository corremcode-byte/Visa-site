'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', destination: '', travelDate: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*Contact Enquiry — Zeno Global*\n\nName: ${form.name}\nPhone: ${form.phone}` +
      (form.destination ? `\nDestination: ${form.destination}` : '') +
      (form.travelDate ? `\nTravel Date: ${form.travelDate}` : '') +
      (form.message ? `\nMessage: ${form.message}` : '')
    )
    window.open(`https://wa.me/918796925533?text=${msg}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 0' }}>
        <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ marginBottom: '10px', color: 'var(--g700)' }}>Message Sent!</h3>
        <p style={{ color: 'var(--txt-m)', fontSize: '15px' }}>
          We&apos;ve opened WhatsApp with your details. Our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="fg">
        <label htmlFor="c-name">Full Name *</label>
        <input type="text" id="c-name" name="name" className="finput"
          placeholder="Rahul Sharma" value={form.name} onChange={set} required />
      </div>
      <div className="fg">
        <label htmlFor="c-phone">Phone Number *</label>
        <input type="tel" id="c-phone" name="phone" className="finput"
          placeholder="+91 98765 43210" value={form.phone} onChange={set} required />
      </div>
      <div className="fg">
        <label htmlFor="c-dest">Destination Country</label>
        <input type="text" id="c-dest" name="destination" className="finput"
          placeholder="e.g. UK, Canada, Schengen" value={form.destination} onChange={set} />
      </div>
      <div className="fg">
        <label htmlFor="c-date">Travel Date</label>
        <input type="date" id="c-date" name="travelDate" className="finput"
          value={form.travelDate} onChange={set} />
      </div>
      <div className="fg">
        <label htmlFor="c-msg">Your Message</label>
        <textarea id="c-msg" name="message" className="finput"
          placeholder="Tell us briefly about your travel plan..."
          value={form.message} onChange={set}
          rows={4} style={{ resize: 'vertical' }}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
        💬 Send via WhatsApp
      </button>
      <p style={{ fontSize: '13px', color: 'var(--txt-m)', textAlign: 'center', marginTop: '12px' }}>
        Or call us directly: <a href="tel:01145040637" style={{ color: 'var(--g600)', fontWeight: 600 }}>011 4504 0637</a>
      </p>
    </form>
  )
}
