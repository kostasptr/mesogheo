const ArrowRight = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
};

// <svg width="17" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M.337.337a1.154 1.154 0 011.634 0l13.844 13.845a1.154 1.154 0 010 1.633L1.971 29.66a1.155 1.155 0 01-1.634-1.634L13.367 15 .337 1.97a1.154 1.154 0 010-1.634z"/></svg>

export default ArrowRight;