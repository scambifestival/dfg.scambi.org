import React, { Component } from "react";
import AboutHeaderText from "../Header/AboutHeaderText";
import Flex from "../../../components/Flex/Flex";
import "../../../components/Flex/Flex.css";
import aboutHearPic from "./../../../assets/about/aboutHeader.png";

class AboutHeader extends Component {
	render() {
		return (
			<Flex>
				<AboutHeaderText className="lg:w-1/2 md:w-1/2 md:mt-12" />
				<div className="lg:w-1/2 md:mt-12 md:w-1/2">
					<img
						src={aboutHearPic}
						width="600px"
						height="200px"
						alt=""
						className="md:mt-16"
					/>
				</div>
			</Flex>
		);
	}
}

export default AboutHeader;
