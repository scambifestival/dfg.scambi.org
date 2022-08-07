import { gallery } from '../../assets/gallery';
import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';

import Image from 'next/image';
import Carousel from '../../components/carousel';
import { getAllLabs, getDescription } from '../../lib/labs';
import { useRouter } from 'next/router';
import Button from '../../components/button';

export default function Labs({ labs }) {
	const router = useRouter();
	const locale = router.locale;

	return (
		<section className='mt-28 lg:mt-40'>
			<Flex classes='items-center mx-5 md:flex-col md:w-full md:mx-auto md:px-20 lg:flex-row lg:space-x-12 xl:px-32 xl:space-x-20'>
				<div className='text-center lg:text-left lg:w-3/4'>
					<h1 className='font-semibold mb-3 text-8xl leading-relaxed'>Labs</h1>
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
					<Button classes='btn-primary text-white'>
						Get Tickets
					</Button>
				</div>
				<div className='mt-10 min-w-full SurfaceDuo:w-4/5 SurfaceDuo:min-w-[10%] md:w-2/3 xl:w-1/2'>
					<Image
						src='https://picsum.photos/640/412'
						width={640}
						height={412}
						layout='responsive'
						alt=''
						className='rounded-xl'
					/>
				</div>
			</Flex>
			<Flex classes='mt-5 mx-5 flex-col-reverse justify-around items-center sm:mx-auto sm:px-10 md:flex-col-reverse lg:flex-row lg:mt-12'>
				<div className='mt-10 min-w-full iPhoneSE:min-w-[10%] iPhoneSE:w-2/3 sm:w-1/2 lg:mt-0 xl:w-1/3'>
					<Image
						src='/illustrations/table-talk.png'
						width={436}
						height={425}
						alt=''
						layout='responsive'
					/>
				</div>

				<div className='text-center w-full lg:text-left lg:w-2/3 lg:ml-20 xl:w-2/5'>
					<h2 className='font-semibold mb-3 lg:mb-10'>What are Labs?</h2>
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
			</div>
			{/*<Flex classes='mx-auto'>
				<h1>More Info Coming Soon!</h1>
				<Image
					src='/illustrations/rocket.png'
					alt=''
					width={382}
					height={500}
				/>
	</Flex>*/}
			<div className='my-10 mx-5 iPhoneXR:mx-10 md:mx-5 lg:mx-10'>
				<h2 className='font-semibold text-center mb-10'>Upcoming Labs</h2>
				<div className='flex justify-around flex-wrap w-full'>
					{labs.map((lab) => {
						return (
							<LabCard
								key={lab.id}
								id={lab.id}
								title={lab.title}
								description={getDescription(locale, lab)}
								lang={lab.lang}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const labs = await getAllLabs();

	return {
		props: {
			labs: labs,
		},
	};
}
