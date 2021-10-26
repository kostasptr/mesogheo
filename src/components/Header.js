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
      <nav className="grid grid-cols-12 px-1 gap-x-2 md:mx-7 md:px-0 md:gap-x-2 lg:mx-4c lg:gap-x-4 sm2:gap-x-1 sm2:mx-10">
        <div className={`col-start-4 col-end-10 block mx-auto mt-5 mb-3b md:mb-9 md:mt-6b lg:col-start-3 lg:col-end-11 lg:col-span-8 lg:mt-16 lg:mb-5e sm2:mb-5dd ${textColor}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <Link to='/'>
            <ReactLogo className="w-full " />
          </Link>
        </div>
        <div className="col-start-3 col-end-11 flex justify-between pb-4 md:mb-8 md:pb-0 lg:mb-10 sm2:mb-5b2">
          <NavLink link="/#rooms" hash={true} text="ROOMS"/>
          <NavLink link="/about" text="ABOUT" />
          <NavLink link="/book" text="BOOK" cta={true} />
        </div>      
      </nav>
    </header>
  );
}

export default Header;