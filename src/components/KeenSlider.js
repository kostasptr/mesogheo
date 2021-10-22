import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useLocation } from "react-router-dom";

const KeenSlider = ({ imagesArray }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const pathname = useLocation().pathname;
  const isHome = pathname === "/" || pathname === "/home";

  return (
    <div className="col-span-full" id={isHome ? "rooms" : ''}>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider w-screen">
          {imagesArray.map((images, idx) => (
            <div
              key={idx}
              className="keen-slider__slide"
            >
              {images.map(
                (image, idx2) => (
                  <img key={idx2} src={image.imgUrl} alt={image.alt} className={`w-${images.length === 1 ? 'full' : `1/${images.length}`} inline`}/>
                )
              )}
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
