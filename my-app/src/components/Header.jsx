import React from "react";
import {NavLink, Link} from "react-router-dom";

class Header extends React.Component {
	render(){
		return(
			<header>
				<div className="logga">
					<img src={"./img/logga.png"} className="logga" alt="Eurasias logotyp" />
				</div>
				<div className="meny">
					<nav>
						<NavLink to="/" tabIndex="1">Start</NavLink>
						<NavLink to="/meny" tabIndex="2">Meny</NavLink>
						<NavLink to="/boka" tabIndex="3">Boka</NavLink>
						<NavLink to="/om" tabIndex="4">Om oss</NavLink>
						<NavLink to="/oppettider" tabIndex="5">Öppettider</NavLink>
					</nav>
				</div>
				<img className="burger" src={"./img/burger-bar.png"} alt="Meny ikon" />
			</header>
		);
	}
}
export default Header;