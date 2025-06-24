import React, { useState } from 'react';

function ContactForm() {

	const [submitted, setSubmitted] = useState(false);

	const giveConfirmation = () => {
		setSubmitted(true);
	};


	return (
		<div>
			<form action={giveConfirmation}>
				<label htmlFor="Förnamn">Förnamn</label>
				<input type="text" required="true" tabIndex="6" id="Förnamn" name="Förnamn" placeholder="..." />
				<label htmlFor="Efternamn">Efternamn</label>
				<input type="text" required="true" tabIndex="7" id="Efternamn" name="Efternamn" placeholder="..." />
				<label htmlFor="Epost">Epost</label>
				<input type="text" required="true" tabIndex="8" id="Epost" name="Epost" placeholder="..." />
				<br />
				<label htmlFor="Datum">Datum</label>
				<input type="text" required="true" tabIndex="9" id="Datum" name="Datum" placeholder="DD/MM/ÅÅ" />
				<label htmlFor="Tid">Tid</label>
				<input type="text" required="true" tabIndex="10" id="Tid" name="Tid" placeholder="XX:XX" />
				<label htmlFor="Antal">Antal</label>
				<input type="text" required="true" tabIndex="11" id="Antal" name="Antal" placeholder="..." />
				<br />
				<input className="submit" tabIndex="12" type="submit" value="Submit" />
			</form>
			{submitted ? <div>Vi har tagit emot din bokningsförfrågan</div> : <div></div>}
		</div>



	)
}

export default ContactForm