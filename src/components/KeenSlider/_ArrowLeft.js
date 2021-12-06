const ArrowLeft = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
};

// <svg width="17" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.815.337a1.154 1.154 0 010 1.634L2.785 14.998l13.03 13.028a1.155 1.155 0 11-1.633 1.634L.337 15.815a1.154 1.154 0 010-1.633L14.182.337a1.154 1.154 0 011.633 0z"/></svg>

export default ArrowLeft;