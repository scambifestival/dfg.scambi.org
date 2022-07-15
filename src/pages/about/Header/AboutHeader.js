import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeader.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex className="md:flex-col">
				<AboutHeaderText className="xl:w-1/2  md:w-auto lg:w-full lg:text-6xl md:text-4xl" />

				<img
					src={aboutHearPic}
					width="600px"
					height="200px"
					alt=""
					className="xl:w-1/2 md:w-1/2 lg:w-1/2 md:pt-24 lg:pt-56 mt-96 xl-pt-60 2xl:mt-60"
				/>
			</Flex>
		);
	}
}

export default AboutHeader;
