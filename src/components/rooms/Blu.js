import ImagesDescRooms from '../_ImagesDescRooms';
import ScrollToTop from '../../helpers/ScrollToTop';

const Blu = () => {
  const imagesArray = [
    [{
      path: 'blu/1',
      alt: 'Window view of Blu room'
    }],
    [{
      path: 'blu/2',
      alt: 'inside space of Blu room'
    }],
    [
      {
        path: 'blu/3',
        alt: 'bathroom with bathtub of Blu room'
      },{
        path: 'blu/4',
        alt: 'entrance to Blu room'
      }
    ],
    [{
      path: 'blu/5',
      alt: 'olive trees of Mesogheo'
    }]
  ];

  ScrollToTop();

  return (
    <ImagesDescRooms
      imagesArray={imagesArray}
      title='BLU'
      description='The only room to have a bathtub for relaxing selfcare time & a big window with a mesmerizing view on the valley, Blu is definitely our precious jewel.'
      amenities={true}
    />
  );
}
export default Blu;