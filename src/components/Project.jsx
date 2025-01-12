/** @format */
import Fade from "react-reveal";
import React from "react";
import "./Project.css";
import projectImage from "../assets/Project.jpg";

function Project() {
  const projects = [
    {
      projectName: "Environment Impact Analyser",
      link: "yet to be complete",
      description:
        "A web application which is to control the impact of the environment and there knowledge ",
      image: "",
    },

    {
      projectName: "MR.Food's Food recipes",
      link: "https://food-recipe-github-io.vercel.app/",
      description:
        "A collection of delicious food recipe, which is show and dsiplay the content using api and dyanmically display's a card",
      image: "path/to/image.jpg",
    },
    {
      projectName: "Portfolio using html and css",
      link: "https://mohammed-haaris.github.io/",
      description:
        "A simple portfolio website using html and css, which providing the beginner knowledge and make learn about web development",
      image: "path/to/image.jpg",
    },

    {
      projectName: "Color-flipper",
      link: "https://full-stack-development-eta.vercel.app/",
      description:
        "it is were built at my beginner days, A simple color flipper project, which is show the color and hex code of the color, which is randomly generated by using javascript, HTML and CSS",
      image: "path/to/image.jpg",
    },

    {
      projectName: "Portfolio website for my client",
      link: "yet to be complete",
      description: "A web application for my client to display his portfolio. ",
      image: "",
    },
  ];

  return (
    <>
      <div className="container project">
        <div className="row">
          <div className=" col-lg-6 col-md-12 align-self-center">
            <Fade bottom>
              <h1 className="mb-2 header1">Projects and Sources</h1>
            </Fade>
            <Fade right>
              <p className="pro1">
                I have worked on various projects, starting from a simple Color
                Flipper app built with HTML, CSS, and JavaScript, which
                generates random colors and displays their hex codes.
              </p>
            </Fade>
            <Fade bottom>
              <p className="">
                I also created a Portfolio website to showcase my web
                development skills, utilizing the basics of HTML and CSS.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Additionally, I developed MR.Food's Food Recipes, an API-driven
                project that displays food recipes dynamically through
                interactive cards.
              </p>
            </Fade>
            <Fade left>
              <p>
                Another notable project is the Environment Impact Analyser, a
                web application designed to help users understand and reduce
                their environmental impact, providing knowledge and insights
                into sustainable practices.
              </p>
            </Fade>
          </div>
          <div className=" col-lg-5 col-md-12">
            <Fade left>
              <img src={projectImage} className="img-fluid" alt="" />
            </Fade>
          </div>
        </div>
      </div>

      <div className="container projectCard">
        <div className="row">
          <Fade right>
            <h1 className="header1 mb-4">
              Here is my Proof to that i'm a passionate developer with learning
              mindset
            </h1>
          </Fade>
          <Fade bottom>
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4 mt-5" key={index}>
                <div className="card bg-dark" style={{ width: "18rem" }}>
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.projectName}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white h2">
                      {project.projectName}
                    </h5>
                    <p className="card-text text-white">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Project;
