/** @format */
import Fade from "react-awesome-reveal";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <Fade bottom>
      <nav className="navbar navbar-expand-lg p-3 sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-white ps-2"
            style={{ fontWeight: "bold" }}
            to="/"
          >
            WEB FUSION
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "whitesmoke" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item nav-underline">
                <Link className="nav-link text-white me-4" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item nav-underline">
                <Link className="nav-link text-white me-4" to="/technologies">
                  Technologies
                </Link>
              </li>
              <li className="nav-item nav-underline">
                <Link className="nav-link text-white me-4" to="/career">
                  Pathway
                </Link>
              </li>
              <li className="nav-item nav-underline">
                <Link className="nav-link text-white me-4" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item nav-underline">
                <Link className="nav-link text-white me-4" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown nav-underline">
                <a
                  className="nav-link dropdown-toggle text-white pe-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Social Media
                </a>
                <ul className="dropdown-menu p-3">
                  <li>
                    <a
                      className="dropdown-item p-2"
                      href="https://linkedin.com/in/mohammedhaaris12"
                    >
                      Linked IN
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item p-2"
                      href="https://github.com/Mohammed-Haaris/Mohammed-Haaris"
                    >
                      GITHUB
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item p-2"
                      href="mailto:smhhaaris2020@gmail.com"
                    >
                      Mail
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item p-2"
                      href="https://www.instagram.com/___mohammed__12_/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item p-2"
                      href="https://wa.me/917904321745"
                    >
                      What's App
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mt-2">
              <Button />
            </div>
          </div>
        </div>
      </nav>
    </Fade>
  );
}

export default Navbar;
