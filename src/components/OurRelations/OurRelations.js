import React, { Component } from "react";
import Flex from "../Flex/Flex";
import Button from "../button/index";
import ourRelationPics from "./../../assets/ourRelations/Sponsors.png";

class OurRelations extends Component {
	render() {
		return (
			<Flex
				classes="my-1 px-8 space-y-10 md:space-x-reverse xl:gap-x-52"
				reverse={true}>
				<div className="w-4/5 flex flex-col text-center space-y-8 md:text-left">
					<h2 className="leading-tight lg:leading-normal">Our Relations</h2>
					<p className="mx-auto md:mx-0 w-full 2xl:w-4/5">
						Alone we would not have been able to concretize the magic of Scambi.
						What makes our festival unique are the relationships and the bonds
						with local and non-local bodies, the public administration of
						Sanremo and many other special people.
					</p>
					<div className="flex flex-row justify-center md:justify-start space-x-7">
						<Button>Partner with us</Button>
						<Button styleType="secondary">Meet our partners</Button>
					</div>
				</div>
				<div className="w-3/5 lg:w-4/12">
					<img src={ourRelationPics} alt="" />
				</div>
			</Flex>
		);
	}
}

export default OurRelations;
