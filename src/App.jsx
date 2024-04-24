import "./App.scss";

import {
	FaDownload,
	FaReact,
	FaGitAlt,
	FaHtml5,
	FaCss3Alt,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

import calc from "./assets/calc.jpg";
import quiz from "./assets/quiz.jpg";
import poke from "./assets/poke.jpg";

import MiniNavBar from "./components/MiniNavBar/MiniNavBar";
import NavBar from "./components/NavBar/NavBar";

import home from "./assets/bg1.jpg";
import responsive from "./assets/responsive.png";
import ux from "./assets/ux.png";
import performance from "./assets/performance.png";
import { useState, useEffect } from "react";
import ParalaxBackground from "./ParalaxBackground";

function App() {
	const [isBanner, setIsBanner] = useState(false);

	// Swap the background image when scrolled past
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 912) setIsBanner(true);
			else setIsBanner(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="App">
			<ParalaxBackground isBanner={isBanner} />
			<NavBar />
			<MiniNavBar />
			<div id="Home">
				<p className="greeting">Hey!</p>
				<p className="name">I'm Jake</p>
				<p className="title">front-end web developer</p>
				<button className="resume">
					<p>DOWNLOAD RESUME</p>
					<FaDownload />
				</button>
			</div>
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
								Officia dolor optio, id qui soluta minus. Velit
								pariatur quae, vero{" "}
								<span className="highlight">beatae</span> dicta{" "}
								<span className="highlight">nesciunt</span>{" "}
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
								Nobis, quod? Repellendus voluptates laborum
								mollitia nemo optio nam libero eveniet! Est
								totam voluptatem laboriosam maiores!{" "}
								<span className="highlight">Rerum</span>{" "}
								quaerat,{" "}
								<span className="highlight">minus</span> sint
								<span className="highlight">
									natus
								</span> totam{" "}
								<span className="highlight">facere</span> iusto
								quidem mollitia vel cumque laudantium maiores
								officiis eaque dignissimos soluta in
								perspiciatis expedita fugit nihil sequi
								voluptates. Mollitia.
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
									adipisicing elit. Odit, itaque aspernatur
									optio culpa magnam repellendus.
								</p>
							</div>
							<div className="card">
								<img src={ux} alt="" />
								<h4>UI & UX</h4>
								<p>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Odit, itaque aspernatur
									optio culpa magnam repellendus.
								</p>
							</div>
							<div className="card">
								<img src={performance} alt="" />
								<h4>PERFORMANCE</h4>
								<p>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Odit, itaque aspernatur
									optio culpa magnam repellendus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="Banner">
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
			<div id="Projects">
				<h2>
					MY PR<span>O</span>JECTS
				</h2>
				<div className="grid">
					<div className="card">
						<img src={calc} alt="" />
						<div className="passive"></div>
						<div className="active">
							<div className="tag-container">
								<p>React</p>
								<p>JS</p>
								<p>Tailwind</p>
							</div>
							<div className="link-container">
								<a href="" className="app">
									Visit App
								</a>
								<a href="" className="github">
									<FaGitAlt />
								</a>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={quiz} alt="" />
						<div className="passive"></div>
						<div className="active">
							<div className="tag-container">
								<p>React</p>
								<p>JS</p>
								<p>SCSS</p>
							</div>
							<div className="link-container">
								<a href="" className="app">
									Visit App
								</a>
								<a href="" className="github">
									<FaGitAlt />
								</a>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={poke} alt="" />
						<div className="passive"></div>
						<div className="active">
							<div className="tag-container">
								<p>React</p>
								<p>JS</p>
								<p>SCSS</p>
								<p>RESTful</p>
								<p>PokeAPI</p>
							</div>
							<div className="link-container">
								<a href="" className="app">
									Visit App
								</a>
								<a href="" className="github">
									<FaGitAlt />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="Contact">
				<h2>CONTACT ME</h2>
				<div className="form-container">
					<div className="left">
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</div>
					<div className="right">
						<input type="text" />
					</div>
				</div>
				<button>
					SEND EMAIL{" "}
					<span>
						<MdOutlineEmail />
					</span>
				</button>
			</div>
		</div>
	);
}

export default App;
