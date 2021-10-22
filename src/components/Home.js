import React, { useState } from 'react';
import { Link } from "react-router-dom";
import mesogheoPool from '../images/hero_image.jpg';
import KeenSlider from './KeenSlider';
import arizona from '../images/arizona.jpg';
import blu from '../images/blu.jpg';
import verde from '../images/verde.jpg';
import viola from '../images/viola.jpg';

const Home = () => {
  const [isHovered, setHovered] = useState("false");
  const images = [
    arizona,
    blu,
    verde,
    viola
  ];

  const textColor = isHovered ? "text-pink" : "text-22_green";

  const toggleHover = () => setHovered(!isHovered);

  return (
    <>
      <img src={mesogheoPool} alt="mesogheo hotel" className="col-span-full w-screen mb-1"/>

      <div className="grid grid-cols-12 gap-x-2 px-1">
        <div className="col-start-2 col-end-12 pb-4 font-sans text-small12 not-italic font-light leading-4 text-left text-02_green">
          <p className="mb-2 ">At the feet of the mount Taburno, in its national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
          <p className="mb-2">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
          <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
        </div>
      </div>
      
      <KeenSlider images={images} />

      <div className="grid grid-cols-12 gap-x-2 px-1">

        <div className="col-start-4 col-end-10 mb-1 mt-3 font-serif not-italic font-normal  flex  justify-around">
          <Link to="/arizona" >
            <p className={`text-small12 leading-4 active:line-through ${textColor}`} onMouseOver={toggleHover}>ARIZONA</p>
          </Link>
          <Link to="/viola" className="text-small12 text-22_green hover:text-pink active:line-through">
            <p>VIOLA</p>
          </Link>
        </div>

        <div className="col-start-4 col-end-10 mb-2 font-serif not-italic font-normal leading-4  flex  justify-around">
          <Link to="/verde" className="text-small12 text-22_green hover:text-pink  active:line-throughpl-1">
            <p>VERDE</p>
          </Link>
          <Link to="/blu" className="text-small12 text-22_green hover:text-pink  active:line-through pr-1 ">
            <p>BLU</p>
          </Link>
        </div>

        <div className="col-start-2 col-end-12 mb-5 font-sans text-small12 not-italic font-light text-left text-02_green">
          <p className="leading-4">Our rooms are equipped with numerous amenities in order to ensure comfort & luxury. Cartel decoration, high quality double mattresses, homemade breakfast, an outdoor swimming pool for the summer, a fireplace for the winter & Netflix are among them. </p>
        </div>

      </div>
    </>
  );
}


export default Home;