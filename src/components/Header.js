import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from './NavLink';
import {ReactComponent as ReactLogo} from '../images/logo_mesogheo.svg';

const Header = () => {
  const [isHovered, setHovered] = useState(false);
  const textColor = isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  return (
    <header className="bg-92_green">
      <nav className="grid grid-cols-12 px-1 gap-x-2 md:mx-7 md:px-0 md:gap-x-2 lg:mx-4c lg:gap-x-4 sm2:gap-x-1 sm2:mx-10 sm3:gap-x-8 sm3:mx-16 sm3:justify-items-stretch">
        <div className={`col-start-4 col-end-10 block mx-auto mt-5 mb-3b md:mb-9 md:mt-6b lg:col-start-3 lg:col-end-11 lg:col-span-8 lg:mt-16 lg:mb-5e sm2:col-start-2 sm2:col-end-7 sm2:mb-5dd sm3:col-start-2 sm3:col-end-6 sm3:text-f36 sm3:mb-67 ${textColor}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <Link to='/'>
            <ReactLogo className="w-full " />
          </Link>
        </div>
        <div className="hidden sm2:flex sm2:flex-col sm2:col-start-7 sm2:col-end-12 sm2:mt-111 sm3:inline sm3:col-start-8 sm3:col-end-12 sm3:mt-109">
          <p className="sm2:font-serif sm2:font-normal sm2:text-xl sm2:leading-7 sm2:text-center sm3:font-serif sm3:font-normal sm3:text-small22 sm3:leading-8 sm3:text-center">
            <a href="https://www.google.com/maps/place/Mesogheo/@41.167586,14.4935449,17z/data=!4m13!1m7!3m6!1s0x133a45678f7637d9:0xf26876cd24a547e0!2zVmlhIFZhbGxlIENvcnJhZG8sIDQwLCA4MjAzMCBNZWxpenphbm8gQk4sIM6Zz4TOsc67zq_OsQ!3b1!8m2!3d41.1659949!4d14.4961413!3m4!1s0x133a45678fb976d1:0xa29b46e8794df151!8m2!3d41.1684235!4d14.4943019" target="_blank" rel="noopener noreferrer" className="hover:text-pink">valle Corrado 40, 82030 Melizzano, Campania, Italy</a>
          </p>
          <p className="sm2:font-serif sm2:font-normal sm2:text-xl sm2:leading-7 sm2:text-center sm3:font-serif sm3:font-normal sm3:text-small22 sm3:leading-8 sm3:text-center ">
            <a href="tel:+39 3887842886" target="_blank" rel="noopener noreferrer" className="hover:text-pink">phone number: +39 3887842886</a>
          </p>
          <p className="sm2:font-serif sm2:font-normal sm2:text-xl sm2:leading-7 sm2:text-center sm3:font-serif sm3:font-normal sm3:text-small22 sm3:leading-8 sm3:text-center ">
            <a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink">e-mail: mesogheo@googlemail.com</a>
          </p>
        </div>   
        <div className="col-start-3 col-end-11 flex justify-between pb-4 md:mb-8 md:pb-0 lg:mb-10 sm2:col-start-2 sm2:col-end-7 sm2:mb-5b2 sm3:col-start-2 sm3:col-end-6 sm3:mb-6">
          <NavLink link="/#rooms" hash={true} text="ROOMS"/>
          <NavLink link="/about" text="ABOUT" />
          <NavLink link="/book" text="BOOK" cta={true} />
        </div>
      </nav>
    </header>
  );
}

export default Header;