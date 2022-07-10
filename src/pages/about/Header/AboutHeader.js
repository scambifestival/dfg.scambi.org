import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeader.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex>
				<AboutHeaderText />
				<div>
					<img src={aboutHearPic} width="600px" height="500px" />
				</div>
			</Flex>
		);
	}
}

export default AboutHeader;
