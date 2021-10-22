import React from 'react';
import { Link } from "react-router-dom";
import KeenSlider from '../KeenSlider';
import airconditioner from '../../images/amenities/air_conditioner.svg';
import breakfast from '../../images/amenities/breakfast.svg';
import hair_dryer from '../../images/amenities/hair_dryer.svg';
import safe from '../../images/amenities/safe.svg';
import shower from '../../images/amenities/shower.svg';
import tv from '../../images/amenities/tv.svg';
import wifi from '../../images/amenities/wifi.svg';
import arizona_1 from '../../images/Arizona/arizona_1.jpg';
import arizona_2 from '../../images/Arizona/arizona_2.jpg';
import arizona_3 from '../../images/Arizona/arizona_3.jpg';
import arizona_4 from '../../images/Arizona/arizona_4.jpg';
import arizona_5 from '../../images/Arizona/arizona_5.jpg';
import arizona_6 from '../../images/Arizona/arizona_6.jpg';
import arizona_7 from '../../images/Arizona/arizona_7.jpg';
import arizona_8 from '../../images/Arizona/arizona_8.jpg';

function Arizona() {

  
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

      <div className="col-start-4 col-end-10 mb-1 mt-3 font-serif not-italic font-normal  flex  justify-around">
        <Link to="/arizona" >
          <p className="text-22_green text-small12 leading-4 hover:text-pink active:line-through">ARIZONA</p>
        </Link>
        <Link to="/viola" className="text-small12 text-22_green hover:text-pink active:line-through">
          <p>VIOLA</p>
        </Link>
      </div>

      <div className="col-start-4 col-end-10 mb-2 font-serif not-italic font-normal leading-4  flex  justify-around">
        <Link to="/verde" className="text-small12 text-22_green hover:text-pink active:line-through pl-1">
          <p>VERDE</p>
        </Link>
        <Link to="/blu" className="text-small12 text-22_green hover:text-pink active:line-through pr-1 ">
          <p>BLU</p>
        </Link>
      </div>

      <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light tracking-normal mb-3">
        <p className="text-small12 text-22_green">ARIZONA ROOM:</p>
        <p className="text-small12 text-22_green ">Room 'Arizona' is our cozy nest, has a large bathroom & a private patio where you can enjoy your meals under the warm south Italian sun. </p>
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
export default Arizona;