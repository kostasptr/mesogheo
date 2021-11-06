const ScrollToTop = () => {
	const root = document.getElementById('root');
	root.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});

  return null;
};

export default ScrollToTop;