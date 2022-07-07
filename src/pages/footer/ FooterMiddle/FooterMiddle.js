import React from "react";
import "./../Footer.css";

const FooterMiddle = () => {
	return (
		<div className="footerMiddle flex">
			<div className="middleLeft w-2/5">
				<div className="blobFooter">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
						<input
							class=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
							placeholder="Enter your email"
							type="text"
						/>
						<button className="purpledBtn w-36 h-12 mt-3 ml-8">
							Subscribe
						</button>
					</div>
				</div>
			</div>{" "}
			<div className="middleRight w-3/5">
				<div className="menus1 w-2/4 p-8 mt-8">
					<p className="mt-8">About</p>
					<p className="mt-8">Team</p>
					<p className="mt-8">Manifesto</p>
					<p className="mt-8">Accessibility</p>
				</div>
				<div className="menus2 w-2/4 p-8 mt-8">
					<p className="mt-8">Labs</p>
					<p className="mt-8">Pinolis</p>
					<p className="mt-8">Dissolvenze</p>
					<p className="mt-8">Ideas</p>
				</div>
				<div className="menus2 w-2/4 p-8 mt-8">
					<p className="mt-8">Donate</p>
					<p className="mt-8">Volunteer</p>
					<p className="mt-8">Join Team</p>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
