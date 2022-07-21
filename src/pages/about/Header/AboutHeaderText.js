import React from "react";
import "./../About.css";

const AboutHeaderText = (props) => {
	return (
		<div className=" w-full lg:w-1/2 aboutHeaderText-container">
			<h2 className="scambi-text lg:mt-16 text-left">About Scambi</h2>
			<p className="text-left">
				Scambi, mearninig "exchange" in Italian, is the festival of interactive
				workshop organized in Pigna, the old town of Sanremo (italy) by a team
				of forty young people under-25,from all around Europe.
			</p>

			<p className="secondTextHeader text-left">
				Join us for our second year in Sanremo Italy on Aug 25 - 28, 2022, where
				we will explore <b className="disequilibirum">Disequilibirum.</b>
			</p>
			<button
				type="button"
				className="rounded-2xl font-semibold btn-light regular aboutHeaderBtn">
				Attend
			</button>
		</div>
	);
};

export default AboutHeaderText;
