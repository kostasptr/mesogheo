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
      alt: ''
    }],
    [{
      imgUrl: verde_2,
      alt: ''
    }],
    [
      {
        imgUrl: verde_3,
        alt: ''
      },{
        imgUrl: verde_4,
        alt: ''
      }
    ],
    [{
      imgUrl: verde_5,
      alt: ''
    }],
    [
      {
        imgUrl: verde_6,
        alt: ''
      },
      {
        imgUrl: verde_7,
        alt: ''
      }
    ],
    [{
      imgUrl: verde_8,
      alt: ''
    }]
  ];

  return (
    <>
      <KeenSlider imagesArray={imagesArray} title="VERDE" />
      <div className="grid grid-cols-12 gap-x-2 px-1 pb-3b pt-3b">
        <Roomlinks />
        <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light  tracking-normal">
          <p className="text-small12 text-22_green">Loft ‘Verde’ with the romantic bedroom up the stairs to the attic & a bathroom with double shower is the perfect combination for a relaxed & sumptuous getaway. </p>
        </div>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between" />
      </div>
    </>
  );
}
export default Verde;