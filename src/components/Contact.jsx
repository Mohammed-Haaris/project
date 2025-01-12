/** @format */
import careerimg from "../assets/program learning class.avif";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jo02ixd",
        "template_6dxahds",
        e.target,
        "5lThGkM92596aN9Tv"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show the "Sent" prompt box on successful submission
          window.alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Optionally show an error message
          window.alert("Something went wrong. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container contacting">
      <div className="row">
        <div className="col-lg-6 align-self-start">
          <Fade bottom>
            <h1 className="header1">Why you want to contact us...!</h1>
            <p className="pt-4">
              We’re here to make your experience seamless and memorable. Whether
              you have questions, need assistance, or want personalized
              solutions, our team is ready to help.
            </p>
            <p className="py-1">
              By contacting us, you gain access to expert guidance, prompt
              support, and tailored recommendations designed to meet your needs.
            </p>
            <p className="py-1">
              Your satisfaction is our priority, and we’re committed to ensuring
              that every interaction leaves you confident and informed. Reach
              out today – we’re just a message away!
            </p>
          </Fade>
        </div>
        <div className="col-lg-5">
          <Fade right>
            <img
              src={careerimg}
              className="img-fluid careerimage"
              alt="img by freepik"
            />
          </Fade>
        </div>
      </div>
      <Fade right>
        <div className="container mt-5 bg-secondary py-2">
          <div className="row mt-3">
            <h1 className="text-center">Contact Me</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ border: "3px solid #888" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ border: "3px solid #888" }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ border: "3px solid #888" }}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
