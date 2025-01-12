/** @format */

import React from "react";
import Fade from "react-reveal/Fade";
import banner from "../assets/Gray White Minimalist Personal Profile Linkedin Banner.png";
import ContactImage from "../assets/academy class.avif";

function Career() {
  return (
    <>
      <div className="container cont">
        <section>
          <Fade bottom>
            <h1 className="pb-3 header1">Career Objectives</h1>
          </Fade>
        </section>
        <figure className="pt-3">
          <Fade right>
            <img src={ContactImage} alt="academy" className="img-fluid ui" />
          </Fade>
        </figure>
        <section className="sec">
          <Fade bottom>
            <h1>Annai Teresa College of Engineering</h1>
            <p className="mt-2">
              =&gt; currently I'm Pursuing my degree as a Bachelor of
              <strong> Computer Science and Engineering,</strong> which is to
              helping us to being maturity in professional development and
              helping to make myself and helps to learn the pathway to success.
              from (2021-2025) which it is located in
              <strong> Thirunavalur, Kallakurichi, Tamilnadu, India</strong>
            </p>
          </Fade>
        </section>
        <section className="sec">
          <Fade bottom>
            <h1>NextGen Solutions</h1>
            <p className="mt-2">
              =&gt; Currently Getting trained as a Full Stack Developer, by
              <strong> NextGen Solutions,</strong> My technical foundation has
              been solidified through comprehensive training at Next Gen
              Solutions,
            </p>
            <p>
              =&gt; where I mastered a variety of technologies including PHP,
              MySQL, and the MERN stack. which it is located in
              <strong> Cuddalore, Tamilnadu, India</strong>
            </p>
          </Fade>
        </section>
        <section className="sec mb-2">
          <Fade bottom>
            <h1 className="header1">Internships</h1>
          </Fade>
        </section>
        <section>
          <Fade top>
            <h3>VEI Technologies</h3>
          </Fade>
          <Fade top></Fade>
          <p className="mt-2">
            =&gt; I were succesfully completed my internship at
            <strong> VEI Technologies</strong> from June to July 2024, where I
            gained valuable experience as a Full Stack Developer.
          </p>
          <Fade bottom>
            <p>
              =&gt; Under the mentorship of Ezhilavan, I worked on real world
              significant projects.
            </p>
            <p>
              =&gt; As a Full Stack Development Intern at Company Name, I had
              the opportunity to work on both front-end and back-end projects,
              contributing to the development of dynamic, responsive, and
              user-friendly applications.
            </p>
            <p>
              =&gt; During this internship, I contributed to the development of
              backend systems using Node.js and MySQL.
            </p>
            <p>
              =&gt; My primary role involved creating RESTful APIs to handle
              user data, integrating databases, and ensuring seamless
              interaction between the server and frontend.
            </p>
          </Fade>
        </section>
        <section className="mt-5">
          <Fade bottom>
            <h3>COD-TECH IT Solutions</h3>
            <p className="mt-2">
              =&gt; I were successfully completed my internship at
              <strong> Cod Tech IT Solution </strong>
              from September to October 2024, where I gained valuable experience
              as a Front-End Web Developer.
              <p className="mt-2">
                =&gt; Under the mentorship of Muzammil, I worked on two
                significant projects.
              </p>
              <ol>
                <li> To-Do List application</li>
                <li> Dynamic Food Recipe website</li>
              </ol>
              <p>
                =&gt; The To-Do List app featured task management with
                enhancements like user authentication and local storage
                integration, making it an effective task organizer.
              </p>
              <p>
                =&gt; The Food Recipe website showcased various recipes with
                detailed ingredients and cooking instructions, providing a
                user-friendly browsing experience.
              </p>
              <p>
                =&gt; This internship strengthened my expertise in HTML, CSS,
                and JavaScript, deepened my understanding of web development
                practices, and enhanced my ability to create interactive and
                functional web applications.
              </p>
              <p>
                =&gt; The skills and mentorship I received at Cod Tech IT
                Solutions have greatly contributed to my growth as a developer."
              </p>
            </p>
            <p>
              =&gt; I am enthusiastic about continuous learning and growth, and
              I am dedicated to honing my expertise in the ever-evolving tech
              landscape.
            </p>
          </Fade>
        </section>
      </div>
      <div className="container mt-5 mb-5">
        <Fade bottom>
          <h1 className="header1">Conclusion</h1>
          <p className="mt-3">
            =&gt; My goal is to embrace new challenges, collaborate with
            forward-thinking teams, and drive successful outcomes while
            advancing my career as a full stack developer. With a strong work
            ethic and a proactive approach to professional development, I am
            poised to make a meaningful impact and achieve excellence in the
            tech industry.
          </p>
          <img src={banner} className="img-fluid mt-3 mb-3" alt="ads" />
        </Fade>
      </div>
    </>
  );
}

export default Career;
