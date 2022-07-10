import React from "react";
import "./../FooterNew.css";

const FooterMiddle = () => {
	return (
		<div className="footerMiddle">
			<div className="middleLeft">
				<div className="blobFooter">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="#edbbff"
							d="M48.4,-45.6C64.6,-32.3,80.8,-16.1,82.4,1.6C84.1,19.4,71.1,38.8,55,51.1C38.8,63.4,19.4,68.6,4.6,63.9C-10.1,59.3,-20.3,44.9,-36.6,32.6C-53,20.3,-75.5,10.1,-78.7,-3.2C-81.8,-16.4,-65.6,-32.9,-49.2,-46.3C-32.9,-59.7,-16.4,-70,-0.2,-69.8C16.1,-69.7,32.3,-59,48.4,-45.6Z"
							transform="translate(100 100)"
						/>
					</svg>
					<div className="contentsBlob">
						<div className="">Subscribe to our Newsletter! </div>
						<input type="text" placeholder="Enter your email" />
						<div className="t">Subscribe</div>
					</div>
				</div>
			</div>{" "}
			<div className="middleRight">
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
	);
};

export default FooterMiddle;
