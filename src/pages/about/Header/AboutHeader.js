import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeader.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex>
				<AboutHeaderText className="lg:w-2/3 md:mt-12 md:w-1/2 lg:text-6xl md:text-4xl" />

				<img
					src={aboutHearPic}
					width="600px"
					height="200px"
					alt=""
					className="lg:w-1/3 md:w-1/3 pt-16"
				/>
			</Flex>
		);
	}
}

export default AboutHeader;
