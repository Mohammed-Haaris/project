/** @format */
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";
import "./Contact.css";

// Initialize EmailJS
emailjs.init("5lThGkM92596aN9Tv");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [titleIndex, setTitleIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const titles = [
    "Let's Connect",
    "Get In Touch",
    "Start a Conversation"
  ];

  const contactReasons = [
    {
      icon: "💼",
      title: "Project Collaboration",
      description: "Let's work together on your next big idea"
    },
    {
      icon: "🤝",
      title: "Partnership Opportunities",
      description: "Explore potential business partnerships"
    },
    {
      icon: "💡",
      title: "Technical Consultation",
      description: "Get expert advice on your tech projects"
    },
    {
      icon: "🚀",
      title: "Career Opportunities",
      description: "Discuss potential job opportunities"
    }
  ];

  const contactStats = [
    { number: "24h", label: "Response Time" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Projects Completed" },
    { number: "∞", label: "Possibilities" }
  ];

  // Animated title cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const result = await emailjs.sendForm(
        "service_jo02ixd",
        "template_6dxahds",
        e.target,
        "5lThGkM92596aN9Tv"
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <div className="container-fluid contact-hero py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <Fade bottom>
                <div className="contact-hero-badge mb-3">
                  <span className="contact-badge-text">📧 Contact Me</span>
                </div>
                
                <h1 className="contact-title mb-3">
                  {titles[titleIndex]}
                </h1>
                
                <p className="contact-subtitle mb-4">
                  Ready to Bring Your Ideas to Life?
                </p>
              </Fade>
              
              {/* Enhanced Contact Description */}
              <Fade bottom delay={200}>
                <div className="contact-description mb-4">
                  <p className="fs-5 lh-base">
                    Whether you have a <strong className="highlight-text">project idea</strong>, need <strong className="highlight-text">technical consultation</strong>, or want to discuss <strong className="highlight-text">collaboration opportunities</strong>, I'm here to help. Let's create something amazing together!
                  </p>
                </div>
              </Fade>

              {/* Contact Reasons Grid */}
              <Fade bottom delay={300}>
                <div className="contact-reasons mb-4">
                  <h3 className="text-center mb-3 fs-5 fw-semibold">Why Reach Out?</h3>
                  <div className="row justify-content-center g-3">
                    {contactReasons.map((reason, index) => (
                      <div key={index} className="col-6 col-md-3 mb-2">
                        <div className="contact-reason-card p-3 rounded-3 text-center h-100 d-flex flex-column justify-content-center">
                          <div className="contact-reason-icon mb-2 fs-2">{reason.icon}</div>
                          <h6 className="contact-reason-title mb-1 fs-7 fw-bold">{reason.title}</h6>
                          <p className="contact-reason-desc mb-0 fs-8 text-muted">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container-fluid contact-form-section py-4">
        <div className="container">
          <Fade bottom delay={400}>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="section-header text-center mb-4">
                  <div className="section-badge mb-2">
                    <span className="section-badge-text">💬 Send Message</span>
                  </div>
                  <h2 className="section-title mb-2">Get In Touch</h2>
                  <p className="section-subtitle">I'll get back to you within 24 hours</p>
                </div>
                
                <div className="contact-form-container">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Fade left delay={500}>
                        <div className="contact-info-section">
                          <div className="contact-info-card">
                            <h3 className="contact-info-title mb-4">Let's Start a Conversation</h3>
                            <p className="contact-info-description mb-4">
                              I'm passionate about creating innovative solutions and helping businesses achieve their digital goals. Whether you need a website, mobile app, or AI automation solution, I'm here to turn your vision into reality.
                            </p>
                            
                            <div className="contact-info-features mb-4">
                              <div className="contact-info-feature">
                                <span className="contact-info-feature-icon">⚡</span>
                                <span className="contact-info-feature-text">Quick Response Time</span>
                              </div>
                              <div className="contact-info-feature">
                                <span className="contact-info-feature-icon">🤝</span>
                                <span className="contact-info-feature-text">Professional Consultation</span>
                              </div>
                              <div className="contact-info-feature">
                                <span className="contact-info-feature-icon">💡</span>
                                <span className="contact-info-feature-text">Innovative Solutions</span>
                              </div>
                              <div className="contact-info-feature">
                                <span className="contact-info-feature-icon">🚀</span>
                                <span className="contact-info-feature-text">Quality Assurance</span>
                              </div>
                            </div>

                            <div className="contact-stats">
                              <div className="row g-3">
                                {contactStats.map((stat, index) => (
                                  <div key={index} className="col-6">
                                    <div className="contact-stat-item">
                                      <div className="contact-stat-number">{stat.number}</div>
                                      <div className="contact-stat-label">{stat.label}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                      <Fade right delay={500}>
                        <div className="contact-form-card">
                          <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group mb-4">
                              <label htmlFor="name" className="form-label">
                                <span className="form-label-icon">👤</span>
                                Full Name *
                              </label>
                              <input
                                type="text"
                                className="form-control contact-input"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                minLength="2"
                                maxLength="50"
                              />
                            </div>
                            
                            <div className="form-group mb-4">
                              <label htmlFor="email" className="form-label">
                                <span className="form-label-icon">📧</span>
                                Email Address *
                              </label>
                              <input
                                type="email"
                                className="form-control contact-input"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                                maxLength="100"
                              />
                            </div>
                            
                            <div className="form-group mb-4">
                              <label htmlFor="message" className="form-label">
                                <span className="form-label-icon">💭</span>
                                Message *
                              </label>
                              <textarea
                                className="form-control contact-textarea"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project or inquiry..."
                                minLength="10"
                                maxLength="1000"
                              ></textarea>
                              <small className="form-text text-muted">
                                {formData.message.length}/1000 characters
                              </small>
                            </div>
                            
                            <div className="form-submit-section">
                              <button 
                                type="submit" 
                                className={`btn btn-primary btn-lg w-100 contact-submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Sending Message...
                                  </>
                                ) : (
                                  <>
                                    <span className="submit-icon">🚀</span>
                                    Send Message
                                  </>
                                )}
                              </button>
                              
                              {submitStatus === 'success' && (
                                <div className="alert alert-success mt-3 contact-alert">
                                  <span className="alert-icon">✅</span>
                                  Your message has been sent successfully! I'll get back to you soon.
                                  <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-success ms-2"
                                    onClick={clearForm}
                                  >
                                    Send Another Message
                                  </button>
                                </div>
                              )}
                              
                              {submitStatus === 'error' && (
                                <div className="alert alert-danger mt-3 contact-alert">
                                  <span className="alert-icon">❌</span>
                                  Something went wrong. Please try again or contact me directly.
                                  <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={clearForm}
                                  >
                                    Try Again
                                  </button>
                                </div>
                              )}
                            </div>
                          </form>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container-fluid contact-cta py-4">
        <div className="container">
          <Fade bottom delay={600}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="contact-cta-content">
                  <h2 className="contact-cta-title mb-3">Ready to Start Your Project?</h2>
                  <p className="contact-cta-description mb-4">
                    Let's discuss your ideas and create something amazing together. I'm excited to hear about your project and help you bring it to life!
                  </p>
                  <div className="contact-cta-buttons">
                    <a 
                      href="https://github.com/Mohammed-Haaris" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-lg me-2 mb-2"
                    >
                      🐙 View My GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/your-profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-lg mb-2"
                    >
                      💼 Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Contact;
