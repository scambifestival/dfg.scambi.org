import Link from 'next/link';
import Button from '../button';

import {
	Twitter,
	Facebook,
	Mastodon,
	Instagram,
	Peertube,
	Pixelfed,
} from '../icons/social-media';

export default function Footer() {
	return (
		<footer className='h-full bg-white rounded-t-[32px]'>
			<div className='flex justify-between items-center SurfaceDuo:px-16 pt-10 GalaxyFold:px-0 GalaxyFold:justify-end sm:justify-between'>
				<h2 className='GalaxyFold:hidden sm:block'>Scambi</h2>
				<div className='flex'>
					<div className='w-2/3 p-3'>
						<p className='text-[18px]'>
							<b>Ready to join us?</b>
						</p>
					</div>
					<Button classes='btn-primary SurfaceDuo:mr-0 GalaxyFold:mr-2'>
						ATTEND
					</Button>
				</div>
			</div>
			<div className='w-full flex md:flex-row flex-col lg:flex-row md:space-x-4 md:space-y-0 items-center justify-around'>
				<div className='relative'>
					<div className='absolute top-1/4 left-2 flex flex-col text-center justify-center content-center items-center w-full px-4 z-10'>
						<p className='pb-5'>
							<b className='items-center'>Subscribe to our Newsletter!</b>
						</p>
						<form className='flex flex-col items-center'>
							<input
								type='email'
								placeholder='Enter your email'
								className='rounded-md w-[260px] lg:w-[260px] lg:ml-5 peer'
							/>
							<Button classes='btn-primary peer-invalid:disabled w-fit lg:ml-12 mt-5'>
								Subscribe
							</Button>
						</form>
					</div>
					<svg
						width='400'
						height='342'
						viewBox='0 0 437 385'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g filter='url(#filter0_d_4572_33029)'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M259.757 30.2453C307.315 39.7447 361.414 41.1139 391.562 76.3805C422.908 113.048 417.818 162.249 410.762 206.887C403.306 254.047 393.335 304.526 351.158 331.96C307.592 360.297 246.244 366.435 194.792 347.366C148.464 330.195 137.375 278.95 108.147 241.892C77.1488 202.59 18.1299 174.135 21.0246 127.045C24.0276 78.1922 72.9156 42.2192 121.635 22.4646C164.586 5.04909 212.626 20.8313 259.757 30.2453Z'
								fill='#EDBBFF'
							/>
						</g>
						<defs>
							<filter
								id='filter0_d_4572_33029'
								x='0.921875'
								y='0.645752'
								width='435.158'
								height='383.708'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'>
								<feFlood floodOpacity='0' result='BackgroundImageFix' />
								<feColorMatrix
									in='SourceAlpha'
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									result='hardAlpha'
								/>
								<feOffset dy='6' />
								<feGaussianBlur stdDeviation='10' />
								<feColorMatrix
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
								/>
								<feBlend
									mode='normal'
									in2='BackgroundImageFix'
									result='effect1_dropShadow_4572_33029'
								/>
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='effect1_dropShadow_4572_33029'
									result='shape'
								/>
							</filter>
						</defs>
					</svg>
				</div>

				<div className='flex flex-col GalaxyFold:mb-0 md:pl-20 SurfaceDuo:ml-24 lg:ml-96 GalaxyFold:ml-4'>
					<div className='flex flex-row'>
						<div className='sm:columns-3 GalaxyFold:columns-2 sm:gap-x-20 md:gap-x-9 lg:gap-x-24 xl:gap-x-44 w-full md:mt-20 SurfaceDuo:ml-0 sm:mt-12 iPhoneSE:mt-0 GalaxyFold:mt-0 GalaxyFold:ml-6 iPhoneSE:ml-6'>
							<ul>
								<li className=''>
									<Link href='/about'>
										<a>About</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/teams'>
										<a>Teams</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Manifesto</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Accessibility</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Donate</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Volunteer</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/lab'>
										<a>Labs</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/pinoli'>
										<a>Pinoli</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Dissolvenze</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Ideas</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Join Team</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Donate</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Volunteer</a>
									</Link>
								</li>
								<li className='mt-2'>
									<Link href='/'>
										<a>Join Team</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex lg:flex-row SurfaceDuo:flex-row w-full'>
						<div className='flex flex-col mt-12 w-full sm:flex-row md:flex-col lg:flex-row'>
							<div className='pt-6 text-left w-full md:w-full'>
								<p className='lg:w-full'>
									<b>Sede legale</b>
								</p>
								<p className='lg:w-full'>Via Dante Alighieri, 81</p>
								<p className='lg:w-full'>18038 Sanremo(IM), Italia</p>
							</div>
							<div className='pt-6 text-left pb-12 lg:w-full md:w-1/2 sm:w-1/2'>
								<p>
									<b>Codice Fiscale:</b> 900098410088
								</p>
								<p className='flex flex-wrap lg:w-full GalaxyFold:pr-2'>
									<b>IBAN:</b> IT63E05018014600000016986952
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex GalaxyFold:flex-col justify-between px-16 py-10 items-center SurfaceDuo:flex-row'>
				<div>
					<p>2022 &copy; Scambi</p>
					<p className=''>Privacy Policy</p>
				</div>
				<div className='flex GalaxyFold:space-x-3 space-x-5 items-center'>
					<Link href='https://twitter.com/scambifestival'>
						<a>
							<Twitter className='btn-primary' />
						</a>
					</Link>
					<Link href='https://www.facebook.com/cambisfestival/'>
						<a>
							<Facebook className='btn-primary' />
						</a>
					</Link>
					<Link href='https://www.instagram.com/scambifestival/?hl=en'>
						<a>
							<Instagram className='btn-primary' />
						</a>
					</Link>
					<Link href='https://pixelfed.uno/scambi'>
						<a>
							<Pixelfed className='btn-primary' />
						</a>
					</Link>
					<Link href='https://peertube.uno/c/scambifestival/videos'>
						<a>
							<Peertube className='btn-primary' />
						</a>
					</Link>
					<Link href='https://mastodon.uno/@scambi'>
						<a>
							<Mastodon className='btn-primary' />
						</a>
					</Link>
				</div>
				<div
					className='p-2 rounded-full cursor-pointer GalaxyFold:hidden SurfaceDuo:block btn-primary'
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 text-white'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M5 15l7-7 7 7'
						/>
					</svg>
				</div>
			</div>
		</footer>
	);
}
