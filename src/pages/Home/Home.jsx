import "./Home.scss";

import React from "react";

import { FaDownload } from "react-icons/fa";

import resume from "../../assets/Jacob_Courtney_Resume.pdf";

const Home = () => {
	return (
		<div id="Home">
			<p className="greeting">Hey!</p>
			<p className="name">I'm Jake</p>
			<p className="title">front-end web developer</p>
			<a className="resume" href={resume} target="_blank">
				<p>DOWNLOAD RESUME</p>
				<FaDownload />
			</a>
		</div>
	);
};

export default Home;
