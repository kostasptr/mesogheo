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
      <nav className="grid grid-cols-12 px-1 gap-x-2">
        <div className={`col-start-4 col-end-10 block mx-auto mt-5 mb-3b ${textColor}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <Link to='/'>
            <ReactLogo className="w-full" />
          </Link>
        </div>
        <div className="col-start-3 col-end-11 flex justify-between pb-4">
          <NavLink link="/#rooms" hash={true} text="ROOMS" />
          <NavLink link="/about" text="ABOUT" />
          <NavLink link="/book" text="BOOK" cta={true} />
        </div>      
      </nav>
    </header>
  );
}

export default Header;