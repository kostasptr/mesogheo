import React from 'react';
import mesogheoPool from '../images/hero_image.jpg';
// import Sliderslick from './Sliderslick';

class Home extends React.Component {
  

  render() {
    return (
    <div className="grid grid-cols-12 gap-x-2 px-1 bg-92_green">

      <img src={mesogheoPool} alt="mesogheo hotel" className="col-span-full w-screen pb-1"/>

      <div className="col-start-2 col-end-12 pb-4 font-sans text-small12 not-italic font-light leading-4 text-left text-02_green">
        <p  className="mb-2">At the feet of the mount Taburno, in its national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
        <p className="mb-2">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
        <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
      </div>
      {/* <Sliderslick id={'section1'}/> */}
      <div className="col-start-4 col-end-10 mb-2 mt-3 font-serif not-italic font-normal leading-4 flex  justify-around">
        <a href="/arizona" className="text-xs text-22_green hover:text-pink">
          <p>ARIZONA</p>
        </a>
        <a href="/viola" className="text-xs text-22_green hover:text-pink">
          <p>VIOLA</p>
        </a>
      </div>
      <div className="col-start-4 col-end-10 mb-3 font-serif not-italic font-normal leading-4  flex  justify-around">
        <a href="/verde" className="text-xs text-22_green hover:text-pink pl-1">
          <p>VERDE</p>
        </a>
        <a href="/blu" className="text-xs text-22_green hover:text-pink pr-1 ">
          <p>BLU</p>
        </a>
      </div>

      <div className="col-start-2 col-end-12 mb-5 font-sans text-small12 not-italic font-light text-left text-02_green">
        <p className="leading-4">Room 'Arizona' is our cozy nest, has a large bathroom and a private patio where you can enjoy your meals under the warm south Italian sun.</p>
      </div>

    </div>
    );
  }
}

export default Home;