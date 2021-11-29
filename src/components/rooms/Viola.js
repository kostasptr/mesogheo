import KeenSlider from '../KeenSlider';
import Roomlinks from "./_Roomlinks";
import Amenities from "./_Amenities";
import viola_1 from '../../images/Viola/viola_1.jpg';
import viola_2 from '../../images/Viola/viola_2.jpg';
import viola_3 from '../../images/Viola/viola_3.jpg';
import viola_4 from '../../images/Viola/viola_4.jpg';
import viola_5 from '../../images/Viola/viola_5.jpg';
import viola_6 from '../../images/Viola/viola_6.jpg';
import viola_7 from '../../images/Viola/viola_7.jpg';
import viola_8 from '../../images/Viola/viola_8.jpg';
import viola_9 from '../../images/Viola/viola_9.jpg';
import ScrollToTop from '../../helpers/ScrollToTop';

const Viola = () => {
  const imagesArray = [
    [
      {
        imgUrl: viola_1,
        alt: 'stylish soap holder of Viola room'
      },{
        imgUrl: viola_2,
        alt: 'entrance of Viola room'
      }
    ],
    [{
      imgUrl: viola_3,
      alt: 'inside space of Viola room'
    }],
    [{
      imgUrl: viola_4,
      alt: 'loft bedroom of Viola room'
    }],
    [
      {
        imgUrl: viola_5,
        alt: 'decorative wooden stair of Viola room'
      },{
        imgUrl: viola_6,
        alt: 'overview with fireplace of Viola room'
      }
    ],
    [
      {
        imgUrl: viola_7,
        alt: 'bathroom of Viola room'
      },{
        imgUrl: viola_8,
        alt: 'double shower of Viola room'
      }
    ],
    [{
      imgUrl: viola_9,
      alt: 'sunset outside of Viola room'
    }]
  ];

  ScrollToTop();

  return (
    <>
      <KeenSlider imagesArray={imagesArray} title="VIOLA" />
      <div className="grid grid-cols-12 gap-x-2 mx-1 mb-4 md:mx-7 md:pb-0 md:mb-56 lg:mx-4c lg:gap-x-4 lg:mb-6b sm2:gap-x-1 sm2:mx-10 sm2:mb-60 sm3:gap-x-8 sm3:mx-16 sm3:mb-75">
        <Roomlinks />
        <p className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light mb-2 text-small12 text-02_green md:mb-4b md:text-xl md:leading-7 lg:text-2xl lg:leading-8 lg:mb-4d lg:col-start-3 lg:col-end-11 sm2:mb-4 sm3:col-start-4 sm3:col-end-10 sm3:text-f26 sm3:leading-height36 sm3:font-light sm3:mb-5a2">
        Viola is a garden view room with a lounge, a double shower cabin & a loft bedroom that make the perfect combination for a relaxed & sumptuous getaway.
        </p>
        <Amenities className="col-start-2 col-end-9 flex flex-row justify-between" />
      </div>
    </>
  );
}
export default Viola;