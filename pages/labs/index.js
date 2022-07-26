import { gallery } from '../../assets/gallery';
import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';

import Image from 'next/image';
import Carousel from '../../components/carousel';

const dummyData = [
	{
		title: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
	},
	{
		title: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
	},
	{
		title: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
	},
	{
		title: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
	},
];

export default function Labs() {
	return (
		<section className='mt-48'>
			<Flex classes='items-center mx-auto'>
				<div className='text-left'>
					<h2 className='font-semibold mb-3'>Labs</h2>
					<p className='italic mb-10'>
						Scambi’s workshops are the place where the exchange becomes reality.
					</p>
					<p className='mb-5'>
						Participants are involved in{' '}
						<span className='font-bold italic'>paneuretic</span> experiences and
						can create their own path through laboratories, approaching the
						theme from different perspectives, in order to know better
						themselves, others and the world around them.
					</p>
					<button className='px-10 py-2 rounded-lg bg-[#69088D] text-white'>
						Get Tickets
					</button>
				</div>
				<div className='mt-10 ml-10'>
					<Image
						src='https://picsum.photos/640/412'
						width={640}
						height={412}
						alt=''
					/>
				</div>
			</Flex>
			<Flex classes='mx-auto items-center justify-between mt-12'>
				<Image
					src='/illustrations/table-talk.png'
					width={436}
					height={425}
					alt=''
				/>
				<div className='text-left lg:w-[500px]'>
					<h2 className='font-semibold mb-10'>What are Labs?</h2>
					<p>
						Laboratories are work-groups guided by an external host aimed at
						exploring the current edition theme.{' '}
					</p>
				</div>
			</Flex>
			<div className='mt-20 w-full p-2 lg:px-16'>
				<div className='mb-10 text-center font-semibold'>
					<h2>Scambi 2021:</h2>
					<h2>Lab Photo Gallery</h2>
				</div>
				<div>
					<Carousel slides={gallery} />
				</div>
				{/*<div className='lg:hidden' style={{ margin: '0 auto' }}>
					<Carousel autoPlay='false'>
						{[...Array(10).keys()].map((item, i) => (
							<img
								draggable='false'
								src={require(`../../assets/lab/gallery/rec${item + 1}.png`)}
								key={i}
								className='w-full h-full mx-0 my-auto'
								alt=''
							/>
						))}
					</Carousel>
            </div>*/}
			</div>
			<Flex classes='mx-auto'>
				<h1>More Info Coming Soon!</h1>
				<Image
					src='/illustrations/rocket.png'
					alt=''
					width={382}
					height={500}
				/>
			</Flex>
			{/*<div className='mt-20 mx-auto p-2 lg:px-16 lg:pb-28'>
				<h2 className='font-semibold mb-10 text-center'>Upcoming Labs</h2>
				<div className='flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-10'>
					{dummyData.map((el, index) => {
						return (
							<LabCard
								key={index}
								index={index}
								title={el.title}
								description={el.description}
							/>
						);
					})}
				</div>
				</div>*/}
		</section>
	);
}
