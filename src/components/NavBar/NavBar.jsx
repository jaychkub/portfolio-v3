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
				FRONT-END{" "}
				<span className="pink">
					{"<"}WEB{">"}
				</span>{" "}
				DEVELOPER <span className="white">USING REACT</span>
			</p>
			<ul>
				<li>
					<button
						onClick={() => {
							const element = document.getElementById("Home");
							element.scrollIntoView({
								behavior: "smooth",
							});
						}}>
						HOME
					</button>
					<div className="bar"></div>
				</li>
				<li>
					<button
						onClick={() => {
							const element = document.getElementById("About");
							element.scrollIntoView({
								behavior: "smooth",
							});
						}}>
						ABOUT
					</button>
					<div className="bar"></div>
				</li>
				<li>
					<button
						onClick={() => {
							const element = document.getElementById("Projects");
							element.scrollIntoView({
								behavior: "smooth",
							});
						}}>
						PROJECTS
					</button>
					<div className="bar"></div>
				</li>
				<li>
					<button
						onClick={() => {
							const element = document.getElementById("Contact");
							element.scrollIntoView({
								behavior: "smooth",
							});
						}}>
						CONTACT
					</button>
					<div className="bar"></div>
				</li>
			</ul>
			<div className="divider"></div>
			<div className="social-container">
				<a
					href="https://www.linkedin.com/in/jake-courtney-99aa622bb/"
					target="_blank">
					<FaLinkedin />
				</a>
				{/* <a
					href="https://www.instagram.com/justjake_._._/"
					target="_blank">
					<FaInstagram />
				</a> */}
				<a href="https://github.com/jaychkub" target="_blank">
					<FaGithub />
				</a>
				<a href="" target="_blank">
					<SiIndeed />
				</a>
				<a
					href="https://discordapp.com/users/690718830548484106"
					target="_blank">
					<FaDiscord />
				</a>
			</div>
		</div>
	);
};

export default Header;
