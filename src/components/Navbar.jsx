/** @format */
import Fade from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "About" },
    { path: "/technologies", label: "Technologies" },
    { path: "/career", label: "Pathway" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/mohammedhaaris12"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Mohammed-Haaris/Mohammed-Haaris"
    },
    { 
      name: "Email", 
      url: "mailto:smhhaaris2020@gmail.com"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/___mohammed__12_/"
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/917904321745"
    }
  ];

  return (
    <Fade top>
      <nav className={`navbar navbar-expand-lg sticky-top transition-all ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
          >
            <span className="brand-text">WEB FUSION</span>
          </Link>
          
          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    to={item.path}
                  >
                    <span className="nav-text">{item.label}</span>
                    {location.pathname === item.path && (
                      <div className="nav-indicator"></div>
                    )}
                  </Link>
                </li>
              ))}
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="nav-text">Social Media</span>
                </a>
                <ul className="dropdown-menu">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="social-text">{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            
            <div className="navbar-actions">
              <Button />
            </div>
          </div>
        </div>
      </nav>
    </Fade>
  );
}

export default Navbar;
