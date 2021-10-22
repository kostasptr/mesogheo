import { useState } from "react";

import {ReactComponent as DotActive} from "../images/carousel-navigation/dot-active.svg";
import {ReactComponent as Dot} from "../images/carousel-navigation/dot.svg";

const KeenSliderDot = ({ active, key, onClick }) => {
  const [isHovered, setHovered] = useState(false);
  const textColor = isHovered ? "text-pink" : "text-22_green";
  const toggleHover = () => setHovered(!isHovered);

  return active ? (
    <DotActive
      key={key}
      className={`cursor-pointer ${textColor}`}
      onClick={onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    />
  ) : (
    <Dot
      key={key}
      className={`cursor-pointer ${textColor}`}
      onClick={onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    />
  );
}

export default KeenSliderDot;