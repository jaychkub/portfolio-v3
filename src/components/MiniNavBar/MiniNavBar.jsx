import "./MiniNavBar.scss";

import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

const MiniNavBar = () => {
	const [isHamburgerDisplayed, setIsHamburgerDisplayed] = useState(false);

	const toggleHamburger = () => {
		setIsHamburgerDisplayed((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className="MiniNavBar">
			<div className="header">
				{/* <p className="name">Jake C</p> */}
				<button onClick={toggleHamburger}>
					<RxHamburgerMenu />
				</button>
			</div>
			<div
				className={
					isHamburgerDisplayed ? "hamburger" : "hamburger hide"
				}>
				<ul>
					<li>
						<button
							onClick={() => {
								toggleHamburger();
								const element = document.getElementById("Home");
								element.scrollIntoView({
									behavior: "smooth",
								});
							}}>
							HOME
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								toggleHamburger();
								const element =
									document.getElementById("About");
								element.scrollIntoView({
									behavior: "smooth",
								});
							}}>
							ABOUT
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								toggleHamburger();
								const element =
									document.getElementById("Projects");
								element.scrollIntoView({
									behavior: "smooth",
								});
							}}>
							PROJECTS
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								toggleHamburger();
								const element =
									document.getElementById("Contact");
								element.scrollIntoView({
									behavior: "smooth",
								});
							}}>
							CONTACT
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MiniNavBar;
