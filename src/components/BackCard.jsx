/** @format */

import { Fade } from "react-awesome-reveal";
import React from "react";
import logo6 from "../assets/1e6d2c1a-1ff5-4480-8acd-e48cedf0d29a.webp";
import logo7 from "../assets/icons8-express-js-300.png";
import logo8 from "../assets/mongodb.jpg";
import logo9 from "../assets/vecteezy_php-programming-icon_48332166.png";
import logo10 from "../assets/mysql.webp";

const BackCard = () => {
  const backEnd = [
    { 
      name: "Node.js", 
      logo: logo6,
      description: "Server-side JavaScript runtime for building scalable network applications",
      level: 88,
      color: "#339933"
    },
    { 
      name: "Express.js", 
      logo: logo7,
      description: "Fast, unopinionated web framework for Node.js",
      level: 85,
      color: "#000000"
    },
    { 
      name: "MongoDB", 
      logo: logo8,
      description: "NoSQL database for flexible, scalable data storage",
      level: 82,
      color: "#47A248"
    },
    { 
      name: "n8n", 
      logo: "https://n8n.io/favicon-32x32.png",
      description: "AI-powered workflow automation platform for business process optimization",
      level: 90,
      color: "#FF6B6B"
    }
  ];

  return (
    <>
      <div className="container mt-5">
        <Fade bottom>
          <div className="backend-description text-center mb-5">
            <h4 className="backend-title mb-4">
              Backend Development Technologies
            </h4>
            <div className="backend-content">
              <p className="backend-text mb-3">
                As a Backend developer, I leverage robust technologies like Node.js and Express.js to build secure and scalable server-side applications. I utilize MongoDB for efficient data management and harness n8n for intelligent workflow automation.
              </p>
              <p className="backend-text">
                My expertise in AI automation with n8n allows me to create smart workflows that streamline business processes, while my MERN stack proficiency enables rapid development of full-stack applications with seamless data flow.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="container mt-5">
        <div className="row">
          {backEnd.map((tech, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <Fade bottom delay={index * 200}>
                <div className="tech-card-large">
                  <div className="tech-card-header">
                    <img
                      src={tech.logo}
                      className="tech-card-logo"
                      alt={tech.name}
                    />
                    <h5 className="tech-card-title">{tech.name}</h5>
                  </div>
                  <div className="tech-card-body">
                    <p className="tech-card-description">{tech.description}</p>
                    <div className="tech-card-progress">
                      <div className="progress-info">
                        <span className="progress-label">Proficiency</span>
                        <span className="progress-percentage">{tech.level}%</span>
                      </div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar-fill" 
                          style={{ 
                            width: `${tech.level}%`,
                            backgroundColor: tech.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackCard;
