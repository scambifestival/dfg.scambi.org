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
			<div className='flex justify-between items-center px-16 pt-10'>
				<h2>Scambi</h2>
				<div className='flex'>
					<div className='w-2/3 p-3'>
						<p className='text-[18px]'>Ready to join us?</p>
					</div>
					<Button classes='btn-primary'>ATTEND</Button>
				</div>
			</div>
			<div className='w-full h-fit lg:my-10 flex md:flex-row sm:flex-row lg:flex-row md:space-x-4 md:space-y-0 justify-between px-16 py-10'>
				<div className='md:w-1/3 lg:w-1/4 sm:w-1/3'>
					<div className='blob-wrap'>
						<div className='blobFooter'></div>
					</div>
					<div className='text-center'>
						<p className='pb-5'>Subscribe to our Newsletter!</p>
						<form>
							<input
								type='email'
								placeholder='Enter your email'
								className='rounded-md lg:w-[300px] lg:mr-5 peer'
							/>
							<Button classes='btn-primary peer-invalid:disabled mt-5'>
								Subscribe
							</Button>
						</form>
					</div>
				</div>
				<div className='md:w-2/3 lg:w-3/4 xl:w-2/3 sm:w-2/3 inline-flex justify-center'>
					<div className='w-1/3 lg:w-42 md:w-36 sm:w-36 xl:w-1/3'>
						<ul>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/about'>
									<a>About</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/teams'>
									<a>Teams</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Manifesto</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Accessibility</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='menus2 w-1/3 lg:w-48 md:w-48 sm:w-36 xl:w-1/3'>
						<ul>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/lab'>
									<a>Labs</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/pinoli'>
									<a>Pinoli</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Dissolvenze</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Ideas</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='menus3 w-1/3 lg:w-48 md:w-36 sm:w-36 xl:w-1/3'>
						<ul>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Donate</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Volunteer</a>
								</Link>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<Link href='/'>
									<a>Join Team</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='flex justify-between px-16 pb-10 items-center'>
				<p className=''>Privacy Policy</p>
				<div className='flex space-x-5 items-center'>
					<Link href='https://twitter.com/scambifestival'>
						<a>
							<Twitter />
						</a>
					</Link>
					<Link href='https://www.facebook.com/cambisfestival/'>
						<a>
							<Facebook />
						</a>
					</Link>
					<Link href='https://www.instagram.com/scambifestival/?hl=en'>
						<a>
							<Instagram />{' '}
						</a>
					</Link>
					<Link href='https://pixelfed.uno/scambi'>
						<a>
							<Pixelfed />
						</a>
					</Link>
					<Link href='https://peertube.uno/c/scambifestival/videos'>
						<a>
							<Peertube />
						</a>
					</Link>
					<Link href='https://mastodon.uno/@scambi'>
						<a>
							<Mastodon />
						</a>
					</Link>
				</div>
				<div
					className='p-2 rounded-full bg-primary cursor-pointer'
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
