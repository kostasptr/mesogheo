import React from 'react';
import KeenSlider from '../KeenSlider';
import Roomlinks from "./Roomlinks";
import Amenities from "./Amenities";
import arizona_1 from '../../images/Arizona/arizona_1.jpg';
import arizona_2 from '../../images/Arizona/arizona_2.jpg';
import arizona_3 from '../../images/Arizona/arizona_3.jpg';
import arizona_4 from '../../images/Arizona/arizona_4.jpg';
import arizona_5 from '../../images/Arizona/arizona_5.jpg';
import arizona_6 from '../../images/Arizona/arizona_6.jpg';
import arizona_7 from '../../images/Arizona/arizona_7.jpg';
import arizona_8 from '../../images/Arizona/arizona_8.jpg';

const Arizona = () => {
  const imagesArray = [
    [{
      imgUrl: arizona_1,
      alt: ''
    }],
    [{
      imgUrl: arizona_2,
      alt: ''
    }],
    [{
      imgUrl: arizona_3,
      alt: ''
    }],
    [{
      imgUrl: arizona_4,
      alt: ''
    }],
    [{
      imgUrl: arizona_5,
      alt: ''
    }],
    [{
      imgUrl: arizona_6,
      alt: ''
    }],
    [
      {
        imgUrl: arizona_7,
        alt: ''
      },{
        imgUrl: arizona_8,
        alt: ''
      }
    ]
  ];

  return (
    <>
      <KeenSlider imagesArray={imagesArray} title="ARIZONA" />
      <div className="grid grid-cols-12 gap-x-2 px-1 mb-5 md:px-0 md:mx-7 md:pb-0 md:mb-56 lg:mx-4c lg:gap-x-4 lg:mb-72">
        <Roomlinks />
        <p className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light mb-2 text-small12 text-02_green md:mb-4b md:text-xl md:leading-7 lg:text-2xl lg:leading-8 lg:mb-5c">
          Room 'Arizona' is our cozy nest, has a large bathroom & a private patio where you can enjoy your meals under the warm south Italian sun.
        </p>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between md:col-end-8" />
      </div>
    </>
  );
}
export default Arizona;