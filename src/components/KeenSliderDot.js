import { useState } from "react";
import {ReactComponent as DotActive} from "../images/carousel-navigation/dot-active.svg";
import {ReactComponent as Dot} from "../images/carousel-navigation/dot.svg";

const KeenSliderDot = ({ active, onClick }) => {
  const [isHovered, setHovered] = useState(false);
  let intViewportWidth = window.innerWidth;
  const textColor = isHovered ? "text-pink" : "text-22_green";
  const textColorWide = isHovered ? "text-pink" : "text-92_green";
  const toggleHover = () => setHovered(!isHovered);
  if (intViewportWidth<1440){
    return active ? (
      <DotActive
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColor}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
    ) : (
      <Dot
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColor}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
    );
  }
    return active ? (
      <DotActive
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColorWide}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
    ) : (
      <Dot
        className={`cursor-pointer w-2.5 md:w-3 lg:w-4 ${textColorWide}`}
        onClick={onClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
    );
  
}

export default KeenSliderDot;

// && (intViewportWidth < 1440)