import Card from "../card";
import Button from "../button";

const supportUsCards = [
	{
		title: "Volunteer with us",
		description: "Join us in the festivities and help from the inside!",
		image: require("../../assets/supportus/Elechand.png"),
		imageAlt: "Graphic of purple hand wrapped with blue string",
		button: "Volunteer",
		buttonLink: "/volunteer",
		background: "bg-orange-250"
	},
	{
		title: "Join us Aug 25 - 28, 2022",
		description: "Celebrate with us this year, tickets are free of charge.",
		image: require("../../assets/supportus/AlienHandsMeeting.png"),
		imageAlt:
			"Graphic of purple hand wrapped in blue string meeting with beige hand with blue blob coming out of palm",
		button: "Get tickets",
		buttonLink: "",
		background: "bg-purple-250"
	},
	{
		title: "Donate Securely",
		description:
			"Make a one-time or monthly donation to help run Scambi Festival.",
		image: require("../../assets/supportus/Hearty.png"),
		imageAlt: "Graphic of human heart",
		button: "Donate",
		buttonLink: "",
		background: "bg-blue-150"
	}
];

const SupportUs = ({ classes }) => {
	return (
		<div className={`${classes} space-y-10`}>
			<h2>Support us today</h2>
			<div className="w-full flex flex-col items-center space-y-10 mx-5 lg:items-stretch lg:space-y-0 lg:space-x-7 lg:flex-row lg:justify-center xl:space-x-14">
				{supportUsCards.map((card, index) => (
					<Card
						classes={`${card.background} w-4/5 p-10 flex flex-col justify-between space-y-3 shadow-xl lg:space-y-5 lg:w-72 xl:w-1/4`}
						key={`supportus-${index}`}>
						<h4>{card.title}</h4>
						<p>{card.description}</p>
						<img
							src={card.image}
							className="w-10 mx-auto"
							alt={card.imageAlt}
						/>
						<div>
							<Button styleType="light" href={card.buttonLink}>
								{card.button}
							</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default SupportUs;
