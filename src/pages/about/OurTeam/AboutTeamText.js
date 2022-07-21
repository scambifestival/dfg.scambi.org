import React, { Component } from "react";
import "./../About.css";

class AboutTeamText extends Component {
	render() {
		return (
			<div className="ourTeamEl lg:w-1/2">
				<h2 className="textOurTeam g:text-6xl md:text-5xl ">Our Team</h2>
				<p className="aboutOurTeam-smallText mb-6">
					We are a group of under 25s coming from every corner of Europe. Our
					association was born from our wish to value real and deep ties,
					horizointally and dialogue, curiosity and welcoming of the different.
				</p>
				<p className="aboutOurTeam-smallText">
					We will be waiting for you in Sanremo, to introduce ourselves
					properly.
				</p>
			</div>
		);
	}
}

export default AboutTeamText;
