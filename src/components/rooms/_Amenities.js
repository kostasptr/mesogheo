import {ReactComponent as WiFi} from '../../images/amenities/wifi.svg';
import {ReactComponent as Breakfast} from '../../images/amenities/breakfast.svg';
import {ReactComponent as AirConditioner} from '../../images/amenities/air_conditioner.svg';
import {ReactComponent as TV} from '../../images/amenities/tv.svg';
import {ReactComponent as Shower} from '../../images/amenities/shower.svg';
import {ReactComponent as BathTub} from '../../images/amenities/bath_tub.svg';
import {ReactComponent as HairDryer} from '../../images/amenities/hair_dryer.svg';
import {ReactComponent as Refrigerator} from '../../images/amenities/refrigerator.svg';
import {ReactComponent as Sqrm20} from '../../images/amenities/sqrm20.svg';
import {ReactComponent as Sqrm55} from '../../images/amenities/sqrm55.svg';
import {useLocation } from "react-router-dom";

const Amenities = ({ classes }) => {
    const pathname = useLocation().pathname;
  
    return (
      <div className={`flex flex-row justify-between space-x-2 col-start-2 col-end-10 md:col-start-3 md:col-end-9 sm2:col-start-3 sm2:justify-start sm3:col-start-4 sm3:col-end-10 mt-1.5 md:mt-2 ${classes}`}>
        <WiFi className="md:w-8 lg:w-12"/>
        <Breakfast className="md:w-8 lg:w-12"/>
        <AirConditioner className="md:w-8 lg:w-12"/>
        <TV className="md:w-8 lg:w-12"/>
        { pathname === '/arizona' ? <Shower className="md:w-8 lg:w-12"/> : <BathTub className="md:w-8 lg:w-12" /> }
        <HairDryer className="md:w-8 lg:w-12"/>
        { pathname === '/blu' ? '' : <Refrigerator className="md:w-8 lg:w-12"/> }
        {(pathname === '/arizona' || pathname === '/blu') ? <Sqrm20 className="md:w-8 lg:w-12"/> : <Sqrm55 className="md:w-8 lg:w-12"/>}
      </div>
    );
};

export default Amenities;