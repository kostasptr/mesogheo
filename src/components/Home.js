import React from 'react';
import mesogheoPool from '../images/hero_image.jpg';

function Home() {

  return (
    <div className="grid grid-cols-12 gap-x-2 bg-92_green">
      <img src={mesogheoPool} alt="mesogheo hotel" className="block col-span-12 w-screen pb-4"/>
      <div className="col-start-2 col-end-12 pb-4 px-1 font-serif text-xs not-italic font-normal leading-2b tracking-normal text-left text-small12 text-22_green">
      <p  className="mb-2">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p><p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
      </div>
    </div>
  );
}
export default Home;