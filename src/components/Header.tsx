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

  const navLinks = isHome 
    ? [
        { label: 'Services', href: '#services' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Savings', href: '#savings' },
        { label: 'Reviews', href: '#reviews' },
      ]
    : [
        { label: 'Benefits', href: '#benefits' },
        { label: 'Job Types', href: '#job-types' },
        { label: 'Calculator', href: '#calculator' },
        { label: 'Reviews', href: '#reviews' },
      ];

  const getLinkHref = (href: string) => {
    if (href.startsWith('#')) {
      if (isHome && pathname === '/') return href;
      if (!isHome && pathname === '/work-with-us') return href;
      return `${isHome ? '/work-with-us' : '/'}${href}`;
    }
    return href;
  };

  return (
    <header className={`header ${scrolled || !isHome ? 'scrolled glass-morphism' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.label} href={isHome ? link.href : (pathname === '/work-with-us' ? link.href : `/${link.href}`)}>
              {link.label}
            </Link>
          ))}
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
          <a href={isHome ? "#quote" : "/#quote"} className="btn-primary desktop-btn">
            {isHome ? 'Get Drivers' : 'Apply Now'}
          </a>
          
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
                {navLinks.map((link) => (
                  <Link 
                    key={link.label} 
                    href={isHome ? link.href : (pathname === '/work-with-us' ? link.href : `/${link.href}`)} 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="sidebar-dropdown">
                  <div 
                    className="sidebar-dropdown-trigger" 
                    onClick={() => setDriversDropdownOpen(!driversDropdownOpen)}
                  >
                    <span>Drivers Pages</span>
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
                <a href={isHome ? "#quote" : "/work-with-us/#apply"} className="btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  {isHome ? 'Get Drivers Now' : 'Apply to Drive'}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
