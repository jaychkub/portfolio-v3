import "./Home.scss";

import React from "react";

import { FaDownload } from "react-icons/fa";

const Home = () => {
	return (
		<div id="Home">
			<p className="greeting">Hey!</p>
			<p className="name">I'm Jake</p>
			<p className="title">front-end web developer</p>
			<button className="resume">
				<p>DOWNLOAD RESUME</p>
				<FaDownload />
			</button>
		</div>
	);
};

export default Home;
