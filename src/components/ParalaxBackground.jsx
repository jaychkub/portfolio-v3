import React from "react";

import home from "../assets/bg.jpg";
import banner from "../assets/banner.jpg";

const ParalaxBackground = ({ isBanner }) => {
	return (
		<div className={`background-image ${isBanner ? "banner" : ""}`}>
			<img src={!isBanner ? home : banner} alt="" />
		</div>
	);
};

export default ParalaxBackground;
