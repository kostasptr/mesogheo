import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from './NavLink';
import {ReactComponent as ReactLogo} from '../images/logo_mesogheo.svg';

const Header = () => {
  const [isHovered, setHovered] = useState(false);
  const textColor = isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  return (
    <header className="App-Header">
      <nav className="grid grid-cols-12 px-1 gap-x-2 bg-92_green">
        <div className={`col-start-4 col-end-10 block mx-auto mt-5 mb-3b ${textColor}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <Link to='/home'>
            {/* <img src={logo} alt="logo Mesogheo"/> */}
            <ReactLogo />
          </Link>
        </div>
        <div className="col-start-3 col-end-11 flex justify-between pb-4">
          <NavLink link="/home#rooms" hash={true} text="ROOMS" />
          <NavLink link="/about" text="ABOUT" />
          <NavLink link="/book" text="BOOK" cta={true} />
        </div>      
      </nav>
    </header>
  );
}

export default Header;