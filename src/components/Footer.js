import React from 'react';
// import { Facebook, Instagram } from 'react-ionicons';
import facebookIcon from "../images/logo-facebook.svg";
import instagramIcon from "../images/logo-instagram2.png";

function Footer() {

  return (

    <footer className="grid grid-cols-12 px-1 gap-x-2 bg-22_green flex flex-column items-center">

      <div className="col-start-3 col-end-11 block font-serif text-small font-normal not-italic leading-smallf  tracking-normal  text-center text-92_green pt-4 pb-2">
        <a href="https://www.google.com/maps/place/Via+Valle+Corrado,+2,+82030+Melizzano+BN,+%CE%99%CF%84%CE%B1%CE%BB%CE%AF%CE%B1/@41.1659802,14.4957314,19.5z/data=!4m5!3m4!1s0x133a45678fc65a1d:0x30db5a78ddd78a6e!8m2!3d41.1659152!4d14.4962723">
          <p>valle Corrado 2, 82030 Melizzano, Campania, Italy</p>
        </a>
        <a href="tel:+39 3887842886">
          <p>phone number: +39 3887842886</p>
        </a>
        <a href = "mailto: mesogheo@googlemail.com">
          <p className="mb-2">e-mail: mesogheo@googlemail.com</p>
        </a>
        <a href="/faq">
          <p>FAQ</p>
        </a>
      </div>

      <div className="col-start-6 col-end-8 flex flex-row justify-evenly inline pb-3b">
        <a href="https://www.facebook.com/Mesogheo">
          <img src={facebookIcon} alt="facebook icon" className="w-3b"/>
          {/* <Facebook color={'#FFFFFF'} /> */}
        </a>
        <a href="https://www.instagram.com/mesogheo/?hl=en">
          {/* <Instagram color={'#FFFFFF'} /> */}
          <img src={instagramIcon} alt="instagram icon" className="w-3b ml-1"/>
        </a>
      </div>

    </footer>
  );
}
export default Footer;