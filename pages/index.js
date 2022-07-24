import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player';

//import { readFile } from 'fs';
//import path from 'path';

import Flex from '../components/flex';
import Card from '../components/card';
import Button from '../components/button';
import Subscribe from '../components/subscribe';
import Testimonials from '../components/testimonials';
import Map from '../components/map';

import TableTalk from '../public/illustrations/table-talk.png';
import Program from '../public/illustrations/program.png';
import Sponsors from '../public/illustrations/sponsors.png';
import {
	rec1,
	rec2,
	rec3,
	rec4,
	rec5,
	rec6,
	rec7,
	rec8,
	rec9,
} from '../assets/highlights/index';

import { eventCards, manifestoCards } from '../assets/data';

export default function Home() {
	return (
		<section>
			<div className='w-10/12 mx-auto my-10 text-left flex flex-col justify-between xl:items-center  xl:flex-row'>
				<div>
					<h1 className='leading-none'>Scambi Festival</h1>
					<h3>The Festival of Paneuretic Workshops, free for all to attend</h3>
				</div>
				<p className='font-semibold'>
					<span className='text-2xl'>August 25 - 28, 2022</span> <br />
					<span className='text-lg'>La Pigna, Sanremo, Italy</span>
				</p>
			</div>
			{/*<div className='min-h-[20rem] mx-5 flex justify-center md:min-h-[32rem] md:mx-10 md:mt-10 xl:mt-16'>
				<ReactPlayer
					width='100%'
					height='auto'
					url='https://vimeo.com/658183199'
        />
      </div>*/}
			<Flex classes='mt-16'>
				<div className='flex-content'>
					<h2 className='leading-tight lg:leading-normal'>
						What are paneuretic workshops?
					</h2>
					<p className='mx-auto my-5 w-4/5 md:mx-0'>
						<span className='font-semibold'>Pan - eur - etic:</span> Neologism
						deriving from the Greek pan (all), eurisko (discover) and ethos
						(living), because we wish to combine diverse realities that would
						never meet in their original contexts, while celebrating and
						respecting our differences, discovering and developing inspiring
						ideas.
					</p>
				</div>
				<div className='flex-image'>
					<Image src={TableTalk} alt='' />
				</div>
			</Flex>

			<Flex classes='w-full' reverse={true}>
				<div className='flex-content'>
					<h2 className='leading-tight lg:leading-normal'>
						2022 Edition: “Imbalance”
					</h2>
					<p className='mx-auto my-5 w-4/5 md:mx-0'>
						Scambi is the festival of paneuretic workshops, born from the
						necessity felt by a group of young people to{' '}
						<span className='font-semibold'>
							fight the intolerance towards the different.
						</span>{' '}
						For the 2022 edition, which will take place from 25th to 28th of
						August in the historic center of La Pigna (Sanremo), we chose{' '}
						<span className='font-semibold'>imbalance</span> as a theme.
					</p>
					<p className='mx-auto my-8 w-4/5 md:mx-0'>
						Not sure where to start? Check out our{' '}
						<Link href='/'>
							<a className='font-semibold text-purple-650'>
								Frequently Asked Questions
								<i className='fa fa-chevron-right px-3' />
							</a>
						</Link>
					</p>
					<Button>View the 2022 Program</Button>
				</div>
				<div className='flex-image'>
					<Image src={Program} alt='' />
				</div>
			</Flex>

			<div className='flex flex-col items-center justify-center space-y-7 mt-16 lg:flex-row lg:space-x-14 lg:space-y-0'>
				{eventCards.map((event, index) => (
					<Card
						key={index}
						classes='w-4/5 h-fit px-10 py-5 space-y-4 bg-white lg:w-1/4'>
						<h4>{event.title}</h4>
						<p className='text-left'>{event.description}</p>
						<div className='text-left text-purple-650'>
							<a href={`/${event.link}`}>
								Read more <i className='fa fa-long-arrow-right' />
							</a>
						</div>
					</Card>
				))}
			</div>

			<div className='mt-20'>
				<h1>Scambi 2021 Highlights</h1>
				<div className='mt-10 flex justify-center'>
					<div className='flex flex-col space-y-5 mr-5'>
						<div className='flex space-x-5'>
							<Image
								src={rec1}
								className='rounded-2xl shadow-md w-[229px] h-[245px]'
								alt=''
							/>
							<Image
								src={rec2}
								className='rounded-2xl shadow-md w-[222px] h-[247px]'
								alt=''
							/>
						</div>
						<Image
							src={rec3}
							className='rounded-2xl shadow-md w-[480px] h-[251px]'
							alt=''
						/>
					</div>
					<div className='space-y-5'>
						<Image
							src={rec4}
							className='rounded-2xl shadow-md w-[220px] h-[145px]'
							alt=''
						/>
						<Image
							src={rec5}
							className='rounded-2xl shadow-md w-[220px] h-[353px]'
							alt=''
						/>
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
			</div>

			<div className='mt-6 lg:mt-10 xl:mt-32'>
				<h2 className='px-10 leading-tight'>
					An experience people love to talk about
				</h2>
				<Testimonials />
			</div>

			<Flex>
				<div className='md:text-left space-y-7 md:w-1/2 lg:w-3/5'>
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
					<Button>Volunteer with us</Button>
				</div>
				<div className='md:w-1/2 lg:w-3/5'>
					<Image src={rec5} alt='' />
				</div>
			</Flex>

			<div className='flex justify-center px-14 py-10 font-normal bg-white sm:px-20 lg:px-24 xl:px-42 2xl:px-60'>
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

			<div className='my-20 space-y-12'>
				<h2>Our Manifesto</h2>
				<div className='flex flex-col justify-center mx-16 space-y-6 lg:space-x-5 lg:space-y-0 lg:flex-row xl:space-x-10 2xl:mx-32'>
					{manifestoCards.map((card, index) => (
						<Card
							classes={`p-5 w-full h-fit lg:w-1/4 xl:w-1/5 ${
								index % 2 === 0 ? 'yellow-pink-gradient' : 'bg-white'
							}`}
							key={`manifesto-${index}`}>
							<h3 className='leading-loose'>{card.title}</h3>
							<p className='leading-relaxed'>{card.description}</p>
						</Card>
					))}
				</div>
				<Button styleType='light'>Read the Manifesto</Button>
			</div>

			<Flex
				classes='my-1 px-8 space-y-10 md:space-x-reverse xl:gap-x-52'
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
						<Button>Partner with us</Button>
						<Button styleType='secondary'>Meet our partners</Button>
					</div>
				</div>
				<div className='w-3/5 lg:w-4/12'>
					<Image src={Sponsors} alt='' />
				</div>
			</Flex>

			<div className='bg-white flex justify-center py-10'>
				<Subscribe />
			</div>

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
