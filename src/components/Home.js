import React from 'react';
// import mesogheoPool from '../images/mesogheoPool.png';

function Home() {

  return (
    <div className="grid grid-cols-12 px-1 gap-x-2 bg-92_green">
      {/* <img src={mesogheoPool} alt="mesogheo hotel" className="pb-4"/> */}
      <div className="col-start-1 col-end-12 pb-6 font-serif text-xs not-italic font-normal leading-2b tracking-normal text-left text-22_green">
      <p>Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area. The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
      </div>
    </div>
  );
}
export default Home;