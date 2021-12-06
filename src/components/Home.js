import Instagram from "./_Instagram";
import Image from './_Image';

const Home = () => {
  return (
    <>
      <Image path="./images/hero_image" alt="mesogheo hotel" classes="w-screen mb-1.5 md:mb-3 sm3:mb-2" />

      <div className="mesogheo-grid">
        <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 sm2:col-start-4 sm2:col-end-10 mb-2 md:mb-3a lg:mb-4d font-sans text-small12 not-italic font-light leading-4 text-left text-02_green md:text-lg md:leading-6 lg:text-xl lg:leading-8 sm2:text-small22 sm2:leading-8 sm3:text-f26 sm3:leading-height36">
          <p className="mb-2 lg:mb-4 lg:pt-0">At the feet of the mount Taburno, in the national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
          <p className="mb-2 lg:mb-4">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
          <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
        </div>

        <div className="col-span-full">
          <Instagram accessToken="IGQVJYa0RLeHVzRkxqTlF2aG1Ed2FoWkNXVnB0MlhPQ3ljcW9UUE9zaHNiYXhUMmtVZAGFCUEV3TF9McXAwZAWg3LXRfLVlQZAUdEZADNCeDdyQlZAWalJWei0wQzdNbjVxQ1hLM3BxZAnhPUDVpY3Q2WkktQgZDZD" count={6}/>
        </div>
      </div>
    </>
  );
}

export default Home;