'use client'
import { useState, useRef } from 'react'

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

function FAQItem({ question, answer, isOpen, onToggle }) {
  const ansRef = useRef(null)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="faq-icon"><ChevronIcon /></span>
      </button>
      <div
        className="faq-ans"
        style={{ maxHeight: isOpen ? ansRef.current?.scrollHeight + 'px' : '0' }}
      >
        <div className="faq-ans-inner" ref={ansRef}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FAQItem
          key={i}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
