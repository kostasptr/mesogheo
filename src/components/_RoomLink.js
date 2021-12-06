import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RoomLink = ({ link }) => {
  const [isHovered, setHovered] = useState(false);
  const textColor = isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  const linkRef = useRef(null);
  const touch = (e) => {
    e.preventDefault();
    linkRef.current.click();
  }

  const pathname = useLocation().pathname;

  return (
    <Link
      ref={linkRef}
      to={`/${link}`}
      className={`${textColor} ${pathname===`/${link}` ? "line-through" : ""}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onTouchEnd={touch}>
        {link.toUpperCase()}
    </Link>
  );
};

export default RoomLink;