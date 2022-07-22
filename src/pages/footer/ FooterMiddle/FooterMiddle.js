import React from "react";
import "./../Footer.css";
import EmailValidation from "../../../components/emailValidation/EmailValidation";

const FooterMiddle = (props) => {
	return (
		<div className="footerMiddle w-full h-fit flex  md:flex:row sm:flex-row flex-container lg:flex-row md:space-x-4 md:space-y-0">
			<div className="middleLeft md:w-1/3 lg:w-1/4 sm:w-1/3">
				<div className="blob-wrap">
					<div className="blobFooter"></div>
				</div>
				<div className="contentBlob">
					<p>Subscribe to our Newsletter!</p>
					<EmailValidation fileName="Footer" />
				</div>
			</div>
			<div className="md:w-2/3 lg:w-3/4 xl:w-2/3 sm:w-2/3 inline-flex items-center justify-center middleRight">
				<div className="menus1 w-1/3 lg:w-42 md:w-36 sm:w-36 xl:w-1/3">
					<ul>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/about">About</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/">Team</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/">Manifesto</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/">Accessibility</a>
						</li>
					</ul>
				</div>
				<div className="menus2 w-1/3 lg:w-48 md:w-48 sm:w-36 xl:w-1/3">
					<ul>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/lab">Labs</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/minievents">Pinolis</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/">Dissolvenze</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/">Ideas</a>
						</li>
					</ul>
				</div>
				<div className="menus3 w-1/3 lg:w-48 md:w-36 sm:w-36 xl:w-1/3">
					<ul>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/donate">Donate</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/volunteer">Volunteer</a>
						</li>
						<li className="mt-2 lg:ml-24 sm:ml-12">
							<a href="/">Join Team</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
