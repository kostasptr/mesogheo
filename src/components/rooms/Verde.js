import ImagesDescRooms from '../_ImagesDescRooms';
import verde_1 from '../../images/Verde/verde_1.jpg';
import verde_2 from '../../images/Verde/verde_2.jpg';
import verde_3 from '../../images/Verde/verde_3.jpg';
import verde_4 from '../../images/Verde/verde_4.jpg';
import verde_5 from '../../images/Verde/verde_5.jpg';
import verde_6 from '../../images/Verde/verde_6.jpg';
import verde_7 from '../../images/Verde/verde_7.jpg';
import verde_8 from '../../images/Verde/verde_8.jpg';
import ScrollToTop from '../../helpers/ScrollToTop';

const Verde = () => {
  const imagesArray = [
    [{
      imgUrl: verde_1,
      alt: 'inside space of Verde room',
      shadow: true
    }],
    [{
      imgUrl: verde_2,
      alt: 'fireplace of Verde room'
    }],
    [
      {
        imgUrl: verde_3,
        alt: 'living room details of Verde room'
      },{
        imgUrl: verde_4,
        alt: 'stairs to the loft bedroom of Verde room'
      }
    ],
    [{
      imgUrl: verde_5,
      alt: 'loft bedroom of Verde room'
    }],
    [
      {
        imgUrl: verde_6,
        alt: 'fridge of Verde room'
      },
      {
        imgUrl: verde_7,
        alt: 'bathroom of Verde room'
      }
    ],
    [{
      imgUrl: verde_8,
      alt: 'olive trees of Mesogheo'
    }]
  ];

  ScrollToTop();

  return (
    <ImagesDescRooms
      imagesArray={imagesArray}
      title='VERDE'
      description='The ideal place for cocooning yourself from routine while sitting on a comfortable sofa in front of the fireplace. Verde is a garden view room, with a double shower cabin & a loft bedroom.'
      amenities={true}
    />
  );
}
export default Verde;