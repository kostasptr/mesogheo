import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({link, text, cta=false}) => {
  const [isHovered, setHovered] = useState(false);
  const textColor = cta || isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  const linkRef = useRef(null);
  const touch = (e) => {
    e.preventDefault();
    linkRef.current.click();
  }

  const location = useLocation();

  return (
    <li
      className={`inline ${textColor} ${location.pathname===link ? "line-through" : ""}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onTouchEnd={touch}>
        <Link ref={linkRef} to={link}>{text}</Link>
    </li>
  );
};

export default NavLink;