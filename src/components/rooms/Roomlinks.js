import { Link, useLocation } from "react-router-dom";

const RoomsLinks = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      <div className="mb-1 font-serif not-italic font-normal flex justify-between col-start-5 col-end-9 md:mb-3b lg:mb-3 lg:mt-0 sm2:hidden">
        <Link to="/arizona" className={`text-small12 leading-4 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 ${pathname==='/arizona' ? "line-through" : ""}`} >ARIZONA</Link>
        <Link to="/viola" className={`text-small12 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 ${pathname==='/viola' ? "line-through" : ""}`}>VIOLA</Link>
      </div>

      <div className="mb-2 font-serif not-italic font-normal leading-4 flex justify-between mt-0 pt-0 col-start-5 col-end-9 md:mb-3b md:pt-0 lg:mb-8 sm2:hidden">
        <Link to="/blu" className={`text-small12 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 ${pathname==='/blu' ? "line-through" : ""}`}>BLU</Link>
        <Link to="/verde" className={`text-small12 text-22_green hover:text-pink md:text-xl md:leading-7 lg:text-f24 lg:leading-8 ${pathname==='/verde' ? "line-through" : ""}`}>VERDE</Link>
      </div>

      <div className="hidden sm2:text-22_green sm2:flex sm2:font-serif sm2:not-italic sm2:font-normal sm2:text-2.5xl sm2:leading-8 sm2:mb-4 sm2:mt-4 sm2:col-start-4 sm2:col-end-10 sm2:flex sm2:justify-between sm3:text-base2">
        <Link to="/arizona" className={`  ${pathname==='/arizona' ? "line-through" : ""}`} >ARIZONA</Link>
        <Link to="/viola" className={` ${pathname==='/viola' ? "line-through" : ""}`}>VIOLA</Link>
        <Link to="/blu" className={` ${pathname==='/blu' ? "line-through" : ""}`}>BLU</Link>
        <Link to="/verde" className={` ${pathname==='/verde' ? "line-through" : ""}`}>VERDE</Link>
      </div>

    </>
  );
};

export default RoomsLinks;