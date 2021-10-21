import React from 'react';
import { Link } from "react-router-dom";
import KeenSlider from './KeenSlider';
import verde_1 from '../../images/Verde/verde_1.jpg';
import verde_2 from '../../images/Verde/verde_2.jpg';
import verde_3 from '../../images/Verde/verde_3.jpg';
import verde_4 from '../../images/Verde/verde_4.jpg';
import verde_5 from '../../images/Verde/verde_5.jpg';
import verde_6 from '../../images/Verde/verde_6.jpg';
import verde_7 from '../../images/Verde/verde_7.jpg';
import verde_8 from '../../images/Verde/verde_8.jpg';
import airconditioner from '../../images/amenities/air_conditioner.svg';
import breakfast from '../../images/amenities/breakfast.svg';
import hair_dryer from '../../images/amenities/hair_dryer.svg';
import safe from '../../images/amenities/safe.svg';
import shower from '../../images/amenities/shower.svg';
import tv from '../../images/amenities/tv.svg';
import wifi from '../../images/amenities/wifi.svg';

function Verde() {

      const images = [
      verde_1,
      verde_2,
      verde_3,
      verde_4,
      verde_5,
      verde_6,
      verde_7,
      verde_8
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
        <p className="text-small12 text-22_green">VERDE:</p>
        <p className="text-small12 text-22_green">Loft ‘Verde’ with the romantic bedroom up the stairs to the attic & a bathroom with double shower is the perfect combination for a relaxed & sumptuous getaway. </p>
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
export default Verde;