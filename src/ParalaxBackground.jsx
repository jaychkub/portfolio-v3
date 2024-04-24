import React from "react";

import home from "./assets/bg1.jpg";
import banner from "./assets/banner2.jpg";

const ParalaxBackground = ({ isBanner }) => {
	return (
		<div className={`background-image ${isBanner ? "banner" : ""}`}>
			<img src={!isBanner ? home : banner} alt="" />
		</div>
	);
};

export default ParalaxBackground;
