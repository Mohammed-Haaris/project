/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Fade bottom>
      <footer className=" text-white pt-4 mt-5">
        <div className="container pt-3">
          <div className="row">
            <div className="col-md-4 mb-2">
              <h4>MOHAMMED HAARIS</h4>
              <p className="mt-2">
                Full Stack Developer | Creating modern and responsive web
                applications.
              </p>
            </div>
            <div className="col-md-4 mb-2">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technologies"
                    className="text-white text-decoration-none"
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-white text-decoration-none"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-white text-decoration-none"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-2">
              <h3 className="mb-3">Follow Me</h3>
              <a
                href="https://linkedin.com/in/mohammedhaaris12"
                className="text-white pe-2"
              >
                <i className="fa-brands fa-linkedin fa-2xl" />
              </a>
              <a
                href="https://github.com/Mohammed-Haaris/Mohammed-Haaris"
                className="text-white pe-2"
              >
                <i className="fa-brands fa-github fa-2xl" />
              </a>
              <a
                href="mailto:smhhaaris2020@gmail.com"
                className="text-white pe-2"
              >
                <i className="fa-regular fa-envelope fa-2xl" />
              </a>
              <a
                href="https://instagram.com/___mohammed_2012/"
                className="text-white pe-2"
              >
                <i className="fa-brands fa-instagram fa-2xl" />
              </a>
              <div className="mt-5">
                <h3>Location</h3>
                <b>Cuddalore, TamilNadu-607105</b>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <p>© 2024 Mohammed Haaris. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Fade>
  );
}

export default Footer;
