import React from 'react';

function Book() {

	return (
		<div className="grid grid-cols-12 px-1 gap-x-2 bg-92_green pb-4c">
			<div className="col-start-2 col-end-12 font-serif text-small12 text-22_green not-italic font-normal leading-2b tracking-normal text-left ">
				<p className="mb-3">For information & booking you can contact us on:</p>
				<p className="mb-3">+39 3887842886 phone number & WhatsApp</p>
				<p className="mb-5">mesogheo@googlemail.com</p>
				<p className="mb-3">Pricelist:</p>
				<p className="mb-3">Loft Viola & Loft Verde<br></br>
				Sunday-Thursday: 120€ / Friday-Saturday: 150€</p>
				<p className="mb-3">Arizona Room<br></br>
				Sunday-Thursday: 110€ / Friday-Saturday: 130€</p>
				<p className="">Blu Room<br></br>
				Sunday-Thursday: 110€ / Friday-Saturday: 130€</p>
			</div>
		</div>
	);
}
export default Book;