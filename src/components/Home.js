import Instagram from "./_Instagram";
import Image from './_Image';

const Home = () => {
  return (
    <>
      <Image
        path='hero_image'
        imagesWidths={[360, 768, 1024, 1440, 1920]}
        sizes="(min-width: 1920px) 1920px, 100vw"
        alt='mesogheo hotel'
        classes='w-screen mb-1.5 md:mb-2 sm3:mb-2'
      />

      <div className="mesogheo-grid">
        <div className="col-start-2 col-end-12 mb-2 font-sans not-italic font-light leading-4 text-left md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 md:mb-3b lg:mb-4 text-02_green text-small12 md:text-lg lg:text-lg sm2:text-xl sm3:text-2xl md:leading-6 lg:leading-6 sm3:leading-height36">
          <p className="mb-2 lg:mb-4 lg:pt-0">At the feet of the mount Taburno, in the national park area a magical place has opened its doors. The perfect destination for nature lovers and wanderlust travelers who seek alternative luxury.</p>
          <p className="mb-2 lg:mb-4">Mesogheo is a bed & breakfast with 4 rooms, each of them carefully decorated in an elegant minimalistic style that contrasts the maximalism of the outside area.</p>
          <p>The evergreen forest surrounds the property in a way that makes you forget you are at a few kilometers from bustling Naples.</p>
        </div>

        <div className="col-span-full">
          <Instagram
            accessToken1="IGQVJYaHRqQXdlT3hQb3RlQkV1WmFQejhZAcEQyV3VJbVIxSTY5WEZ"
            accessToken2="ABOXdYWnpKSVNGUjIyUF91Wm9jNkg2bWZAKNFdhWTdGR3g3RmJ6SW9"
            accessToken3="ka2o3UVU0cTZAHYVAwOFMwUmtmRURmejFn"
            count={6}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
