import Image from 'next/image';
import Flex from '../../components/flex';
import Map from '../../components/map';
import Button from '../../components/button';
import Card from '../../components/card';
import { pinoli } from '../../assets/pinoli';
import Carousel from '../../components/carousel';

export default function Pinoli() {
	return (
		<section className='mt-40'>
			<Flex classes='py-20 mx-auto'>
				<div className='text-center lg:text-left'>
					<h1>Pinoli</h1>
					<p className='xl:w-4/5'>
						Pinoli are not just the sweet seeds that make pesto so delicious;
						when it comes to Scambi, they are events where you can meet new
						people: book presentations, exhibitions of innovative technological
						solutions, exchanges of secondhand clothing, and much more.
					</p>
				</div>
				<Image
					src='/illustrations/pinoli.png'
					alt='Two hand-drawn blue bowls full of seeds with a hand-drawn purplish acorn behind it'
					width={738}
					height={682}
				/>
			</Flex>

			<div className='lg:px-16 bg-white py-10 text-center'>
				<h2>What is a Pinolo?</h2>
				<p>
					A Pinolo is a collateral event that comes to life during Scambi
					festival.
				</p>
				<div className='mt-10'>
					<Carousel content={pinoli} />
				</div>
			</div>

			{/* Map */}
			{/*<div className='px-20 my-10'>
				<h2 className='pt-5'>Upcoming Pinolis</h2>
				<Map />
  </div>*/}

			{/*<div className='flex flex-wrap justify-center mx-10 lg:mx-20'>
				{populate()}
</div>*/}

			<Flex classes='mx-auto'>
				<h1>More Info Coming Soon!</h1>
				<Image
					src='/illustrations/rocket.png'
					alt=''
					width={382}
					height={500}
				/>
			</Flex>

			<div className='my-40'>
				<h2 className='text-center mb-10'>Support Us Today</h2>
				<div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 px-10'>
					<Card classes='bg-[#EEBDAD] text-center py-10 space-y-5'>
						<h4>Volunteer with us</h4>
						<p>Join us in the festivities and help from the inside!</p>
						<div>
							<Image
								src='/illustrations/support1.png'
								width={32}
								height={88}
								alt=''
							/>
						</div>
						<Button>Volunteer</Button>
					</Card>
					<Card classes='bg-[#EDBBFF] text-center py-10 space-y-5'>
						<h4>Join us Aug 25 - 28, 2022</h4>
						<p>Celebrate with us this year, tickets are free of charge.</p>
						<div>
							<Image
								src='/illustrations/support2.png'
								width={32}
								height={88}
								alt=''
							/>
						</div>
						<Button>Get Tickets</Button>
					</Card>
					<Card classes='bg-[#AAB4D6] text-center py-10 space-y-5'>
						<h4>Donate Securely</h4>
						<p>
							Make a one-time or monthly donation to help run Scambi Festival.
						</p>
						<div>
							<Image
								src='/illustrations/support3.png'
								width={32}
								height={88}
								alt=''
							/>
						</div>
						<Button>Donate</Button>
					</Card>
				</div>
			</div>
		</section>
	);
}
