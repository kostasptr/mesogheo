import React from 'react';
import KeenSlider from '../KeenSlider';
import Roomlinks from "./Roomlinks";
import Amenities from "./Amenities";
import viola_1 from '../../images/Viola/viola_1.jpg';
import viola_2 from '../../images/Viola/viola_2.jpg';
import viola_3 from '../../images/Viola/viola_3.jpg';
import viola_4 from '../../images/Viola/viola_4.jpg';
import viola_5 from '../../images/Viola/viola_5.jpg';
import viola_6 from '../../images/Viola/viola_6.jpg';
import viola_7 from '../../images/Viola/viola_7.jpg';
import viola_8 from '../../images/Viola/viola_8.jpg';
import viola_9 from '../../images/Viola/viola_9.jpg';

const Viola = () => {
  const imagesArray = [
    [
      {
        imgUrl: viola_1,
        alt: ''
      },{
        imgUrl: viola_2,
        alt: ''
      }
    ],
    [{
      imgUrl: viola_3,
      alt: ''
    }],
    [{
      imgUrl: viola_4,
      alt: ''
    }],
    [
      {
        imgUrl: viola_5,
        alt: ''
      },{
        imgUrl: viola_6,
        alt: ''
      }
    ],
    [
      {
        imgUrl: viola_7,
        alt: ''
      },{
        imgUrl: viola_8,
        alt: ''
      }
    ],
    [{
      imgUrl: viola_9,
      alt: ''
    }]
  ];

  return (
    <>
      <KeenSlider imagesArray={imagesArray} title="VIOLA" />
      <div className="grid grid-cols-12 gap-x-2 px-1 mb-5 md:px-0 md:mx-7 md:pb-0 md:mb-56 lg:mx-4c lg:gap-x-4 lg:mb-72 sm2:gap-x-1 sm2:mx-10 sm2:mb-67 sm3:gap-x-8 sm3:mx-16 sm3:mb-75">
        <Roomlinks />
        <p className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light mb-2 text-small12 text-02_green md:mb-4b md:text-xl md:leading-7 lg:text-2xl lg:leading-8 lg:mb-5c sm2:col-start-3 sm2:col-end-11 sm2:mb-5aa sm3:col-start-4 sm3:col-end-10 sm3:text-f26 sm3:leading-height36 sm3:font-light sm3:mb-5a2">
        Viola is a garden view room with a lounge, a double shower cabin & a loft bedroom that make the perfect combination for a relaxed & sumptuous getaway.
        </p>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between" />
      </div>
    </>
  );
}
export default Viola;