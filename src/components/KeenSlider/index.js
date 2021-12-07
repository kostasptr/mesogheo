import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useLocation } from "react-router-dom";

import {ReactComponent as ChevronLeft} from "../../images/carousel-navigation/chevron-left.svg";
import {ReactComponent as ChevronRight} from "../../images/carousel-navigation/chevron-right.svg";
import Dot from "./_Dot";

import "./index.css";

const KeenSlider = ({ imagesArray, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
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
    <div className="col-span-full sm2:relative" id={isHome ? "rooms" : ''}>
      <div className="navigation-wrapper text-92_green text-opacity-60">
        <div ref={sliderRef} className="keen-slider w-full">
          {imagesArray.map((images, idx) => (
            <figure
              key={idx}
              className="keen-slider__slide"
            >
              {images.map(
                (image, idx2) => {
                  return (
                    <img
                      key={idx2}
                      src={image.imgUrl}
                      alt={image.alt}
                      className={`${images.length === 1 ? 'w-full' : `w-1/${images.length}`} inline`}
                    />
                  );
                }
              )}
              { title
                  ? (<figcaption className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-medium text-t28 md:text-f3.25 lg:text-4.25xl sm2:text-f3.625 sm3:text-f4.625 tracking-xlwidest md:tracking-sp20 lg:tracking-sp24 sm2:tracking-sp32 sm3:tracking-sp36 leading-tight md:leading-height67 lg:leading-height44 sm2:leading-height60 ${images[0].shadow ? 'filter drop-shadow-0.5' : ''}`}>{images[0]?.title || title}</figcaption>)
                  : (
                    <a href={images[0].title.toLowerCase()} className="absolute top-0 left-0 w-full h-full">
                      <figcaption className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-medium text-t28 md:text-f3.25 lg:text-4.25xl sm2:text-f3.625 sm3:text-f4.625 tracking-xlwidest md:tracking-sp20 lg:tracking-sp24 sm2:tracking-sp32 sm3:tracking-sp36 leading-tight md:leading-height67 lg:leading-height44 sm2:leading-height60 ${images[0].shadow ? 'filter drop-shadow-0.5' : ''}`}>{images[0]?.title || title}</figcaption>
                    </a>
                    )
              }
            </figure>
          ))}
        </div>
        {slider && (
          <div className="hidden 2lg:block">
            <ChevronLeft
              className="absolute top-1/2 left-2 sm3:left-3a transform -translate-y-1/2 h-9 sm2:h-5e sm3:h-60"
              onClick={(e) => e.stopPropagation() || slider.prev()}
            />
            <ChevronRight
              className="absolute top-1/2 right-2 sm3:right-3a transform -translate-y-1/2 h-9 sm2:h-5e sm3:h-60"
              onClick={(e) => e.stopPropagation() || slider.next()}
            />
          </div>
        )}
        {slider && (
          <div className="flex justify-center space-x-0.5 md:space-x-1.5 absolute z-10 bottom-2 -inset-x-full h-2.5 md:h-3b">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return <Dot
                        active={currentSlide === idx} key={idx} 
                        onClick={() => {
                          slider.moveToSlideRelative(idx)
                        }}
                      />;
            })}
          </div>
        )}
      </div>
    </div>
  )
};

export default KeenSlider;
