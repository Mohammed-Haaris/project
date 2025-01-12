/** @format */
import brand from "../assets/circle2.png";
import brand1 from "../assets/haaris (1).jpg";
import Fade from "react-awesome-reveal";
import "./Content.css";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigateContact = useNavigate();
  const handleClick = () => {
    navigateContact("/contact");
  };

  return (
    <>
      <div className="container hero" id="hero">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 align-self-center">
            <Fade top>
              <h1 className="header1">Mohammed Haaris</h1>
            </Fade>
            <Fade left>
              <h2 className="mt-2 header2">React JS Developer</h2>
            </Fade>
            <Fade bottom>
              <h5 className="header3 pt-3">
                An Aspiring & Passionate Front End Developer with a strong
                foundation in React.js with hands-on experience in building
                responsive and dynamic web applications.
              </h5>
            </Fade>
            <Fade>
              <div className="mt-4">
                <button
                  type="button"
                  className="navbar-btn btn btn-success button2"
                  style={{ fontFamily: "poppins" }}
                  id="button-2"
                  onClick={handleClick}
                >
                  💬 Need Help? Let's Talk!
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-12 col-lg-6 col-md-6">
            <img src={brand} className="img-fluid" alt="image by freepik" />
          </div>
        </div>
      </div>
      <div className="container-fluid port">
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <Fade top>
                <h1 className="header1 text-center">About Me</h1>
              </Fade>
            </div>
          </div>
          <div className="row image-row">
            <div className="col-lg-6 col-md-12 p-2 align-self-center">
              <Fade right>
                <img
                  src={brand1}
                  className="img-fluid "
                  style={{ width: "60vh" }}
                  alt="haaaris image"
                />
              </Fade>
            </div>
            <div
              className="col col-lg-6 col-md-12 mt-5 align-self-center"
              style={{ fontSize: "20px" }}
            >
              <Fade bottom>
                <p>
                  Hi, I'm <strong>Mohammed Haaris</strong>, a passionate
                  front-end developer with a strong foundation in React.js. I am
                  currently pursuing my degree in Computer Science and
                  Engineering, which has helped me develop a deep understanding
                  of web development and programming concepts.
                </p>
                <p>
                  My journey into tech began with a curiosity about how websites
                  and applications work behind the scenes. This curiosity soon
                  turned into a passion for creating interactive, user-friendly
                  experiences. As I explored front-end development, I mastered
                  technologies like HTML, CSS, JavaScript, and React.js.
                </p>
                <p>
                  I have hands-on experience in building responsive and dynamic
                  web applications, and I am always eager to learn new
                  technologies and improve my skills. My goal is to become a
                  versatile full-stack developer, capable of turning ideas into
                  functional, scalable applications.
                </p>
                <p>
                  I am driven by my love for problem-solving, continuous
                  learning, and the impact technology can have on the world. I
                  am excited to collaborate with like-minded individuals and
                  contribute to innovative projects.
                </p>
              </Fade>
            </div>
            <div className="container mt-5 " style={{ fontSize: "20px" }}>
              <div className="row">
                <div className="col">
                  <Fade bottom>
                    <p>
                      In addition to my technical skills, I have a keen interest
                      in design and user experience. I believe that a great user
                      interface is essential for creating successful
                      applications. I enjoy experimenting with new design trends
                      and incorporating them into my projects.
                    </p>
                    <p>
                      Outside of coding, I love exploring new technologies,
                      reading tech blogs, and participating in hackathons. These
                      activities help me stay updated with the latest industry
                      trends and provide opportunities to network with other
                      professionals in the field.
                    </p>
                    <p>
                      I am always open to new opportunities and collaborations.
                      If you have a project in mind or just want to chat about
                      technology, feel free to reach out to me. Let's create
                      something amazing together!
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
