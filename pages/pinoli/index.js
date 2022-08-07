import Image from 'next/image';
import Flex from '../../components/flex';
import Map from '../../components/map';
import Button from '../../components/button';
import Card from '../../components/card';
import { pinoli } from '../../assets/pinoli';
import Carousel from '../../components/carousel';
import SupportUs from '../../components/support-cards';
import { getPinoli } from '../../lib/pinoli';

export default function Pinoli() {
	return (
		<section>
			<Flex classes='py-20 mx-4 space-y-8 SurfaceDuo:mx-8 sm:mx-12 md:flex-col md:space-y-12 md:mx-auto lg:flex-row lg:space-y-0 lg:space-x-16 lg:mx-auto xl:space-x-56'>
				<div className='w-fit text-center lg:text-left'>
					<h1 className='font-semibold'>Pinoli</h1>
					<p>
						Pinoli are not just the sweet seeds that make pesto so delicious;
						when it comes to Scambi, they are events where you can meet new
						people: book presentations, exhibitions of innovative technological
						solutions, exchanges of secondhand clothing, and much more.
					</p>
				</div>
				<div className='w-4/5 SurfaceDuo:w-3/5 md:w-2/5 lg:w-3/5 xl:max-w-md'>
					<Image
						src='/illustrations/pinoli.png'
						alt='Two hand-drawn blue bowls full of seeds with a hand-drawn purplish acorn behind it'
						width={738}
						height={682}
					/>
				</div>
			</Flex>

			<div className='bg-white text-center py-10 px-4 lg:px-16'>
				<h2>What is a Pinolo?</h2>
				<p>
					A Pinolo is a collateral event that comes to life during Scambi
					festival.
				</p>
				<div className='mt-10'>
					<Carousel slides={pinoli} />
				</div>
			</div>

			{/* Map */}
			{/*<div className='px-20 my-10'>
				<h2 className='pt-5'>Upcoming Pinolis</h2>
				<Map />
  </div>*/}

			<div className='grid grid-cols-1 lg:grid-cols-3 mx-10 lg:mx-20'></div>

			<Flex classes='mx-1 py-32 justify-between items-center iPhoneSE:mx-7 sm:mx-auto md:justify-around md:space-y-0 md:py-40 md:mx-auto md:space-x-12 lg:justify-center lg:space-x-20'>
				<h2 className='leading-tight text-center md:text-left md:w-fit'>More Info Coming Soon!</h2>
				<div className='w-3/4 iPhoneSE:w-1/2 SurfaceDuo:w-1/3 sm:w-2/5 md:w-fit md:max-w-full lg:max-w-xs'>
					<Image
						src='/illustrations/rocket.png'
						alt=''
						width={382}
						height={500}
					/>
				</div>
			</Flex>

			<SupportUs />
		</section>
	);
}

export async function getStaticProps() {
	const pinoli = await getPinoli();

	return {
		props: {
			pinoli,
		},
	};
}
