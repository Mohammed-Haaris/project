/** @format */

import React from "react";
import Fade from "react-awesome-reveal";
import banner from "../assets/Gray White Minimalist Personal Profile Linkedin Banner.png";
import ContactImage from "../assets/academy class.avif";
import { useState, useEffect } from "react";

function Career() {
  const [activeSection, setActiveSection] = useState('current');
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "My Professional Journey",
    "Career Growth Path",
    "From Student to Developer"
  ];

  const careerData = {
    current: {
      title: "Current Position",
      icon: "🚀",
      color: "#667eea",
      priority: true,
      items: [
        {
          institution: "Mirobs Innovations PVT.LTD",
          period: "MAY 2025 - Present",
          location: "Cuddalore, Tamilnadu, India",
          role: "Software Developer & AI Automation Engineer",
          status: "Currently Working",
          description: "Leading software development initiatives and implementing AI automation solutions using cutting-edge technologies. Specializing in MERN stack development and n8n workflow automation to create intelligent business solutions.",
          highlights: ["MERN Stack", "AI Automation", "n8n Workflows", "Full Stack Development", "API Integration", "Business Process Automation"],
          achievements: ["Leading Development Projects", "AI Workflow Implementation", "Team Collaboration", "Client Solutions"]
        }
      ]
    },
    education: {
      title: "Education",
      icon: "🎓",
      color: "#764ba2",
      items: [
        {
          institution: "Annai Teresa College of Engineering",
          period: "2021 - 2025",
          location: "Thirunavalur, Kallakurichi, Tamilnadu, India",
          degree: "Bachelor of Computer Science and Engineering",
          status: "Completed",
          description: "Successfully completed my degree in Computer Science and Engineering, which has provided me with a strong foundation in software development, problem-solving, and technical skills essential for the tech industry.",
          highlights: ["Computer Science", "Engineering", "Software Development", "Problem Solving", "Technical Foundation"]
        }
      ]
    },
    training: {
      title: "Professional Training",
      icon: "⚡",
      color: "#FF6B6B",
      items: [
        {
          institution: "NextGen Solutions",
          period: "2024",
          location: "Cuddalore, Tamilnadu, India",
          role: "Full Stack Developer Training",
          description: "Comprehensive training program where I mastered various technologies including PHP, MySQL, and the MERN stack, solidifying my technical foundation.",
          highlights: ["PHP", "MySQL", "MERN Stack", "Full Stack Development"]
        }
      ]
    },
    internships: {
      title: "Internships",
      icon: "💼",
      color: "#47A248",
      items: [
        {
          institution: "VEI Technologies",
          period: "June - July 2024",
          role: "Full Stack Developer Intern",
          mentor: "Ezhilavan",
          description: "Successfully completed internship working on real-world significant projects. Contributed to backend systems using Node.js and MySQL, creating RESTful APIs and ensuring seamless server-frontend interaction.",
          highlights: ["Node.js", "MySQL", "RESTful APIs", "Backend Development"],
          projects: ["Backend Systems", "Database Integration", "API Development"]
        },
        {
          institution: "COD-TECH IT Solutions",
          period: "September - October 2024",
          role: "Front-End Web Developer Intern",
          mentor: "Muzammil",
          description: "Worked on two significant projects: a To-Do List application with user authentication and a Dynamic Food Recipe website. Strengthened expertise in HTML, CSS, and JavaScript.",
          highlights: ["HTML", "CSS", "JavaScript", "Frontend Development"],
          projects: ["To-Do List App", "Food Recipe Website"]
        }
      ]
    }
  };

  // Animated title cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Enhanced Hero Section */}
      <div className="container-fluid career-hero py-5 mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <Fade bottom>
                <div className="career-hero-badge mb-3">
                  <span className="career-badge-text">🎯 Professional Journey</span>
                </div>
                
                <h1 className="career-title mb-3">
                  {titles[titleIndex]}
                </h1>
                
                <p className="career-subtitle mb-4">
                  From Education to Professional Excellence
                </p>
              </Fade>
              
              {/* Enhanced Career Description */}
              <Fade bottom delay={200}>
                <div className="career-description mb-4">
                  <p className="fs-5 lh-base">
                    My journey from <strong className="highlight-text">Computer Science student</strong> to <strong className="highlight-text">Software Developer & AI Automation Engineer</strong> at <strong className="highlight-text">Mirobs Innovations</strong> has been driven by continuous learning and hands-on experience. Through education, training, and internships, I've built a strong foundation in modern web technologies and AI automation.
                  </p>
                </div>
              </Fade>

              {/* Enhanced Career Navigation */}
              <Fade bottom delay={300}>
                <div className="career-navigation mb-4">
                  <div className="row justify-content-center g-2">
                    {Object.entries(careerData).map(([key, data]) => (
                      <div key={key} className={`${data.priority ? 'col-6 col-md-3' : 'col-6 col-md-3'} mb-2`}>
                        <button
                          className={`career-nav-btn ${activeSection === key ? 'active' : ''} ${data.priority ? 'priority-career' : ''} w-100 p-3 rounded-3 border-0 transition-all position-relative overflow-hidden h-100 d-flex flex-column justify-content-center`}
                          onClick={() => setActiveSection(key)}
                          style={{ '--career-color': data.color }}
                        >
                          <div className="career-nav-icon mb-2 fs-2">{data.icon}</div>
                          <div className="career-nav-title fs-7 fw-semibold">{data.title}</div>
                          {data.priority && (
                            <div className="career-priority-star">
                              <span>⭐</span>
                            </div>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Career Content Section */}
      <div className="container-fluid career-content py-4">
        <div className="container">
          <Fade bottom delay={400}>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-header text-center mb-4">
                  <div className="section-badge mb-2">
                    <span className="section-badge-text">{careerData[activeSection].icon} {careerData[activeSection].title}</span>
                  </div>
                  <h2 className="section-title mb-2">{careerData[activeSection].title} Experience</h2>
                  <p className="section-subtitle">My journey in {careerData[activeSection].title.toLowerCase()}</p>
                </div>
                
                <div className="career-timeline">
                  {careerData[activeSection].items.map((item, index) => (
                    <Fade bottom delay={500 + index * 200} key={index}>
                      <div className={`career-card ${careerData[activeSection].priority ? 'priority-career-card' : ''}`}>
                        <div className="career-card-header">
                          <div className="career-logo-container">
                            <div className="career-logo-icon" style={{ backgroundColor: careerData[activeSection].color }}>
                              {careerData[activeSection].icon}
                            </div>
                            <div className="career-logo-glow" style={{ backgroundColor: careerData[activeSection].color }}></div>
                          </div>
                          <div className="career-header-content">
                            <div className="career-institution-row">
                              <h3 className="career-institution">{item.institution}</h3>
                              {item.status && (
                                <span className="career-status-badge">{item.status}</span>
                              )}
                            </div>
                            <p className="career-period">{item.period}</p>
                            <p className="career-location">{item.location}</p>
                            {item.role && <p className="career-role">{item.role}</p>}
                            {item.degree && <p className="career-degree">{item.degree}</p>}
                          </div>
                        </div>
                        
                        <div className="career-card-body">
                          <div className="career-description-text">
                            <p>{item.description}</p>
                          </div>
                          
                          {item.highlights && (
                            <div className="career-highlights">
                              <h5 className="career-highlights-title">Key Skills & Technologies</h5>
                              <div className="career-highlights-grid">
                                {item.highlights.map((highlight, idx) => (
                                  <div key={idx} className="career-highlight-item">
                                    <span className="career-highlight-icon">⚡</span>
                                    <span className="career-highlight-text">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.achievements && (
                            <div className="career-achievements">
                              <h5 className="career-achievements-title">Key Achievements</h5>
                              <div className="career-achievements-list">
                                {item.achievements.map((achievement, idx) => (
                                  <div key={idx} className="career-achievement-item">
                                    <span className="career-achievement-icon">🏆</span>
                                    <span className="career-achievement-text">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.projects && (
                            <div className="career-projects">
                              <h5 className="career-projects-title">Projects & Achievements</h5>
                              <div className="career-projects-list">
                                {item.projects.map((project, idx) => (
                                  <div key={idx} className="career-project-item">
                                    <span className="career-project-icon">🎯</span>
                                    <span className="career-project-text">{project}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.mentor && (
                            <div className="career-mentor">
                              <p className="career-mentor-text">
                                <strong>Mentor:</strong> {item.mentor}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Enhanced Conclusion Section */}
      <div className="container-fluid career-conclusion py-4">
        <div className="container">
          <Fade bottom delay={600}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="conclusion-content">
                  <h2 className="conclusion-title mb-3">Looking Forward</h2>
                  <p className="conclusion-description mb-4">
                    Currently working as a Software Developer & AI Automation Engineer at Mirobs Innovations, I'm passionate about creating innovative solutions and driving digital transformation. My goal is to continue embracing new challenges, collaborate with forward-thinking teams, and drive successful outcomes while advancing my career in the tech industry.
                  </p>
                  <div className="conclusion-image">
                    <img src={banner} className="img-fluid rounded-3" alt="Career Banner" />
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

export default Career;
