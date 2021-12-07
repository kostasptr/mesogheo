import ImagesDescRooms from '../_ImagesDescRooms';
import ScrollToTop from '../../helpers/ScrollToTop';

const Arizona = () => {
  const imagesArray = [
    [{
      path: 'arizona/1',
      alt: 'patio of Arizona room'
    }],
    [{
      path: 'arizona/2',
      alt: 'Arizona room door'
    }],
    [{
      path: 'arizona/3',
      alt: 'inside space of Arizona room'
    }],
    [{
      path: 'arizona/4',
      alt: 'vintage wardrobe of Arizona room'
    }],
    [{
      path: 'arizona/5',
      alt: 'wardrobe detail of Arizona room'
    }],
    [{
      path: 'arizona/6',
      alt: 'dwarf side tables decoration of Arizona room'
    }],
    [
      {
        path: 'arizona/7',
        alt: 'bathroom of Arizona room'
      },{
        path: 'arizona/8',
        alt: 'double shower of Arizona room'
      }
    ]
  ];
  
  ScrollToTop();

  return (
    <ImagesDescRooms
      imagesArray={imagesArray}
      title='ARIZONA'
      description='Arizona is our cozy nest, it has a large bathroom & a private patio where you can enjoy our homemade breakfast under the warm south Italian sun.'
      amenities={true}
    />
  );
}
export default Arizona;