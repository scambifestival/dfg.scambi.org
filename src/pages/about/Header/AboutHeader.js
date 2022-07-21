import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeaderNew.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex classes="md:flex-col lg:flex-col xl:flex-row">
				<AboutHeaderText className="xl:w-1/2  md:w-auto lg:w-full lg:text-6xl md:text-4xl" />
				<div className="lg:ml-14 md:ml-14 w-full">
					<img src={aboutHearPic} width="600px" height="200px" alt="" />
				</div>
			</Flex>
		);
	}
}

export default AboutHeader;
