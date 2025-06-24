import React from "react";
import HoverZoomText from "../HoverZoomText";
import { klick } from "../button";

class Home extends React.Component {
	render(){
		return(
			<><div>
				<img src={"./img/banner2.png"} className="banner" alt="Eurasia" />
			</div><section>
					{/* <button onClick={klick}>Show Message</button> */}

					<h2>Vi serverar Umeås bästa kinesiska mat!</h2>
					<div className="start_bilder">
						<div className="meny_bild_div">
							<img className="knapp_bild" src={"./img/meny.png"} alt="Vår meny bakgrundsbild" />
							<div className="centered">
								<a href="/meny" tabIndex="6">
									<HoverZoomText>Meny</HoverZoomText>
								</a>
							</div>
						</div>
						<div className="bord_bild_div">
							<img className="knapp_bild" src={"./img/bord.png"} alt="Boka bord bakgrundsbild" />
							<div className="centered">
								<a href="/boka" tabIndex="7">
									<HoverZoomText>Boka bord</HoverZoomText>
								</a>
							</div>
						</div>
					</div>
					<h2>Hitta hit!</h2>
					<img className="karta" src={"./img/karta.png"} alt="Karta över Eurasia" />
				</section></>
		);
	}
}
export default Home;