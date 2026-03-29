"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scrolling qulflash oynasi (Sidebar ochilganda scroll bo'lmasligi uchun)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled glass-morphism' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#why-us">Why Us</Link>
          <Link href="#calculator">Calculator</Link>
          <Link href="#reviews">Reviews</Link>
          <Link href="#drivers">Drivers</Link>
        </nav>
        <div className="header-actions">
          <a href="#quote" className="btn-primary desktop-btn">Get Drivers</a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={32} color="var(--text-dark)" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="mobile-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="sidebar-header">
                <Logo />
                <button 
                  className="close-btn" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={28} color="#fff" />
                </button>
              </div>
              
              <nav className="sidebar-nav">
                <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link href="#why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
                <Link href="#calculator" onClick={() => setIsMobileMenuOpen(false)}>Calculator</Link>
                <Link href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
                <Link href="#drivers" onClick={() => setIsMobileMenuOpen(false)}>Drivers</Link>
              </nav>

              <div className="sidebar-footer">
                <a href="#quote" className="btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Drivers Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
