import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from './_NavLink';
import {ReactComponent as ReactLogo} from '../images/logo_mesogheo.svg';

const Header = () => {
  const [isHovered, setHovered] = useState(false);
  const textColor = isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  const linkRef = useRef(null);
  const touch = (e) => {
    e.preventDefault();
    linkRef.current.click();
  }

  return (
    <header className="mt-4 mb-2 bg-92_green md:mb-3 sm2:mb-3 sm3:mb-2">
      <nav className="mesogheo-grid md:px-0 sm3:justify-items-stretch">
        
        <div className={`col-start-4 col-end-10 md:col-start-5 md:col-end-9 2lg:col-start-1 2lg:col-end-4 w-full mb-3b 2lg:mb-3b sm3:mb-4d ${textColor}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onTouchEnd={touch}>
          <Link ref={linkRef} to='/'>
            <ReactLogo />
          </Link>
        </div>

        <div className="hidden font-serif text-base font-normal text-center 2lg:flex 2lg:flex-col 2lg:col-start-8 sm2:col-start-8 sm3:col-start-9 2lg:col-end-13 2lg:justify-center 2lg:items-end text-22_green sm2:text-lg sm3:text-small22 leading-height28 sm3:leading-8">
          <div className="flex flex-col">
            <a href="https://www.google.com/maps/place/Mesogheo/@41.167586,14.4935449,17z/data=!4m13!1m7!3m6!1s0x133a45678f7637d9:0xf26876cd24a547e0!2zVmlhIFZhbGxlIENvcnJhZG8sIDQwLCA4MjAzMCBNZWxpenphbm8gQk4sIM6Zz4TOsc67zq_OsQ!3b1!8m2!3d41.1659949!4d14.4961413!3m4!1s0x133a45678fb976d1:0xa29b46e8794df151!8m2!3d41.1684235!4d14.4943019" target="_blank" rel="noopener noreferrer" className="hover:text-pink">valle Corrado 40, 82030 Melizzano, Campania, Italy</a>
          
            <a href="tel:+393391591396" target="_blank" rel="noopener noreferrer" className="hover:text-pink">phone number: +39 339 15 91 396</a>
          
            <a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink">e-mail: mesogheo@googlemail.com</a>
          </div>
        </div>  

        <div className="flex justify-between col-start-3 col-end-11 font-serif text-base not-italic font-normal leading-5 tracking-normal text-center md:col-start-4 md:col-end-10 2lg:col-start-1 2lg:col-end-5 md:text-2xl lg:text-t28 2lg:text-f26 sm2:text-base2 sm3:text-f36 lg:leading-height36 sm2:leading-height41 sm3:leading-height46">
          <NavLink link="/rooms" text="ROOMS"/>
          <NavLink link="/about" text="ABOUT" />
          <NavLink link="/book" text="BOOK" cta={true} />
        </div>

      </nav>
    </header>
  );
}

export default Header;
