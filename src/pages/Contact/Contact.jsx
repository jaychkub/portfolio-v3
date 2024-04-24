import "./Contact.scss";

import React from "react";

import { MdOutlineEmail, MdOutlineQuickreply } from "react-icons/md";

const Contact = () => {
	return (
		<div id="Contact">
			<form className="container">
				<h2>CONTACT ME</h2>
				<div className="form-container">
					<div className="left">
						<div className="name-container">
							<div className="input">
								<input type="text" placeholder=" " required />
								<p>First Name</p>
							</div>
							<div className="input">
								<input type="text" placeholder=" " required />
								<p>Last Name</p>
							</div>
						</div>
						<div className="input">
							<input type="text" placeholder=" " required />
							<p>Email</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="right">
						<div className="input">
							<textarea
								type="text"
								placeholder=" "
								rows="12"
								required
							/>
							<p>Write a message.</p>
						</div>
					</div>
				</div>
				<div className="button-container">
					<button onClick={() => {}}>
						SEND EMAIL{" "}
						<span>
							<MdOutlineEmail />
						</span>
					</button>
					<button className="quickmail">
						<span>
							<MdOutlineQuickreply />
						</span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
