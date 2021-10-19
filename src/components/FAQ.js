import React from 'react';

function FAQ() {

  return (
    <div className="grid grid-cols-12 px-1 gap-x-2 bg-92_green pb-4c">
    <div className="col-start-2 col-end-12 font-serif text-small12 not-italic leading-2b tracking-normal text-left text-22_green font-normal">
			<p className="font-bold mb-2">FAQ</p>
      <p className="mb-2">Check in from 15.00 to 20.00<br></br>
				Check out until 12.00</p>
			<p className="mb-2">Smoking is not allowed</p>
			<p className="mb-2">No pets allowed</p>
			<p className="mb-2">From May 1st to October 10th the pool is open to our guest. During the summer season the pool can be used from 9.00 to 20.00</p>
			<p className="mb-4">In case of theft/damage the full amount of the object will be credited on the guest.</p>
			<p className="font-bold mb-2">Payment policy & methods</p>
			<p className="mb-2">Payment will be completed at the end of your stay.</p>
			<p className="mb-2">Payment methods:<br></br>Cash<br></br>Credit/ Debit card<br></br>Bank transfer</p>
			<p className="mb-2">In order to book your stay with us an account of the 30% of the total amount is needed. We will need and keep your bank/ credit card data for safety reasons.</p>
			<p className="font-bold mb-2">Cancellation policy</p>
			<p className="mb-2">In case of cancellation 15 days before your arrival the total amount is returned.</p>
			<p className="mb-2">For cancellations from 15 to 7 days before your arrival the cost of one night is credited.</p>
			<p className="mb-2">For cancellations from 7 to 1 day before the total amount of your stay is credited.</p>
  </div>
</div>
  );
}
export default FAQ;