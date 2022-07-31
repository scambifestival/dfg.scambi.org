import Link from "next/link";
import Button from "../button";

import {
	Twitter,
	Facebook,
	Mastodon,
	Instagram,
	Peertube,
	Pixelfed
} from "../icons/social-media";
import useMediaQuery from "../../lib/hooks/media-query";

export default function Footer() {
	const isLarge = useMediaQuery("(max-width: 940px)");
	const isMedium = useMediaQuery("(max-width: 767px)");
	const isSmall = useMediaQuery("(max-width: 430px)");
	const isXSmall = useMediaQuery("(max-width: 400px)");
	const isIPhoneSE = useMediaQuery("(max-width: 375px)");
	const isGalaxyS8 = useMediaQuery("(max-width: 360px)");

	return (
		<footer className="h-full bg-white rounded-t-[32px]">
			<div className="flex justify-between items-center SurfaceDuo:px-16 pt-10 GalaxyFold:px-0 GalaxyFold:justify-end sm:justify-between">
				<h2 className="GalaxyFold:hidden sm:block">Scambi</h2>
				<div className="flex">
					<div className="w-2/3 p-3">
						<p className="text-[18px]">
							<b>Ready to join us?</b>
						</p>
					</div>
					<Button classes="btn-primary SurfaceDuo:mr-0 GalaxyFold:mr-2">
						ATTEND
					</Button>
				</div>
			</div>
			<div className="w-full h-fit flex flex-row md:flex-row sm:flex-col lg:flex-row md:space-x-4 md:space-y-0 items-center iPhoneSE:flex-col GalaxyFold:flex-col SurfaceDuo:flex-col">
				<div className="md:w-1/3 lg:w-1/4 sm:w-1/3 md:h-1/2 sm:h-1/2 xs:w-1/2 lg:ml-20 md:ml-12 sm:ml-2">
					<div className="relative -mt-10 lg:-mt-12 md:-mt-52 sm:-mt-10 SurfaceDuo:-mt-10 iPhoneSE:mt-0 iPhoneSE:mb-10 GalaxyFold:mt-2">
						<div className="blobFooter drop-shadow-lg">
							<div className="flex flex-col justify-center items-center relative">
								<svg
									viewBox="0 0 200 200"
									xmlns="http://www.w3.org/2000/svg"
									width={
										isGalaxyS8
											? 280
											: isIPhoneSE
											? 300
											: isXSmall
											? 375
											: isSmall
											? 400
											: isMedium
											? 430
											: isLarge
											? 500
											: 400
									}
									height={
										isGalaxyS8
											? 280
											: isIPhoneSE
											? 300
											: isXSmall
											? 375
											: isSmall
											? 400
											: isMedium
											? 460
											: isLarge
											? 350
											: 400
									}>
									<path
										fill="#EDBBFF"
										d="M44.9,-56.5C60.6,-50.3,77.4,-40.5,84.8,-25.7C92.2,-10.9,90.1,8.9,82.2,24.7C74.4,40.6,60.6,52.6,45.9,64.1C31.3,75.7,15.6,86.8,0.4,86.3C-14.9,85.8,-29.9,73.7,-39.7,60.6C-49.6,47.5,-54.5,33.4,-62.7,18C-70.9,2.7,-82.4,-13.9,-82.1,-30.2C-81.7,-46.5,-69.4,-62.5,-53.7,-68.7C-38,-74.8,-19,-71.1,-2.2,-68C14.6,-65,29.2,-62.6,44.9,-56.5Z"
										transform="translate(100 100)"
									/>
								</svg>
							</div>
						</div>
						<div className="flex flex-col text-center bottom-28 absolute justify-center content-center items-center w-full GalaxyFold:top-40 iPhoneSE:bottom-28 iPhoneSE:ml-0 GalaxyFold:ml-0 pl-4">
							<p className="GalaxyFold:pb-0 iPhoneSE:w-30  GalaxyFold:w-3/4 sm:w-60 iPhoneSE:pb-5">
								<b className="items-center text-fuchsia-800">
									Subscribe to our Newsletter!
								</b>
							</p>
							<form className="flex flex-col">
								<input
									type="email"
									placeholder="Enter your email"
									className="rounded-md lg:w-[260px] lg:ml-5 peer GalaxyFold:w-30 GalaxyFold:ml-4 iPhoneSE:ml-0"
								/>
								<Button classes="btn-primary peer-invalid:disabled lg:w-48 lg:ml-12 lg:pl-6 lg:pr-6 mt-5 blobBtn md:pr-0 md:pl-0 md:w-32 md:ml-8">
									Subscribe
								</Button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex flex-col GalaxyFold:mb-0 md:pl-20  lg:ml-96 GalaxyFold:ml-4 iPhoneSE:ml-0">
					<div className="flex flex-row">
						<div className="iPhoneSE:columns-3 GalaxyFold:columns-2 sm:gap-x-20 md:gap-x-9 SurfaceDuo:gap-x-24 lg:gap-x-24 xl:gap-x-44 w-full md:mt-20 md:ml-0 sm:mt-2 iPhoneSE:mt-0 GalaxyFold:mt-0 GalaxyFold:ml-6 SurfaceDuo:ml-0">
							<ul>
								<li className="">
									<Link href="/about">
										<a>About</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/teams">
										<a>Teams</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Manifesto</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Accessibility</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Donate</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Volunteer</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/lab">
										<a>Labs</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/pinoli">
										<a>Pinoli</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Dissolvenze</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Ideas</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Join Team</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Donate</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Volunteer</a>
									</Link>
								</li>
								<li className="mt-2">
									<Link href="/">
										<a>Join Team</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex lg:flex-row SurfaceDuo:flex-row w-full iPhoneSE:pl-6 SurfaceDuo:pl-0">
						<div className="flex flex-col mt-12 w-full sm:flex-row md:flex-col lg:flex-row">
							<div className="pt-6 text-left w-full md:w-full">
								<p className="lg:w-full">
									<b>Sede legale</b>
								</p>
								<p className="lg:w-full">Via Dante Alighieri, 81</p>
								<p className="lg:w-full">18038 Sanremo(IM), Italia</p>
							</div>
							<div className="pt-6 text-left pb-12 lg:w-full md:w-1/2 sm:w-1/2">
								<p>
									<b>Codice Fiscale:</b> 900098410088
								</p>
								<p className="flex flex-wrap lg:w-full GalaxyFold:pr-2">
									<b>IBAN:</b> IT63E05018014600000016986952
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row GalaxyFold:flex-col justify-between px-16 pb-10 items-center SurfaceDuo:flex-row">
				<p className="">Privacy Policy</p>
				<div className="flex GalaxyFold:space-x-3 space-x-5 items-center">
					<Link href="https://twitter.com/scambifestival">
						<a>
							<Twitter className="btn-primary" />
						</a>
					</Link>
					<Link href="https://www.facebook.com/cambisfestival/">
						<a>
							<Facebook className="btn-primary" />
						</a>
					</Link>
					<Link href="https://www.instagram.com/scambifestival/?hl=en">
						<a>
							<Instagram className="btn-primary" />
						</a>
					</Link>
					<Link href="https://pixelfed.uno/scambi">
						<a>
							<Pixelfed className="btn-primary" />
						</a>
					</Link>
					<Link href="https://peertube.uno/c/scambifestival/videos">
						<a>
							<Peertube className="btn-primary" />
						</a>
					</Link>
					<Link href="https://mastodon.uno/@scambi">
						<a>
							<Mastodon className="btn-primary" />
						</a>
					</Link>
				</div>
				<div
					className="p-2 rounded-full cursor-pointer GalaxyFold:hidden SurfaceDuo:block btn-primary"
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 15l7-7 7 7"
						/>
					</svg>
				</div>
			</div>
		</footer>
	);
}
