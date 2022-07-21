import React from "react";
import "./../Footer.css";
import EmailValidation from "../../../components/emailValidation/EmailValidation";

const FooterMiddle = (props) => {
	return (
		<div className="footerMiddle w-full h-fit flex flex-col md:flex:row flex-container lg:flex-row md:space-x-4 md:space-y-0">
			<div className="middleLeft"></div>
			<div className="md:w-full lg:w-1/2 inline-flex items-center justify-center middleRight">
				<div className="menus1 w-1/3">
					<ul>
						<li className="mt-2">
							<a href="/about">About</a>
						</li>
						<li className="mt-2">
							<a href="/">Team</a>
						</li>
						<li className="mt-2">
							<a href="/">Manifesto</a>
						</li>
						<li className="mt-2">
							<a href="/">Accessibility</a>
						</li>
						<li className="mt-2 galaxy">
							<a href="/donate">Donate</a>
						</li>
						<li className="mt-2 galaxy">
							<a href="/volunteer">Volunteer</a>
						</li>
					</ul>
				</div>
				<div className="menus2 w-1/3">
					<ul>
						<li className="mt-2">
							<a href="/lab">Labs</a>
						</li>
						<li className="mt-2">
							<a href="/minievents">Pinolis</a>
						</li>
						<li className="mt-2">
							<a href="/">Dissolvenze</a>
						</li>
						<li className="mt-2">
							<a href="/">Ideas</a>
						</li>
						<li className="mt-2 galaxy">
							<a href="/">Join Team</a>
						</li>
					</ul>
				</div>
				<div className="menus3 w-1/3">
					<ul>
						<li className="mt-2">
							<a href="/donate">Donate</a>
						</li>
						<li className="mt-2">
							<a href="/volunteer">Volunteer</a>
						</li>
						<li className="mt-2">
							<a href="/">Join Team</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
