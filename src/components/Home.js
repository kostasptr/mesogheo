import React from 'react';
import mesogheoPool from '../images/hero_image.jpg';
import Sliderslick from './Sliderslick';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
    <div className="grid grid-cols-12 gap-x-2 px-1 bg-92_green">

      <img src={mesogheoPool} alt="mesogheo hotel" className="col-span-full w-screen pb-4"/>

      <div className="col-start-2 col-end-12 pb-4 font-serif small12 not-italic font-normal leading-2b tracking-normal text-left text-small12 text-22_green">
        <p  className="mb-2">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
        <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
      </div>
      <Sliderslick id={'section1'} ref={this.myRef}/>
      <div className="col-start-5 col-end-9 font-serif not-italic font-normal leading-smallfs flex mb-smallff justify-between">
        <a href="/arizona" className="text-small12 text-22_green hover:text-pink">
          <p>ARIZONA</p>
        </a>
        <a href="/viola" className="text-small12 text-22_green hover:text-pink">
          <p>VIOLA</p>
        </a>
      </div>
      <div className="col-start-5 col-end-9 font-serif not-italic font-normal leading-smallfs flex  justify-between pb-2">
        <a href="/verde" className="text-small12 text-22_green hover:text-pink">
          <p>VERDE</p>
        </a>
        <a href="/blu" className="text-small12 text-22_green hover:text-pink">
          <p>BLU</p>
        </a>
      </div>

      <div className="col-start-2 col-end-12 pb-7 font-serif not-italic font-normal text-small12 text-22_green pb-4c">
        <p className=" ">Room 'Arizona' is our cozy nest, has a large bathroom and a private patio where you can enjoy your meals under the warm south Italian sun.</p>
      </div>

    </div>
    );
  }
}

export default Home;