import React from 'react';
// import { Facebook, Instagram } from 'react-ionicons';
import { Link } from "react-router-dom";
import facebookIcon from "../images/logo-facebook.svg";
import instagramIcon from "../images/logo-instagram2.png";

function Footer() {

  return (

    <footer className="grid grid-cols-12 px-1 gap-x-2 bg-22_green flex flex-column items-center">

      <div className="col-start-3 col-end-11 block font-serif text-small font-normal not-italic leading-4  tracking-normal  text-center text-92_green pt-4 pb-2">
      <a href="https://www.google.com/maps/place/Mesogheo/@41.167586,14.4935449,17z/data=!4m13!1m7!3m6!1s0x133a45678f7637d9:0xf26876cd24a547e0!2zVmlhIFZhbGxlIENvcnJhZG8sIDQwLCA4MjAzMCBNZWxpenphbm8gQk4sIM6Zz4TOsc67zq_OsQ!3b1!8m2!3d41.1659949!4d14.4961413!3m4!1s0x133a45678fb976d1:0xa29b46e8794df151!8m2!3d41.1684235!4d14.4943019" target="_blank" rel="noopener noreferrer">
          <p className="hover:text-pink">Valle Corrado 40, 82030 Melizzano, Campania, Italy</p>
        </a>
        <a href="tel:+39 3887842886" target="_blank" rel="noopener noreferrer">
          <p className="hover:text-pink">phone number: +39 3887842886</p>
        </a>
        <a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer">
          <p className="mb-2 hover:text-pink">e-mail: mesogheo@googlemail.com</p>
        </a>
        <Link to="/faq" >
          <p className="hover:text-pink">FAQ</p>
        </Link>
      </div>

      <div className="col-start-6 col-end-8 flex flex-row justify-evenly inline pb-3b">
        <Link to="https://www.instagram.com/mesogheo/?hl=en" target="_blank" rel="noopener noreferrer">
          {/* <Instagram color={'#FFFFFF'} /> */}
          <img src={instagramIcon} alt="instagram icon" className="w-3b "/>
        </Link>
        <Link to="https://www.facebook.com/Mesogheo" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="facebook icon" className="w-3b ml-1"/>
          {/* <Facebook color={'#FFFFFF'} /> */}
        </Link>
      </div>

    </footer>
  );
}
export default Footer;