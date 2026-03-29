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
            <a href="mailto:contact@futuresolution.net">contact@futuresolution.net</a>
            <a href="tel:+18474618142">(847) 461-8142</a>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons">
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
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
