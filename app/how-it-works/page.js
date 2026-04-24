import Link from 'next/link'

export const metadata = {
  title: 'How Zeno Global Works │ Visa Application Process in 6 Steps — Delhi',
  description: 'See how Zeno Global handles your visa application — from understanding your requirement to VFS Global submission. Simple, transparent, and stress-free.',
}

const steps = [
  {
    n: 1, title: 'Tell Us About Your Plan',
    intro: 'Every case is different, so we start by understanding yours. In a quick call or WhatsApp chat, we\'ll ask about:',
    points: [
      'Your destination and purpose of travel',
      'Your travel dates and plans',
      'Your work, business, or academic background',
      'Any previous visa history or refusals',
    ],
    note: 'This helps us give you honest, practical advice right from the start.',
  },
  {
    n: 2, title: 'Get Your Personalised Checklist',
    intro: 'No generic lists. No confusion. Based on your profile, we create a checklist that clearly tells you:',
    points: [
      'Exactly which documents you need',
      'Country-specific requirements',
      'Financial documents based on your case',
      'Alternatives if something is missing',
    ],
    note: 'Think of this as your roadmap — simple, clear, and easy to follow.',
  },
  {
    n: 3, title: 'Share Your Documents',
    intro: 'Once your documents are ready, you can send them in whichever way is easiest:',
    points: [
      'Visit our office in New Delhi',
      'Courier your documents',
      'Share scanned copies online (for initial review)',
    ],
    note: 'We\'ll confirm everything and guide you on the next step.',
  },
  {
    n: 4, title: 'We Review Everything Carefully',
    intro: 'This is where most applications go wrong — but not with us. Our team checks:',
    points: [
      'If all documents are complete',
      'If details match across documents',
      'If everything meets embassy requirements',
      'If photos and formats are correct',
    ],
    note: 'If something needs fixing, we\'ll tell you before submission — so there are no surprises later.',
  },
  {
    n: 5, title: 'We Book Your VFS Appointment',
    intro: 'As an authorised VFS Global partner, we handle the appointment for you. We make sure:',
    points: [
      'You\'re booked at the correct centre',
      'The timing fits your travel plan',
      'You know exactly what to carry and expect',
    ],
    note: 'No confusion. No last-minute stress.',
  },
  {
    n: 6, title: 'We Submit & Keep You Updated',
    intro: 'Once everything is ready, your application is submitted professionally. After that:',
    points: [
      'You get a tracking reference',
      'We keep you updated on progress',
      'If anything extra is needed, we\'ll guide you immediately',
      'We inform you as soon as your passport is ready',
    ],
    note: 'From start to finish, we\'re with you throughout.',
  },
]

const whyItems = [
  'No false promises', '100% transparent process',
  'End-to-end visa support', 'Handled by real experts',
  'Solutions for complex cases', 'Authorized VFS Global partner',
]

export default function HowItWorksPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="page-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>How It Works</span>
          </nav>
          <h1 id="page-hero-heading">How We Handle Your Visa Application</h1>
          <p>6 Simple Steps. Clear, organised, and completely stress-free.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Our Process</div>
            <h2>Your Visa Process, Step by Step</h2>
            <p>
              Visa applications can feel confusing — that&apos;s completely normal. That&apos;s why
              we&apos;ve built a simple, step-by-step process that keeps everything clear,
              organised, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="how-steps">
            {steps.map(({ n, title, intro, points, note }) => (
              <article key={n} className="how-step fade-up" aria-labelledby={`step${n}-heading`}>
                <div className="how-step-left">
                  <div className="step-circle">{n}</div>
                  <div className="step-line-v" />
                </div>
                <div className="how-step-right">
                  <h3 id={`step${n}-heading`}>{title}</h3>
                  <p>{intro}</p>
                  <ul className="how-list">
                    {points.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                  <p style={{ marginTop: '14px', fontSize: '15px', color: 'var(--txt-m)' }}>{note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section section-white" aria-labelledby="why-works-heading">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Why It Works</div>
            <h2 id="why-works-heading">What Makes Us Different</h2>
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

    </>
  )
}
