import React, { Component } from "react";
import AboutWorkShopText from "./AboutWorkShopText";
import Flex from "../../../components/Flex/Flex";
import "./../About.css";
import workshopPic from "./../../../assets/about/workshop.jpg";

class AboutWorkshopExplanation extends Component {
	render() {
		return (
			<div className="white-background pt-12 pb-12">
				<Flex classes="md:flex-col lg:flex-row">
					<div className="lg:w-1/2 md:w-full w-full">
						<img
							src={workshopPic}
							className="borderImg"
							width="400px"
							height="400px"
							alt=""
						/>
					</div>
					<AboutWorkShopText
						style={{ backgroundColor: "white" }}
						className="lg:w-full md:w-full"
					/>
				</Flex>
			</div>
		);
	}
}

export default AboutWorkshopExplanation;