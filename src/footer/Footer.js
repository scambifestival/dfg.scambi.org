import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faCreditCard,
	faUser,
	faTwitter,
	faCartShopping
} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
	render() {
		return (
			<div className="footer-background">
				<div className="footer-main">
					<div className="footer-top">
						<div className="footer-logo">Scambi</div>
						<div className="footer-cta">
							<div className="footer-cta-text">
								<div className="cta-text">Ready to join us?</div>
							</div>
							<div className="footer-cta-button">
								<div className="cta-button">
									<div className="cta-button-text">ATTEND</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-middle">
						<div className="footer-middle-left">
							<div className="subscribe-blob">
								<div className="subscribe-frame1">
									<div className="frame1-text">
										Subscribe to our Newsletter!{" "}
									</div>
									<div className="frame1-placeholder">
										<input
											className="frame1-inputfield"
											type="text"
											placeholder="Enter your email"
										/>
									</div>

									<div className="frame1-button">
										<div className="frame1-button-text">Subscribe</div>
									</div>
								</div>
							</div>
						</div>
						<div className="privacyPolicy">
							<p>Privacy Policy</p>
						</div>
						<div className="menus1">
							<p>About</p>
							<p>Team</p>
							<p>Manifesto</p>
							<p>Accessibility</p>
						</div>
						<div className="menus2">
							<p>Labs</p>
							<p>Pinolis</p>
							<p>Dissolvenze</p>
							<p>Ideas</p>
						</div>
						<div className="menus2">
							<p>Donate</p>
							<p>Volunteer</p>
							<p>Join Team</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
