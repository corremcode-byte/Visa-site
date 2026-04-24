import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = {
  title: 'Visa FAQ │ Common Questions Answered — Zeno Global Delhi',
  description: 'Answers to the most common visa questions — documents, timelines, refusals, VFS appointments, and more. Straight answers from Zeno Global\'s expert team in Delhi.',
}

const faqItems = [
  {
    q: 'How long does the visa process take?',
    a: 'Processing times vary by country and visa type — but as a general guide, Schengen visas take 15 working days, UK visas take 3–8 weeks, and US visas depend on interview slot availability. We always account for processing time when planning your application and advise you to apply well in advance.',
  },
  {
    q: 'What documents do I need for a visa?',
    a: 'It depends on your destination and the type of visa. Common documents include a valid passport, recent photographs, bank statements, income proof, travel insurance, and a confirmed itinerary. Once we understand your profile, we give you a personalised checklist — so you know exactly what\'s needed and nothing is missing.',
  },
  {
    q: 'My visa was refused before. Can I still apply?',
    a: 'Yes — a previous refusal doesn\'t mean you can\'t apply again. In fact, many of our successful applicants have had past refusals. We review the reason for your refusal, address the gaps, and help you build a stronger application. Being transparent with us about your visa history is the best starting point.',
  },
  {
    q: 'Do I have to visit your office in person?',
    a: 'Not necessarily. You can share your documents online (scanned copies) for initial review and guidance. For VFS appointment submission, you\'ll need to be present in person. We\'ll guide you clearly on what requires your physical presence and what can be handled remotely.',
  },
  {
    q: 'What is VFS Global and how are you connected?',
    a: 'VFS Global is an authorised visa application centre for multiple embassies and consulates. They collect documents and biometrics on behalf of embassies — they don\'t make visa decisions. As an authorised VFS Global partner, we handle your appointment, ensure your documents are submission-ready, and guide you through the visit.',
  },
  {
    q: 'How much does your visa service cost?',
    a: 'Our fees depend on the type of visa and the level of assistance required. We\'ll give you a clear, upfront quote after understanding your case — no hidden charges. Visa fees paid to the embassy or VFS are separate and non-refundable (as set by the embassy).',
  },
  {
    q: 'Can you guarantee my visa will be approved?',
    a: 'No consultant can legally guarantee visa approval — the final decision always rests with the embassy. What we can guarantee is that your application is prepared correctly, completely, and in the best possible way. Our strong track record is built on thorough preparation, not empty promises.',
  },
]

export default function FAQPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="page-hero-heading">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>FAQ</span>
          </nav>
          <h1 id="page-hero-heading">Frequently Asked Questions</h1>
          <p>Straight answers to the questions we hear most — no jargon, no runaround.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container">
          <div className="sec-hdr fade-up">
            <div className="badge">Got Questions?</div>
            <h2>We&apos;ve Got Answers</h2>
            <p>
              Visa applications come with a lot of questions. Here are the ones we get asked most often —
              answered honestly, based on real experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="section section-white" aria-labelledby="more-qs-heading">
        <div className="container">
          <div className="sec-hdr fade-up" style={{ maxWidth: '640px' }}>
            <div className="badge">Still Unsure?</div>
            <h2 id="more-qs-heading">Can&apos;t Find Your Answer?</h2>
            <p>
              Every visa case is different. If your question isn&apos;t here, just reach out — we&apos;ll give
              you a straight answer based on your specific situation.
            </p>
            <div className="cta-btns" style={{ justifyContent: 'center', marginTop: '28px' }}>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <a
                href="https://wa.me/918796925533?text=Hello%2C%20I%20have%20a%20question%20about%20my%20visa."
                target="_blank" rel="noopener"
                className="btn btn-wa"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
