import ImagesDescRooms from '../_ImagesDescRooms';
import blu_1 from '../../images/Blu/blu_1.jpg';
import blu_2 from '../../images/Blu/blu_2.jpg';
import blu_3 from '../../images/Blu/blu_3.jpg';
import blu_4 from '../../images/Blu/blu_4.jpg';
import blu_5 from '../../images/Blu/blu_5.jpg';
import ScrollToTop from '../../helpers/ScrollToTop';

const Blu = () => {
  const imagesArray = [
    [{
      imgUrl: blu_1,
      alt: 'Window view of Blu room'
    }],
    [{
      imgUrl: blu_2,
      alt: 'inside space of Blu room'
    }],
    [
      {
        imgUrl: blu_3,
        alt: 'bathroom with bathtub of Blu room'
      },{
        imgUrl: blu_4,
        alt: 'entrance to Blu room'
      }
    ],
    [{
      imgUrl: blu_5,
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