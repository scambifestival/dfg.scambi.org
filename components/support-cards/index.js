import Button from "../button";
import Image from "next/image";
import Card from "../card";

export default function SupportUs() {
	return (
		<div className="my-40">
			<h2 className="text-center mb-10">Support Us Today</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 px-10">
				<Card classes="bg-[#EEBDAD] text-center py-10 space-y-5">
					<h4>Volunteer with us</h4>
					<p>Join us in the festivities and help from the inside!</p>
					<div>
						<Image
							src="/illustrations/support1.png"
							width={32}
							height={88}
							alt=""
						/>
					</div>
					<Button>Volunteer</Button>
				</Card>
				<Card classes="bg-[#EDBBFF] text-center py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0">
					<h4>Join us Aug 25 - 28, 2022</h4>
					<p>Celebrate with us this year, tickets are free of charge.</p>
					<div>
						<Image
							src="/illustrations/support2.png"
							width={32}
							height={88}
							alt=""
						/>
					</div>
					<Button>Get Tickets</Button>
				</Card>
				<Card classes="bg-[#AAB4D6] text-center py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0">
					<h4>Donate Securely</h4>
					<p>
						Make a one-time or monthly donation to help run Scambi Festival.
					</p>
					<div>
						<Image
							src="/illustrations/support3.png"
							width={32}
							height={88}
							alt=""
						/>
					</div>
					<Button>Donate</Button>
				</Card>
			</div>
		</div>
	);
}
