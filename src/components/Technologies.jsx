/** @format */
import "../App.css";
import { Fade } from "react-awesome-reveal";
import Card from "./Card";
import BackCard from "./BackCard";

function Technologies() {
  return (
    <>
      <div className="container tech">
        <Fade bottom>
          <h1 className="mt-4 header1">Technical Skills</h1>
          <h4 className="mt-3">
            Technologies I Harnessing for Front End-Development
          </h4>
          <p className="ms-2 mt-3">
            =&gt; As a Front-end developer, I utilize a variety of tools and
            technologies to create responsive, user-friendly web applications.
          </p>
          <p className="ms-2">
            =&gt; My toolkit includes HTML for structuring web pages, CSS and
            Bootstrap for designing responsive layouts, and JavaScript for
            enhancing interactivity.
          </p>
          <p className="ms-2">
            =&gt; I also specialize in React.js to build dynamic,
            component-driven user interfaces, ensuring a smooth and engaging
            user experience across different devices.
          </p>
        </Fade>
        <Card />
        <BackCard />
      </div>
    </>
  );
}

export default Technologies;
