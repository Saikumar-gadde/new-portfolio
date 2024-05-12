import React, { useEffect } from "react";

import MyPic from "../../Public/Pic.jpg";

import "./About.css";
import { Link } from "react-router-dom";

const About = () => {


  useEffect(() => {
    document.title = "About || Portfolio"
  }, []);


  return (
    <div className="container">
      <hr />
      <div className="about-container d-flex justify-content-between align-items-center">
        <div className="image-container">
          <h2>Who am I?</h2>
          <img id="my-pic" src={MyPic} alt="my-pic" />
        </div>
        <div className="description-container">
          <h5>About me:</h5>
          <p>
            Hey there! I'm Saikumar, a passionate full-stack developer and
            instructor based in the vibrant city of Hyderabad, India. With 3
            years of experience in the ever-evolving world of web development,
            I've honed my skills to become proficient in both frontend and
            backend technologies.
          </p>
          <hr />
          <h5>What I Do:</h5>
          <p>
            As a full-stack developer, I specialize in crafting dynamic and
            robust web applications from start to finish. Whether it's building
            responsive user interfaces using HTML, CSS, and JavaScript, React js
            or designing scalable backend systems with Node.js, Express, and
            MongoDB, I love bringing ideas to life through code.
          </p>
          <hr />
          <h5>Teaching and Sharing Knowledge:</h5>
          <p>
            In addition to my development work, I'm also deeply passionate about
            teaching and sharing my knowledge with others. As an instructor, I
            have the privilege of guiding aspiring developers on their learning
            journey, whether they're beginners taking their first steps into the
            world of programming or seasoned professionals looking to expand
            their skill set.
          </p>
        </div>
      </div>

      <hr />

      <div className="mt-5">
        <h4>Why Choose Me?</h4>
        <ul className="text-justify lh-lg">
          <li>
            Extensive Experience: With 3 years of hands-on experience in web
            development, I bring a wealth of knowledge and expertise to the
            table.
          </li>
          <li>
            Comprehensive Skill Set: From frontend frameworks like React and
            Angular to backend technologies like Node.js and Django, I'm
            well-versed in a wide range of tools and technologies.
          </li>
          <li>
            Personalized Learning Experience: Whether you're looking for
            one-on-one mentoring, group workshops, or online courses, I tailor
            my teaching approach to meet your unique learning needs.
          </li>
        </ul>
      </div>
      <hr />
      <div className="mt-3" >
        <h4>Let's Connect:</h4>
        <p className="lh-lg text-justify mb-4" >Ready to take your web development skills to the next level? Get in touch with me today to discuss how we can work together to achieve your goals. Whether you're looking for development services, personalized training, or collaboration opportunities, I'm here to help you succeed in the exciting world of full-stack development.</p>

        <Link to='/Contactme' className="contact-me-btn text-decoration-none mt-5" >Contact me</Link>

      </div>
    </div>
  );
};

export default About;
