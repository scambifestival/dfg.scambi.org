import React, { Component } from "react";
import "./../About.css";
import ourTeampic from "./../../../assets/about/ourTeam.png";
import Flex from "./../../../components/Flex/Flex";
import AboutTeamText from "./AboutTeamText";

class AboutOurTeam extends Component {
	render() {
		return (
			<Flex>
				<AboutTeamText className="lg:w-1/2 md:mt-12 md:w-1/2" />
				<div>
					<img src={ourTeampic} width="600px" height="200px" />
				</div>
			</Flex>
		);
	}
}

export default AboutOurTeam;
