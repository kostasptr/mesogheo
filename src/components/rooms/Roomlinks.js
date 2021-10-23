import { Link, useLocation } from "react-router-dom";

const RoomsLinks = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      <div className="col-start-5 col-end-9 mb-1 font-serif not-italic font-normal flex justify-between">
        <Link to="/arizona" className={`text-small12 leading-4 text-22_green hover:text-pink ${pathname==='/arizona' ? "line-through" : ""}`} >ARIZONA</Link>
        <Link to="/viola" className={`text-small12 text-22_green hover:text-pink ${pathname==='/viola' ? "line-through" : ""}`}>VIOLA</Link>
      </div>

      <div className="col-start-5 col-end-9 mb-2 font-serif not-italic font-normal leading-4 flex justify-between">
        <Link to="/verde" className={`text-small12 text-22_green hover:text-pink ${pathname==='/verde' ? "line-through" : ""}`}>VERDE</Link>
        <Link to="/blu" className={`text-small12 text-22_green hover:text-pink ${pathname==='/blu' ? "line-through" : ""}`}>BLU</Link>
      </div>
    </>
  );
};

export default RoomsLinks;