import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-col">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '4px' }}>
              <Logo />
            </Link>
            <p className="footer-brand-desc">
              America's trusted CDL-A driver recruitment partner. We help fleets grow faster with vetted, qualified drivers.
            </p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <Link href="#services">Services</Link>
            <Link href="#why-us">Why Us</Link>
            <Link href="#calculator">Savings Calculator</Link>
            <Link href="#reviews">Reviews</Link>
            <Link href="#guarantees">Guarantees</Link>
            <Link href="#quote">Get a Quote</Link>
          </div>

          {/* Drivers */}
          <div className="footer-col">
            <h4 className="footer-title">Drivers</h4>
            <Link href="#work">Work with Us</Link>
            <Link href="#apply">Apply to Drive</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <a href="mailto:futurelogistic2025@gmail.com">futurelogistic2025@gmail.com</a>
            <a href="tel:+17084694779">(708) 469-4779</a>
            <a href="https://t.me/alex_hiring" target="_blank" rel="noopener noreferrer">Contact @alex_hiring</a>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons">
              {/* Telegram Channel */}
              <a href="https://t.me/RecruitingDriver" target="_blank" rel="noopener noreferrer" aria-label="Telegram Channel">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/Futuresolutionhr/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/alisher-sanjarov-a15a4b3b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Future Solution. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
