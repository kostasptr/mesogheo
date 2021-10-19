import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo_mesogheo.png';

function Header() {

  return (
    <header className="App-Header">
      <nav className="grid grid-cols-12 px-1 gap-x-2 bg-92_green">
        <div className="col-start-4 col-end-10 block mx-auto mt-5 mb-3b">
          <a href="/">
            <img src={logo} alt="logo Mesogheo"></img>
          </a>
        </div>
        <div className="col-start-3 col-end-11 flex justify-between pb-4">
          {/* <ul> */}
            <li className="inline font-serif text-base not-italic font-normal leading-5 tracking-normal text-center text-22_green">
            <Link to="rooms"> ROOMS </Link></li>
            <li className="inline font-serif  text-base  not-italic font-normal leading-5 tracking-normal text-center text-22_green"><Link to="about"> ABOUT </Link></li>
            <li className="inline font-serif  text-base  not-italic font-normal leading-5 tracking-normal text-center text-pink"><Link to="book"> BOOK </Link></li>
          {/* </ul> */}
        </div>
      
      </nav>
    </header>
  );
}
export default Header;