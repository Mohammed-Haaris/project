/** @format */
import Fade from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";
import projectImage from "../assets/Project.jpg";

function Project() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const titles = [
    "My Projects Portfolio",
    "Creative Solutions",
    "Innovation Showcase"
  ];

  const categories = [
    { key: 'all', name: 'All Projects', icon: '🚀', color: '#667eea' },
    { key: 'frontend', name: 'Frontend', icon: '🎨', color: '#61DAFB' },
    { key: 'fullstack', name: 'Full Stack', icon: '⚡', color: '#764ba2' },
    { key: 'automation', name: 'AI Automation', icon: '🤖', color: '#47A248' }
  ];

  const projects = [
    {
      projectName: "AIKONA - AI Emotion Companion",
      link: "https://aikona-v2.vercel.app/",
      description: "A MERN stack AI integration project using Groq AI and sentiment analysis. Users can share their emotions with AI and receive comforting responses through natural conversation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      category: "fullstack",
      status: "completed",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Groq AI", "Sentiment Analysis"],
      features: ["AI Integration", "Emotion Analysis", "Natural Conversation", "User Authentication", "Real-time Chat"],
      priority: true
    },
    {
      projectName: "MR.Food's Food recipes",
      link: "https://food-recipe-github-io.vercel.app/",
      description:
        "A collection of delicious food recipe, which is show and display the content using api and dynamically display's a card",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      category: "frontend",
      status: "completed",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "API Integration"],
      features: ["Recipe Search", "Dynamic Content", "Responsive Design", "API Integration", "User-friendly Interface"],
      priority: false
    },
    {
      projectName: "Technical Service Automation",
      link: "/flows/technical flow.json",
      description: "A comprehensive n8n automation workflow for technical services including MEP and AC services. Features Telegram bot integration with form collection and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Telegram Bot", "Form Automation", "Appointment Scheduling", "Redis"],
      features: ["Telegram Integration", "Form Collection", "Service Booking", "Time Slot Management", "Customer Data Management"],
      priority: true,
      isDownloadable: true
    },
    {
      projectName: "Jessica Real Estate AI Agent",
      link: "/flows/jessica real estate agent.json",
      description: "An intelligent real estate assistant powered by AI that helps users find properties based on their requirements. Integrates with Telegram and uses Groq AI for property recommendations.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Groq AI", "Telegram Bot", "LangChain", "Redis", "Property Search"],
      features: ["AI-Powered Recommendations", "Property Search", "Telegram Integration", "Conversation History", "Smart Filtering"],
      priority: true,
      isDownloadable: true
    },
    {
      projectName: "Digital Marketing Automation",
      link: "/flows/Automation for Digital Marketing.json",
      description: "A sophisticated digital marketing automation system for salons and service businesses. Features form handling, AI-generated email responses, and appointment management.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Groq AI", "Form Automation", "Email Marketing", "Appointment System"],
      features: ["Form Processing", "AI Email Generation", "Appointment Booking", "Customer Communication", "Marketing Automation"],
      priority: true,
      isDownloadable: true
    },
    {
      projectName: "TN KA Properties Automation",
      link: "/flows/tn_ka_properties.json",
      description: "A real estate automation workflow for TN KA Properties. Streamlines property listing, customer inquiries, and lead management through automated processes.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Real Estate CRM", "Lead Management", "Property Listings", "Customer Communication"],
      features: ["Property Management", "Lead Generation", "Customer Inquiries", "Automated Responses", "Data Management"],
      priority: false,
      isDownloadable: true
    },
    {
      projectName: "Estate Properties Automation",
      link: "/flows/estatepreoperties.json",
      description: "A comprehensive real estate automation system for estate properties. Features advanced property management, customer relationship management, and automated workflows.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Real Estate CRM", "Property Management", "Customer Automation", "Workflow Optimization"],
      features: ["Property Management", "Customer CRM", "Automated Workflows", "Data Processing", "Business Intelligence"],
      priority: false,
      isDownloadable: true
    },
    {
      projectName: "AI Real Estate Telegram Bot",
      link: "/flows/AI_Real_Estate_Telegram.json",
      description: "A specialized Telegram bot for real estate services with AI integration. Provides instant property information and customer support through automated responses.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Telegram Bot", "AI Integration", "Real Estate", "Customer Support"],
      features: ["Telegram Integration", "AI Responses", "Property Information", "Customer Support", "Instant Replies"],
      priority: false,
      isDownloadable: true
    },
    {
      projectName: "Job Information Automation",
      link: "/flows/Job information Automation.json",
      description: "An automation workflow for job information management and recruitment processes. Streamlines job posting, application processing, and candidate communication.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
      category: "automation",
      status: "completed",
      technologies: ["n8n", "Job Management", "Recruitment", "Application Processing", "Communication"],
      features: ["Job Posting", "Application Management", "Candidate Communication", "Process Automation", "Data Management"],
      priority: false,
      isDownloadable: true
    },
    {
      projectName: "VPS Sensiq - Company Production Project",
      link: "https://vps.sensiq.in/login",
      description: "Worked as part of the development team on this production project. Contributed to multiple functionalities, enhancements, and manual bug testing to ensure high-quality delivery.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "fullstack",
      status: "completed",
      technologies: ["React", "Node.js", "Database", "Production Environment", "Bug Testing"],
      features: ["Production Deployment", "Team Collaboration", "Bug Fixes", "Feature Enhancement", "Quality Assurance"],
      priority: true
    },
    {
      projectName: "Weather App - React.js",
      link: "https://weather-app-plum-ten-25.vercel.app/",
      description: "A weather application built with React.js and OpenWeather API. Provides real-time weather information with a modern, responsive interface.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop",
      category: "frontend",
      status: "completed",
      technologies: ["React.js", "OpenWeather API", "JavaScript", "CSS"],
      features: ["Real-time Weather", "API Integration", "Responsive Design", "Location-based Data"],
      priority: false
    },
    {
      projectName: "Counter App - React.js",
      link: "https://counter-app-using-react-js-one.vercel.app/",
      description: "A simple yet functional counter application built with React.js. Demonstrates fundamental React concepts and state management.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      category: "frontend",
      status: "completed",
      technologies: ["React.js", "JavaScript", "CSS", "State Management"],
      features: ["Increment/Decrement", "State Management", "Interactive UI", "React Fundamentals"],
      priority: false
    },
    {
      projectName: "MR.Food's Food Recipes",
      link: "https://food-recipe-github-io.vercel.app/index.html",
      description: "A comprehensive food recipe website built with HTML, CSS, JavaScript, and jQuery. Features dynamic recipe cards and API integration for diverse culinary content.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      category: "frontend",
      status: "completed",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "API Integration"],
      features: ["Recipe Search", "Dynamic Cards", "API Integration", "Responsive Design", "jQuery Effects"],
      priority: false
    },
    {
      projectName: "Portfolio - HTML/CSS/Bootstrap",
      link: "https://mohammed-haaris-github-io.vercel.app/",
      description: "My first portfolio website built with HTML, CSS, and Bootstrap. Showcases my journey from beginner to advanced developer with clean, responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      category: "frontend",
      status: "completed",
      technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
      features: ["Portfolio Showcase", "Bootstrap Components", "Responsive Layout", "Clean Design", "Beginner Project"],
      priority: false
    },
    {
      projectName: "Color Flipper",
      link: "http://full-stack-development-eta.vercel.app/",
      description: "A simple color flipper application built during my beginner days. Generates random colors and displays their hex codes using HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=250&fit=crop",
      category: "frontend",
      status: "completed",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Random Color Generation", "Hex Code Display", "Interactive UI", "Beginner Project", "Simple & Clean"],
      priority: false
    }
  ];

  // Animated title cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    return status === 'completed' ? '#47A248' : '#FF6B6B';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? 'Completed' : 'In Progress';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLetsDiscussClick = () => {
    navigate('/contact');
    scrollToTop();
  };

  const handleGetInTouchClick = () => {
    navigate('/contact');
    scrollToTop();
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <div className="container-fluid project-hero py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <Fade bottom>
                <div className="project-hero-badge mb-3">
                  <span className="project-badge-text">💼 Project Showcase</span>
                </div>
                
                <h1 className="project-title mb-3">
                  {titles[titleIndex]}
                </h1>
                
                <p className="project-subtitle mb-4">
                  From Beginner Projects to Advanced Solutions
                </p>
              </Fade>
              
              {/* Enhanced Project Description */}
              <Fade bottom delay={200}>
                <div className="project-description mb-4">
                  <p className="fs-5 lh-base">
                    My journey as a developer is reflected in my diverse project portfolio. From simple <strong className="highlight-text">Color Flipper</strong> to complex <strong className="highlight-text">AI Automation</strong> solutions, each project represents a step in my learning and growth. I believe in creating <strong className="highlight-text">user-centric applications</strong> that solve real-world problems.
                  </p>
                </div>
              </Fade>

              {/* Project Categories Navigation */}
              <Fade bottom delay={300}>
                <div className="project-categories mb-4">
                  <h3 className="text-center mb-3 fs-5 fw-semibold">Filter by Category</h3>
                  <div className="row justify-content-center g-2">
                    {categories.map((category, index) => (
                      <div key={index} className="col-6 col-md-3 mb-2">
                        <button
                          className={`project-category-btn ${activeCategory === category.key ? 'active' : ''} w-100 p-3 rounded-3 border-0 transition-all position-relative overflow-hidden h-100 d-flex flex-column justify-content-center`}
                          onClick={() => setActiveCategory(category.key)}
                          style={{ '--category-color': category.color }}
                        >
                          <div className="project-category-icon mb-2 fs-2">{category.icon}</div>
                          <div className="project-category-name fs-7 fw-semibold">{category.name}</div>
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

      {/* Enhanced Project Cards Section */}
      <div className="container-fluid project-cards py-4">
        <div className="container">
          <Fade bottom delay={400}>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-header text-center mb-4">
                  <div className="section-badge mb-2">
                    <span className="section-badge-text">🎯 Featured Projects</span>
                  </div>
                  <h2 className="section-title mb-2">My Development Journey</h2>
                  <p className="section-subtitle">Showcasing my growth from beginner to advanced developer</p>
                </div>
                
                <div className="project-grid">
                  {filteredProjects.map((project, index) => (
                    <Fade bottom delay={500 + index * 200} key={index}>
                      <div className={`project-card ${project.priority ? 'priority-project' : ''}`}>
                        <div className="project-card-header">
                          <div className="project-image-container">
                            <img
                              src={project.image}
                              className="project-image"
                              alt={project.projectName}
                            />
                            <div className="project-image-overlay"></div>
                            <div className="project-status-badge" style={{ backgroundColor: getStatusColor(project.status) }}>
                              {getStatusText(project.status)}
                            </div>
                            {project.priority && (
                              <div className="project-priority-star">
                                <span>⭐</span>
                              </div>
                            )}
                          </div>
                          <div className="project-header-content">
                            <h3 className="project-name">{project.projectName}</h3>
                            <p className="project-description-text">{project.description}</p>
                          </div>
                        </div>
                        
                        <div className="project-card-body">
                          <div className="project-technologies">
                            <h5 className="project-technologies-title">Technologies Used</h5>
                            <div className="project-technologies-grid">
                              {project.technologies.map((tech, idx) => (
                                <div key={idx} className="project-technology-item">
                                  <span className="project-technology-icon">⚡</span>
                                  <span className="project-technology-text">{tech}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="project-features">
                            <h5 className="project-features-title">Key Features</h5>
                            <div className="project-features-list">
                              {project.features.map((feature, idx) => (
                                <div key={idx} className="project-feature-item">
                                  <span className="project-feature-icon">🎯</span>
                                  <span className="project-feature-text">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                                                     <div className="project-actions">
                             {project.isDownloadable ? (
                               <a
                                 href={project.link}
                                 className="project-link-btn btn-primary"
                                 download
                                 rel="noopener noreferrer"
                               >
                                 📥 Download Flow
                               </a>
                             ) : (
                               <a
                                 href={project.link}
                                 className={`project-link-btn ${project.status === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                               >
                                 {project.status === 'completed' ? '🌐 View Live' : '🚧 Coming Soon'}
                               </a>
                             )}
                           </div>
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

      {/* Project Statistics Section */}
      <div className="container-fluid project-stats py-4">
        <div className="container">
          <Fade bottom delay={600}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="project-stats-content">
                  <h2 className="project-stats-title mb-4">Project Statistics</h2>
                  <div className="row g-4">
                    <div className="col-6 col-md-3">
                      <div className="project-stat-item">
                        <div className="project-stat-icon">📊</div>
                        <div className="project-stat-number">{projects.length}</div>
                        <div className="project-stat-label">Total Projects</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="project-stat-item">
                        <div className="project-stat-icon">✅</div>
                        <div className="project-stat-number">{projects.filter(p => p.status === 'completed').length}</div>
                        <div className="project-stat-label">Completed</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="project-stat-item">
                        <div className="project-stat-icon">🚧</div>
                        <div className="project-stat-number">{projects.filter(p => p.status === 'in-progress').length}</div>
                        <div className="project-stat-label">In Progress</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="project-stat-item">
                        <div className="project-stat-icon">⭐</div>
                        <div className="project-stat-number">{projects.filter(p => p.priority).length}</div>
                        <div className="project-stat-label">Featured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* n8n Automation Showcase Section */}
      <div className="container-fluid n8n-showcase py-4">
        <div className="container">
          <Fade bottom delay={650}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="n8n-showcase-content">
                  <div className="n8n-badge mb-3">
                    <span className="n8n-badge-text">🤖 n8n Automation Portfolio</span>
                  </div>
                  <h2 className="n8n-showcase-title mb-3">Professional Automation Workflows</h2>
                  <p className="n8n-showcase-description mb-4">
                    I've created <strong className="highlight-text">7 sophisticated n8n automation workflows</strong> for various industries including real estate, technical services, digital marketing, and recruitment. These workflows demonstrate advanced automation capabilities and business process optimization.
                  </p>
                  
                  <div className="n8n-stats mb-4">
                    <div className="row g-3">
                      <div className="col-6 col-md-3">
                        <div className="n8n-stat-item">
                          <div className="n8n-stat-icon">🤖</div>
                          <div className="n8n-stat-number">7</div>
                          <div className="n8n-stat-label">Automation Workflows</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="n8n-stat-item">
                          <div className="n8n-stat-icon">🏢</div>
                          <div className="n8n-stat-number">4</div>
                          <div className="n8n-stat-label">Industries Served</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="n8n-stat-item">
                          <div className="n8n-stat-icon">⚡</div>
                          <div className="n8n-stat-number">100%</div>
                          <div className="n8n-stat-label">Automated</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="n8n-stat-item">
                          <div className="n8n-stat-icon">📥</div>
                          <div className="n8n-stat-number">Free</div>
                          <div className="n8n-stat-label">Downloads</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="n8n-highlights mb-4">
                    <h4 className="n8n-highlights-title mb-3">Automation Categories</h4>
                    <div className="row g-2">
                      <div className="col-6 col-md-3">
                        <div className="n8n-category-item">
                          <span className="n8n-category-icon">🏠</span>
                          <span className="n8n-category-text">Real Estate</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="n8n-category-item">
                          <span className="n8n-category-icon">🔧</span>
                          <span className="n8n-category-text">Technical Services</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="n8n-category-item">
                          <span className="n8n-category-icon">📈</span>
                          <span className="n8n-category-text">Digital Marketing</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="n8n-category-item">
                          <span className="n8n-category-icon">💼</span>
                          <span className="n8n-category-text">Recruitment</span>
                        </div>
                      </div>
                    </div>
                  </div>

                                     <div className="n8n-cta">
                     <button className="btn btn-outline-dark btn-lg mb-2">
                       📋 Download Resume
                     </button>
                   </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* GitHub Showcase Section */}
      <div className="container-fluid github-showcase py-4">
        <div className="container">
          <Fade bottom delay={700}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="github-showcase-content">
                  <div className="github-badge mb-3">
                    <span className="github-badge-text">🐙 GitHub Portfolio</span>
                  </div>
                  <h2 className="github-showcase-title mb-3">Explore My Complete Codebase</h2>
                  <p className="github-showcase-description mb-4">
                    Beyond these featured projects, I have <strong className="highlight-text">21 repositories</strong> on GitHub showcasing my diverse development skills, including <strong className="highlight-text">n8n automation workflows</strong>, React applications, and full-stack solutions.
                  </p>
                  
                  <div className="github-stats mb-4">
                    <div className="row g-3">
                      <div className="col-6 col-md-3">
                        <div className="github-stat-item">
                          <div className="github-stat-icon">📦</div>
                          <div className="github-stat-number">21</div>
                          <div className="github-stat-label">Repositories</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="github-stat-item">
                          <div className="github-stat-icon">🤖</div>
                          <div className="github-stat-number">5+</div>
                          <div className="github-stat-label">n8n Workflows</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="github-stat-item">
                          <div className="github-stat-icon">⭐</div>
                          <div className="github-stat-number">5</div>
                          <div className="github-stat-label">Stars</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="github-stat-item">
                          <div className="github-stat-icon">🔧</div>
                          <div className="github-stat-number">15+</div>
                          <div className="github-stat-label">Technologies</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="github-highlights mb-4">
                    <h4 className="github-highlights-title mb-3">Featured Repository Categories</h4>
                    <div className="row g-2">
                      <div className="col-6 col-md-3">
                        <div className="github-category-item">
                          <span className="github-category-icon">⚛️</span>
                          <span className="github-category-text">React Apps</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="github-category-item">
                          <span className="github-category-icon">🤖</span>
                          <span className="github-category-text">n8n Automation</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="github-category-item">
                          <span className="github-category-icon">🌐</span>
                          <span className="github-category-text">Full Stack</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="github-category-item">
                          <span className="github-category-icon">🎨</span>
                          <span className="github-category-text">Frontend</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="github-cta">
                    <a 
                      href="https://github.com/Mohammed-Haaris" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-lg me-2 mb-2"
                    >
                      🐙 View My GitHub
                    </a>
                    <button className="btn btn-outline-dark btn-lg mb-2">
                      📋 Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="container-fluid project-cta py-4">
        <div className="container">
          <Fade bottom delay={700}>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="project-cta-content">
                  <h2 className="project-cta-title mb-3">Ready to Collaborate?</h2>
                  <p className="project-cta-description mb-4">
                    Let's work together to bring your ideas to life. Whether it's a simple website or a complex AI automation solution, I'm here to help you achieve your goals.
                  </p>
                  <div className="project-cta-buttons">
                                         <button onClick={handleLetsDiscussClick} className="btn btn-primary btn-lg me-2 mb-2">
                        💬 Let's Discuss Your Project
                      </button>
                    <button onClick={handleGetInTouchClick} className="btn btn-outline-primary btn-lg mb-2">
                      📧 Get In Touch
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

export default Project;
