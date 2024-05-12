import React, { useEffect } from 'react';

import AnimationGif  from "../../Public/phone-contact.gif";

const Contactme = () => {

  useEffect(() => {
    document.title = "Contact || Portfolio"
  }, []);

  return (
    <>
    <hr />
    <div className='container mt-5 d-flex justify-content-around align-items-center' >
        <div>
        <h1 className='mb-3' >Contact me</h1>
        <p className='lh-lg w-75' >If you have any questions or comments, please contact me via email or phone, or send me a message using social media.</p>
        
        
        <div className='mt-4' >
        <h5 className='fw-light mb-3' >Email</h5>
        <strong>g.saikumar517@gmail.com</strong>
        </div>
        <div className='mt-5' >
            <h5 className='fw-light mb-3' >Mobile</h5>
            <strong>(+91) 950 213 8286</strong>
        </div>
        </div>
        <div>
            <img height='450px' src={AnimationGif} alt="animation" />
        </div>
    </div>
    </>
  )
}

export default Contactme;