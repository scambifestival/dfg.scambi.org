import React, { Component } from "react";
import "./About.css";
import AboutExampleWorkshop from "./AboutExampleWorkshop";
import AboutHeader from "./Header/AboutHeader";
import AboutWorkshopExplanation from "./WorkShopExplanation/AboutWorkshopExplanation";
import AboutQuote from "./AboutQuote";
import AboutOurTeam from "./OurTeam/AboutOurTeam";
import NLSubscribe from "./../home/NLSubscribe";
import OurRelations from "../../components/OurRelations/OurRelations";
import OurManifesto from "../../components/OurManifesto/OurManifesto";

class About extends Component {
	render() {
		return (
			<div>
				<AboutHeader />
				<AboutWorkshopExplanation />
				<AboutExampleWorkshop />
				<AboutQuote />
				<OurManifesto />
				<AboutOurTeam />
				<OurRelations />
				<div className="bg-white flex justify-center py-10">
					<NLSubscribe />
				</div>
			</div>
		);
	}
}

export default About;
