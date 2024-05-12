import React, { useEffect } from "react";

import image from "../../Public/fox.png";
import Projects from "../Projects/Projects";

import "./Self.css";

const Self = () => {


  useEffect(() => {
    document.title = "Saikumar || Portfolio"
  }, []);



  return (
    <>
    <div className="bg-dark mt-3 self-container " >
      <div className="container text-white d-flex justify-content-betweeen align-items-center">
        <div>
          <img src={image} alt="image" />
        </div>
        <div className="about-me-content">
          <h1 className="who-am-i">Who am I.?</h1>
          <p className="para">
            I'm Saikumar, a Fullstack developer and instructor based in
            hyderabad, India. I've always been passionate about coding. I can
            build all types of websites, I can help you build innovative digital
            products from sctrach.
          </p>
        </div>
      </div>
    </div>
    <Projects />
    </>
  );
};

export default Self;
