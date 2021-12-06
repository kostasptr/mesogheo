import { useRef, useState } from "react";

const HoverPink = ({ text }) => {
  const [isHovered, setHovered] = useState(false);
  const textColor = isHovered ? "text-pink" : "";
  const toggleHover = () => setHovered(!isHovered);

  const linkRef = useRef(null);
  const touch = (e) => {
    e.preventDefault();
    linkRef.current.click();
  }

  return (
    <span className={textColor}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onTouchEnd={touch}
          ref={linkRef}>
      {text}
    </span>
  );
};

export default HoverPink;