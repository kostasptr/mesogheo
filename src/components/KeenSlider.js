import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useLocation } from "react-router-dom";

const KeenSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const path = useLocation().pathname;
  const isHome = path === "/" || path === "/home";

  return (
    <div className="col-span-full" id={isHome ? "rooms" : ''}>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider w-screen">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className="keen-slider__slide"
            >
              <img src={imgUrl} alt="dfg" className="w-full"/>
            </div>
          ))}
        </div>
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </div>
  )
};

export default KeenSlider;
