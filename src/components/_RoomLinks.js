import RoomLink from './_RoomLink';

const RoomsLinks = () => {
  return (
    <div className="col-start-3 col-end-11 md:col-start-4 md:col-end-10 lg:col-start-1 lg:col-end-9 2lg:col-start-2 2lg:col-end-8 sm2:col-start-3 sm3:col-end-7 font-serif not-italic font-normal text-22_green flex justify-between text-xs leading-4 md:text-xl md:leading-7 lg:text-2xl 2lg:text-small22 sm2:text-2xl sm3:text-base2 lg:leading-8 2lg:leading-5 sm2:leading-8 mb-0.75 md:mb-1.5 lg:mb-0">
      <RoomLink link='arizona' />
      <RoomLink link='viola' />
      <RoomLink link='verde' />
      <RoomLink link='blu' />
    </div>
  );
};

export default RoomsLinks;