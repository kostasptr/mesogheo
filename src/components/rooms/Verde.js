import ImagesDescRooms from '../_ImagesDescRooms';
import ScrollToTop from '../../helpers/ScrollToTop';

const Verde = () => {
  const imagesArray = [
    [{
      path: 'verde/1',
      alt: 'inside space of Verde room',
      shadow: true
    }],
    [{
      path: 'verde/2',
      alt: 'fireplace of Verde room'
    }],
    [
      {
        path: 'verde/3',
        alt: 'living room details of Verde room'
      },{
        path: 'verde/4',
        alt: 'stairs to the loft bedroom of Verde room'
      }
    ],
    [{
      path: 'verde/5',
      alt: 'loft bedroom of Verde room'
    }],
    [
      {
        path: 'verde/6',
        alt: 'fridge of Verde room'
      },
      {
        path: 'verde/7',
        alt: 'bathroom of Verde room'
      }
    ],
    [{
      path: 'verde/8',
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