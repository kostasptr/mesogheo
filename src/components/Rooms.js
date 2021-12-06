import ImagesDescRooms from './_ImagesDescRooms';
import arizona from '../images/arizona.jpg';
import blu from '../images/blu.jpg';
import verde from '../images/verde.jpg';
import viola1 from '../images/viola_1.jpg';
import viola2 from '../images/viola_2.jpg';

const Home = () => {
  const imagesArray = [
    [{
      imgUrl: arizona,
      alt: 'patio of Arizona room',
      title: 'ARIZONA'
    }],
    [{
      imgUrl: viola1,
      alt: 'stylish soap holder of Viola room',
      title: 'VIOLA'
    } , {
      imgUrl: viola2,
      alt: 'entrance of Viola room',
      title: 'VIOLA'
    }],
    [{
      imgUrl: verde,
      alt: 'inside space of Verde room',
      title: 'VERDE',
      shadow: true
    }],
    [{
      imgUrl: blu,
      alt: 'Window view of Blu room',
      title: 'BLU'
    }],
  ];

  return (
    <ImagesDescRooms
      imagesArray={imagesArray}
      description={'Our rooms are equipped with numerous amenities in order to ensure comfort & luxury. Kartell decoration, high quality double mattresses, homemade breakfast, an outdoor swimming pool for the summer, a fireplace for the winter & Netflix are among them.'}
    />
  );
}

export default Home;