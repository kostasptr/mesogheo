import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavLink = ({link, hash=false, text, cta=false}) => {
  const [isHovered, setHovered] = useState(false);
  const textColor = cta || isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  const pathname = useLocation().pathname;

  return (
    <li className={`inline font-serif text-base not-italic font-normal leading-5 tracking-normal text-center ${textColor} ${pathname===link ? "line-through" : ""}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      {hash ? <HashLink smooth to={link}> {text} </HashLink> : <Link to={link}> {text} </Link>}
    </li>
  );
};

export default NavLink;