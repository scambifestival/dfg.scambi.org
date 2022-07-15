import React from 'react';
import Header from './Header';
import NLSubscribe from './NLSubscribe';
import Testimonials from './Testimonials';
import Map from '../../components/map';
import Button from '../../components/button';
import Flex from '../../components/Flex/Flex';
import TableTalk from '../../assets/home/TableTalk.png';
import Program from '../../assets/home/Program.png';
import Volunteer from '../../assets/home/Volunteer.png';
import Sponsors from '../../assets/home/Sponsors.png';
import Card from '../../components/card';
import { eventCards, manifestoCards } from './data';

const Home = () => {
	return (
		<div className='mainhome-container'>
			<Header />
			<Flex classes='mt-16'>
				<div className="flex-content">
					<h2 className="leading-tight lg:leading-normal">What are paneuretic workshops?</h2>
					<p className="mx-auto my-5 w-4/5 md:mx-0">
						<span className="font-semibold">Pan - eur - etic:</span> Neologism
						deriving from the Greek pan (all), eurisko (discover) and ethos
						(living), because we wish to combine diverse realities that would
						never meet in their original contexts, while celebrating and respecting
						our differences, discovering and developing inspiring ideas.
					</p>
				</div>
				<div className="flex-image">
					<img src={TableTalk} />
				</div>
			</Flex>

			<Flex classes="w-full" reverse={true}>
				<div className="flex-content">
					<h2 className="leading-tight lg:leading-normal">2022 Edition: “Imbalance”</h2>
					<p className="mx-auto my-5 w-4/5 md:mx-0">
						Scambi is the festival of paneuretic workshops, born from the
						necessity felt by a group of young people
						to <span className="font-semibold">fight the intolerance towards the different.</span> For
						the 2022 edition, which will take place from 25th to 28th of August
						in the historic center of La Pigna (Sanremo),
						we chose <span className="font-semibold">imbalance</span> as a theme.
					</p>
					<p className="mx-auto my-8 w-4/5 md:mx-0">
						Not sure where to start?
						Check out our <a className="font-semibold text-purple-650">
							Frequently Asked Questions
							<i className="fa fa-chevron-right px-3" />
						</a>
					</p>
					<Button>View the 2022 Program</Button>
				</div>
				<div className="flex-image">
					<img src={Program} />
				</div>
			</Flex>

			<div className='flex flex-col items-center justify-center space-y-7 mt-16 lg:flex-row lg:space-x-14 lg:space-y-0'>
				{eventCards.map(event => (
					<Card classes='w-4/5 h-fit px-10 py-5 space-y-4 bg-white lg:w-1/4'>
						<h4>{event.title}</h4>
						<p className='text-left'>{event.description}</p>
						<div className='text-left text-purple-650'>
							<a>Read more <i className='fa fa-long-arrow-right' /></a>
						</div>
					</Card>
				))}
			</div>

			<Testimonials />

			<Flex classes='my-1'>
				<div className="lg:text-left space-y-7 md:w-1/2 lg:w-3/5">
					<h2 className="leading-tight lg:leading-normal">Scambi Family</h2>
					<p className="mx-auto md:mx-0">
						We are a group of under 25s coming from every corner of Europe.
					</p>
					<p className="mx-auto md:mx-0">
						Our association was born from our wish to value real and deep ties, horizontality and dialogue,
						curiosity and welcoming of the different. After lots of videocalls, thousand doubts and just as many ideas,
						our team has become a family. We are proud of our diversity and passion, enthusiastic in sharing inspiration
						and in continuously proposing new perspectives.
					</p>
					<p className="mx-auto md:mx-0">
						We will be waiting for you in Sanremo, to introduce ourselves properly. In the meanwhile, here is an anticipation of who we are.
					</p>
					<Button styleType="secondary">Volunteer with us</Button>
				</div>
				<div className="md:w-1/2 lg:w-3/5">
					<img src={Volunteer} />
				</div>
			</Flex>

			<div className='flex justify-center px-14 py-10 font-normal bg-white sm:px-20 lg:px-24 xl:px-42 2xl:px-60'>
				<p className='text-3xl sm:leading-relaxed sm:text-4xl xl:text-5xl xl:leading-relaxed 2xl:leading-loose'>
					“Our purpose is to recover the value
					of <span className="font-bold text-3xl sm:text-4xl xl:text-5xl">communication</span> and <span className="font-bold text-3xl sm:text-4xl xl:text-5xl">meeting</span>,
					often forgotten or hidden behind a two-dimentional screen. Scambi is a multi-dimensional universe,
					where distant “planets” have the possibility to interact with each other.”
				</p>
			</div>

			<div className="my-20 space-y-12">
				<h2>Our Manifesto</h2>
				<div className='flex flex-col justify-center mx-16 space-y-6 lg:space-x-5 lg:space-y-0 lg:flex-row xl:space-x-10 2xl:mx-32'>
					{manifestoCards.map((card, index) => (
						<Card classes={`p-5 w-full h-fit lg:w-1/4 xl:w-1/5 ${index % 2 === 0 ? 'yellow-pink-gradient' : 'bg-white'}`} key={`manifesto-${index}`}>
							<h3 className='leading-loose'>{card.title}</h3>
							<p className='leading-relaxed'>{card.description}</p>
						</Card>
					))}
				</div>
				<Button styleType='light'>Read the Manifesto</Button>
			</div>

			<Flex classes='my-1 px-8 space-y-10 md:space-x-reverse xl:gap-x-52' reverse={true}>
				<div className="w-4/5 flex flex-col text-center space-y-8 md:text-left">
					<h2 className="leading-tight lg:leading-normal">Our Relations</h2>
					<p className="mx-auto md:mx-0 w-full 2xl:w-4/5">
						Alone we would not have been able to concretize the magic of Scambi.
						What makes our festival unique are the relationships and the bonds with
						local and non-local bodies, the public administration of Sanremo and
						many other special people.
					</p>
					<div className="flex flex-row justify-center md:justify-start space-x-7">
						<Button>Partner with us</Button>
						<Button styleType='secondary'>Meet our partners</Button>
					</div>
				</div>
				<div className="w-3/5 lg:w-4/12">
					<img src={Sponsors} />
				</div>
			</Flex>

			<div className='bg-white flex justify-center py-10'>
				<NLSubscribe />
			</div>
			<Map />
		</div>
	);
};

export default Home;