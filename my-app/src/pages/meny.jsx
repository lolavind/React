import React from "react";
import { a } from "react-router-dom";
import Randomizer from "../Randomizer";
import SeeMore from "../SeeMore";


const Meny = () => {
	return (
		<div>
			<h1 className="meny_h1">Meny</h1>
				<div className="random">
					<Randomizer />
				</div>
				

			<div>
				<p className="list_head">Köksmästaren rekommenderar</p>
				<ul>
					<li>Eurasia special 175:-</li>
					<li>Räkor i stark vitlökssås 195:-</li>
					<li>Szechuen anka 185:-</li>
				</ul>
				<SeeMore />
			</div>
			<div>
				<p className="list_head">Förrätter</p>
				<ul>
					<li>Friterade lökringar 65:-</li>
					<li>Friterade räkchips 49:-</li>
					<li>Friterade bläckfiskringar 65:-</li>
					<li className="se_mer" tabIndex="7">Se mer...</li>
				</ul>
			</div>
			<div>
				<p className="list_head">Kycklingrätter</p>
				<ul>
					<li>Kyckling med cashewnötter 139:-</li>
					<li>Kyckling med ananas 139:-</li>
					<li>Kyckling i currysås 139:-</li>
					<li className="se_mer" tabIndex="8">Se mer...</li>
				</ul>
			</div>
			<div className="pdf">
				<p>Vi har även vår meny som pdf!</p>
				<a href="http://www.eurasia.se/3dg/Bildarkiv/org/1179/klicka%20h%C3%A4r%20f%C3%B6r%20v%C3%A5r%20%C3%A1%20la%20carte-meny%20som%20pdf.pdf">
					<p>Klicka här!</p>
				</a>
			</div>
		</div>
	);
};

export default Meny;