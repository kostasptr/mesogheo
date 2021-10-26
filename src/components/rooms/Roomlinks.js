import { Link, useLocation } from "react-router-dom";

const RoomsLinks = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      <div className="col-start-5 col-end-9 mb-1 font-serif not-italic font-normal flex justify-between md:mb-3b md:mt-3b lg:mb-3 lg:mt-0 sm2:flex sm2:col-start-4 sm2:col-end-7 sm2:justify-around">
        <Link to="/arizona" className={`text-small12 leading-4 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 sm3:text-base2  ${pathname==='/arizona' ? "line-through" : ""}`} >ARIZONA</Link>
        <Link to="/viola" className={`text-small12 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 sm3:text-base2 ${pathname==='/viola' ? "line-through" : ""}`}>VIOLA</Link>
      </div>

      <div className="col-start-5 col-end-9 mb-2 font-serif not-italic font-normal leading-4 flex justify-between mt-0 pt-0 md:mb-3b md:pt-0 lg:mb-8 sm2:flex  sm2:col-start-7 sm2:col-end-10  sm2:justify-around">
        <Link to="/blu" className={`text-small12 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 sm3:text-base2 ${pathname==='/blu' ? "line-through" : ""}`}>BLU</Link>
        <Link to="/verde" className={`text-small12 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 sm3:text-base2 ${pathname==='/verde' ? "line-through" : ""}`}>VERDE</Link>
      </div>
    </>
  );
};

export default RoomsLinks;