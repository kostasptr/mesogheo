import React from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import room1 from '../images/hero_image.jpg';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <Slider {...settings}>
    <div className="grid grid-cols-12 gap-x-2">
      <div className="col-span-12 w-screen pb-4">
        <img src={room1} alt="dfg"/>
      </div>
      <div className="col-span-12 w-screen pb-4">
        <img src={room1} alt="dfg"/>
      </div>
      <div className="col-span-12 w-screen pb-4">
      <img src={room1} alt="dfg"/>
      </div>
      <div className="col-span-12 w-screen pb-4">
        <img src={room1} alt="dfg"/>
      </div>
    </div>
    </Slider>
  );
}