import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Visa Services in Delhi │ Tourist, Business, Student Visa — Zeno Global',
  description: 'Complete visa services in Delhi — Tourist, Business, Student, Transit, Medical, Dependent & more. Expert consultants. VFS Global authorised. Call now.',
}

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero" aria-labelledby="page-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Services</span>
          </nav>
          <h1 id="page-hero-heading">Visa Services in Delhi</h1>
          <p>Every Type of Visa, One Trusted Team. 1,00,000+ applications processed since 2012.</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section section-white">
        <div className="container">
          <div className="sec-hdr" style={{ maxWidth: '800px' }}>
            <p style={{ fontSize: '17px', color: 'var(--txt-m)', lineHeight: 1.8, textAlign: 'center' }}>
              Looking for a reliable visa service in Delhi? Whether you&apos;re a first-time traveller
              or navigating a complex reapplication, Zeno Global has you covered. We&apos;ve processed{' '}
              <strong style={{ color: 'var(--g700)' }}>1,00,000+ applications since 2012</strong> — for
              every type of visa, every kind of applicant.
            </p>
          </div>
        </div>
      </section>

      {/* ── TOURIST VISA ── */}
      <section className="svc-section" id="tourist" aria-labelledby="tourist-heading">
        <div className="container">
          <div className="svc-inner">
            <div className="svc-img-wrap fade-up">
              <Image src="/tourist.png" alt="Family enjoying a holiday — Tourist Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: '370px', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">✈️ Tourist Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">✈️ Tourist Visa</div>
              <h2 id="tourist-heading">Tourist Visa</h2>
              <p>Planning a holiday or a short international trip? Our tourist visa services are designed for all kinds of travellers, including:</p>
              <ul className="svc-list">
                <li>Families and leisure travellers</li>
                <li>Couples (including honeymoon trips)</li>
                <li>Solo travellers exploring the world</li>
                <li>Group tours, pilgrimages, and friend circles</li>
                <li>Students or college groups travelling abroad</li>
              </ul>
              <p style={{ color: 'var(--txt-m)', fontSize: '15px', marginBottom: '18px' }}>
                No matter where you&apos;re headed — we handle visas for countries worldwide.
              </p>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport (at least 6 months validity)</li>
                  <li>Recent passport-size photographs</li>
                  <li>Bank statements (last 3–6 months)</li>
                  <li>Income proof (ITR, salary slips, or business documents)</li>
                  <li>Travel insurance (mandatory for Schengen & select countries)</li>
                  <li>Leave approval letter or business proof</li>
                </ul>
              </div>
              <div className="svc-note">
                Note: Document requirements vary by country. We provide a personalised checklist based on your destination.
              </div>
              <a href="https://wa.me/918796925533?text=Hello%2C%20I%20need%20help%20with%20a%20Tourist%20Visa." target="_blank" rel="noopener" className="btn btn-primary">💬 Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS VISA ── */}
      <section className="svc-section alt" id="business" aria-labelledby="business-heading">
        <div className="container">
          <div className="svc-inner rev">
            <div className="svc-img-wrap fade-up">
              <Image src="/business.png" alt="Business professionals travelling — Business Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: '370px', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">💼 Business Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">💼 Business / Corporate Visa</div>
              <h2 id="business-heading">Business / Corporate Visa</h2>
              <p>If your work takes you abroad, you need a visa process that&apos;s quick, clear, and reliable. Our business visa services are ideal for:</p>
              <ul className="svc-list">
                <li>Corporate professionals and executives</li>
                <li>Entrepreneurs and startup founders</li>
                <li>Attendees of international conferences, exhibitions, and summits</li>
                <li>Sales and business development teams travelling overseas</li>
                <li>Delegations and officials on official business visits</li>
              </ul>
              <div className="svc-docs">
                <h4>Types of Business Visas</h4>
                <ul>
                  <li>Single-entry business visa</li>
                  <li>Multiple-entry business visa</li>
                  <li>Short-term business visa</li>
                  <li>Long-term business visa</li>
                </ul>
              </div>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport with sufficient validity</li>
                  <li>Invitation letter from the host company abroad</li>
                  <li>Company introduction letter (on official letterhead)</li>
                  <li>Business registration or GST certificate</li>
                  <li>Bank statements (last 6 months)</li>
                  <li>Income proof (salary slips or ITR for self-employed)</li>
                  <li>Passport-size photographs as per visa guidelines</li>
                </ul>
              </div>
              <div className="svc-note">
                Note: Invitation letter formats and requirements can differ depending on the country. Don&apos;t worry — we&apos;ll guide you on exactly what&apos;s needed and help you get it right.
              </div>
              <a href="https://wa.me/918796925533?text=Hello%2C%20I%20need%20help%20with%20a%20Business%20Visa." target="_blank" rel="noopener" className="btn btn-primary">💬 Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDENT VISA ── */}
      <section className="svc-section" id="student" aria-labelledby="student-heading">
        <div className="container">
          <div className="svc-inner">
            <div className="svc-img-wrap fade-up">
              <Image src="/student.png" alt="Indian student at a university abroad — Student Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: '370px', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">🎓 Student Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">🎓 Student Visa</div>
              <h2 id="student-heading">Student Visa</h2>
              <p>Got your admission letter? That&apos;s a big step — now let&apos;s make sure your visa process is just as smooth. Our student visa services are ideal for:</p>
              <ul className="svc-list">
                <li>Undergraduate and postgraduate students</li>
                <li>Applicants for language courses or vocational programs</li>
                <li>Exchange students and scholarship recipients</li>
              </ul>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport</li>
                  <li>Admission or offer letter from your university</li>
                  <li>Proof of funds (bank statements, sponsor letter, or scholarship details)</li>
                  <li>Academic documents and transcripts</li>
                  <li>Statement of Purpose (SOP)</li>
                  <li>English test scores (IELTS / TOEFL / PTE, if required)</li>
                  <li>Medical reports (for select countries)</li>
                  <li>Passport-size photographs</li>
                </ul>
              </div>
              <div className="svc-note">
                Student visas can get tricky — especially when it comes to SOPs and financial documents. We&apos;ll guide you through both, step by step, to avoid common mistakes and improve your chances of approval.
              </div>
              <a href="https://wa.me/918796925533?text=Hello%2C%20I%20need%20help%20with%20a%20Student%20Visa." target="_blank" rel="noopener" className="btn btn-primary">💬 Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER VISAS ── */}
      <section className="svc-section alt" id="other" aria-labelledby="other-heading">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">🌍 Specialised Visas</div>
            <h2 id="other-heading">Other Visa Services We Handle</h2>
            <p>Not every visa fits into a standard category — and that&apos;s okay. We also assist with a range of specialised visas, depending on your needs.</p>
          </div>
          <div className="sub-visa-grid fade-up">
            {[
              { ico: '🔁', title: 'Transit Visa', href: 'Transit+Visa', desc: 'Just passing through a country? If your layover requires a transit visa, we\'ll help you sort it quickly and without confusion.' },
              { ico: '🏥', title: 'Medical Visa', href: 'Medical+Visa', desc: 'Travelling abroad for treatment? We assist with medical visa applications for patients and their attendants, including hospital documents, treatment details, and financial proof.' },
              { ico: '🕌', title: 'Religious Visa', href: 'Religious+Visa', desc: 'Planning a pilgrimage — whether it\'s Mecca, the Vatican, or elsewhere? We handle the specific visa requirements so you can focus on your journey.' },
              { ico: '👨‍👩‍👧', title: 'Dependent / Family Visa', href: 'Dependent+Family+Visa', desc: 'Joining family abroad? We guide you through the entire process, making sure all relationship and sponsor documents are in place.' },
            ].map(({ ico, title, href, desc }) => (
              <div key={title} className="sub-card">
                <div className="sub-ico">{ico}</div>
                <h3 className="sub-title">{title}</h3>
                <p className="sub-desc">{desc}</p>
                <a
                  href={`https://wa.me/918796925533?text=Hello%2C%20I%20need%20help%20with%20a%20${href}.`}
                  target="_blank" rel="noopener"
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '14px' }}
                >
                  Enquire →
                </a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '36px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="svc-note" style={{ textAlign: 'center' }}>
              Each country has its own requirements for these visas. Once we understand your situation, we&apos;ll share a clear, personalised checklist — so you know exactly what to prepare.
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Not sure which visa you need?</h2>
          <p>Tell us your destination and purpose — we&apos;ll guide you to the right visa category and checklist.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white btn-lg">Get Free Advice</Link>
            <a href="https://wa.me/918796925533?text=Hello%2C%20I%20need%20visa%20guidance." target="_blank" rel="noopener" className="btn btn-wa btn-lg">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
