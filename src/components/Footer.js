import React from 'react';
// import { Facebook, Instagram } from 'react-ionicons';
import facebookIcon from "../images/logo-facebook.svg";
import instagramIcon from "../images/logo-instagram2.png";

function Footer() {

  return (

    <footer className="grid grid-cols-12 px-1 gap-x-2 bg-22_green flex flex-column items-center">

      <div className="col-start-3 col-end-11 block font-serif text-small font-normal not-italic leading-smallf  tracking-normal  text-center text-92_green pt-4 pb-2">
        <a href="https://www.google.com/maps/place/Via+Valle+Corrado,+40,+82030+Melizzano+BN,+%CE%99%CF%84%CE%B1%CE%BB%CE%AF%CE%B1/@41.1659949,14.4939526,17z/data=!3m1!4b1!4m5!3m4!1s0x133a45678f7637d9:0xf26876cd24a547e0!8m2!3d41.1659949!4d14.4961413" target="_blank">
          <p className="hover:text-pink">Valle Corrado 40, 82030 Melizzano, Campania, Italy</p>
        </a>
        <a href="tel:+39 3887842886" target="_blank">
          <p className="hover:text-pink">phone number: +39 3887842886</p>
        </a>
        <a href = "mailto: mesogheo@googlemail.com" target="_blank">
          <p className="mb-2 hover:text-pink">e-mail: mesogheo@googlemail.com</p>
        </a>
        <a href="/faq" >
          <p className="hover:text-pink">FAQ</p>
        </a>
      </div>

      <div className="col-start-6 col-end-8 flex flex-row justify-evenly inline pb-3b">
        <a href="https://www.instagram.com/mesogheo/?hl=en" target="_blank">
          {/* <Instagram color={'#FFFFFF'} /> */}
          <img src={instagramIcon} alt="instagram icon" className="w-3b ml-1"/>
        </a>
        <a href="https://www.facebook.com/Mesogheo" target="_blank">
          <img src={facebookIcon} alt="facebook icon" className="w-3b"/>
          {/* <Facebook color={'#FFFFFF'} /> */}
        </a>
      </div>

    </footer>
  );
}
export default Footer;