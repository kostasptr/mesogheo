import ImagesDescRooms from '../_ImagesDescRooms';
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
    <ImagesDescRooms
      imagesArray={imagesArray}
      title='VIOLA'
      description='Viola is a garden view room with a lounge, a double shower cabin & a loft bedroom that make the perfect combination for a relaxed & sumptuous getaway.'
      amenities={true}
    />
  );
}
export default Viola;