import ImagesDescRooms from './_ImagesDescRooms';

const Home = () => {
  const imagesArray = [
    [{
      path: 'arizona/1',
      alt: 'patio of Arizona room',
      title: 'ARIZONA'
    }],
    [{
      path: 'viola/1',
      alt: 'stylish soap holder of Viola room',
      title: 'VIOLA'
    } , {
      path: 'viola/2',
      alt: 'entrance of Viola room',
      title: 'VIOLA'
    }],
    [{
      path: 'verde/1',
      alt: 'inside space of Verde room',
      title: 'VERDE',
      shadow: true
    }],
    [{
      path: 'blu/1',
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