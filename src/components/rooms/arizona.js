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
  const images = [
    arizona_1,
    arizona_2,
    arizona_3,
    arizona_4,
    arizona_5,
    arizona_6,
    arizona_7,
    arizona_8
  ];

  return (
    <>
      <KeenSlider images={images} />
      <div className="grid grid-cols-12 gap-x-2 px-1 mb-5 pt-3b">
        <Roomlinks />
        <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light tracking-normal mb-3">
          <p className="text-small12 text-22_green">ARIZONA ROOM:</p>
          <p className="text-small12 text-22_green ">Room 'Arizona' is our cozy nest, has a large bathroom & a private patio where you can enjoy your meals under the warm south Italian sun. </p>
        </div>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between" />
      </div>
    </>
  );
}
export default Arizona;