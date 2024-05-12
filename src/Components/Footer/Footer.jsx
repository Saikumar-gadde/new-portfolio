import React from 'react';
import './Footer.css';

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='mt-5 mb-5' >
        <div className='line' >
        </div>
        <div className='container d-flex justify-content-between' >
            <div>
               <a className='ms-5' href="https://www.instagram.com/saikumar_gadde_?igsh=MWpyZnZveDBqZ241OA=="><FaInstagram size={30} /></a> 
               <a className='ms-5' href="https://www.linkedin.com/in/saikumar-g-0a218a160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={30} /></a>
            </div>
            <div>
                <h5 className='fw-light fs-5' >Created by Saikumar</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer;