import Flex from "../components/flex";
import Button from "../components/button";
import Card from "../components/card";
import Image from "next/image";
import { manifestoCards } from "../assets/data";
import Subscribe from "../components/subscribe";
import SupportUs from "../components/support-cards";

export default function About() {
	return (
		<section className="mt-32">
			<Flex classes="mx-auto my-10 GalaxyFold:p-6 md:flex-col lg:flex-row">
				<div className="xl:w-1/2 md:w-auto w-full">
					<h2 className="lg:mt-16 text-left">About Scambi</h2>
					<p className="text-left">
						Scambi, mearninig &quot;exchange&quot; in Italian, is the festival
						of interactive workshop organized in Pigna, the old town of Sanremo
						(italy) by a team of forty young people under-25,from all around
						Europe.
					</p>

					<p className="my-5 text-left">
						Join us for our second year in Sanremo Italy on Aug 25 - 28, 2022,
						where we will explore <b>Disequilibirum.</b>
					</p>
					<Button classes="btn-primary GalaxyFold:mb-12">Attend</Button>
				</div>
				<Image
					src="/illustrations/about-header.png"
					width={705}
					height={353}
					alt=""
					className="xl:w-1/2 md:w-1/2 lg:w-1/2 md:pt-24 lg:pt-56 mt-96 xl-pt-60 2xl:mt-60 GalaxyFold:py-30"
				/>
			</Flex>
			<div className="bg-white py-10">
				<Flex classes="mx-auto justify-between items-center GalaxyFold:p-6">
					<Image
						src="/illustrations/workshop-explanation.png"
						className="rounded-[32px]"
						width="400px"
						height="400px"
						alt=""
					/>
					<div className="lg:w-1/2 md:mt-12 md:w-1/2 md:ml-12">
						<div className="">
							<h3>
								Our purpose is to recover the value of{" "}
								<span className="text-primary">communication</span> and{" "}
								<span className="text-primary">meeting</span> through paneuretic
								workshops
							</h3>
							<p className="my-5">
								Create your personalized journey of workshops from topics moving
								from physics to languages, from history to dancing, from music
								to law, from cooking to activism.
							</p>
							<p className="mb-5">
								All workshops will be instrinsically careful to issues like{" "}
								<b>accessibility, sustainebility, and inclusion.</b>
							</p>
						</div>
						<Button classes="btn-primary">Explore Workshops</Button>
					</div>
				</Flex>
			</div>
			<div className="mx-auto GalaxyFold:pb-24">
				<h3 className="pt-10 text-left pl-6">
					Workshops we held in Scambi 2021, &quot;Meeting&quot;
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center">
					<div className="flex flex-col justify-center items-center relative">
						<div className="blob-wrap">
							<div className="blobExample1"></div>
						</div>
						<h4 className="absolute bottom-1">Street Art</h4>
					</div>
					<div className="flex flex-col justify-center items-center relative">
						<div className="blob-wrap">
							<div className="blobExample2"></div>
						</div>
						<h4 className="absolute bottom-1">Rifugiato per un giorno</h4>
					</div>
					<div className="flex flex-col justify-center items-center relative">
						<div className="blob-wrap">
							<div className="blobExample3"></div>
						</div>
						<h4 className="absolute bottom-1">Scambi Sounds Lab</h4>
					</div>
				</div>
			</div>
			<div className="relative h-screen w-screen">
				<div className="w-full h-full flex justify-center items-center">
					<h2 className="z-20 text-white text-center font-bold SurfaceDuo:w-1/2">
						WE BELIEVE IN BREAKING DOWN BARRIERS
					</h2>
				</div>
				<div className="h-screen w-screen overlay absolute top-0 z-10"></div>
				<Image
					src="https://images.tommi.space/plugins/download_by_size/action.php?id=28833&part=e&size=large"
					alt=""
					layout="fill"
					className="object-cover"
				/>
			</div>
			<div className="my-20 mx-auto space-y-12">
				<h2 className="text-center">Our Manifesto</h2>
				<div className="flex flex-col justify-center mx-16 space-y-6 lg:space-x-5 lg:space-y-0 lg:flex-row xl:space-x-10 2xl:mx-32 GalaxyFold:mx-10">
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
				<div className="flex justify-center">
					<Button classes="btn-primary">Read the Manifesto</Button>
				</div>
			</div>
			<Flex classes="mx-auto pb-0">
				<div className="lg:w-1/2 md:w-2/3 pl-6 pr-6">
					<h2 className="textOurTeam">Our Team</h2>
					<p className="aboutOurTeam-smallText mb-6">
						We are a group of under 25s coming from every corner of Europe. Our
						association was born from our wish to value real and deep ties,
						horizointally and dialogue, curiosity and welcoming of the
						different.
					</p>
					<p className="aboutOurTeam-smallText">
						We will be waiting for you in Sanremo, to introduce ourselves
						properly.
					</p>
				</div>
				<div className="lg:ml-14 md:ml-14 pl-6 pr-6 mt-0">
					<Image
						src="/illustrations/team.png"
						width={635}
						height={450}
						alt=""
					/>
				</div>
			</Flex>

			<Flex
				classes="px-1 mx-auto my-10 md:space-x-reverse GalaxyFold:p-6 GalaxyFold:mt-0 GalaxyFold:pt-0"
				reverse={true}>
				<div className="my-20 mx-auto space-y-12">
					<h2 className="text-center">Our Relations</h2>
					<p className="mx-auto md:mx-0 w-full 2xl:w-4/5 text-left">
						Alone we would not have been able to concretize the magic of Scambi.
						<br />
						<br />
						What makes our festival unique are the relationships and the bonds
						with local and non-local bodies, the public administration of
						Sanremo and many other special people.
					</p>
					<div className="flex flex-row justify-center iPhoneSE:flex-col GalaxyFold:flex-col SurfaceDuo:flex-row grid-flow-row:left-0 GalaxyFold:place-items-center">
						<Button classes="btn-primary GalaxyFold:w-50 iPhoneSE:w-full">
							Partner with us
						</Button>
						<Button classes="ml-2 GalaxyFold:ml-0 GalaxyFold:mt-4 GalaxyFold:w-50 iPhoneSE:w-full SurfaceDuo:mt-0 SurfaceDuo:ml-4">
							Meet our partners
						</Button>
					</div>
				</div>
				<Image
					src="/illustrations/sponsors.png"
					alt=""
					width={654}
					height={689}
				/>
			</Flex>

			<div className="bg-white flex justify-center py-10">
				<Subscribe />
			</div>
			<SupportUs />
		</section>
	);
}
