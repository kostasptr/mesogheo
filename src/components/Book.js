import { Link } from "react-router-dom";
import ScrollToTop from '../helpers/ScrollToTop';
import HoverPink from './_HoverPink';

const Book = () => {
	ScrollToTop();
	return (
		<div className="mesogheo-grid">
			<div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 2lg:col-start-1 2lg:col-end-8 font-sans not-italic leading-4 text-left text-small12 tracking-normal md:text-xl md:leading-7 lg:leading-8 sm2:text-f24 sm2:leading-8 sm3:leading-height36">
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">For information & booking you can contact us on:</p>
				
				<div className="mb-4 md:mb-60 sm2:mb-6 sm3:mb-6b leading-3">
					<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">
						<a href="https://wa.me/393887842886" target="_blank" rel="noopener noreferrer">WhatsApp: <HoverPink text={"+39 3887842886"} /></a>
					</p>
					<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">
						<a href="tel:+393887842886" target="_blank" rel="noopener noreferrer">Phone number: <HoverPink text={"+39 3887842886"} /></a>
					</p>
					<p>
						<a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" >E-mail: <HoverPink text={"mesogheo@googlemail.com"} /></a>
					</p>
				</div>
				
				<h3 className="mb-2 sm3:mb-4b">Pricelist:</h3>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">ARIZONA ROOM / 120€</p>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">VIOLA LOFT / 140€</p>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">BLU ROOM / 120€</p>				
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">VERDE LOFT / 140€</p>
				<p className="mb-2 md:mb-3b lg:mb-4c sm2:mb-4 sm3:mb-4b">Price per night per room<br />Breakfast included in your booking</p>
				<p className="mb-2 md:mb-8 lg:mb-5c sm2:mb-4 sm3:mb-6b">Check in from 15.00 to 20.00<br />Check out until 12.00</p>
				<p>for more information visit our <Link to="/faq"><span className="italic">FAQ</span></Link> page</p>
			</div>
		</div>
	);
}
export default Book;