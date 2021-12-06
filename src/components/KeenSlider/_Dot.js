import { useState } from "react";
import {ReactComponent as DotActiveImg} from "../../images/carousel-navigation/dot-active.svg";
import {ReactComponent as DotImg} from "../../images/carousel-navigation/dot.svg";

const Dot = ({ active, onClick }) => {
  const [isHovered, setHovered] = useState(false);
  let intViewportWidth = window.innerWidth;
  const textColor = isHovered ? "text-pink" : "";
  const textColorWide = isHovered ? "text-pink" : "";
  const toggleHover = () => setHovered(!isHovered);

  const touch = (e) => {
    e.preventDefault();
    onClick();
  }

  if (intViewportWidth<1024){
    return active ? (
      <DotActiveImg
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColor}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onTouchEnd={touch}
      />
    ) : (
      <DotImg
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColor}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onTouchEnd={touch}
      />
    );
  }
    return active ? (
      <DotActiveImg
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColorWide}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onTouchEnd={touch}
      />
    ) : (
      <DotImg
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColorWide}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onTouchEnd={touch}
      />
    );
  
}

export default Dot;

// && (intViewportWidth < 1440)