import React from 'react';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import room1 from '../images/hero_image.jpg';

export default function SimpleSlider(photos) {
  
  var settings = {
    className: "col-span-full",
    accesibility: false,
    arrows: false,
    dots: true,
    dotsClass: "",
    infinite: true,
    slickPrev: false,
    speed: 500,
    swipe: true,
    autoplaySpeed:3000,
    autoplay: true,
    fade: false,
    centerMode: true,
    // customPaging
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 1025,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   }
    //   ]
  };
  return (
    <Slider {...settings}>
      {/* photos.forEach((photo) => {
        return (<div></div>);
      }); */}
      <div>
        <img src={room1} alt="dfg"/>
      </div>
      <div>
        <img src={room1} alt="dfg"/>
      </div>
      <div>
      <img src={room1} alt="dfg"/>
      </div>
      <div>
        <img src={room1} alt="dfg"/>
      </div>
    </Slider>
  );
}