import "./Banner.scss";

import React from "react";

const Banner = () => {
	return (
		<div className="Banner" ref={null}>
			<div className="card">
				<p className="number">19</p>
				<p>years old</p>
			</div>
			<div className="card">
				<p className="number">6</p>
				<p>languages</p>
			</div>
			<div className="card">
				<p className="number">4</p>
				<p>projects</p>
			</div>
			<div className="card">
				<p className="number">0+</p>
				<p>years experience</p>
			</div>
		</div>
	);
};

export default Banner;
