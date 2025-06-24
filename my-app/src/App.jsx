import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home.jsx";
import Meny from "./pages/meny.jsx";
import Boka from "./pages/boka.jsx";
import Om from "./pages/om.jsx";
import Oppettider from "./pages/oppettider.jsx";

//components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

//extra
import PopupButton from "./PopupButton.jsx";
import Randomizer from './Randomizer.jsx';


const App = () => {
	return (
		<div>
			<Router>
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Meny" element={<Meny/>}/>
					<Route path="/Boka" element={<Boka/>}/>
					<Route path="/Om" element={<Om/>}/>
					<Route path="/Oppettider" element={<Oppettider/>}/>
				</Routes>
				
				<Footer/>
			</Router>
			
		</div>
		
	);
};

export default App;
