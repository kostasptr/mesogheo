import { Link } from "react-router-dom";
import ScrollToTop from '../helpers/ScrollToTop';
import HoverPink from './_HoverPink';

const Book = () => {
	ScrollToTop();
	return (
		<div className="mesogheo-grid">
			<div className="col-start-2 col-end-12 font-sans not-italic leading-4 tracking-normal text-left md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 2lg:col-start-1 2lg:col-end-7 text-small12 md:text-lg sm2:text-xl sm3:text-2xl md:leading-6 sm3:leading-height36">
				{/* <p className="mb-1.5 md:mb-3b lg:mb-3b sm2:mb-4 sm3:mb-4b">For information & booking you can contact us on:</p> */}
				<h3 className="mb-1.5 md:mb-3 sm3:mb-4b">Contact-Info:</h3>
				
				<div className="mb-4 leading-3 md:mb-8 sm2:mb-6 sm3:mb-4b">
					<p className="mb-2 md:mb-3b 2lg:mb-4c sm2:mb-4 sm3:mb-4b">
						<a href="https://wa.me/393887842886" target="_blank" rel="noopener noreferrer">WhatsApp: <HoverPink text={"+39 3887842886"} /></a>
					</p>
					<p className="mb-2 md:mb-3b 2lg:mb-4c sm2:mb-4 sm3:mb-4b">
						<a href="tel:+393887842886" target="_blank" rel="noopener noreferrer">Phone number: <HoverPink text={"+39 3887842886"} /></a>
					</p>
					<p>
						<a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" >E-mail: <HoverPink text={"mesogheo@googlemail.com"} /></a>
					</p>
				</div>
				
				<h3 className="mb-1.5 sm3:mb-4b">Pricelist:</h3>
				{/* <div className="md:leading-height24 2lg:leading-height28">
					<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">ARIZONA ROOM / 120€</p>
					<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">VIOLA LOFT / 140€</p>
					<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">BLU ROOM / 120€</p>				
					<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">VERDE LOFT / 140€</p>
				</div> */}
				<p className="mb-2 md:mb-3b lg:mb-4 sm3:mb-4b">
					130€/160€ per night per room<br />
					Breakfast included in your booking
				</p>
				<p className="mb-2 md:mb-3b lg:mb-4 sm3:mb-4b">
					Check in from 15.00 to 20.00<br />
					Check out until 12.00
				</p>
				<p className="mb-2 md:mb-3b lg:mb-4 sm3:mb-4b">
					Prices are subject to change<br />upon availability - low/high season
				</p>
				<p>for more information visit our <Link to="/faq"><span className="italic">FAQ</span></Link> page</p>
			</div>
		</div>
	);
}
export default Book;
