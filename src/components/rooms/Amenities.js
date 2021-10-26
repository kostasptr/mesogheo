import {ReactComponent as WiFi} from '../../images/amenities/wifi.svg';
import {ReactComponent as Breakfast} from '../../images/amenities/breakfast.svg';
import {ReactComponent as AirConditioner} from '../../images/amenities/air_conditioner.svg';
import {ReactComponent as TV} from '../../images/amenities/tv.svg';
import {ReactComponent as Shower} from '../../images/amenities/shower.svg';
import {ReactComponent as HairDryer} from '../../images/amenities/hair_dryer.svg';
// import {ReactComponent as sqrmArizona} from '../../images/amenities/sqrmArizona.svg';
// import {ReactComponent as sqrmViola} from '../../images/amenities/sqrmViola.svg';
// import {ReactComponent as sqrmBlu} from '../../images/amenities/sqrmBlu.svg';
// import {ReactComponent as sqrmVerde} from '../../images/amenities/sqrmVerde.svg';
// import { Link, useLocation } from "react-router-dom";

// const RoomsLinks = () => {
//   const pathname = useLocation().pathname;

const Amenities = () => {
 
  return (
    <div className="col-start-2 col-end-9 flex flex-row justify-between space-x-2 md:col-end-8 sm2:col-start-3 sm2:justify-start sm2:space-x-5 sm3:col-start-4 sm3:col-end-10">
      <WiFi className="md:w-8 lg:w-12"/>
      <Breakfast className="md:w-8 lg:w-12"/>
      <AirConditioner className="md:w-8 lg:w-12"/>
      <TV className="md:w-8 lg:w-12"/>
      <Shower className="md:w-8 lg:w-12"/>
      <HairDryer className="md:w-8 lg:w-12"/>
      {/* if ${pathname==='/arizona'} return <sqrmArizona />; */}
    </div>
  );
};

export default Amenities;