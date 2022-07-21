import React, { Component } from "react";
import "./About.css";

class AboutExampleWorkshop extends Component {
	render() {
		return (
			<div className="aboutExampleWorkshop-container">
				<div className="aboutExampleWorkshop-text">
					<h3 className="pt-10">Workshops we held in Scambi 2021, "Meeting"</h3>
				</div>
				<div className="exmapleImages flex flex-wrap">
					<div className="exampleContent1">
						<div class="blob-wrap">
							<div className="blob1"></div>
						</div>
						<h4 className="exampleName1">Street Art</h4>
					</div>
					<div className="exampleContent2">
						<div class="blob-wrap">
							<div className="blob2"></div>
						</div>
						<h4 className="exampleName2">Rifugiato per un giorno</h4>
					</div>
					<div className="exampleContent3">
						<div class="blob-wrap">
							<div className="blob3"></div>
						</div>
						<h4 className="exampleName3">Scambi Sounds Lab</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutExampleWorkshop;
