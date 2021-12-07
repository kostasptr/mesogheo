import KeenSlider from './KeenSlider';
import RoomLinks from './_RoomLinks';
import Amenities from './rooms/_Amenities';

const ImagesDescRooms = ({ imagesArray, title = '', description, amenities = false }) => {
  return (
    <div className="mesogheo-grid">
      <div className="col-span-full lg:col-start-1 lg:col-end-9 sm2:col-end-10 sm3:col-end-9 -mx-1 md:-mx-7 lg:mx-0 mb-1.5 md:mb-2 lg:mb-2 2lg:mb-3">
        <KeenSlider imagesArray={imagesArray} title={title}/>
      </div>
      <div className="hidden lg:block lg:col-start-9 sm2:col-start-10 sm3:col-start-9 lg:col-end-13 -mx-1 md:-mx-7 lg:mx-0">
        <p className="font-sans not-italic font-light text-02_green lg:text-xl sm2:text-f24 lg:leading-8 2lg:leading-7 sm2:leading-8 sm3:leading-height36">
          {description}
        </p>
        { amenities ? <Amenities /> : '' }
      </div>

      <RoomLinks />

      <div className="lg:hidden col-start-2 col-end-12">
        <p className="font-sans not-italic font-light text-02_green text-small12 md:text-xl leading-4 md:leading-7">
          {description}
        </p>
      </div>
      { amenities ? <Amenities classes="lg:hidden" /> : '' }
    </div>
  );
};

export default ImagesDescRooms;