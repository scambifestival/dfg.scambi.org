import React from "react";
import "./../Footer.css";
import EmailValidation from "../../../components/emailValidation/EmailValidation";

const FooterMiddle = (props) => {
	return (
		<div className="footerMiddle w-full h-fit flex flex-col flex-container lg:flex-row md:space-x-4 md:space-y-0">
			<div className="md:w-full lg:w-1/2 inline-flex items-center justify-center h-screen middleLeft md:h-40 blob">
				<div className="blobFooter">
					<svg
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
						className="blobFooter1">
						<path
							fill="#edbbff"
							d="M48.4,-45.6C64.6,-32.3,80.8,-16.1,82.4,1.6C84.1,19.4,71.1,38.8,55,51.1C38.8,63.4,19.4,68.6,4.6,63.9C-10.1,59.3,-20.3,44.9,-36.6,32.6C-53,20.3,-75.5,10.1,-78.7,-3.2C-81.8,-16.4,-65.6,-32.9,-49.2,-46.3C-32.9,-59.7,-16.4,-70,-0.2,-69.8C16.1,-69.7,32.3,-59,48.4,-45.6Z"
							transform="translate(100 100)"
						/>
					</svg>
					<div className="contentsBlob flex flex-col">
						<div className="subscribeNews mb-2">
							Subscribe to our Newsletter!{" "}
						</div>

						<EmailValidation fileName="Footer" />
					</div>
				</div>
			</div>
			<div className="md:w-full lg:w-1/2 inline-flex items-center justify-center middleRight">
				<div className="menus1 w-1/3">
					<p className="mt-2">
						<a href="/about">About</a>
					</p>
					<p className="mt-2">
						<a href="/">Team</a>
					</p>
					<p className="mt-2">
						<a href="/">Manifesto</a>
					</p>
					<p className="mt-2">
						<a href="/">Accessibility</a>
					</p>
					<p className="mt-2 galaxy">
						<a href="/donate">Donate</a>
					</p>
					<p className="mt-2 galaxy">
						<a href="/volunteer">Volunteer</a>
					</p>
				</div>
				<div className="menus2 w-1/3">
					<p className="mt-2">
						<a href="/lab">Labs</a>
					</p>
					<p className="mt-2">
						<a href="/minievents">Pinolis</a>
					</p>
					<p className="mt-2">
						<a href="/">Dissolvenze</a>
					</p>
					<p className="mt-2">
						<a href="/">Ideas</a>
					</p>
					<p className="galaxy">Join Team</p>
				</div>
				<div className="menus3 w-1/3">
					<p className="mt-2">
						<a href="/donate">Donate</a>
					</p>
					<p className="mt-2">
						<a href="/volunteer">Volunteer</a>
					</p>
					<p className="mt-2">
						<a href="/">Join Team</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
