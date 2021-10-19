import React from 'react';
// import { Facebook, Instagram } from 'react-ionicons';
import facebookIcon from "../images/logo-facebook.svg";
import instagramIcon from "../images/logo-instagram2.png";

function Footer() {

  return (

    <footer className="grid grid-cols-12 px-1 gap-x-2 bg-22_green flex flex-column items-center">

      <div className="col-start-3 col-end-11 block font-serif text-small font-normal not-italic leading-smallf  tracking-normal  text-center text-92_green pt-4 pb-2">
        <p>valle Corrado 2, 82030 Melizzano, Campania, Italy</p>
        <p>phone number: +39 3887842886</p>
        <p className="mb-2">e-mail: mesogheo@googlemail.com</p>
        <a href="/">
          <p>FAQ</p>
        </a>
      </div>

      <div className="col-start-6 col-end-8 flex flex-row justify-evenly inline pb-3b">
        <a href="/">
          <img src={facebookIcon} alt="facebook icon" className="w-3b"/>
          {/* <Facebook color={'#FFFFFF'} /> */}
        </a>
        <a href="/">
          {/* <Instagram color={'#FFFFFF'} /> */}
          <img src={instagramIcon} alt="instagram icon" className="w-3b"/>
        </a>
      </div>

    </footer>
  );
}
export default Footer;