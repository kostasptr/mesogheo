import ScrollToTop from '../helpers/ScrollToTop';

const About = () => {
	ScrollToTop();
  return (
    <div className="mesogheo-grid">
			<div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 2lg:col-start-1 2lg:col-end-8 font-sans not-italic text-left tracking-normal text-small12 md:text-xl sm2:text-f24 leading-4 md:leading-7 lg:leading-8 2lg:leading-7 sm2:leading-8 sm3:leading-height36">

				<h3>About:</h3>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">Our goal at Mesogheo is to provide you an authentic experience of fresh tradition.<br />
				Simplicity meets nature in its wildest form in order to best serve the need of getting away and being inspired.<br />
				All spaces are furnished with superior quality items that keep a generous yet essential vibe.</p>

				<h3>Neighbourhood information:</h3>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">Mesogheo is located just outside Melizzano, a small village situated at the feet of mount Taburno.<br />
				The area is well known for the finest wine varietals & lately in the neighbourhood have shown up Michelin awarded restaurants.<br />
				When it comes to cultural and gastronomic tourism our special place is a safe choice.</p>
				
				<h3>What to do:</h3>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">Sagra dei funghi porcini, Mushroom Feast at Cusano Mutri in September.<br />
				Sagra del Cinghiale, Boar- Wild Pig Feast at Dugenta in September & October.<br />
				Torello Quarter Horse</p>

				<h3>Where to go:</h3>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">Parco del Grassano 15km<br />Sant Agata de Goti 17km<br />Taburno 24km<br />Royal Palaces of Caserta 31km<br />Naples 45km<br />Pompei 69km<br />Amalfi Coast 106km</p>

				<h3>Languages spoken:</h3>
				<p>Italian, English, French, Greek</p>
			</div>
    </div>
  );
}
export default About;
