import ImagesDescRooms from '../_ImagesDescRooms';
import ScrollToTop from '../../helpers/ScrollToTop';

const Viola = () => {
  const imagesArray = [
    [
      {
        path: 'viola/1',
        alt: 'stylish soap holder of Viola room'
      },{
        path: 'viola/2',
        alt: 'entrance of Viola room'
      }
    ],
    [{
      path: 'viola/3',
      alt: 'inside space of Viola room'
    }],
    [{
      path: 'viola/4',
      alt: 'loft bedroom of Viola room'
    }],
    [
      {
        path: 'viola/5',
        alt: 'decorative wooden stair of Viola room'
      },{
        path: 'viola/6',
        alt: 'overview with fireplace of Viola room'
      }
    ],
    [
      {
        path: 'viola/7',
        alt: 'bathroom of Viola room'
      },{
        path: 'viola/8',
        alt: 'double shower of Viola room'
      }
    ],
    [{
      path: 'viola/9',
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