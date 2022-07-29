import Image from 'next/image';
import Link from 'next/link';

import Flex from '../components/flex';
import Card from '../components/card';
import Button from '../components/button';
import Subscribe from '../components/subscribe';
import Testimonials from '../components/testimonials';
import Map from '../components/map';
import { ArrowRight } from '../components/icons/arrow';
import Carousel from '../components/carousel';

import { highlights } from '../assets/highlights';

/* A different way to import image
import TableTalk from '../public/illustrations/table-talk.png';
import Program from '../public/illustrations/program.png'; */
//import Sponsors from '../public/illustrations/sponsors.png';

import { eventCards, manifestoCards } from '../assets/data';

export default function Home() {
	return (
		<section>
			<header className='space-y-7'>
				<div className='w-full flex flex-col justify-between mt-10 text-center sm:w-10/12 sm:mx-auto sm:my-10 sm:text-left xl:flex-row xl:items-end'>
					<div className='my-5 space-y-5 md:space-y-2 md:my-3 xl:my-0'>
						<h1 className='leading-none font-medium'>Scambi Festival</h1>
						<h3 className='leading-tight font-medium'>The Festival of Paneuretic Workshops, free for all to attend</h3>
					</div>
					<p className='font-medium'>
						<span className='text-2xl'>August 25 - 28, 2022</span> <br />
						<span className='text-lg'>La Pigna, Sanremo, Italy</span>
					</p>
				</div>
				<div className='relative pb-[50%] lg:pb-[40%] xl:pb-[30%]'>
					<iframe
						className='absolute top-0 left-0 w-full h-full'
						src='https://player.vimeo.com/video/658183199'
						title='Scambi Festival 2021 Rewind'
						allow="autoplay; fullscreen"
					/>
				</div>
			</header>
			<Flex classes='mt-16 mb-10 mx-7 py-0 justify-between text-center sm:mx-16 md:mx-auto md:mt-20 md:text-left md:space-x-20 lg:space-x-36 2xl:mb-10 2xl:w-9/12'>
				<div className='space-y-3 md:w-full'>
					<h2 className='leading-tight font-medium'>
						What are paneuretic workshops?
					</h2>
					<p>
						<span className='font-semibold'>Pan - eur - etic:</span> Neologism
						deriving from the Greek pan (all), eurisko (discover) and ethos
						(living), because we wish to combine diverse realities that would
						never meet in their original contexts, while celebrating and
						respecting our differences, discovering and developing inspiring
						ideas.
					</p>
				</div>
				<div className='w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/5 xl:w-2/5'>
					<Image
						src='/illustrations/table-talk.png'
						alt='Illustration of 3 people sitting around a table talking'
						width={808}
						height={800}
					/>
				</div>
			</Flex>

			<Flex classes='mt-10 mb-32 mx-7 py-0 justify-between text-center sm:mx-16 md:mx-auto md:mt-20 md:text-left md:space-x-reverse md:space-x-20 lg:space-x-reverse lg:space-x-28 2xl:mt-10 2xl:w-9/12' reverse={true}>
				<div className='space-y-3 sm:space-y-6 md:w-full'>
					<h2 className='leading-tight font-medium'>
						2022 Edition: “Imbalance”
					</h2>
					<p>
						Scambi is the festival of paneuretic workshops, born from the
						necessity felt by a group of young people to{' '}
						<span className='font-semibold'>
							fight the intolerance towards the different.
						</span>{' '}
						For the 2022 edition, which will take place from 25th to 28th of
						August in the historic center of La Pigna (Sanremo), we chose{' '}
						<span className='font-semibold'>imbalance</span> as a theme.
					</p>
					<p>
						Not sure where to start? Check out our{' '}
						<Link href='/faq'>
							<a className='font-medium text-primary'>
								Frequently Asked Questions {'>'}							</a>
						</Link>
					</p>
					<Button classes='btn-primary'>View the 2022 Program</Button>
				</div>
				<div className='w-1/2 md:w-3/4 lg:w-3/5 xl:w-2/5'>
					<Image
						src='/illustrations/program.png'
						alt=''
						width={918}
						height={1026}
					/>
				</div>
			</Flex>

			<div className='flex flex-col items-center justify-center space-y-7 mt-16 lg:flex-row lg:items-start lg:space-x-14 lg:space-y-0'>
				{eventCards.map((event, index) => (
					<Card
						key={index}
						classes='w-5/6 h-fit px-7 py-5 space-y-4 text-left bg-white lg:w-1/4'>
						<h4 class='font-["Poppins"] font-medium'>{event.title}</h4>
						<p>{event.description}</p>
						<div>
							<Link href={`/${event.link}`}>
								<a className='flex items-center space-x-2 text-primary'>
									<p>Read more</p>
									<ArrowRight />
								</a>
							</Link>
						</div>
					</Card>
				))}
			</div>

			<div className='mt-28 lg:px-16 text-center'>
				<h2 className='mb-10 font-medium leading-tight'>Scambi 2021 Highlights</h2>
				<Carousel slides={highlights} />
			</div>

			{/*<div className='mt-20 lg:mx-10'>
				<h1>Scambi 2021 Highlights</h1>
				<div>
					<Image src={rec1} className='rounded-2xl shadow-md' alt='' />
					<Image src={rec2} className='rounded-2xl shadow-md' alt='' />
				</div>
				<div className='mt-10 flex justify-center'>
					<div className='flex flex-col space-y-5 mr-5'>
						<div className='flex space-x-5 w-full'></div>
						<Image src={rec3} className='rounded-2xl shadow-md' alt='' />
					</div>
					<div className='space-y-5'>
						<Image src={rec4} className='rounded-2xl shadow-md' alt='' />
						<Image src={rec5} className='rounded-2xl shadow-md' alt='' />
					</div>
					<div className='space-y-5 ml-5'>
						<Image
							src={rec6}
							className='rounded-2xl shadow-md mb-5 w-[330px] h-[290px]'
							alt=''
						/>
						<Image
							src={rec7}
							className='rounded-2xl shadow-md w-[330px] h-[208px]'
							alt=''
						/>
					</div>
					<div className='space-y-5 ml-5'>
						<Image
							src={rec8}
							className='rounded-2xl shadow-md mb-5 w-[202px] h-[186px]'
							alt=''
						/>
						<Image
							src={rec9}
							className='rounded-2xl shadow-md w-[202px] h-[311px]'
							alt=''
						/>
					</div>
				</div>
				</div>*/}

			<div className='mt-6 lg:mt-10 xl:mt-32'>
				<h2 className='px-10 leading-tight'>
					An experience people love to talk about
				</h2>
				<Testimonials />
			</div>

			<Flex classes='mx-auto'>
				<div className='md:text-left space-y-7 md:w-1/2 lg:w-3/5 mr-10'>
					<h2 className='leading-tight lg:leading-normal'>Scambi Family</h2>
					<p className='mx-auto md:mx-0'>
						We are a group of under 25s coming from every corner of Europe.
					</p>
					<p className='mx-auto md:mx-0'>
						Our association was born from our wish to value real and deep ties,
						horizontality and dialogue, curiosity and welcoming of the
						different. After lots of videocalls, thousand doubts and just as
						many ideas, our team has become a family. We are proud of our
						diversity and passion, enthusiastic in sharing inspiration and in
						continuously proposing new perspectives.
					</p>
					<p className='mx-auto md:mx-0'>
						We will be waiting for you in Sanremo, to introduce ourselves
						properly. In the meanwhile, here is an anticipation of who we are.
					</p>
					<Button classes='btn-primary'>Volunteer with us</Button>
				</div>
				<Image
					src={highlights[4]}
					alt=''
					width={500}
					height={319}
					className='rounded-2xl'
				/>
			</Flex>

			<div className='flex justify-center text-center px-14 py-10 font-normal bg-white sm:px-20 lg:px-24 xl:px-42 2xl:px-60'>
				<p className='text-3xl sm:leading-relaxed sm:text-4xl xl:text-5xl xl:leading-relaxed 2xl:leading-loose'>
					“Our purpose is to recover the value of{' '}
					<span className='font-bold text-3xl sm:text-4xl xl:text-5xl'>
						communication
					</span>{' '}
					and{' '}
					<span className='font-bold text-3xl sm:text-4xl xl:text-5xl'>
						meeting
					</span>
					, often forgotten or hidden behind a two-dimentional screen. Scambi is
					a multi-dimensional universe, where distant “planets” have the
					possibility to interact with each other.”
				</p>
			</div>

			<div className='my-20 mx-auto space-y-12'>
				<h2 className='text-center'>Our Manifesto</h2>
				<div className='flex flex-col justify-center mx-16 space-y-6 lg:space-x-5 lg:space-y-0 lg:flex-row xl:space-x-10 2xl:mx-32'>
					{manifestoCards.map((card, index) => (
						<Card
							classes={`p-5 w-full h-fit lg:w-1/4 xl:w-1/5 ${index % 2 === 0 ? 'yellow-pink-gradient' : 'bg-white'
								}`}
							key={`manifesto-${index}`}>
							<h3 className='leading-loose'>{card.title}</h3>
							<p className='leading-relaxed'>{card.description}</p>
						</Card>
					))}
				</div>
				<div className='flex justify-center'>
					<Button classes='btn-primary'>Read the Manifesto</Button>
				</div>
			</div>

			<div className='bg-white flex justify-center py-10'>
				<Subscribe />
			</div>

			<Flex
				classes='my-1 px-8 mx-auto space-y-10 md:space-x-reverse xl:gap-x-52'
				reverse={true}>
				<div className='w-4/5 flex flex-col text-center space-y-8 md:text-left'>
					<h2 className='leading-tight lg:leading-normal'>Our Relations</h2>
					<p className='mx-auto md:mx-0 w-full 2xl:w-4/5'>
						Alone we would not have been able to concretize the magic of Scambi.
						What makes our festival unique are the relationships and the bonds
						with local and non-local bodies, the public administration of
						Sanremo and many other special people.
					</p>
					<div className='flex flex-row justify-center md:justify-start space-x-7'>
						<Button classes='btn-primary'>Partner with us</Button>
						<Button>Meet our partners</Button>
					</div>
				</div>
				<Image
					src='/illustrations/sponsors.png'
					alt=''
					width={654}
					height={689}
				/>
			</Flex>

			<div className='px-20 my-10'>
				<h2 className='text-left py-5'>Explore Scambi Festival</h2>
				<Map />
			</div>
		</section>
	);
}

{
	/*export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'data.js')
	const data = fs.readdirSync('');
}*/
}
