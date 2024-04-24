import "./NavBar.scss";

import React from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

import photo from "../../assets/photo.jpg";

const Header = () => {
	return (
		<div className="NavBar">
			<img src={photo} alt="" />
			<p className="name">Jake Courtney</p>
			<p className="title">
				FRONT-END WEB DEVELOPER <span>FROM THE US</span>
			</p>
			<ul>
				<li>
					<a href="#Home">HOME</a>
				</li>
				<li>
					<a href="#About">ABOUT</a>
				</li>
				<li>
					<a href="#Projects">PROJECTS</a>
				</li>
				<li>
					<a href="#Contact">CONTACT</a>
				</li>
			</ul>
			<div className="divider"></div>
			<div className="social-container">
				<a href="" target="_blank">
					<FaLinkedin />
				</a>
				<a href="" target="_blank">
					<FaInstagram />
				</a>
				<a href="https://github.com/jaychkub" target="_blank">
					<FaGithub />
				</a>
				<a href="" target="_blank">
					<SiIndeed />
				</a>
				<a href="" target="_blank">
					<FaDiscord />
				</a>
			</div>
		</div>
	);
};

export default Header;
