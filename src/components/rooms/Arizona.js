import ImagesDescRooms from '../_ImagesDescRooms';
import arizona_1 from '../../images/Arizona/arizona_1.jpg';
import arizona_2 from '../../images/Arizona/arizona_2.jpg';
import arizona_3 from '../../images/Arizona/arizona_3.jpg';
import arizona_4 from '../../images/Arizona/arizona_4.jpg';
import arizona_5 from '../../images/Arizona/arizona_5.jpg';
import arizona_6 from '../../images/Arizona/arizona_6.jpg';
import arizona_7 from '../../images/Arizona/arizona_7.jpg';
import arizona_8 from '../../images/Arizona/arizona_8.jpg';
import ScrollToTop from '../../helpers/ScrollToTop';

const Arizona = () => {
  const imagesArray = [
    [{
      imgUrl: arizona_1,
      alt: 'patio of Arizona room'
    }],
    [{
      imgUrl: arizona_2,
      alt: 'Arizona room door'
    }],
    [{
      imgUrl: arizona_3,
      alt: 'inside space of Arizona room'
    }],
    [{
      imgUrl: arizona_4,
      alt: 'vintage wardrobe of Arizona room'
    }],
    [{
      imgUrl: arizona_5,
      alt: 'wardrobe detail of Arizona room'
    }],
    [{
      imgUrl: arizona_6,
      alt: 'dwarf side tables decoration of Arizona room'
    }],
    [
      {
        imgUrl: arizona_7,
        alt: 'bathroom of Arizona room'
      },{
        imgUrl: arizona_8,
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