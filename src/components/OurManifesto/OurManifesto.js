import React, { Component } from "react";
import Card from "./../../components/card/index";
import Flex from "../Flex/Flex";
import "./OurManifesto.css";

class OurManifesto extends Component {
	render() {
		return (
			<div className="pt-36">
				<h2>Our Manifesto</h2>
				<Flex classes="cardContainer w-max p-0">
					<Card classes="p-4 lg:w-56 md:w-56 sm:w-96 m-1 cardEl">
						<p className="mb-8">
							<b>Workshop</b>
						</p>
						<p>
							Collective experience based on creativity, dialogue and sharing,
							which blossoms once a year on the squares of La Pigna in order to
							explore together the various connotations of the current edition's
							theme.
						</p>
					</Card>
					<Card classes="bg-white p-4 lg:w-56 md:w-56 sm:w-96 m-4 cardEl">
						<p className="mb-8">
							<b>Paneuretic</b>
						</p>
						<p>
							Neologism deriving from the Greek pan (all), eurisko (discover)
							and ethos (living), because we wish to combine diverse realities
							that would never meet in their original contexts, while
							celebrating and respecting our differences, discovering and
							developing inspiring ideas.
						</p>
					</Card>
					<Card classes="p-4 lg:w-56 md:w-56 sm:w-96 m-4 cardEl">
						<p className="mb-8">
							<b>Accessibility</b>
						</p>
						<p>
							In a society that says "you must", we say "just be": we made every
							festival activity available and accessible to as many people as
							possible.
						</p>
					</Card>
					<Card classes="bg-white p-4 lg:w-56 md:w-56 sm:w-96 m-4 cardEl">
						<p className="mb-8">
							<b>La Pigna</b>
						</p>
						<p>
							The iconic and vibrant historic center of Sanremo that welcomes us
							during the festival, and that we are commited to requalify through
							social values such as Community and Meeting.
						</p>
					</Card>
				</Flex>
				<button className="manifestoBtn">Read the Manifesto</button>
			</div>
		);
	}
}

export default OurManifesto;
