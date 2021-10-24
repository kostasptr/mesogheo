import React from 'react';
import mesogheoPool from '../images/hero_image.jpg';
import KeenSlider from './KeenSlider';
import Roomlinks from './rooms/Roomlinks'
import arizona from '../images/arizona.jpg';
import blu from '../images/blu.jpg';
import verde from '../images/verde.jpg';
import viola from '../images/viola.jpg';

const Home = () => {
  const imagesArray = [
    [{
      imgUrl: arizona,
      alt: '',
      title: 'ARIZONA'
    }],
    [{
      imgUrl: viola,
      alt: '',
      title: 'VIOLA'
    }],
    [{
      imgUrl: verde,
      alt: '',
      title: 'VERDE'
    }],
    [{
      imgUrl: blu,
      alt: '',
      title: 'BLU'
    }],
  ];

  return (
    <>
      <img src={mesogheoPool} alt="mesogheo hotel" className="col-span-full w-screen mb-2"/>

      <div className="grid grid-cols-12 gap-x-2 px-1 md:mx-7 md:px-0 md:gap-x-2">
        <div className="col-start-2 col-end-12 mb-4 font-sans text-small12 not-italic font-light leading-4 text-left text-02_green md:text-lg md:leading-7 md:mt-3b md:mb-5b ">
          <p className="mb-2">At the feet of the mount Taburno, in its national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
          <p className="mb-2">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
          <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
        </div>
      </div>
      
      <KeenSlider imagesArray={imagesArray}/>

      <div className="grid grid-cols-12 gap-x-2 px-1 md:mx-7 md:px-0 md:gap-x-2">
        <Roomlinks />

        <p className="col-start-2 col-end-12 mb-5 font-sans text-small12 not-italic font-light text-left text-02_green leading-4 md:text-lg md:leading-7 md:mt-3b md:mb-5b">
          Our rooms are equipped with numerous amenities in order to ensure comfort & luxury. Cartel decoration, high quality double mattresses, homemade breakfast, an outdoor swimming pool for the summer, a fireplace for the winter & Netflix are among them.
        </p>
      </div>
    </>
  );
}

export default Home;