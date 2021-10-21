import React from 'react';
import { Link } from "react-router-dom";
import KeenSlider from './KeenSlider';
import viola_1 from '../../images/Viola/viola_1.jpg';
import viola_2 from '../../images/Viola/viola_2.jpg';
import viola_3 from '../../images/Viola/viola_3.jpg';
import viola_4 from '../../images/Viola/viola_4.jpg';
import viola_5 from '../../images/Viola/viola_5.jpg';
import viola_6 from '../../images/Viola/viola_6.jpg';
import viola_7 from '../../images/Viola/viola_7.jpg';
import viola_8 from '../../images/Viola/viola_8.jpg';
import viola_9 from '../../images/Viola/viola_9.jpg';
import airconditioner from '../../images/amenities/air_conditioner.svg';
import breakfast from '../../images/amenities/breakfast.svg';
import hair_dryer from '../../images/amenities/hair_dryer.svg';
import safe from '../../images/amenities/safe.svg';
import shower from '../../images/amenities/shower.svg';
import tv from '../../images/amenities/tv.svg';
import wifi from '../../images/amenities/wifi.svg';

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

      <div className="col-start-4 col-end-10 mb-1 mt-3 font-serif not-italic font-normal  flex  justify-around">
        <Link to="/arizona" >
          <p className="text-22_green text-small12 leading-4 hover:text-pink active:line-through">ARIZONA</p>
        </Link>
        <Link to="/viola" className="text-small12 text-22_green hover:text-pink active:line-through">
          <p>VIOLA</p>
        </Link>
      </div>

      <div className="col-start-4 col-end-10 mb-2 font-serif not-italic font-normal leading-4 flex justify-around">
        <Link to="/verde" className="text-small12 text-22_green hover:text-pink active:line-through pl-1">
          <p>VERDE</p>
        </Link>
        <Link to="/blu" className="text-small12 text-22_green hover:text-pink active:line-through pr-1 ">
          <p>BLU</p>
        </Link>
      </div>

      <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light tracking-normal">
        <p className="text-small12 text-22_green">VIOLA:</p>
        <p className="text-small12 text-22_green">Loft ‘Viola’ with the romantic bedroom up the stairs to the attic & a bathroom with double shower is the perfect combination for a relaxed & sumptuous getaway. </p>
      </div>

      <div className="col-start-2 col-end-9 flex flex-row justify-between">
        <img src={airconditioner} alt="airconditioner amenities' icon"/>
        <img src={breakfast} alt="breakfast amenities' icon"/>
        <img src={hair_dryer} alt="hair_dryer amenities' icon"/>
        <img src={safe} alt="safe amenities' icon"/>
        <img src={shower} alt="shower amenities' icon"/>
        <img src={tv} alt="tv amenities' icon"/>
        <img src={wifi} alt="wifi amenities' icon"/>
      </div>

    </div>
    </>
  );
}
export default Viola;