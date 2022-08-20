import Flex from "../components/flex";
import Button from "../components/button";
import Image from "next/image";
import Link from "next/link";
import Manifesto from "../components/manifesto";
import Subscribe from "../components/subscribe";
import SupportUs from "../components/support-cards";
import useMediaQuery from "../lib/hooks/media-query";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import Markdown from "../components/markdown";

export default function About() {
	const isSmall = useMediaQuery("(max-width: 430px)");
	const isXSmall = useMediaQuery("(max-width: 400px)");
	const isGalaxyS8 = useMediaQuery("(max-width: 360px)");
	const isGalaxyFold = useMediaQuery("(max-width: 280px)");
	const { t, ready } = useTranslation(["about", "common"]);

	return (
		<section className="mt-32">
			<Flex classes="mx-auto my-10 px-6 iPhoneXR:px-10 GalaxyFold:mb-20 md:flex-col md:px-0 lg:flex-row">
				<div className="text-left w-full md:w-auto lg:w-3/5">
					<h2 className="leading-snug lg:mt-16">{t("about.heading")}</h2>
					<Markdown content={t("about.desc")} />

					<div className="my-5">
						<Markdown content={t("about.text")} />
					</div>
					<Button classes="btn-primary uppercase">
						<a href="https://pretix.eu/scambi/2022/">
							{t("attend", { ns: "common" })}
						</a>
					</Button>
				</div>
				<div className="w-full sm:w-4/6 md:w-5/6 lg:w-1/2 lg:pl-10 xl:w-2/5">
					<Image
						src="https://x.scambi.org/images/inaugurazione.webp"
						width={705}
						height={470}
						layout="responsive"
						alt=""
						className="rounded-xl"
					/>
				</div>
			</Flex>
			<div className="bg-white py-10">
				<Flex classes="w-full mx-auto justify-evenly items-center GalaxyFold:px-4 GalaxyFold:space-x-4 SurfaceDuo:px-6 SurfaceDuo:space-x-20 space-y-0 GalaxyFold:flex-col  lg:flex-row">
					<div className="bg-[#7D8E9E] rounded-2xl w-full iPhoneSE:w-8/12 sm:w-3/5 lg:w-1/3">
						<Image
							src="https://x.scambi.org/illustrations/paneuretico.webp"
							className="rounded-2xl"
							width={400}
							height={400}
							layout="responsive"
							alt=""
						/>
					</div>
					<div className="flex flex-col md:w-1/2 h-full SurfaceDuo:ml-6">
						<h3>
							<Markdown content={t("purpose.heading")} />
						</h3>
						<p className="my-5">{t("purpose.text")}</p>
						<p className="mb-5">{t("purpose.last")}</p>
						<span>
							<Button classes="btn-primary">{t("purpose.button")}</Button>
						</span>
					</div>
				</Flex>
			</div>
			<div className="mx-auto GalaxyFold:pb-24  iPhonseSE:py-16 py-16">
				<h3 className="pt-10 text-left pl-6">{t("last-workshops")}</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center">
					<div className="flex flex-col justify-center items-center relative">
						<svg
							width={
								isGalaxyFold
									? 260
									: isGalaxyS8
									? 280
									: isSmall
									? 330
									: isXSmall
									? 310
									: 420
							}
							height={
								isGalaxyFold
									? 260
									: isGalaxyS8
									? 280
									: isSmall
									? 330
									: isXSmall
									? 310
									: 420
							}
							viewBox="0 0 534 369"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<g filter="url(#filter0_d_2753_30640)">
								<mask
									id="mask0_2753_30640"
									style={{ maskType: "alpha" }}
									maskUnits="userSpaceOnUse"
									x="50"
									y="35"
									width="434"
									height="267">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M225.931 46.3444C274.267 47.5652 323.302 37.0486 364.932 55.9882C419.182 80.6695 475.91 114.694 482.222 162.945C488.84 213.536 452.632 267.581 396.048 293.843C345.361 317.369 284.408 288.964 225.931 281.898C182.225 276.617 134.616 281.305 101.993 258.311C68.3158 234.574 61.2572 197.945 57.1661 162.945C52.5154 123.157 38.8655 75.4176 77.495 48.7284C115.776 22.2802 174.511 45.0457 225.931 46.3444Z"
										fill="#C4C4C4"
										stroke="black"
									/>
								</mask>
								<g mask="url(#mask0_2753_30640)">
									<rect
										x="-14.2441"
										y="30.3789"
										width="502.382"
										height="289.484"
										fill="url(#pattern)"
									/>
								</g>
							</g>
							<defs>
								<filter
									id="filter0_d_2753_30640"
									x="0.500244"
									y="0.499756"
									width="533"
									height="368"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="15" />
									<feGaussianBlur stdDeviation="25" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_2753_30640"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_2753_30640"
										result="shape"
									/>
								</filter>
								<pattern
									id="pattern"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1">
									<use
										xlinkHref="#image0_2753_30640"
										transform="translate(0 -0.0792028) scale(0.000625 0.00108465)"
									/>
								</pattern>
								<image
									id="image0_2753_30640"
									width="1600"
									height="1068"
									xlinkHref="https://images.tommi.space/i?/uploads/j/b/u/jbuqxznr00//2021/08/29/20210829191758-06bb5082-me.jpg"
								/>
							</defs>
						</svg>
						<h4 className="absolute bottom-1 mb-6">Street Art</h4>
					</div>
					<div className="flex flex-col justify-center items-center relative">
						<svg
							width={isGalaxyS8 ? 250 : isSmall ? 300 : isXSmall ? 260 : 380}
							height={isGalaxyS8 ? 250 : isSmall ? 300 : isXSmall ? 260 : 380}
							viewBox="0 0 460 301"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<g filter="url(#filter0_d_2753_30645)">
								<mask
									id="mask0_2753_30645"
									style={{ maskType: "alpha" }}
									maskUnits="userSpaceOnUse"
									x="20"
									y="14"
									width="420"
									height="267">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M250.502 14.088C306.743 15.7393 342.712 42.7363 378.623 64.6792C409.937 83.8131 435.482 104.69 439.296 129.448C443.46 156.478 428.981 182.261 400.266 205.158C361.195 236.312 322.619 274.37 250.502 279.991C173.546 285.989 91.8812 264.616 46.1386 232.76C4.46776 203.741 22.2022 164.78 34.331 129.448C43.8726 101.653 68.2034 77.1715 106.581 56.6914C146.326 35.4812 192.807 12.3939 250.502 14.088Z"
										fill="#C4C4C4"
									/>
								</mask>
								<g mask="url(#mask0_2753_30645)">
									<rect
										x="7.48633"
										y="-41.7012"
										width="523.352"
										height="315.958"
										fill="url(#pattern1)"
									/>
								</g>
							</g>
							<defs>
								<filter
									id="filter0_d_2753_30645"
									x="0"
									y="0"
									width="460"
									height="300.257"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="6" />
									<feGaussianBlur stdDeviation="10" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_2753_30645"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_2753_30645"
										result="shape"
									/>
								</filter>
								<pattern
									id="pattern1"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1">
									<use
										xlinkHref="#image0_2753_30645"
										transform="translate(0 -0.050752) scale(0.000625 0.00103525)"
									/>
								</pattern>
								<image
									id="image0_2753_30645"
									width="1600"
									height="1064"
									xlinkHref="https://images.tommi.space/plugins/download_by_size/action.php?id=23531&part=e&size=small"
								/>
							</defs>
						</svg>

						<h4 className="absolute bottom-1">Rifugiato per un giorno</h4>
					</div>
					<div className="flex flex-col justify-center items-center relative">
						<svg
							width={isGalaxyS8 ? 250 : isSmall ? 300 : isXSmall ? 260 : 380}
							height={isGalaxyS8 ? 250 : isSmall ? 300 : isXSmall ? 260 : 380}
							viewBox="0 0 458 301"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<g filter="url(#filter0_d_2753_30651)">
								<mask
									id="mask0_2753_30651"
									style={{ maskType: "alpha" }}
									maskUnits="userSpaceOnUse"
									x="20"
									y="14"
									width="420"
									height="267">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M250.502 14.088C306.743 15.7393 342.712 42.7363 378.623 64.6792C409.937 83.8131 435.482 104.69 439.296 129.448C443.46 156.478 428.981 182.261 400.266 205.158C361.195 236.312 322.619 274.37 250.502 279.991C173.546 285.989 91.8812 264.616 46.1386 232.76C4.46776 203.741 22.2022 164.78 34.331 129.448C43.8726 101.653 68.2034 77.1715 106.581 56.6914C146.326 35.4812 192.807 12.3939 250.502 14.088Z"
										fill="#C4C4C4"
									/>
								</mask>
								<g mask="url(#mask0_2753_30651)">
									<rect
										x="7.48633"
										y="-41.7012"
										width="523.352"
										height="315.958"
										fill="url(#pattern2)"
									/>
								</g>
							</g>
							<defs>
								<filter
									id="filter0_d_2753_30651"
									x="0"
									y="0"
									width="460"
									height="300.257"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="6" />
									<feGaussianBlur stdDeviation="10" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_2753_30651"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_2753_30651"
										result="shape"
									/>
								</filter>
								<pattern
									id="pattern2"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1">
									<use
										xlinkHref="#image0_2753_30651"
										transform="translate(0 -0.0517872) scale(0.000625 0.00103525)"
									/>
								</pattern>
								<image
									id="image0_2753_30651"
									width="1600"
									height="1066"
									xlinkHref="https://images.tommi.space/plugins/download_by_size/action.php?id=23177&part=e&size=small"
								/>
							</defs>
						</svg>

						<h4 className="absolute bottom-1 mt-6">Scambi Sounds Lab</h4>
					</div>
				</div>
			</div>
			<div className="w-screen h-screen relative overflow-hidden">
				<Image
					src="https://images.tommi.space/plugins/download_by_size/action.php?id=28833&part=e&size=large"
					alt=""
					layout="fill"
					objectFit="cover"
					className="brightness-75"
				/>
				<h2 className="absolute uppercase text-white text-center font-bold w-full h-full px-7 grid content-center justify-center text-[40px] iPhoneSE:text-[50px] sm:text-[64px] xl:text-[72px] xl:px-56">
					{t("belief")}
				</h2>
			</div>
			<Manifesto />
			<Flex classes="my-1 mx-4 space-y-10 sm:mx-10 md:mx-auto md:my-20 lg:space-x-reverse lg:space-x-10 xl:space-x-40">
				<div className="lg:w-1/2 md:w-2/3 pr-6">
					<h2 className="">{t("team.heading")}</h2>
					<Markdown className="mb-6" content={t("team.desc")} />
					<Markdown content={t("team.text")} />
				</div>
				<div className="w-full px-5 iPhoneXR:w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 md:pr-0 mt-0 mr-12">
					<Image
						src="https://x.scambi.org/images/staff.webp"
						width={675}
						height={450}
						layout="responsive"
						alt=""
						className="rounded-xl"
					/>
				</div>
			</Flex>

			<Flex
				classes="my-1 mx-4 space-y-10 sm:mx-10 md:mx-auto md:my-20 lg:space-x-reverse lg:space-x-10 xl:space-x-reverse xl:space-x-40"
				reverse={true}>
				<div className="w-full flex flex-col text-center space-y-8 md:text-left">
					<h2 className="leading-tight lg:leading-normal font-medium">
						{t("relations.heading", { ns: "common" })}
					</h2>
					<Markdown content={t("relations.text", { ns: "common" })} />
					<div className="flex flex-col justify-center items-center space-y-5 sm:flex-row sm:space-x-7 sm:space-y-0 md:justify-start">
						<Link href="/contact">
							<Button classes="btn-primary">
								{t("relations.partner-button", { ns: "common" })}
							</Button>
						</Link>
						<Button classes="btn-primary-light">
							{t("relations.meet-button", { ns: "common" })}
						</Button>
					</div>
				</div>
				<div className="px-3 w-full iPhoneXR:w-5/6 sm:w-4/5 md:pl-0 md:pr-10">
					<Image
						src="https://x.scambi.org/images/fun.webp"
						alt="Illustration of three individuals holding hands, moving in a circle"
						layout="responsive"
						width={900}
						height={600}
						className="rounded-2xl"
					/>
				</div>
			</Flex>

			<div className="bg-white flex justify-center py-10">
				<Subscribe />
			</div>
			<SupportUs />
		</section>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "about"]))
		}
	};
}
