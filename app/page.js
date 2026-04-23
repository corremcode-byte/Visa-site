import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Visa Consultants in Delhi │ Expert Visa Services — Zeno Global',
  description: 'Zeno Global — trusted visa consultants in Delhi since 2012. Tourist, Business, Student & more. VFS Global authorised. 1,00,000+ applications processed. Call now.',
}

const visaCards = [
  {
    img: '/tourist.png', alt: 'Family on holiday — Tourist Visa',
    icon: '✈️', title: 'Tourist Visa', href: '/services#tourist',
    desc: 'Planning a holiday, family trip, or solo adventure? We handle tourist visas for countries worldwide.',
  },
  {
    img: '/business.png', alt: 'Business professionals — Business Visa',
    icon: '💼', title: 'Business / Corporate Visa', href: '/services#business',
    desc: 'Travelling for meetings, conferences, or trade? Fast, clear business visa support.',
  },
  {
    img: '/student.png', alt: 'Student at university abroad — Student Visa',
    icon: '🎓', title: 'Student Visa', href: '/services#student',
    desc: 'Got your admission letter? We help you navigate SOPs, financial docs, and the full process.',
  },
  {
    img: '/family.png', alt: 'Family reunion — Dependent & Family Visa',
    icon: '👨‍👩‍👧', title: 'Other Visas', href: '/services#other',
    desc: 'Transit, Medical, Religious, Dependent/Family — we handle the full range of visa types.',
  },
]

const whyItems = [
  'Trusted since 2012', '1,00,000+ applications processed',
  'Authorised VFS Global partner', 'Visas for countries worldwide',
  '100% transparent process', 'Dedicated support at every step',
]

const steps = [
  { ico: '💬', n: 1, title: 'Tell Us Your Plan', desc: 'Quick call or WhatsApp chat — we understand your destination, purpose, and travel dates.' },
  { ico: '📋', n: 2, title: 'Get Your Checklist', desc: 'A personalised, country-specific document checklist based on your exact profile.' },
  { ico: '📁', n: 3, title: 'Share Your Documents', desc: 'Visit our office, courier them, or share scanned copies online for initial review.' },
  { ico: '🔍', n: 4, title: 'We Review Everything', desc: 'We check completeness, match details, verify formats — so there are zero surprises.' },
  { ico: '📅', n: 5, title: 'We Book Your VFS Slot', desc: 'As a VFS Global partner, we handle the appointment at the right centre, on time.' },
  { ico: '🚀', n: 6, title: 'Submit & Track Together', desc: 'We submit professionally, keep you updated, and inform you the moment your passport is ready.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">🏆 Authorised VFS Global Partner · Delhi&apos;s Most Trusted Since 2012</div>
              <h1 id="hero-heading">
                Your Visa, <span className="hl">Handled Right.</span><br />
                Stress-Free, Start to Finish.
              </h1>
              <p className="hero-tagline">Expert Visa Consultants in New Delhi</p>
              <p className="hero-sub">
                Tourist, Business, Student &amp; more — we handle every step so you can
                focus on your journey.
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-primary btn-lg">Free Consultation</Link>
                <a
                  href="https://wa.me/918796925533?text=Hello%2C%20I%20need%20help%20with%20my%20visa%20application."
                  target="_blank" rel="noopener"
                  className="btn btn-wa btn-lg"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hero-img-wrap">
              <div className="hero-img-glow" aria-hidden="true" />
              <div className="hero-img-box">
                <Image
                  src="/hero.png"
                  alt="Passport and travel documents — Zeno Global visa services"
                  width={520} height={400} priority
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" aria-label="Key statistics">
        <div className="container">
          <div className="trust-grid">
            {[
              { n: '1,00,000+', label: 'Applications Processed' },
              { n: '13+', label: 'Years of Experience' },
              { n: '100+', label: 'Countries Covered' },
              { n: '98%', label: 'Client Satisfaction' },
            ].map(({ n, label }) => (
              <div key={label} className="trust-item">
                <div className="trust-num">{n}</div>
                <div className="trust-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISA CARDS */}
      <section className="section section-white" aria-labelledby="visa-cards-heading">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Our Services</div>
            <h2 id="visa-cards-heading">Every Type of Visa, One Trusted Team</h2>
            <p>
              From a quick holiday to a long-term student visa — we handle the full range.
              Our experts guide you through requirements, documentation, and submission.
            </p>
          </div>
          <div className="visa-grid">
            {visaCards.map(({ img, alt, icon, title, href, desc }) => (
              <article key={title} className="visa-card fade-up">
                <div className="visa-card-img">
                  <Image src={img} alt={alt} width={400} height={172} loading="lazy"
                    style={{ width: '100%', height: '172px', objectFit: 'cover' }} />
                </div>
                <div className="visa-card-body">
                  <div className="visa-icon">{icon}</div>
                  <h3 className="visa-title">{title}</h3>
                  <p className="visa-desc">{desc}</p>
                  <Link href={href} className="btn btn-outline btn-sm">Learn More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ZENO */}
      <section className="section section-light" aria-labelledby="why-heading">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Why Choose Us</div>
            <h2 id="why-heading">Why Thousands Trust Zeno Global</h2>
            <p>
              We&apos;re not just form-fillers. We&apos;re your visa partners — honest, experienced, and with you
              at every step.
            </p>
          </div>
          <div className="why-grid" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {whyItems.map(item => (
              <div key={item} className="why-item fade-up">
                <div className="why-chk">✓</div>
                <span className="why-txt">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TEASER */}
      <section className="section section-white" aria-labelledby="process-heading">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Our Process</div>
            <h2 id="process-heading">How We Handle Your Application</h2>
            <p>
              A simple, 6-step process designed to keep things clear, organised, and completely stress-free —
              from your first call to your passport in hand.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map(({ ico, n, title, desc }) => (
              <div key={n} className="step-card fade-up">
                <div className="step-ico">{ico}</div>
                <div className="step-num-badge">{n}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/how-it-works" className="btn btn-primary">See Full Process →</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Start Your Visa Journey?</h2>
          <p>
            Call us, WhatsApp us, or visit our office in New Delhi — we&apos;re here to help.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white btn-lg">Contact Us</Link>
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
