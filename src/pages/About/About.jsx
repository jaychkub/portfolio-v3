import "./About.scss";

import React from "react";

import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import responsive from "../../assets/responsive1.png";
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
							Hi there! I'm{" "}
							<span className="super-highlight">
								Jake Courtney
							</span>
							, a coder with over{" "}
							<span className="highlight">5+ years</span> of
							experience. Although I've only recently delved into
							web development, I'm passionate about creating
							projects in{" "}
							<span className="super-highlight">React</span> using{" "}
							<span className="highlight">JavaScript</span> and{" "}
							<span className="highlight">HTML/CSS</span>.
							Additionally, I have a keen interest in Arduino and
							build exciting projects using{" "}
							<span className="highlight">C++</span>. When I'm not
							coding, I enjoy{" "}
							<span className="highlight">wrestling</span>,
							<span className="highlight">snowboarding</span>, and
							exploring my creative side through various{" "}
							<span className="highlight">arts and crafts</span>{" "}
							activities.
						</p>
					</div>
					<div className="divider"></div>
					<div className="skills">
						<h3>SKILLS</h3>
						{/* <div className="skill-container">
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
						</div> */}
						<p>
							I utilize <span className="highlight">React</span>,{" "}
							<span className="highlight">Git</span>,{" "}
							<span className="highlight">JavaScript</span>,{" "}
							<span className="highlight">HTML</span>,{" "}
							<span className="highlight">CSS</span>,{" "}
							<span className="highlight">SCSS</span>, and{" "}
							<span className="highlight">Node.js</span>
							on a daily basis for web development. These
							versatile technologies allow me to create dynamic
							and responsive user interfaces, efficiently manage
							project versions, and build robust full-stack
							applications. Additionally, I have experience
							working with popular frameworks like{" "}
							<span className="highlight">Tailwind</span> and{" "}
							<span className="highlight">Bootstrap</span> and{" "}
							<span className="highlight">Express</span> as well
							as databases like{" "}
							<span className="highlight">MongoDB</span> for
							efficient data management. Beyond web technologies,
							I'm also proficient in languages such as{" "}
							<span className="highlight">C++</span>,{" "}
							<span className="highlight">Java</span>, and{" "}
							<span className="highlight">Python</span>, enabling
							me to tackle diverse programming challenges and
							projects across various domains.
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
								Using modern CSS techniques and responsive
								design principles, I craft web layouts that
								seamlessly adapt to both desktop and mobile
								viewports, ensuring an optimal user experience
								across devices.
							</p>
						</div>
						<div className="card">
							<img src={ux} alt="" />
							<h4>UI & UX</h4>
							<p>
								With a keen eye for aesthetics and usability, I
								meticulously craft user interfaces that are
								visually appealing, intuitive, and enhance the
								overall user experience.
							</p>
						</div>
						<div className="card">
							<img src={performance} alt="" />
							<h4>PERFORMANCE</h4>
							<p>
								I prioritize speed and reliability in my website
								development, employing best practices and
								optimizations to ensure high performance. My
								goal is to deliver lightning-fast load times and
								robust functionality for an exceptional user
								experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
