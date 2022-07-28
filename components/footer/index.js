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
			<div className="flex justify-between items-center px-16 pt-10">
				<h2 className="">Scambi</h2>
				<div className="flex">
					<div className="w-2/3 p-3">
						<p className="text-[18px]">
							<b>Ready to join us?</b>
						</p>
					</div>
					<Button classes="btn-primary">ATTEND</Button>
				</div>
			</div>
			<div className="w-full h-fit flex flex-row md:flex-row sm:flex-row lg:flex-row md:space-x-4 md:space-y-0 justify-between px-16 items-center tablet:flex-col iPhones:flex-col GalaxyFold:flex-col SurfaceDuo:flex-col">
				<div className="md:w-1/3 lg:w-1/4 sm:w-1/3 md:h-1/2 sm:h-1/2 s:w-1/2">
					<div className="blob-wrap relative">
						<div className="blobFooter drop-shadow-lg">
							<div className="flex flex-col justify-center items-center relative">
								<svg
									viewBox="0 0 200 200"
									xmlns="http://www.w3.org/2000/svg"
									width="400px"
									height="400px">
									<path
										fill="#EDBBFF"
										d="M44.9,-56.5C60.6,-50.3,77.4,-40.5,84.8,-25.7C92.2,-10.9,90.1,8.9,82.2,24.7C74.4,40.6,60.6,52.6,45.9,64.1C31.3,75.7,15.6,86.8,0.4,86.3C-14.9,85.8,-29.9,73.7,-39.7,60.6C-49.6,47.5,-54.5,33.4,-62.7,18C-70.9,2.7,-82.4,-13.9,-82.1,-30.2C-81.7,-46.5,-69.4,-62.5,-53.7,-68.7C-38,-74.8,-19,-71.1,-2.2,-68C14.6,-65,29.2,-62.6,44.9,-56.5Z"
										transform="translate(100 100)"
									/>
								</svg>
							</div>
						</div>
						<div className="text-center bottom-28 absolute tablet:left-16">
							<p className="pb-5">
								<b>Subscribe to our Newsletter!</b>
							</p>
							<form className="flex flex-col">
								<input
									type="email"
									placeholder="Enter your email"
									className="rounded-md lg:w-[260px] lg:ml-5 peer"
								/>
								<Button classes="btn-primary peer-invalid:disabled mt-5">
									Subscribe
								</Button>
							</form>
						</div>
					</div>
				</div>

				<div className="flex flex-row mb-12">
					<div className="w-1/3 lg:w-42 md:w-2/6 sm:w-36 xl:w-1/3 mr-20 iPhones:w-4">
						<ul>
							<li className="mt-2 relative">
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
						</ul>
					</div>
					<div className="menus2 w-1/3 lg:w-48 md:w-2/6 sm:w-36 xl:w-1/3 mr-12 iPhones:w-4">
						<ul>
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
						</ul>
					</div>
					<div className="menus3 w-1/3 lg:w-40 md:w-2/6 sm:w-36 xl:w-1/3 iPhones:w-4">
						<ul>
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
			</div>

			<div className="flex lg:flex-row">
				<div className="flex flex-col mt-12 w-fit lg:flex-row md:flex-row sm:flex-row md:pl-12  md:w-1/2">
					<div className="pt-6 text-left sm:w-1/2">
						<p>
							<b>Sede legale</b>
						</p>
						<p>Via Dante Alighieri, 81</p>
						<p>18038 Sanremo(IM), Italia</p>
					</div>
					<div className="pt-6 text-left pb-12  md:w-1/2 sm:w-1/2">
						<p>
							<b>Codice Fiscale: </b>900098410088
						</p>
						<p>
							<b>IBAN:</b>IT63E05018014600000016986952
						</p>
					</div>
				</div>
			</div>

			<div className="flex justify-between px-16 pb-10 items-center">
				<p className="">Privacy Policy</p>
				<div className="flex space-x-5 items-center">
					<Link href="https://twitter.com/scambifestival">
						<a>
							<Twitter />
						</a>
					</Link>
					<Link href="https://www.facebook.com/cambisfestival/">
						<a>
							<Facebook />
						</a>
					</Link>
					<Link href="https://www.instagram.com/scambifestival/?hl=en">
						<a>
							<Instagram />
						</a>
					</Link>
					<Link href="https://pixelfed.uno/scambi">
						<a>
							<Pixelfed />
						</a>
					</Link>
					<Link href="https://peertube.uno/c/scambifestival/videos">
						<a>
							<Peertube />
						</a>
					</Link>
					<Link href="https://mastodon.uno/@scambi">
						<a>
							<Mastodon />
						</a>
					</Link>
				</div>
				<div
					className="p-2 rounded-full bg-primary cursor-pointer"
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
