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
			<div className={isHamburgerDisplayed ? "hamburger" : "hide"}>
				<ul>
					<li>HOME</li>
					<li>ABOUT</li>
					<li>PROJECTS</li>
					<li>CONTACT</li>
				</ul>
			</div>
		</div>
	);
};

export default MiniNavBar;
