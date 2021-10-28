import React from 'react';
import KeenSlider from '../KeenSlider';
import Roomlinks from "./Roomlinks";
import Amenities from "./Amenities";
import verde_1 from '../../images/Verde/verde_1.jpg';
import verde_2 from '../../images/Verde/verde_2.jpg';
import verde_3 from '../../images/Verde/verde_3.jpg';
import verde_4 from '../../images/Verde/verde_4.jpg';
import verde_5 from '../../images/Verde/verde_5.jpg';
import verde_6 from '../../images/Verde/verde_6.jpg';
import verde_7 from '../../images/Verde/verde_7.jpg';
import verde_8 from '../../images/Verde/verde_8.jpg';

const Verde = () => {
  const imagesArray = [
    [{
      imgUrl: verde_1,
      alt: 'inside space of Verde room',
      shadow: true
    }],
    [{
      imgUrl: verde_2,
      alt: 'fireplace of Verde room'
    }],
    [
      {
        imgUrl: verde_3,
        alt: 'living room details of Verde room'
      },{
        imgUrl: verde_4,
        alt: 'stairs to the loft bedroom of Verde room'
      }
    ],
    [{
      imgUrl: verde_5,
      alt: 'loft bedroom of Verde room'
    }],
    [
      {
        imgUrl: verde_6,
        alt: 'fridge of Verde room'
      },
      {
        imgUrl: verde_7,
        alt: 'bathroom of Verde room'
      }
    ],
    [{
      imgUrl: verde_8,
      alt: 'olive trees of Mesogheo'
    }]
  ];

  return (
    <>
      <KeenSlider imagesArray={imagesArray} title="VERDE" />
      <div className="grid grid-cols-12 gap-x-2 mx-1 mb-4 md:mx-7 md:pb-0 md:mb-56 lg:mx-4c lg:gap-x-4 lg:mb-72 sm2:gap-x-1 sm2:mx-10 sm2:mb-67 sm3:gap-x-8 sm3:mx-16 sm3:mb-75">
        <Roomlinks />
        <p className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light mb-2 text-small12 text-02_green md:mb-4b md:text-xl md:leading-7 lg:text-2xl lg:leading-8 lg:mb-5c sm2:col-start-3 sm2:col-end-11 sm2:mb-5aa sm3:col-start-4 sm3:col-end-10 sm3:text-f26 sm3:leading-height36 sm3:font-light sm3:mb-5a2">
        The ideal place for cocooning yourself from routine while siting on a comfortable sofa in front of the fireplace. Verde is a garden view room, with a double shower cabin & a loft bedroom.
        </p>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between md:col-end-8" />
      </div>
    </>
  );
}
export default Verde;