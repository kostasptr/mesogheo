import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({link, text, cta=false}) => {
  const [isHovered, setHovered] = useState(false);
  const textColor = cta || isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  const pathname = useLocation().pathname;

  return (
    <li className={`inline font-serif text-base not-italic font-normal leading-5 tracking-normal text-center ${textColor} ${pathname===link ? "line-through" : ""}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Link to={link}> {text} </Link>
    </li>
  );
};

export default NavLink;