import React, { Component } from "react";
import "./../About.css";
import ourTeampic from "./../../../assets/about/ourTeam.png";
import Flex from "./../../../components/Flex/Flex";
import AboutTeamText from "./AboutTeamText";

class AboutOurTeam extends Component {
	render() {
		return (
			<Flex classes="md:flex-col lg:flex-row">
				<AboutTeamText lassName="xl:w-1/2  md:w-auto lg:w-full lg:text-6xl md:text-4xl" />
				<div className="lg:ml-14 md:ml-14">
					<img src={ourTeampic} width="600px" height="200px" alt="" />
				</div>
			</Flex>
		);
	}
}

export default AboutOurTeam;
