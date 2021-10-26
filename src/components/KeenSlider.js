import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useLocation } from "react-router-dom";

import KeenSliderDot from "./KeenSliderDot";

const KeenSlider = ({ imagesArray, title }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const pathname = useLocation().pathname;
  const isHome = pathname === "/";

  // Purge, please include the following classes
  // w-1/2 w-1/3 w-1/4

  return (
    <div className="col-span-full mb-2 lg:mb-5a " id={isHome ? "rooms" : ''}>
      <div className="navigation-wrapper mb-2 md:mb-3b lg:mb-5a ">
        <div ref={sliderRef} className="keen-slider w-screen">
          {imagesArray.map((images, idx) => (
            <div
              key={idx}
              className="keen-slider__slide"
            >
              {images.map(
                (image, idx2) => {
                  let htmlCode = (
                    <img key={idx2} src={image.imgUrl} alt={image.alt} className={`${images.length === 1 ? 'w-full' : `w-1/${images.length}`} inline`}/>
                  );
                  return htmlCode;
                }
              )}
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-medium text-2.5xl text-92_green text-opacity-60 tracking-xlwidest leading-tight md:text-f3.25 md:font-medium md:leading-height67 md:tracking-sp20 lg:text-f4 lg:tracking-sp28 lg:leading-height66">{title || images[0].title}</p>
            </div>
          ))}
        </div>
      </div>
      {slider && (
        <div className="flex justify-center space-x-0.5 lg:space-x-2">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return <KeenSliderDot
                      active={currentSlide === idx} key={idx} 
                      onClick={() => {
                        slider.moveToSlideRelative(idx)
                      }}
                    />;
          })}
        </div>
      )}
    </div>
  )
};

export default KeenSlider;
