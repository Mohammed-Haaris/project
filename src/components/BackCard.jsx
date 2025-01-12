/** @format */

import { Fade } from "react-reveal";
import React from "react";
import logo6 from "../assets/1e6d2c1a-1ff5-4480-8acd-e48cedf0d29a.webp";
import logo7 from "../assets/icons8-express-js-300.png";
import logo8 from "../assets/mongodb.jpg";
import logo9 from "../assets/vecteezy_php-programming-icon_48332166.png";
import logo10 from "../assets/mysql.webp";

const BackCard = () => {
  const backEnd = [
    { name: "Node.js", logo: logo6 },
    { name: "Express.js", logo: logo7 },
    { name: "MongoDB", logo: logo8 },
    { name: "PHP", logo: logo9 },
    { name: "MySQL", logo: logo10 },
  ];

  return (
    <>
      <div className="container mt-5">
        <Fade bottom>
          <h4 className="pt-5">
            Technologies I used to deploy in Back-End development
          </h4>

          <p className="pt-2">
            =&gt; As a Backend developer, I leverage robust technologies like
            PHP to build secure and scalable server-side applications.
          </p>

          <p>
            =&gt; I utilize MySQL for efficient data management and harness
            Node.js and Express to create powerful, high-performance APIs.
          </p>
        </Fade>
        <Fade bottom>
          <p>
            =&gt; By adopting MongoDB, I maximize flexibility in data modeling,
            allowing for rapid adaptation to project needs.
          </p>
        </Fade>
        <Fade left>
          <p>
            =&gt; My focus is on implementing efficient, scalable systems that
            support seamless front-to-back communication and data flow."
          </p>
        </Fade>
      </div>
      <div className="container mt-5">
        <div className="row">
          {backEnd.map((tech, index) => (
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
    </>
  );
};

export default BackCard;
