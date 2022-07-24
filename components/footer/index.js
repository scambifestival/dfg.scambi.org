import Link from 'next/link';
import Button from '../button';

export default function Footer() {
	return (
		<div className='h-full'>
			<div className='footerTop flex'>
				<div className='topLeft w-1/5'>
					<h2 className='headText pl-16 pb-0 pt-4'>Scambi</h2>
				</div>
				<div className='topRight flex p-4'>
					<div className='topRigh1t w-2/3 p-3'>
						<h6 className='readyToJoin'>Ready to join us?</h6>
					</div>
					<div className='topRight2'>
						<Button>ATTEND</Button>
					</div>
				</div>
			</div>
			<div className='footerMiddle w-full h-fit flex  md:flex:row sm:flex-row flex-container lg:flex-row md:space-x-4 md:space-y-0'>
				<div className='middleLeft md:w-1/3 lg:w-1/4 sm:w-1/3'>
					<div className='blob-wrap'>
						<div className='blobFooter'></div>
					</div>
					<div className='contentBlob'>
						<p>Subscribe to our Newsletter!</p>
					</div>
				</div>
				<div className='md:w-2/3 lg:w-3/4 xl:w-2/3 sm:w-2/3 inline-flex items-center justify-center middleRight'>
					<div className='menus1 w-1/3 lg:w-42 md:w-36 sm:w-36 xl:w-1/3'>
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
								<a href='/donate'>Donate</a>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'>
								<a href='/volunteer'>Volunteer</a>
							</li>
							<li className='mt-2 lg:ml-24 sm:ml-12'></li>
						</ul>
					</div>
				</div>
			</div>
			<div className='footerBottom flex'>
				<div className='BottomLeft w-4/12'>
					<p className='bottomLeftT'>Privacy Policy</p>
				</div>
				<div className='bottomMiddle w-4/12'>
					<Link href='https://twitter.com/scambifestival'>
						<i className='fa fa-twitter icon fa-lg' aria-hidden='true'></i>
					</Link>
					<Link href='https://www.facebook.com/cambisfestival/'>
						<i
							className='fa fa-facebook-official icon fa-lg'
							aria-hidden='true'></i>
					</Link>
					<Link href='https://www.instagram.com/scambifestival/?hl=en'>
						<i className='fa fa-instagram icon fa-lg' aria-hidden='true'></i>
					</Link>
					<Link href='https://pixelfed.uno/scambi'>
						<i className='fa fa-pixelfed icon fa-lg' aria-hidden='true'></i>
					</Link>
					<Link href='https://peertube.uno/c/scambifestival/videos'>
						<i className='fa fa-peertube icon fa-lg' aria-hidden='true'></i>
					</Link>
					<Link href='https://mastodon.uno/@scambi'>
						<i className='fa fa-mastodon icon fa-lg' aria-hidden='true'></i>
					</Link>
				</div>
				<div className='bottomRight w-4/12'>
					<i
						className='fa fa-chevron-circle-up fa-3x icon footerArrow'
						aria-hidden='true'
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
						}}></i>
				</div>
			</div>
		</div>
	);
}
