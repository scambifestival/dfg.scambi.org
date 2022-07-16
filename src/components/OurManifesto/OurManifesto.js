import React, { Component } from "react";
import Card from "../../components/card/index";
import { manifestoCards } from "./../../pages/home/data";
import Button from "../button/index";

class OurManifesto extends Component {
	render() {
		return (
			<div className="my-20 space-y-12">
				<h2>Our Manifesto</h2>
				<div className="flex flex-col justify-center mx-16 space-y-6 lg:space-x-5 lg:space-y-0 lg:flex-row xl:space-x-10 2xl:mx-32">
					{manifestoCards.map((card, index) => (
						<Card
							classes={`p-5 w-full h-fit lg:w-1/4 xl:w-1/5 ${
								index % 2 === 0 ? "yellow-pink-gradient" : "bg-white"
							}`}
							key={`manifesto-${index}`}>
							<h3 className="leading-loose">{card.title}</h3>
							<p className="leading-relaxed">{card.description}</p>
						</Card>
					))}
				</div>
				<Button styleType="light">Read the Manifesto</Button>
			</div>
		);
	}
}

export default OurManifesto;
