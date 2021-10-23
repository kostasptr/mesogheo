import {ReactComponent as AirConditioner} from '../../images/amenities/air_conditioner.svg';
import {ReactComponent as Breakfast} from '../../images/amenities/breakfast.svg';
import {ReactComponent as HairDryer} from '../../images/amenities/hair_dryer.svg';
import {ReactComponent as Safe} from '../../images/amenities/safe.svg';
import {ReactComponent as Shower} from '../../images/amenities/shower.svg';
import {ReactComponent as TV} from '../../images/amenities/tv.svg';
import {ReactComponent as WiFi} from '../../images/amenities/wifi.svg';

const Amenities = () => {
  return (
    <div className="col-start-2 col-end-9 flex flex-row justify-between space-x-2">
      <WiFi />
      <Breakfast />
      <AirConditioner />
      <TV />
      <Shower />
      <HairDryer />
      <Safe />
    </div>
  );
};

export default Amenities;