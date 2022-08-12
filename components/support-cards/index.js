import Button from "../button";
import Image from "next/image";
import Card from "../card";
import Link from "next/link";

export default function SupportUs() {
	return (
		<div className="my-40 GalazyS8:mx-5">
			<h2 className="text-center mb-10">Support Us Today</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 px-5 iPhoneXR:px-10 md:px-20 lg:px-16">
				<Card classes="bg-[#EEBDAD] text-center px-5 py-10 space-y-5">
					<h4>Volunteer with us</h4>
					<p>Join us in the festivities and help from the inside!</p>
					<div>
						<Image
							src="https://x.scambi.org/illustrations/hand.webp"
							width={32}
							height={88}
							alt=""
						/>
					</div>
					<Link href='/contact' passHref>
						<span>
							<Button classes='bg-white'>
								Volunteer
							</Button>
						</span>
					</Link>
				</Card>
				<Card classes="bg-[#EDBBFF] text-center px-5 py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0">
					<h4>Join us Aug 25 - 28, 2022</h4>
					<p>Celebrate with us this year, tickets are free of charge.</p>
					<div>
						<Image
							src="https://x.scambi.org/illustrations/hands.webp"
							width={32}
							height={88}
							alt=""
						/>
					</div>
					<Button classes='bg-white' onClick={() => window.open('https://pretix.eu/scambi/2022/', '_blank')}>
						Get Tickets
					</Button>
				</Card>
				<Card classes="bg-[#AAB4D6] text-center px-5 py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0">
					<h4>Donate Securely</h4>
					<p>
						Make a one-time or monthly donation to help run Scambi Festival.
					</p>
					<div>
						<Image
							src="https://x.scambi.org/illustrations/heartish.webp"
							width={32}
							height={88}
							alt=""
						/>
					</div>
					<Button classes='bg-white' onClick={() => window.open('https://liberapay.com/scambi', '_blank')}>
						Donate
					</Button>
				</Card>
			</div>
		</div>
	);
}
