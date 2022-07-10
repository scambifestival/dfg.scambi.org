import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeader.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex>
				<AboutHeaderText className="md:w-1/2 lg:w-1/2" />
				<div className="md:w-1/2 lg:w-1/2 md:mt-12">
					<img src={aboutHearPic} width="600rem" height="600rem" />
				</div>
			</Flex>
		);
	}
}

export default AboutHeader;
