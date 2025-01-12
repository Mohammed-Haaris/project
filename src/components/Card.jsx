/** @format */
import Fade from "react-reveal/Fade";
import logo1 from "../assests/html.png";
import logo2 from "../assests/css.png";
import logo3 from "../assests/javascript.png";
import logo4 from "../assests/bootstrap-framework.png";
import logo5 from "../assests/react.png";

const Card = () => {
  const technologies = [
    { name: "HTML", logo: logo1 },
    { name: "CSS", logo: logo2 },
    { name: "JavaScript", logo: logo3 },
    { name: "Bootstrap", logo: logo4 },
    { name: "React.js", logo: logo5 },
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        {technologies.map((tech, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <Fade bottom>
              <div className="card bg-dark" style={{ width: "18rem" }}>
                <img
                  src={tech.logo}
                  className="card-img-top img1 mt-3"
                  alt={tech.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{tech.name}</h5>
                  <p className="card-text text-white">{tech.content}</p>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
