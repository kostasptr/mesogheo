import { useEffect, useRef } from 'react';
import Image from './_Image';
import KeenSlider from './KeenSlider';
import Roomlinks from './rooms/_Roomlinks'
import arizona from '../images/arizona.jpg';
import blu from '../images/blu.jpg';
import verde from '../images/verde.jpg';
import viola1 from '../images/viola_1.jpg';
import viola2 from '../images/viola_2.jpg';
import ScrollToTop from '../helpers/ScrollToTop';
import { useLocation } from "react-router-dom";

const Home = () => {
  const roomsRef = useRef();
  const imagesArray = [
    [{
      imgUrl: arizona,
      alt: 'patio of Arizona room',
      title: 'ARIZONA'
    }],
    [{
      imgUrl: viola1,
      alt: 'stylish soap holder of Viola room',
      title: 'VIOLA'
    } , {
      imgUrl: viola2,
      alt: 'entrance of Viola room',
      title: 'VIOLA'
    }],
    [{
      imgUrl: verde,
      alt: 'inside space of Verde room',
      title: 'VERDE',
      shadow: true
    }],
    [{
      imgUrl: blu,
      alt: 'Window view of Blu room',
      title: 'BLU'
    }],
  ];

  const hash = useLocation().hash;
  useEffect(() => {
    hash === "#rooms" ? setTimeout(() => roomsRef.current.scrollIntoView({ behavior: 'smooth' }), 100) : ScrollToTop();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Image path="./images/hero_image" alt="mesogheo hotel" classes="col-span-full w-screen mb-2 md:mb-0 sm2:mb-4" />

      <div className="grid grid-cols-12 gap-x-2 mx-1 md:mx-7 lg:mx-4c lg:gap-x-4 lg:mt-0 lg:mb-0 sm2:gap-x-1 sm2:mx-10 sm3:gap-x-8 sm3:mx-16">
        <div className="col-start-2 col-end-12 mb-4 font-sans text-small12 not-italic font-light leading-4 text-left text-02_green md:text-xl md:leading-7 md:mt-3b md:mb-5b lg:text-2xl lg:leading-8 lg:mt-4d lg:mb-5c lg:col-start-3 lg:col-end-11 sm2:text-f24 sm2:leading-8 sm2:mt-0 sm2:mb-5b2 sm3:col-start-4 sm3:col-end-10 sm3:text-f26 sm3:leading-height36 sm3:font-light">
          <p className="mb-2 lg:mb-4 lg:pt-0">At the feet of the mount Taburno, in the national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
          <p className="mb-2 lg:mb-4">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
          <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
        </div>
      </div>
      
      <div ref={roomsRef}>
        <KeenSlider imagesArray={imagesArray}/>
      </div>

      <div className="grid grid-cols-12 gap-x-2 mx-1 md:mx-7 mb-4 md:mb-5b lg:mb-6b lg:mx-4c lg:gap-x-4 sm2:gap-x-1 sm2:mx-10 sm2:mb-60 sm3:gap-x-8 sm3:mx-16 sm3:mb-64">
        <Roomlinks />

        <p className="col-start-2 col-end-12 font-sans text-small12 not-italic font-light text-left text-02_green leading-4 md:text-xl md:leading-7   lg:text-2xl lg:leading-8 lg:col-start-3 lg:col-end-11 sm2:text-f24 sm2:leading-8 sm3:col-start-4 sm3:col-end-10 sm3:text-f26 sm3:leading-height36 sm3:font-light">
        Our rooms are equipped with numerous amenities in order to ensure comfort & luxury. Kartell decoration, high quality double mattresses, homemade breakfast, an outdoor swimming pool for the summer, a fireplace for the winter & Netflix are among them.
        </p>
      </div>
    </>
  );
}

export default Home;