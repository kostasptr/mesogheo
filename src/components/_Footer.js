import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as FacebookIcon} from "../images/logo-facebook.svg";
import {ReactComponent as InstagramIcon} from "../images/logo-instagram.svg";

const Footer = () => {
  const [isInHovered, setInHovered] = useState(false);
  const [isFbHovered, setFbHovered] = useState(false);
  const [isFAQHovered, setFAQHovered] = useState(false);
  const inTextColor = isInHovered ? "text-pink" : "text-92_green";
  const fbTextColor = isFbHovered ? "text-pink" : "text-92_green";
  const faqTextColor = isFAQHovered ? "text-pink" : "text-92_green";
  const inToggleHover = () => setInHovered(!isInHovered);
  const fbToggleHover = () => setFbHovered(!isFbHovered);
  const faqToggleHover = () => setFAQHovered(!isFAQHovered);
  
  const faqRef = useRef(null);
  const inRef = useRef(null);
  const fbRef = useRef(null);
  const touchFAQ = (e) => {
    e.preventDefault();
    faqRef.current.click();
  }
  const touchIn = (e) => {
    e.preventDefault();
    inRef.current.click();
  }
  const touchFb = (e) => {
    e.preventDefault();
    fbRef.current.click();
  }

  return (
    <footer className="pt-4 md:pt-4d lg:pt-5c 2lg:pt-4d pb-3b md:pb-4d lg:pb-5c 2lg:pb-4d">
      <div className="mesogheo-grid flex-shrink-0 flex-column items-center">
        <div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11 2lg:col-start-1 2lg:col-end-7 font-serif text-small font-normal not-italic leading-4 tracking-normal text-center text-92_green mb-2 md:mb-3b lg:mb-4d 2lg:mb-0 md:text-lg md:leading-6 lg:text-xl lg:leading-8 2lg:text-left sm2:leading-8 sm3:text-small22">
          
          <div className="mb-2 md:mb-3b lg:mb-4d 2lg:mb-1 leading-4.5"> 
            <Link ref={faqRef} to="/faq" className={faqTextColor} onMouseEnter={faqToggleHover} onMouseLeave={faqToggleHover} onTouchEnd={touchFAQ}>FAQ</Link>  
          </div>

          <div className="leading-height18 md:leading-height30 sm3:leading-height32">
            <a href="https://www.google.com/maps/place/Mesogheo/@41.167586,14.4935449,17z/data=!4m13!1m7!3m6!1s0x133a45678f7637d9:0xf26876cd24a547e0!2zVmlhIFZhbGxlIENvcnJhZG8sIDQwLCA4MjAzMCBNZWxpenphbm8gQk4sIM6Zz4TOsc67zq_OsQ!3b1!8m2!3d41.1659949!4d14.4961413!3m4!1s0x133a45678fb976d1:0xa29b46e8794df151!8m2!3d41.1684235!4d14.4943019" target="_blank" rel="noopener noreferrer" className="hover:text-pink">valle Corrado 40, 82030 Melizzano, Campania, Italy</a><br />
            <a href="tel:+39 3887842886" target="_blank" rel="noopener noreferrer" className="hover:text-pink">phone number: +39 3887842886</a><br />
            <a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink">e-mail: mesogheo@googlemail.com</a>
          </div>
        </div>

        <div className="col-start-6 col-end-8 2lg:col-start-11 2lg:col-end-13 flex flex-row justify-between 2lg:justify-end 2lg:self-end sm2:mt-116 sm3:mt-116">
          <a href="https://www.instagram.com/mesogheo/" target="_blank" rel="noopener noreferrer" className={`w-3a md:w-5b2 lg:w-5e 2lg:mr-3 ${inTextColor}`}  ref={inRef} onMouseEnter={inToggleHover} onMouseLeave={inToggleHover} onTouchEnd={touchIn}>
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/Mesogheo" target="_blank" rel="noopener noreferrer" className={`w-3a md:w-5b2 lg:w-5e ${fbTextColor}`}  ref={fbRef} onMouseEnter={fbToggleHover} onMouseLeave={fbToggleHover} onTouchEnd={touchFb}>
            <FacebookIcon />
          </a>
        </div>
      </div>

    </footer>
  );
}
export default Footer;