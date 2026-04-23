import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Zeno Global │ Visa Consultants in Delhi — Call or WhatsApp',
  description: 'Contact Zeno Global visa consultants in New Delhi. Call 011 4504 0637, WhatsApp 8796925533, or visit us at Pusa Road. We respond quickly — reach out today.',
}

const afterCallSteps = [
  { n: '01', title: 'We Listen First', desc: 'You tell us your destination, purpose, and travel timeline. No forms, no pressure — just a conversation.' },
  { n: '02', title: 'We Assess Your Case', desc: 'Based on your profile, we tell you which visa applies, what documents you need, and what to expect.' },
  { n: '03', title: 'You Get a Clear Plan', desc: "We walk you through next steps — whether that's starting your application, gathering documents, or waiting for the right time." },
]

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="page-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Contact</span>
          </nav>
          <h1 id="page-hero-heading">Get in Touch</h1>
          <p>We&apos;re here to help — call, WhatsApp, or visit us in Delhi.</p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="section section-white" aria-labelledby="contact-info-heading">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Reach Us</div>
            <h2 id="contact-info-heading">Multiple Ways to Connect</h2>
            <p>
              Pick the channel that works best for you. We respond quickly — most WhatsApp messages
              get a reply within minutes during business hours.
            </p>
          </div>
          <div className="contact-info-row">
            {[
              { ico: '📞', label: 'Call Us', value: '011 4504 0637', sub: 'Mon–Sat, 10am–7pm', href: 'tel:01145040637', cta: 'Call Now' },
              { ico: '💬', label: 'WhatsApp', value: '+91 87969 25533', sub: 'Available 7 days a week', href: 'https://wa.me/918796925533?text=Hello%2C%20I%20need%20visa%20help.', cta: 'Open WhatsApp' },
              { ico: '📍', label: 'Visit Our Office', value: '11/5B, First Floor, Pusa Road', sub: 'New Delhi – 110005', href: null, cta: null },
              { ico: '📧', label: 'Email Us', value: 'info@zenoglobal.in', sub: 'We reply within 24 hours', href: 'mailto:info@zenoglobal.in', cta: 'Send Email' },
            ].map(({ ico, label, value, sub, href, cta }) => (
              <div key={label} className="contact-card fade-up">
                <div className="c-icon">{ico}</div>
                <div className="c-info">
                  <h4>{label}</h4>
                  <p>{value}</p>
                  <span>{sub}</span>
                  {cta && href && (
                    <a href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener' : undefined}
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: '12px', display: 'inline-flex' }}>
                      {cta} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + AFTER CALL */}
      <section className="section section-light" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-box fade-up">
              <div className="badge" style={{ marginBottom: '14px' }}>Quick Enquiry</div>
              <h3 id="contact-form-heading" style={{ marginBottom: '6px' }}>Send Us a Message</h3>
              <p className="sub-txt">
                Fill in your details and we&apos;ll open WhatsApp with your message pre-filled — fast and easy.
              </p>
              <ContactForm />
            </div>

            {/* After call */}
            <div className="fade-up">
              <div className="badge" style={{ marginBottom: '14px' }}>What Happens Next</div>
              <h3 style={{ marginBottom: '10px' }}>What Happens After You Reach Out?</h3>
              <p style={{ fontSize: '15px', color: 'var(--txt-m)', marginBottom: '24px' }}>
                Whether you call, WhatsApp, or fill the form — here&apos;s exactly what to expect.
              </p>
              <div className="after-call">
                <div className="mini-steps">
                  {afterCallSteps.map(({ n, title, desc }) => (
                    <div key={n} className="mini-step">
                      <div className="ms-num">{n}</div>
                      <p className="ms-txt"><strong>{title}</strong><br />{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="svc-note" style={{ marginTop: '22px' }}>
                No obligation, no pushy sales. Just honest guidance on your visa options.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="section section-white" aria-labelledby="map-heading" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="sec-hdr fade-up" style={{ marginBottom: '28px' }}>
            <div className="badge">Find Us</div>
            <h2 id="map-heading">Our Office Location</h2>
            <p>11/5B, First Floor, Pusa Road, New Delhi – 110005</p>
          </div>
          <div className="map-box fade-up">
            <iframe
              title="Zeno Global Office — Pusa Road New Delhi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4!2d77.1855!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030b9a0c7b97%3A0x7e6f06f62c7cf67!2sPusa%20Rd%2C%20New%20Delhi%2C%20Delhi%20110005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Don&apos;t Wait — Start Today</h2>
          <p>Visa slots fill up fast. The earlier you apply, the smoother the process.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white btn-lg">Get Free Advice</Link>
            <a
              href="https://wa.me/918796925533?text=Hello%2C%20I%20want%20to%20start%20my%20visa%20application."
              target="_blank" rel="noopener"
              className="btn btn-wa btn-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
