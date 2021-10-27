import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as FacebookIcon} from "../images/logo-facebook.svg";
import {ReactComponent as InstagramIcon} from "../images/logo-instagram.svg";

const Footer = () => {
  const [isInHovered, setInHovered] = useState(false);
  const [isFbHovered, setFbHovered] = useState(false);
  const inTextColor = isInHovered ? "text-pink" : "text-92_green";
  const fbTextColor = isFbHovered ? "text-pink" : "text-92_green";
  const inToggleHover = () => setInHovered(!isInHovered);
  const fbToggleHover = () => setFbHovered(!isFbHovered);

  return (
    <footer className="flex-shrink-0 grid grid-cols-12 px-1 gap-x-2 bg-22_green flex-column items-center md:px-7 md:gap-x-2 lg:px-4c lg:gap-x-4 sm2:gap-x-1 sm2:px-10 sm3:gap-x-8 sm3:px-16">
    {/* sm2:flex sm2:flex-row sm2:justify-between */}
      <div className="col-start-2 col-end-12 font-serif text-small font-normal not-italic leading-4 tracking-normal text-center text-92_green pt-4 pb-2 md:col-start-3 md:col-end-11 md:text-lg md:leading-6 md:pt-6 md:pb-4b lg:text-xl lg:pt-0 lg:pb-0 lg:mt-60 lg:mb-5b2 lg:leading-height28  sm2:col-start-1 sm2:col-end-7 sm2:mb-4 sm2:text-left sm2:leading-8 sm3:col-start-2 sm3:col-end-6 sm3:text-small22 sm3:mb-4 sm3:mt-0 ">
        
        <div className="hidden sm2:block sm3:block sm3:mt-5dd sm3:mb-1"> 
          <Link to="/faq" className="hover:text-pink">FAQ</Link>  
        </div>

        <div>
          <p>
            <a href="https://www.google.com/maps/place/Mesogheo/@41.167586,14.4935449,17z/data=!4m13!1m7!3m6!1s0x133a45678f7637d9:0xf26876cd24a547e0!2zVmlhIFZhbGxlIENvcnJhZG8sIDQwLCA4MjAzMCBNZWxpenphbm8gQk4sIM6Zz4TOsc67zq_OsQ!3b1!8m2!3d41.1659949!4d14.4961413!3m4!1s0x133a45678fb976d1:0xa29b46e8794df151!8m2!3d41.1684235!4d14.4943019" target="_blank" rel="noopener noreferrer" className="hover:text-pink">valle Corrado 40, 82030 Melizzano, Campania, Italy</a>
          </p>
          <p>
            <a href="tel:+39 3887842886" target="_blank" rel="noopener noreferrer" className="hover:text-pink">phone number: +39 3887842886</a>
          </p>
          <p className="mb-2 lg:mb-5b2 sm2:mb-0">
            <a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink">e-mail: mesogheo@googlemail.com</a>
          </p>
        </div>

        <div className="sm2:hidden sm3:hidden"> 
          <Link to="/faq" className="hover:text-pink">FAQ</Link>  
        </div>

      </div>

      <div className="col-start-6 col-end-8 flex flex-row justify-evenly mb-3a md:mb-5b lg:mb-5e sm2:mb-0 sm2:mt-116 sm2:col-start-12 sm2:col-end-13 sm3:col-start-11 sm3:col-end-12 sm3:mt-116">
        <a href="https://www.instagram.com/mesogheo/" target="_blank" rel="noopener noreferrer" className={` w-3a md:w-5 lg:w-5c ${inTextColor}`} onMouseEnter={inToggleHover} onMouseLeave={inToggleHover}>
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/Mesogheo" target="_blank" rel="noopener noreferrer" className={` w-3a md:w-5 lg:w-5c ${fbTextColor}`} onMouseEnter={fbToggleHover} onMouseLeave={fbToggleHover}>
          <FacebookIcon />
        </a>
      </div>

    </footer>
  );
}
export default Footer;