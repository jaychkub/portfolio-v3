import "./Contact.scss";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { MdOutlineEmail, MdOutlineQuickreply } from "react-icons/md";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_t1aq5le", "template_5vg3wcf", form.current, {
				publicKey: "yFZV5KbQjidJD1HFR",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);

		form.current?.reset();
	};

	return (
		<div id="Contact">
			<form className="container" ref={form} onSubmit={sendEmail}>
				<h2>CONTACT ME</h2>
				<div className="form-container">
					<div className="left">
						<div className="name-container">
							<div className="input">
								<input
									type="text"
									placeholder=" "
									name="user_first"
									required
								/>
								<p>First Name</p>
							</div>
							<div className="input">
								<input
									type="text"
									placeholder=" "
									name="user_last"
									required
								/>
								<p>Last Name</p>
							</div>
						</div>
						<div className="input">
							<input
								type="text"
								placeholder=" "
								name="user_email"
								required
							/>
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
								name="message"
								required
							/>
							<p>Write a message.</p>
						</div>
					</div>
				</div>
				<div className="button-container">
					<button type="submit">
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
