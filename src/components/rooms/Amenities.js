import airconditioner from '../../images/amenities/air_conditioner.svg';
import breakfast from '../../images/amenities/breakfast.svg';
import hair_dryer from '../../images/amenities/hair_dryer.svg';
import safe from '../../images/amenities/safe.svg';
import shower from '../../images/amenities/shower.svg';
import tv from '../../images/amenities/tv.svg';
import wifi from '../../images/amenities/wifi.svg';

const Amenities = () => {
  return (
    <div className="col-start-2 col-end-9 flex flex-row justify-between">
      <img src={airconditioner} alt="airconditioner amenities' icon"/>
      <img src={breakfast} alt="breakfast amenities' icon"/>
      <img src={hair_dryer} alt="hair_dryer amenities' icon"/>
      <img src={safe} alt="safe amenities' icon"/>
      <img src={shower} alt="shower amenities' icon"/>
      <img src={tv} alt="tv amenities' icon"/>
      <img src={wifi} alt="wifi amenities' icon"/>
    </div>
  );
};

export default Amenities;