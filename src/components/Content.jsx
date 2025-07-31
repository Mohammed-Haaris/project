/** @format */
import brand from "../assets/circle2.png";
import brand1 from "../assets/Haarisnew.jpg";
import Fade from "react-awesome-reveal";
import "./Content.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Content() {
  const navigateContact = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Software Developer",
    "AI Automation Engineer"
  ];

  // Cycle through roles every 2.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigateContact("/contact");
  };

  const skills = [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AI Automation", icon: "🤖" },
    { name: "JavaScript", icon: "💛" },
  ];

  const achievements = [
    { number: "20+", label: "Projects Built" },
    { number: "1", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number:"100%", label:"Job Satisfaction"}
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="container hero py-5 mb-5" id="hero">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start mb-4 mb-lg-0">
            <Fade top>
              <div className="hero-content w-100">
                <h1 className="header1 gradient-text mb-2 fs-1 fs-md-1 fs-lg-1 lh-1 text-center text-lg-start">Mohammed Haaris</h1>
                <div className="typing-container mb-3">
                  <h2 className="mt-2 header2 fs-3 fs-md-2 lh-sm text-center text-lg-start">
                    I'm a <span className="typing-text">{roles[roleIndex]}</span>
                  </h2>
                  <h3 className="header2 fs-3 md-2 lh-sm text-center text-lg-start">
                    Mirobs Innovations PVT.LTD
                  </h3>
                </div>
                <Fade bottom>
                  <p className="hero-description mb-4 fs-5 lh-base text-center text-lg-start">
                    Software Developer & AI Automation Engineer passionate about building digital experiences and smart solutions. Turning ideas into reality, one line of code at a time! 🚀
                  </p>
                </Fade>
                <Fade>
                  <div className="hero-buttons d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start w-100">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg px-4 w-100 w-sm-auto"
                      onClick={handleClick}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {isHovered ? "Let's Connect! 🚀" : "💬 Get In Touch"}
                    </button>
                    <button className="btn btn-outline-primary btn-lg px-4 mt-2 mt-sm-0 w-100 w-sm-auto">
                      📁 View Projects
                    </button>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
      
             <Fade left>
                <div className="about-image-container about-image-mobile-fix d-flex justify-content-center mb-3">
                  <img
                    src={brand1}
                    className="img-fluid about-image"
                    style={{maxWidth: '320px', width: '100%'}}
                    alt="Mohammed Haaris"
                  />
                  <div className="image-overlay"></div>
                </div>
              </Fade>
          </div>
        </div>
      </div>
         {/* About Section */}
      <div className="container-fluid about-section py-5 mb-5">
        <div className="container">
          <div className="row align-items-center flex-column flex-lg-row">
            <div className="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
              <Fade right>
                <div className="hero-image-container w-100 d-flex justify-content-center">
                  <img src={brand} className="img-fluid floating" style={{maxWidth: '350px', width: '100%'}} alt="Hero illustration" />
                </div>
              </Fade>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
              <Fade right>
                <div className="about-content w-100 mx-auto px-3 about-content-max">
                  <h2 className="section-title mb-4 fs-3 text-center text-lg-start">About Me</h2>
                  <p className="about-text mb-3 fs-6 text-start text-lg-start">
                    Hi! 👋 I'm <strong>Mohammed Haaris</strong>, a Software Developer & AI Automation Engineer who loves building smart, scalable solutions.
                  </p>
                  <p className="about-text mb-3 fs-6 text-start text-lg-start">
                    I enjoy solving real-world problems with code and automation. When I'm not coding, you'll find me exploring new tech, joining hackathons, or sharing knowledge with others.
                  </p>
                  {/* Skills Showcase */}
                 
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-fluid stats-section py-4 mb-5">
        <div className="container">
          <div className="row text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="col-12 col-md-4 mb-4 mb-md-0 pb-4">
                <Fade bottom delay={index * 200}>
                  <div className="stat-card h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="stat-number mb-1">{achievement.number}</h2>
                    <p className="stat-label mb-0">{achievement.label}</p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </>
  );
}

export default Content;
