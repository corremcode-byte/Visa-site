'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  { src: '/religious.jpeg',  alt: 'Religious Visa — pilgrims on journey' },
  { src: '/family visa.png', alt: 'Family Visa — family reuniting abroad' },
]

export default function OtherVisasSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="svc-section alt" id="other" aria-labelledby="other-heading">
      <div className="container">
        <div className="svc-inner">

          {/* Left — Slideshow */}
          <div className="other-slideshow-wrap">
            {slides.map((s, i) => (
              <div key={s.src} className={`other-slide${i === current ? ' active' : ''}`}>
                <Image
                  src={s.src} alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="other-dots" role="tablist" aria-label="Visa slideshow">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}`}
                  className={`other-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>

          {/* Right — Fixed content */}
          <div className="svc-content fade-up">
            <div className="badge" style={{ marginBottom: '14px' }}>🌍 Specialised Visas</div>
            <h2 id="other-heading" style={{ marginBottom: '12px' }}>Other Visa Services We Handle</h2>
            <p style={{ color: 'var(--txt-m)', marginBottom: '24px' }}>
              Not every visa fits into a standard category — and that&apos;s okay. We also assist with a range of specialised visas, depending on your needs:
            </p>

            <ul className="svc-list">
              <li><strong>🔁 Transit Visa</strong><br />
                <span style={{ color: 'var(--txt-m)', fontSize: '15px' }}>Just passing through a country? If your layover requires a transit visa, we&apos;ll help you sort it quickly and without confusion.</span>
              </li>
              <li><strong>🏥 Medical Visa</strong><br />
                <span style={{ color: 'var(--txt-m)', fontSize: '15px' }}>Travelling abroad for treatment? We assist with medical visa applications for patients and their attendants, including hospital documents, treatment details, and financial proof.</span>
              </li>
              <li><strong>🕌 Religious Visa</strong><br />
                <span style={{ color: 'var(--txt-m)', fontSize: '15px' }}>Planning a pilgrimage — whether it&apos;s Mecca, the Vatican, or elsewhere? We handle the specific visa requirements so you can focus on your journey.</span>
              </li>
              <li><strong>👨‍👩‍👧 Dependent / Family Visa</strong><br />
                <span style={{ color: 'var(--txt-m)', fontSize: '15px' }}>Joining family abroad? We guide you through the entire process, making sure all relationship and sponsor documents are in place.</span>
              </li>
            </ul>

            <div className="svc-note" style={{ marginTop: '22px' }}>
              Each country has its own requirements for these visas. Once we understand your situation, we&apos;ll share a clear, personalised checklist — so you know exactly what to prepare.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
