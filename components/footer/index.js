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

export default function Footer() {
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
					<Button classes="btn-primary">ATTEND</Button>
				</div>
			</div>
			<div className="w-full h-fit flex flex-row md:flex-row sm:flex-col lg:flex-row md:space-x-4 md:space-y-0 items-center tablet:flex-col iPhones:flex-col GalaxyFold:flex-col SurfaceDuo:flex-col">
				<div className="md:w-1/3 lg:w-1/4 sm:w-1/3 md:h-1/2 sm:h-1/2 xs:w-1/2 lg:ml-20 md:ml-12 sm:ml-12">
					<div className="relative -mt-10 lg:-mt-12 md:-mt-20 sm:-mt-10 SurfaceDuo:mt-2 iPhones:mt-2 GalaxyFold:mt-2">
						<div className="blob-wrap">
							<div className="blobFooter drop-shadow-lg lg:ml-4">
								<div className="flex flex-col justify-center items-center relative">
									<div className="blob"></div>
								</div>
							</div>
						</div>
						<div className="flex flex-col text-center bottom-28 absolute justify-center content-center items-center w-full px-4 GalaxyFold:top-40 iPhones:bottom-28 contentBlob">
							<p className="pb-5">
								<b className="items-center">Subscribe to our Newsletter!</b>
							</p>
							<form className="flex flex-col">
								<input
									type="email"
									placeholder="Enter your email"
									className="rounded-md lg:w-[260px] lg:ml-5 peer"
								/>
								<Button classes="btn-primary peer-invalid:disabled lg:w-fit lg:ml-12 mt-5 blobBtn">
									Subscribe
								</Button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex flex-col GalaxyFold:mb-0 md:pl-20 SurfaceDuo:ml-24 iPhones:ml-24 lg:ml-96">
					<div className="flex flex-row">
						<div className="sm:columns-3 GalaxyFold:columns-2 sm:gap-x-20 md:gap-x-10 lg:gap-x-24 xl:gap-x-44 w-full md:mt-20 sm:mt-12 iPhones:mt-0 GalaxyFold:mt-0">
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

					<div className="flex lg:flex-row SurfaceDuo:flex-row w-full">
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
								<p className="flex flex-wrap lg:w-full">
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
