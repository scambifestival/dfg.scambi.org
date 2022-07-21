import React, { Component } from "react";
import "./About.css";

class AboutQuote extends Component {
	render() {
		return (
			<div className="md:w-full lg:w-full inline-flex items-center justify-center  quoteBack lg:h-screen">
				<div className="overlay"></div>
				<h2 className="aboutQuoteText md:w-1/3 lg:w-1/3 md:text-6xl">
					WE BELIEVE IN BRAEAKING DOWN BARRIERS
				</h2>
			</div>
		);
	}
}

export default AboutQuote;
