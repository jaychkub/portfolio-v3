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
	);
};

export default Projects;
