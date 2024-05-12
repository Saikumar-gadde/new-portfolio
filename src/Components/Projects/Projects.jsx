import React, { useState, useEffect } from "react";

import "./Projects.css";

import veganImage from "../../Public/shop.png";
import veganIcon from "../../Public/vegan.png";

import otpPass from "../../Public/one-time-password.png";
import otp from "../../Public/otp.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.querySelector(".projects");
      if (projects) {
        const top = projects.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="project-container"
        className={`container projects ${isVisible ? "show" : ""}`}
      >
        <div className="container-heading">
          <h1>Featured projects</h1>
          <p>
            Find out my works, Read the info about the project that i have
            developed.
          </p>
        </div>
        <div className="projects-container">
          <div className="about-project">
            <img className="icon" src={veganIcon} alt="logo" />
            <h3>Vegan store</h3>
            <p className="description">
              The Vegan Store: Your one-stop online destination for all things
              vegan. Explore a diverse array of plant-based foods, cruelty-free
              cosmetics, eco-friendly products, and more. Shop with confidence,
              knowing that everything aligns with your ethical and dietary
              values. Join our community and discover the joy of compassionate
              living today.
            </p>
            <div>
              <img
                className="project-icon"
                src={veganImage}
                alt="vegan-store-image"
              />
            </div>
          </div>

          <div className="about-project">
            <img className="icon" src={otpPass} alt="logo" />
            <h3>Random OTP Generator </h3>
            <p className="description">
              Random OTP Generator (NPM Package): The "random-otp-generator" npm
              package simplifies OTP (One-Time Password) generation in Node.js
              applications. It offers customizable options for OTP length and
              character sets, ensuring secure and convenient authentication
              processes. Integrate effortlessly to enhance application security
              with minimal development effort.
            </p>
            <div>
              <img className="project-icon" src={otp} alt="vegan-store-image" />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <a href="https://github.com/Saikumar-gadde">
            <button className="btn" >Find more on github</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
