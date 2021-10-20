import React from 'react';
import { Link } from "react-router-dom";
import mesogheoPool from '../images/hero_image.jpg';
import Sliderslick from './Sliderslick';


class Home extends React.Component {
  

  render() {
    return (
    <div className="grid grid-cols-12 gap-x-2 px-1 bg-92_green">

      <img src={mesogheoPool} alt="mesogheo hotel" className="col-span-full w-screen  pb-1"/>

      <div className="col-start-2 col-end-12 pb-4 font-sans text-small12 not-italic font-light leading-4 text-left text-02_green">
        <p className="mb-2 ">At the feet of the mount Taburno, in its national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
        <p className="mb-2">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
        <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
      </div>
      
      <Sliderslick/>
      
      <div className="col-start-4 col-end-10 mb-1 mt-3 font-serif not-italic font-normal  flex  justify-around">
        <Link to="/arizona" >
          <p className="text-22_green text-small12 leading-4 hover:text-pink">ARIZONA</p>
        </Link>
        <Link to="/viola" className="text-small12 text-22_green hover:text-pink">
          <p>VIOLA</p>
        </Link>
      </div>
      <div className="col-start-4 col-end-10 mb-2 font-serif not-italic font-normal leading-4  flex  justify-around">
        <Link to="/verde" className="text-small12 text-22_green hover:text-pink pl-1">
          <p>VERDE</p>
        </Link>
        <Link to="/blu" className="text-small12 text-22_green hover:text-pink pr-1 ">
          <p>BLU</p>
        </Link>
      </div>

      <div className="col-start-2 col-end-12 mb-5 font-sans text-small12 not-italic font-light text-left text-02_green">
        <p className="leading-4">Our rooms are equipped with numerous amenities in order to ensure comfort & luxury. Cartel decoration, high quality double mattresses, homemade breakfast, an outdoor swimming pool for the summer, a fireplace for the winter & Netflix are among them. </p>
      </div>

    </div>
    );
  }
}

export default Home;