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
      <KeenSlider imagesArray={imagesArray} />
      <div className="grid grid-cols-12 gap-x-2 px-1 pb-3b pt-3b">
        <Roomlinks />
        <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light  tracking-normal">
          <p className="text-small12 text-22_green">BLU:</p>
          <p className="text-small12 text-22_green">Room 'Blu' is our jewel, the only one to have a bathtub for relaxing self-care time & a big window with a mesmerizing view on the valley. </p>
        </div>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between" />
      </div>
    </>
  );
}
export default Blu;