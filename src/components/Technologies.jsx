/** @format */
import "../App.css";
import { Fade } from "react-awesome-reveal";
import Card from "./Card";
import BackCard from "./BackCard";
import { useState, useEffect } from "react";

function Technologies() {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Technical Skills",
    "My Tech Stack",
    "Technologies I Master"
  ];

  const achievements = [
    { title: "MERN Stack", icon: "⚡", description: "MongoDB, Express, React, Node.js", color: "#61DAFB", priority: true },
    { title: "AI Automation", icon: "🤖", description: "n8n Workflow Automation", color: "#764ba2", priority: true },
    
  ];

  // Animated title cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Streamlined Hero Section */}
      <div className="container-fluid tech-hero py-4">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <Fade bottom>
                <div className="tech-hero-badge mb-3">
                  <span className="tech-badge-text">🚀 Tech Stack Overview</span>
                </div>
                
                <h1 className="tech-title mb-3">
                  {titles[titleIndex]}
                </h1>
                
                <p className="tech-subtitle mb-4">
                  Specializing in MERN Stack & AI Automation
                </p>
              </Fade>
              
              {/* Streamlined Description */}
              <Fade bottom delay={200}>
                <div className="tech-description mb-4">
                  <p className="fs-5 lh-base">
                    As a <strong className="highlight-text">Full Stack Developer</strong>, I specialize in <strong className="highlight-text">MERN Stack</strong> development and <strong className="highlight-text">AI automation</strong> using <span className="highlight-text">n8n</span>. My expertise spans from building modern React applications to creating intelligent automation workflows that streamline business processes.
                  </p>
                </div>
              </Fade>

              {/* Priority Achievement Badges */}
              <Fade bottom delay={300}>
                <div className="achievement-badges mb-4">
                  <h3 className="text-center mb-3 fs-5 fw-semibold">Core Specializations</h3>
                  <div className="row justify-content-center g-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`${achievement.priority ? 'col-6 col-md-6' : 'col-6 col-md-3'} mb-2`}>
                        <div className={`achievement-badge p-3 rounded-3 text-center h-100 d-flex flex-column justify-content-center ${achievement.priority ? 'priority-badge' : ''}`}>
                          <div className="achievement-icon mb-2 fs-2" style={{ color: achievement.color }}>
                            {achievement.icon}
                          </div>
                          <h6 className="achievement-title mb-1 fs-7 fw-bold">{achievement.title}</h6>
                          <p className="achievement-desc mb-0 fs-8 text-muted">{achievement.description}</p>
                          {achievement.priority && (
                            <div className="priority-indicator mt-1">
                              <span className="priority-badge-text">⭐ Priority</span>
                            </div>
                          )}
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

      {/* Technologies Cards */}
      <div className="container-fluid tech-cards py-4 mt-5 mb-5">
        <div className="container">
          {/* Special n8n AI Automation Section */}
          <Fade bottom delay={400}>
            <div className="row justify-content-center mb-5">
              <div className="col-12">
                <div className="section-header text-center mb-4">
                  <div className="section-badge mb-2">
                    <span className="section-badge-text">🤖 AI Automation Specialization</span>
                  </div>
                  <h2 className="section-title mb-2">n8n Workflow Automation</h2>
                  <p className="section-subtitle">Intelligent business process automation and workflow optimization</p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="n8n-special-card">
                      <div className="n8n-card-header">
                        <div className="n8n-logo-container">
                          <img
                            src="https://n8n.io/favicon-32x32.png"
                            className="n8n-logo"
                            alt="n8n"
                          />
                          <div className="n8n-logo-glow"></div>
                        </div>
                        <h3 className="n8n-title">n8n AI Automation</h3>
                        <p className="n8n-subtitle">Workflow Automation Platform</p>
                      </div>
                      <div className="n8n-card-body">
                        <div className="n8n-features">
                          <div className="n8n-feature">
                            <span className="n8n-feature-icon">⚡</span>
                            <span className="n8n-feature-text">Business Process Automation</span>
                          </div>
                          <div className="n8n-feature">
                            <span className="n8n-feature-icon">🤖</span>
                            <span className="n8n-feature-text">AI-Powered Workflows</span>
                          </div>
                          <div className="n8n-feature">
                            <span className="n8n-feature-icon">🔗</span>
                            <span className="n8n-feature-text">API Integration</span>
                          </div>
                          <div className="n8n-feature">
                            <span className="n8n-feature-icon">📊</span>
                            <span className="n8n-feature-text">Data Processing</span>
                          </div>
                        </div>
                        <div className="n8n-progress-section">
                          <div className="n8n-progress-info">
                            <span className="n8n-progress-label">Expertise Level</span>
                            <span className="n8n-progress-percentage">90%</span>
                          </div>
                          <div className="n8n-progress-bar">
                            <div className="n8n-progress-fill"></div>
                          </div>
                        </div>
                        <div className="n8n-description">
                          <p>Specialized in creating intelligent automation workflows that streamline business processes, integrate APIs, and optimize data flow using n8n's powerful visual workflow editor.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={500}>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-header text-center mb-4">
                  <div className="section-badge mb-2">
                    <span className="section-badge-text">🎨 Frontend Technologies</span>
                  </div>
                  <h2 className="section-title mb-2">Modern UI/UX Development</h2>
                  <p className="section-subtitle">Creating beautiful, responsive, and interactive user interfaces</p>
                </div>
                <Card />
              </div>
            </div>
          </Fade>
          
          <Fade bottom delay={600}>
            <div className="row justify-content-center mt-4">
              <div className="col-12">
                <div className="section-header text-center mb-4">
                  <div className="section-badge mb-2">
                    <span className="section-badge-text">⚙️ Backend & Database</span>
                  </div>
                  <h2 className="section-title mb-2">Server-Side & Data Management</h2>
                  <p className="section-subtitle">Building robust backend systems and efficient data solutions</p>
                </div>
                <BackCard />
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Compact Call-to-Action Section */}
      <div className="container-fluid tech-cta py-4">
        <div className="container">
          <Fade bottom delay={700}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="cta-content">
                  <h2 className="cta-title mb-3">Ready to Build Something Amazing?</h2>
                  <p className="cta-description mb-3">
                    Let's collaborate to bring your ideas to life using cutting-edge MERN Stack technologies and intelligent AI automation solutions.
                  </p>
                  <div className="cta-buttons">
                    <button className="btn btn-primary btn-lg me-2 mb-2">
                      💬 Let's Discuss Your Project
                    </button>
                    <button className="btn btn-outline-primary btn-lg mb-2">
                      📁 View My Projects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Technologies;
