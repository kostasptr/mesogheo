import React from 'react';
import { Link } from "react-router-dom";
import KeenSlider from '../KeenSlider';
import blu_1 from '../../images/Blu/blu_1.jpg';
import blu_2 from '../../images/Blu/blu_2.jpg';
import blu_3 from '../../images/Blu/blu_3.jpg';
import blu_4 from '../../images/Blu/blu_4.jpg';
import blu_5 from '../../images/Blu/blu_5.jpg';
import airconditioner from '../../images/amenities/air_conditioner.svg';
import breakfast from '../../images/amenities/breakfast.svg';
import hair_dryer from '../../images/amenities/hair_dryer.svg';
import safe from '../../images/amenities/safe.svg';
import shower from '../../images/amenities/shower.svg';
import tv from '../../images/amenities/tv.svg';
import wifi from '../../images/amenities/wifi.svg';

function Blu() {

      const images = [
      blu_1,
      blu_2,
      blu_3,
      blu_4,
      blu_5
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

      <div className="col-start-4 col-end-10 mb-2 font-serif not-italic font-normal leading-4  flex  justify-around">
        <Link to="/verde" className="text-small12 text-22_green hover:text-pink active:line-through pl-1">
          <p>VERDE</p>
        </Link>
        <Link to="/blu" className="text-small12 text-22_green hover:text-pink active:line-through pr-1 ">
          <p>BLU</p>
        </Link>
      </div>

      <div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light  tracking-normal">
        <p className="text-small12 text-22_green">BLU:</p>
        <p className="text-small12 text-22_green">Room 'Blu' is our jewel, the only one to have a bathtub for relaxing self-care time & a big window with a mesmerizing view on the valley. </p>
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
export default Blu;