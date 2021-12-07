import RoomLink from './_RoomLink';

const RoomsLinks = () => {
  return (
    <div className="font-serif not-italic font-normal text-22_green flex justify-between text-xs leading-4 md:text-xl md:leading-7 lg:text-2xl 2lg:text-t28 sm3:text-base2 lg:leading-8 mb-0.75 md:mb-1.5 lg:mb-0 col-start-3 col-end-11 lg:col-start-1 lg:col-end-9 2lg:col-start-2 2lg:col-end-8 sm2:col-start-3 sm3:col-end-7">
      <RoomLink link='arizona' />
      <RoomLink link='viola' />
      <RoomLink link='verde' />
      <RoomLink link='blu' />
    </div>
  );
};

export default RoomsLinks;