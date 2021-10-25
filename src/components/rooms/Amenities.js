import {ReactComponent as AirConditioner} from '../../images/amenities/air_conditioner.svg';
import {ReactComponent as Breakfast} from '../../images/amenities/breakfast.svg';
import {ReactComponent as HairDryer} from '../../images/amenities/hair_dryer.svg';
import {ReactComponent as Shower} from '../../images/amenities/shower.svg';
import {ReactComponent as TV} from '../../images/amenities/tv.svg';
import {ReactComponent as WiFi} from '../../images/amenities/wifi.svg';

const Amenities = () => {
  return (
    <div className="col-start-2 col-end-9 flex flex-row justify-between space-x-2 md:col-end-8">
      <WiFi className="md:w-8 lg:w-12"/>
      <Breakfast className="md:w-8 lg:w-12"/>
      <AirConditioner className="md:w-8 lg:w-12"/>
      <TV className="md:w-8 lg:w-12"/>
      <Shower className="md:w-8 lg:w-12"/>
      <HairDryer className="md:w-8 lg:w-12"/>
    </div>
  );
};

export default Amenities;