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

function Viola() {

      const images = [
        viola_1,
        viola_2,
        viola_3,
        viola_4,
        viola_5,
        viola_6,
        viola_7,
        viola_8,
        viola_9
  ];

  return (
    <>

      <KeenSlider images={images} />

      <div className="grid grid-cols-12 gap-x-2 px-1 pb-3b pt-3b">

        <Roomlinks />
        <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light tracking-normal">
          <p className="text-small12 text-22_green">VIOLA:</p>
          <p className="text-small12 text-22_green">Loft ‘Viola’ with the romantic bedroom up the stairs to the attic & a bathroom with double shower is the perfect combination for a relaxed & sumptuous getaway. </p>
        </div>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between" />
        
      </div>

    </>
  );
}
export default Viola;