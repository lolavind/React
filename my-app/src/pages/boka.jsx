import React from "react";
import ContactForm from "../ContactForm";


const Boka = () => {
	return (
		<div>
			<div className="boka_bord_bakgrund">
				<h1 className="boka-bord">Boka bord</h1>
				<div className="boknings_text">
					<p>
						Fyll i dina uppgifter och klicka sedan på “skicka” för att skicka in <br />
						en bokningsförfrågan. Vi återkommer så snabbt som vi kan!<br />
						OBS! Ingen bordsbokning är gällande innan vi har återkopplat till dig och bekräftat <br />
						bokningen.
					</p>
				</div>
				<div className="form">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Boka;