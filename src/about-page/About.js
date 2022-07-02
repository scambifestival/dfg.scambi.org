import React, { Component } from "react";
import "./About.css";
import AboutExampleWorkshop from "./AboutExampleWorkshop";
import AboutHeader from "./AboutHeader";
import AboutWorkshopExplanation from "./AboutWorkshopExplanation";

class About extends Component {
	render() {
		return (
			<div>
				<AboutHeader />
				<AboutWorkshopExplanation />
				<AboutExampleWorkshop />
			</div>
		);
	}
}

export default About;
