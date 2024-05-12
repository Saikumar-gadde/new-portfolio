import React from "react";

import { SiSailfishos } from "react-icons/si";
import { Link } from "react-router-dom"

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container d-flex justify-content-between"   >
        <Link className="mt-2 d-flex align-items-center text-decoration-none" to='/'>
          
          <SiSailfishos size={60} />
          <h1 className="mt-3 name-heading ">
            <span className="s-letter" >S</span><span className="fw-normal fs-3">aikumar</span>
          </h1>
        </Link>
        <div>
          <ul className="d-flex mt-5 align-items-center justify-content-center heading-navs" >
            <Link to="/Aboutme" className="ms-5 list-unstyled text-decoration-none" >About me</Link>
            {/* <li className="ms-5 list-unstyled " >Courses</li> */}
            <Link to='/Contactme' className="ms-5 text-decoration-none contact-me-btn" >Contact Me</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
