import "./About.scss";

import React from "react";

import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import responsive from "../../assets/responsive.png";
import ux from "../../assets/ux.png";
import performance from "../../assets/performance.png";

const About = () => {
	return (
		<div id="About">
			<h2>ABOUT ME</h2>
			<div className="container">
				<div className="top">
					<div className="description">
						<h3>WHO AM I?</h3>
						<p>
							<span className="highlight">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</span>{" "}
							<span className="super-highlight">Officia</span>{" "}
							dolor optio, id qui soluta minus. Velit pariatur
							quae, vero <span className="highlight">beatae</span>{" "}
							dicta <span className="highlight">nesciunt</span>{" "}
							fugiat quo atque hic alias voluptatibus
							necessitatibus accusamus itaque qui facere quos
							aperiam? Aspernatur necessitatibus animi ut.
							Distinctio!
						</p>
					</div>
					<div className="divider"></div>
					<div className="skills">
						<h3>SKILLS</h3>
						<div className="skill-container">
							<div className="skill">
								<FaReact />
								<p>React</p>
							</div>
							<div className="skill">
								<FaGitAlt />
								<p>Git</p>
							</div>
							<div className="skill">
								<FaHtml5 />
								<p>HTML5</p>
							</div>
							<div className="skill">
								<FaCss3Alt />
								<p>CSS3</p>
							</div>
							<div className="skill">
								<SiJavascript />
								<p>JavaScript</p>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet,{" "}
							<span className="highlight">
								consectetur adipisicing elit.
							</span>{" "}
							Nobis, quod? Repellendus voluptates laborum mollitia
							nemo optio nam libero eveniet! Est totam voluptatem
							laboriosam maiores!{" "}
							<span className="highlight">Rerum</span> quaerat,{" "}
							<span className="highlight">minus</span> sint
							<span className="highlight">natus</span> totam{" "}
							<span className="highlight">facere</span> iusto
							quidem mollitia vel cumque laudantium maiores
							officiis eaque dignissimos soluta in perspiciatis
							expedita fugit nihil sequi voluptates. Mollitia.
						</p>
					</div>
				</div>
				<div className="bottom">
					<h3>IMPORTANT TO ME</h3>
					<div className="card-container">
						<div className="card">
							<img src={responsive} alt="" />
							<h4>RESPONSIVE / MOBILE FREINDLY</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Odit, itaque aspernatur optio
								culpa magnam repellendus.
							</p>
						</div>
						<div className="card">
							<img src={ux} alt="" />
							<h4>UI & UX</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Odit, itaque aspernatur optio
								culpa magnam repellendus.
							</p>
						</div>
						<div className="card">
							<img src={performance} alt="" />
							<h4>PERFORMANCE</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Odit, itaque aspernatur optio
								culpa magnam repellendus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
