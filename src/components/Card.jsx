/** @format */
import Fade from "react-awesome-reveal";
import logo1 from "../assets/html.png";
import logo2 from "../assets/css.png";
import logo3 from "../assets/javascript.png";
import logo4 from "../assets/bootstrap-framework.png";
import logo5 from "../assets/react.png";

const Card = () => {
  const technologies = [
    { 
      name: "HTML", 
      logo: logo1,
      description: "Markup language for structuring web content",
      level: 95,
      color: "#E34F26"
    },
    { 
      name: "CSS", 
      logo: logo2,
      description: "Styling language for web design and layout",
      level: 92,
      color: "#1572B6"
    },
    { 
      name: "JavaScript", 
      logo: logo3,
      description: "Dynamic programming language for web interactivity",
      level: 90,
      color: "#F7DF1E"
    },
    { 
      name: "Bootstrap", 
      logo: logo4,
      description: "CSS framework for responsive web design",
      level: 88,
      color: "#7952B3"
    },
    { 
      name: "React.js", 
      logo: logo5,
      description: "JavaScript library for building user interfaces",
      level: 85,
      color: "#61DAFB"
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <Fade bottom>
          <div className="frontend-description text-center mb-5">
            <h4 className="frontend-title mb-4">
              Frontend Development Technologies
            </h4>
            <div className="frontend-content">
              <p className="frontend-text mb-3">
                I specialize in creating modern, responsive, and interactive user interfaces using cutting-edge frontend technologies. My expertise includes building component-driven applications with React.js and crafting beautiful, accessible designs with HTML, CSS, and JavaScript.
              </p>
              <p className="frontend-text">
                I leverage Bootstrap for rapid prototyping and responsive design, ensuring seamless user experiences across all devices and platforms. My focus is on creating intuitive, performant, and maintainable frontend solutions.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="container mt-5">
        <div className="row">
          {technologies.map((tech, index) => (
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

export default Card;
