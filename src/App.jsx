import "./App.scss";

import { useState, useEffect } from "react";
import React from "react";

import ParalaxBackground from "./components/ParalaxBackground";
import MiniNavBar from "./components/MiniNavBar/MiniNavBar";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Banner from "./pages/Banner/Banner";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
	const [isBanner, setIsBanner] = useState(false);

	// Swap the background image when scrolled past
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 912) setIsBanner(true);
			else setIsBanner(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="App">
			<ParalaxBackground isBanner={isBanner} />
			<NavBar />
			<MiniNavBar />
			<Home />
			<About />
			<Banner />
			<Projects />
			<Contact />
			<div className="footer"></div>
		</div>
	);
}

export default App;
