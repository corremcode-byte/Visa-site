import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" className="logo" aria-label="Zeno Global Home">
              <div className="logo-mark">✈</div>
              <div className="logo-text">
                <span className="logo-name">Zeno Global</span>
                <span className="logo-sub">Private Limited</span>
              </div>
            </Link>
            <p className="footer-about">
              Trusted visa consultants in Delhi since 2012. Over 1,00,000 applications processed
              across tourist, business, student, and specialised visa categories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-head">Quick Links</p>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-head">Services</p>
            <ul className="footer-links">
              <li><Link href="/services#tourist">Tourist Visa</Link></li>
              <li><Link href="/services#business">Business Visa</Link></li>
              <li><Link href="/services#student">Student Visa</Link></li>
              <li><Link href="/services#other">Transit / Medical</Link></li>
              <li><Link href="/services#other">Religious / Family</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-head">Contact Us</p>
            <div className="footer-ci">
              <span>📞</span>
              <span>
                <a href="tel:01145040637">011 4504 0637</a>
                <br />
                <small style={{ fontSize: '12px', color: 'rgba(255,255,255,0.40)' }}>
                  Mon–Sat, 10 AM – 7 PM
                </small>
              </span>
            </div>
            <div className="footer-ci">
              <span>💬</span>
              <span>
                <a href="https://wa.me/918796925533" target="_blank" rel="noopener">
                  8796925533
                </a>
                <br />
                <small style={{ fontSize: '12px', color: 'rgba(255,255,255,0.40)' }}>
                  WhatsApp Anytime
                </small>
              </span>
            </div>
            <div className="footer-ci">
              <span>📍</span>
              <span>11/5B, First Floor, Pusa Road,<br />New Delhi – 110005</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Zeno Global Private Limited. All rights reserved.</span>
          <span>Visa Consultants in Delhi since 2012</span>
        </div>
      </div>
    </footer>
  )
}
