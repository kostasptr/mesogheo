import React from 'react';

const Book = () => {
	return (
		<div className="grid grid-cols-12 px-1 gap-x-2 pb-5 md:pb-0">
			<div className="col-start-2 col-end-12 font-sans not-italic leading-4 text-left font-light text-small12 text-02_green tracking-normal md:text-xl md:leading-7">
				<p className="mb-3 md:mb-3b">For information & booking you can contact us on:</p>
				<p className="mb-5 md:mb-60 "><a href="tel:+393887842886" target="_blank" rel="noopener noreferrer">WhatsApp: +39 3887842886</a><br></br><a href="tel:+393887842886" target="_blank" rel="noopener noreferrer">Phone number: +39 3887842886</a><br></br><a href="mailto: mesogheo@googlemail.com" target="_blank" rel="noopener noreferrer" >E-mail: mesogheo@googlemail.com</a></p>
				<p className="mb-3 font-normal">Pricelist:</p>
				<p className="mb-3 md:mb-3b">Loft Viola<br></br>
				Sunday-Thursday: 120€ / Friday-Saturday: 150€</p>
				<p className="mb-3 md:mb-3b">Loft Verde<br></br>
				Sunday-Thursday: 120€ / Friday-Saturday: 150€</p>
				<p className="mb-3 md:mb-3b">Arizona Room<br></br>
				Sunday-Thursday: 110€ / Friday-Saturday: 130€</p>
				<p className="mb-3 md:mb-3b">Blu Room<br></br>
				Sunday-Thursday: 110€ / Friday-Saturday: 130€</p>
				<p className="mb-3 md:mb-3b">*Breakfast included in your booking</p>
				<p className="mb-4 md:mb-8">*Check in from 15.00 to 20.00<br></br>*Check out until 12.00</p>
				<p className="text-center italic md:mb-6a">for more information visit our FAQ page</p>
			</div>
		</div>
	);
}
export default Book;