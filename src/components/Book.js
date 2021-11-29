import { Link } from "react-router-dom";
import ScrollToTop from '../helpers/ScrollToTop';

const Book = () => {
	ScrollToTop();
	return (
		<div className="grid grid-cols-12 mx-1 gap-x-2 mb-4 md:mb-6a lg:mb-6b lg:mx-4c lg:gap-x-4 sm2:gap-x-1 sm2:mx-10 sm2:px-0 sm2:mb-60 sm3:gap-x-8 sm3:mx-16 sm3:mb-64">
			<div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light text-small12 text-02_green tracking-normal md:text-xl md:leading-7 lg:text-2xl lg:leading-8 sm2:col-start-2 sm2:col-end-7 sm2:text-f24 sm2:leading-8  sm3:text-f26 sm3:leading-height36 sm3:font-light">
				<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">For information & booking you can contact us on:</p>
				<p className="mb-4 md:mb-60 sm2:mb-6 sm3:mb-6b"><a href="tel:+393887842886" target="_blank" rel="noopener noreferrer">WhatsApp: <span className="hover:text-pink">+39 3887842886</span></a><br></br><a href="tel:+393887842886" target="_blank" rel="noopener noreferrer">Phone number: <span className="hover:text-pink">+39 3887842886</span></a><br></br><a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" >E-mail: <span className="hover:text-pink">mesogheo@googlemail.com</span></a></p>
				<p className="mb-2 font-normal sm2:mb-2 sm3:mb-4b">Pricelist:</p>
				<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">ARIZONA ROOM / 120€</p>
				<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">VIOLA LOFT / 140€</p>
				<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">BLU ROOM / 120€</p>				
				<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">VERDE LOFT / 140€</p>
				<p className="mb-2 md:mb-3b sm2:mb-4 sm3:mb-4b">*Price per night per room<br></br>*Breakfast included in your booking</p>
				<p className="mb-4 md:mb-8 lg:mb-5c sm2:mb-4 sm3:mb-6b">*Check in from 15.00 to 20.00<br></br>*Check out until 12.00</p>
				<p className="text-center sm2:text-left">for more information visit our <Link to="/faq"><span className="italic">FAQ</span></Link> page</p>
			</div>
		</div>
	);
}
export default Book;