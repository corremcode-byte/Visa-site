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
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
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
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
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
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
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
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSIT VISA ── */}
      <section className="svc-section alt" id="transit" aria-labelledby="transit-heading">
        <div className="container">
          <div className="svc-inner rev">
            <div className="svc-img-wrap fade-up">
              <Image src="/transit visa.png" alt="Traveller at airport transit — Transit Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">🔁 Transit Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">🔁 Transit Visa</div>
              <h2 id="transit-heading">Transit Visa</h2>
              <p>Just passing through a country on your way to your final destination? Many countries require a transit visa even for short layovers. We make sure you&apos;re covered. Ideal for:</p>
              <ul className="svc-list">
                <li>Travellers with layovers requiring a transit visa</li>
                <li>Multi-leg international journeys</li>
                <li>Connecting flights through Schengen or UK airports</li>
              </ul>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport with sufficient validity</li>
                  <li>Confirmed onward flight tickets</li>
                  <li>Visa for the final destination country</li>
                  <li>Proof of accommodation (if overnight stay)</li>
                  <li>Passport-size photographs</li>
                </ul>
              </div>
              <div className="svc-note">
                Transit visa rules vary widely by country and nationality. Tell us your itinerary and we&apos;ll confirm exactly what you need.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDICAL VISA ── */}
      <section className="svc-section" id="medical" aria-labelledby="medical-heading">
        <div className="container">
          <div className="svc-inner">
            <div className="svc-img-wrap fade-up">
              <Image src="/Medical visa.png" alt="Patient travelling for medical treatment — Medical Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">🏥 Medical Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">🏥 Medical Visa</div>
              <h2 id="medical-heading">Medical Visa</h2>
              <p>Travelling abroad for treatment or a medical procedure? We assist patients and their attendants in obtaining medical visas efficiently, handling all the paperwork so you can focus on your health. Ideal for:</p>
              <ul className="svc-list">
                <li>Patients seeking specialised treatment abroad</li>
                <li>Accompanying attendants or family members</li>
                <li>Follow-up medical visits and post-treatment check-ups</li>
              </ul>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport</li>
                  <li>Letter from the treating hospital abroad</li>
                  <li>Medical diagnosis and referral letter from an Indian doctor</li>
                  <li>Proof of sufficient funds for treatment and stay</li>
                  <li>Passport-size photographs</li>
                  <li>Attendant&apos;s documents (if applicable)</li>
                </ul>
              </div>
              <div className="svc-note">
                Medical visas are often time-sensitive. Contact us immediately and we&apos;ll prioritise your application.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELIGIOUS VISA ── */}
      <section className="svc-section alt" id="religious" aria-labelledby="religious-heading">
        <div className="container">
          <div className="svc-inner rev">
            <div className="svc-img-wrap fade-up">
              <Image src="/religious.jpeg" alt="Pilgrims on a religious journey — Religious Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">🕌 Religious Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">🕌 Religious Visa</div>
              <h2 id="religious-heading">Religious Visa</h2>
              <p>Planning a pilgrimage or a spiritually significant journey abroad? Whether it&apos;s Hajj, Umrah, a Vatican visit, or any other religious destination, we handle the specific visa requirements with care. Ideal for:</p>
              <ul className="svc-list">
                <li>Hajj and Umrah pilgrims</li>
                <li>Pilgrimages to religious sites in Europe, the Middle East, and beyond</li>
                <li>Individuals attending religious conferences or events abroad</li>
              </ul>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport</li>
                  <li>Invitation or confirmation letter from a religious institution</li>
                  <li>Proof of religious affiliation (if applicable)</li>
                  <li>Return flight tickets and accommodation proof</li>
                  <li>Bank statements and financial proof</li>
                  <li>Passport-size photographs</li>
                </ul>
              </div>
              <div className="svc-note">
                Requirements differ by destination and religion. We&apos;ll guide you through the process specific to your pilgrimage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY / DEPENDENT VISA ── */}
      <section className="svc-section" id="family" aria-labelledby="family-heading">
        <div className="container">
          <div className="svc-inner">
            <div className="svc-img-wrap fade-up">
              <Image src="/family visa.png" alt="Family reuniting abroad — Dependent and Family Visa Services"
                width={560} height={370} loading="lazy"
                style={{ width: '100%', height: 'auto', aspectRatio: '3/2', objectFit: 'cover', borderRadius: '28px', boxShadow: 'var(--sh-lg)' }} />
              <div className="svc-img-badge">👨‍👩‍👧 Family Visa</div>
            </div>
            <div className="svc-content fade-up">
              <div className="badge">👨‍👩‍👧 Dependent / Family Visa</div>
              <h2 id="family-heading">Dependent / Family Visa</h2>
              <p>Joining a spouse, parent, or child who is living or working abroad? Family and dependent visas involve detailed documentation around relationships and sponsorship. We make the process clear and stress-free. Ideal for:</p>
              <ul className="svc-list">
                <li>Spouses and children joining a working professional abroad</li>
                <li>Parents visiting or settling with children overseas</li>
                <li>Dependent family members of students or residents</li>
              </ul>
              <div className="svc-docs">
                <h4>Documents Commonly Required</h4>
                <ul>
                  <li>Valid passport for all applicants</li>
                  <li>Proof of relationship (marriage certificate, birth certificate)</li>
                  <li>Sponsor&apos;s visa, work permit, or residence proof abroad</li>
                  <li>Sponsor&apos;s financial statements and employment proof</li>
                  <li>Accommodation proof in the destination country</li>
                  <li>Passport-size photographs</li>
                </ul>
              </div>
              <div className="svc-note">
                Family visa requirements vary significantly by country. We review your sponsor&apos;s documents carefully to avoid delays or rejections.
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
