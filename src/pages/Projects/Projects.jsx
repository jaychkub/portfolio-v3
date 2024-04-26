import "./Projects.scss";

import React from "react";

import { FaGitAlt } from "react-icons/fa";

import calc from "../../assets/calc.jpg";
import quiz from "../../assets/quiz.jpg";
import poke from "../../assets/poke.jpg";

const Projects = () => {
	return (
		<div id="Projects">
			<h2>
				MY PR<span>O</span>JECTS
			</h2>
			<div className="grid">
				<div className="card">
					<img src={calc} alt="" />
					<div className="passive"></div>
					<div className="active">
						<h3>Calculator</h3>
						<div className="tag-container">
							<p>React</p>
							<p>JS</p>
							<p>Tailwind</p>
						</div>
						<div className="link-container">
							<a
								href="https://jaychkub.github.io/1-calculator/"
								className="app"
								target="_blank">
								Visit App
							</a>
							<a
								href="https://github.com/jaychkub/1-calculator/"
								className="github"
								target="_blank">
								<FaGitAlt />
							</a>
						</div>
					</div>
				</div>
				<div className="card">
					<img src={quiz} alt="" />
					<div className="passive"></div>
					<div className="active">
						<h3>Zodiac Quiz</h3>
						<div className="tag-container">
							<p>React</p>
							<p>JS</p>
							<p>SCSS</p>
						</div>
						<div className="link-container">
							<a
								href="https://jaychkub.github.io/2-quiz/"
								className="app"
								target="_blank">
								Visit App
							</a>
							<a
								href="https://github.com/jaychkub/2-quiz/"
								className="github"
								target="_blank">
								<FaGitAlt />
							</a>
						</div>
					</div>
				</div>
				<div className="card">
					<img src={poke} alt="" />
					<div className="passive"></div>
					<div className="active">
						<h3>Pokedex</h3>
						<div className="tag-container">
							<p>React</p>
							<p>JS</p>
							<p>SCSS</p>
							<p>RESTful</p>
							<p>PokeAPI</p>
						</div>
						<div className="link-container">
							<a
								href="https://jaychkub.github.io/4-Pokedex/"
								className="app"
								target="_blank">
								Visit App
							</a>
							<a
								href="https://github.com/jaychkub/4-Pokedex/"
								className="github"
								target="_blank">
								<FaGitAlt />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
