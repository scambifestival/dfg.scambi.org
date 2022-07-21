import React, { Component } from "react";
import OurTeamHeaderText from "./OurTeamHeaderText";
import OurTeamImage from "./About illustration.png";
import "../../components/Flex/Flex.css";

class OurTeamHeader extends Component {
	render() {
		return (
			<div className="grid grid-cols-2 items-center">
					<OurTeamHeaderText className="pr-10"/>
					<img src={OurTeamImage}  className="our-team-image" alt="team" />
			</div>
		);
	}
}

export default OurTeamHeader;