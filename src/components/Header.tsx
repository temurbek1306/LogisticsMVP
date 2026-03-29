"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Briefcase, UserSearch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [driversDropdownOpen, setDriversDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

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
    <header className={`header ${scrolled || !isHome ? 'scrolled glass-morphism' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#why-us">Why Us</Link>
          <Link href="#calculator">Calculator</Link>
          <Link href="#reviews">Reviews</Link>
          <div className="nav-dropdown">
            <span className="nav-dropdown-trigger">
              Drivers <ChevronDown size={16} className="dropdown-chevron" />
            </span>
            <div className="nav-dropdown-menu">
              <Link href="/work-with-us" className="dropdown-item">
                <Briefcase size={18} className="item-icon" /> Work with us
              </Link>
              <Link href="/apply-to-drive" className="dropdown-item">
                <UserSearch size={18} className="item-icon" /> Apply to drive
              </Link>
            </div>
          </div>
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
                <div className="sidebar-dropdown">
                  <div 
                    className="sidebar-dropdown-trigger" 
                    onClick={() => setDriversDropdownOpen(!driversDropdownOpen)}
                  >
                    <span>Drivers</span>
                    <ChevronDown size={20} style={{ transform: driversDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                  </div>
                  <AnimatePresence>
                    {driversDropdownOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sidebar-dropdown-menu"
                      >
                        <Link href="/work-with-us" className="sidebar-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                          <div className="sidebar-item-icon"><Briefcase size={18} /></div> Work with us
                        </Link>
                        <Link href="/apply-to-drive" className="sidebar-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                          <div className="sidebar-item-icon"><UserSearch size={18} /></div> Apply to drive
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
