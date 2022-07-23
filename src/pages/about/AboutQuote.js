import React, { Component } from "react";
import "./About.css";

class AboutQuote extends Component {
	render() {
		return (
			<div className="w-fit md:w-full lg:w-full inline-flex items-center justify-center  quoteBack lg:h-screen">
				<div className="overlay"></div>
				<h1 className="aboutQuoteText md:w-2/3 lg:w-2/3">
					WE BELIEVE IN BRAEAKING DOWN BARRIERS
				</h1>
			</div>
		);
	}
}

export default AboutQuote;
