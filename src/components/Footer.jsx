/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "About Me" },
    { path: "/technologies", label: "Technologies" },
    { path: "/career", label: "Career" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohammedhaaris12",
      icon: "fa-brands fa-linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/Mohammed-Haaris/Mohammed-Haaris",
      icon: "fa-brands fa-github"
    },
    {
      name: "Email",
      url: "mailto:smhhaaris2020@gmail.com",
      icon: "fa-regular fa-envelope"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/___mohammed_2012/",
      icon: "fa-brands fa-instagram"
    }
  ];

  return (
    <Fade bottom>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <Fade left delay={200}>
                  <div className="footer-brand-section">
                    <div className="footer-brand">
                      <h3 className="footer-brand-title">MOHAMMED HAARIS</h3>
                      <div className="footer-brand-subtitle">Full Stack Developer</div>
                    </div>
                    <p className="footer-description">
                      Passionate about creating modern, responsive, and user-centric web applications. 
                      Specializing in MERN stack development and AI automation solutions.
                    </p>
                    
                  </div>
                </Fade>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <Fade bottom delay={300}>
                  <div className="footer-links-section">
                    <h4 className="footer-section-title">Quick Links</h4>
                    <ul className="footer-links-list">
                      {quickLinks.map((link, index) => (
                        <li key={index} className="footer-link-item">
                          <Link to={link.path} className="footer-link">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fade>
              </div>

              <div className="col-lg-3 col-md-6 mb-4">
                <Fade bottom delay={400}>
                  <div className="footer-contact-section">
                    <h4 className="footer-section-title">Contact Info</h4>
                    <div className="footer-contact-item">
                      <i className="fa-solid fa-map-marker-alt footer-contact-icon"></i>
                      <div className="footer-contact-content">
                        <span className="footer-contact-label">Location</span>
                        <span className="footer-contact-value">Cuddalore, TamilNadu-607105</span>
                      </div>
                    </div>
                    <div className="footer-contact-item">
                      <i className="fa-regular fa-envelope footer-contact-icon"></i>
                      <div className="footer-contact-content">
                        <span className="footer-contact-label">Email</span>
                        <a href="mailto:smhhaaris2020@gmail.com" className="footer-contact-value">
                          smhhaaris2020@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="footer-contact-item">
                      <i className="fa-solid fa-code footer-contact-icon"></i>
                      <div className="footer-contact-content">
                        <span className="footer-contact-label">Specialization</span>
                        <span className="footer-contact-value">MERN Stack & AI Automation</span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>

              <div className="col-lg-3 col-md-6 mb-4">
                <Fade right delay={500}>
                  <div className="footer-social-section">
                    <h4 className="footer-section-title">Connect With Me</h4>
                    <p className="footer-social-description">
                      Let's collaborate on your next project or discuss opportunities.
                    </p>
                    <div className="footer-social-links">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-social-link"
                          title={social.name}
                        >
                          <i className={`${social.icon} footer-social-icon`}></i>
                        </a>
                      ))}
                    </div>
                    <div className="footer-cta">
                      <Link to="/contact" className="footer-cta-btn">
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <Fade bottom delay={600}>
              <div className="footer-bottom-content">
                <div className="footer-copyright text-center">
                  <p>© {currentYear} Mohammed Haaris. All rights reserved.</p>
                </div>
                
              </div>
            </Fade>
          </div>
        </div>
      </footer>
    </Fade>
  );
}

export default Footer;
