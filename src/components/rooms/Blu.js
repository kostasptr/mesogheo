import React from 'react';
import KeenSlider from '../KeenSlider';
import Roomlinks from "./Roomlinks";
import Amenities from "./Amenities";
import blu_1 from '../../images/Blu/blu_1.jpg';
import blu_2 from '../../images/Blu/blu_2.jpg';
import blu_3 from '../../images/Blu/blu_3.jpg';
import blu_4 from '../../images/Blu/blu_4.jpg';
import blu_5 from '../../images/Blu/blu_5.jpg';

const Blu = () => {
  const imagesArray = [
    [{
      imgUrl: blu_1,
      alt: ''
    }],
    [{
      imgUrl: blu_2,
      alt: ''
    }],
    [
      {
        imgUrl: blu_3,
        alt: ''
      },{
        imgUrl: blu_4,
        alt: ''
      }
    ],
    [{
      imgUrl: blu_5,
      alt: ''
    }]
  ];

  return (
    <>
      <KeenSlider imagesArray={imagesArray} title="BLU" />
      <div className="grid grid-cols-12 gap-x-2 mx-1 mb-5 md:mx-7 md:pb-0 md:mb-56 lg:mx-4c lg:gap-x-4 lg:mb-72 sm2:gap-x-1 sm2:mx-10 sm2:mb-67 sm3:gap-x-8 sm3:mx-16 sm3:mb-75">
        <Roomlinks />
        <p className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light mb-2 text-small12 text-02_green md:mb-4b md:text-xl md:leading-7 lg:text-2xl lg:leading-8 lg:mb-5c sm2:col-start-3 sm2:col-end-11 sm2:mb-5aa sm3:col-start-4 sm3:col-end-10 sm3:text-f26 sm3:leading-height36 sm3:font-light sm3:mb-5a2">
        The only room to have a bathtub for relaxing selfcare time & a big window with a mesmerizing view on the valley, Blu is definitely our precious jewel.
        </p>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between md:col-end-8" />
      </div>
    </>
  );
}
export default Blu;