import React, { Component } from "react";
import Flex from "../Flex/Flex";
import ourRelationPics from "./../../assets/ourRelations/Sponsors.png";
import RelationsText from "./RelationsText";

class OurRelations extends Component {
	render() {
		return (
			<Flex className="flex-row-reverse">
				<RelationsText />
				<div className="lg:w-1/2 md:w-1/2 w-1/2 lg:mr-14 md:mr-14">
					<img
						src={ourRelationPics}
						className="borderImg"
						width="400px"
						height="100px"
						alt=""
					/>
				</div>
			</Flex>
		);
	}
}

export default OurRelations;
