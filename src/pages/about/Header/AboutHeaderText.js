import React from "react";
import "./../About.css";

const AboutHeaderText = (props) => {
	return (
		<div>
			<div className="ourTeamEl lg:w-full md:w-2/3">
				<h2 className="scambi-text text-6xl lg:mt-16 lg:text-5xl md:text-3xl text-left">
					About Scambi
				</h2>
				<p className="text-left md:w-96">
					Scambi, mearninig "exchange" in Italian, is the festival of
					interactive workshop organized in Pigna, the old town of Sanremo
					(italy) by a team of forty young people under-25,from all around
					Europe.
				</p>

				<p className="secondTextHeader text-left">
					Join us for our second year in Sanremo Italy on Aug 25 - 28, 2022,
					where we will explore{" "}
					<span className="disequilibirum">Disequilibirum.</span>
				</p>
			</div>
		</div>
	);
};

export default AboutHeaderText;
