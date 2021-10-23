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
    <footer className="flex-shrink-0 grid grid-cols-12 px-1 gap-x-2 bg-22_green flex-column items-center">
      <div className="col-start-2 col-end-12 font-serif text-small font-normal not-italic leading-4 tracking-normal text-center text-92_green pt-4 pb-2">
        <p>
          <a href="https://www.google.com/maps/place/Mesogheo/@41.167586,14.4935449,17z/data=!4m13!1m7!3m6!1s0x133a45678f7637d9:0xf26876cd24a547e0!2zVmlhIFZhbGxlIENvcnJhZG8sIDQwLCA4MjAzMCBNZWxpenphbm8gQk4sIM6Zz4TOsc67zq_OsQ!3b1!8m2!3d41.1659949!4d14.4961413!3m4!1s0x133a45678fb976d1:0xa29b46e8794df151!8m2!3d41.1684235!4d14.4943019" target="_blank" rel="noopener noreferrer" className="hover:text-pink">valle Corrado 40, 82030 Melizzano, Campania, Italy</a>
        </p>
        <p>
          <a href="tel:+39 3887842886" target="_blank" rel="noopener noreferrer" className="hover:text-pink">phone number: +39 3887842886</a>
        </p>
        <p className="mb-2">
          <a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink">e-mail: mesogheo@googlemail.com</a>
        </p>
        <Link to="/faq" className="hover:text-pink">FAQ</Link>
      </div>

      <div className="col-start-6 col-end-8 flex flex-row justify-between pb-3a">
        <a href="https://www.instagram.com/mesogheo/" target="_blank" rel="noopener noreferrer" className={`w-3a ${inTextColor}`} onMouseEnter={inToggleHover} onMouseLeave={inToggleHover}>
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/Mesogheo" target="_blank" rel="noopener noreferrer" className={`w-3a ${fbTextColor}`} onMouseEnter={fbToggleHover} onMouseLeave={fbToggleHover}>
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
}
export default Footer;