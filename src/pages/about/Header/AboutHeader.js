import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeaderNew.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex classes="md:flex-col lg:flex-row y-20 space-y-12 pb-36">
				<AboutHeaderText className="xl:w-1/2 md:w-auto lg:w-full" />
				<div className="aboutHeaderPic">
					<img src={aboutHearPic} width="600px" height="200px" alt="" />
				</div>
			</Flex>
		);
	}
}

export default AboutHeader;
