import React from "react";
import "./../About.css";

const TextFlex = (props) => {
	return (
		<div className="lg:w-1/2 md:mt-12 md:w-1/2">
			<div className="flex-text">
				<h4 className="scambiExplanation-text">
					Our purpose is to recover the value of{" "}
					<span className="purpleText scambiExplanation-text">
						communication
					</span>{" "}
					and <span className="purpleText scambiExplanation-text">meeting</span>{" "}
					through paneuretic workshops
				</h4>
				<p className="scambi-workExplanation-text">
					Create your personalized journey of workshops from topics moving from
					physics to languages, from history to dancing, from music to law, from
					cooking to activism.
				</p>
				<p className="scambi-workExplanation-text">
					All workshops will be instrinsically careful to issues like{" "}
					<b className="bold-fonts">
						accessibility, sustainebility, and inclusion.
					</b>
				</p>
			</div>
		</div>
	);
};

export default TextFlex;
