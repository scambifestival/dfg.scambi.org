import Image from 'next/image';
import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';
import { getALab, getAllLabs, getDescription } from '../../lib/labs';
import { useRouter } from 'next/router';

export default function Lab({ lab }) {
	const router = useRouter();
	const locale = router.locale;

	return (
		<section className='bg-white -mt-48'>
			<div className='relative w-full h-[500px] min-h-full'>
				<Image
					src='https://picsum.photos/2000/1000'
					layout='fill'
					width={2000}
					height={1000}
					objectFit='cover'
					objectPosition='center'
					alt=''
				/>
			</div>

			<Flex classes='px-5 justify-between iPhoneXR:px-10 sm:mx-auto text-center md:text-left md:flex-col xl:flex-row xl:px-0'>
				<div className='xl:w-3/5'>
					<h1 className='mb-10 leading-tight text-[5.4rem] iPhoneXR:text-[102px]'>Human Thread Lab</h1>
				</div>

				{/* <Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/> */}
				<div className='mb-5 mx-auto w-full min-w-0 iPhoneXR:w-2/3 sm:w-1/2 lg:order-last lg:mb-0 lg:w-1/3 xl:mr-0'>
					<svg
						viewBox='0 0 282 258'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<pattern
								id='img'
								patternUnits='userSpaceOnUse'
								width='282'
								height='258'>
								<image
									href='https://picsum.photos/282/258'
									x='0'
									y='0'
									width='282'
									height='258'
				/>
							</pattern>
						</defs>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M170.442 11.7096C204.381 18.8402 242.989 19.868 264.504 46.3403C286.873 73.8645 283.241 110.797 278.205 144.303C272.884 179.703 265.768 217.594 235.669 238.188C204.579 259.459 160.798 264.066 124.08 249.752C91.019 236.863 83.1051 198.397 62.2472 170.58C40.1257 141.078 -1.99244 119.718 0.0732747 84.3713C2.21638 47.7003 37.1047 20.6977 71.8731 5.86908C102.524 -7.20361 136.807 4.64308 170.442 11.7096Z'
							fill='url(#img)'
						/>
					</svg>
				</div>
			</Flex>
			<Flex classes='mt-10 px-5 justify-between bg-white iPhoneXR:px-10 sm:mx-auto md:flex-col lg:flex-row lg:px-0 lg:py-20'>
				<div className='text-center sm:text-left lg:w-1/2'>
					<h2>Meet the Lab Host</h2>
				</div>
				{/* <Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/> */}

				<div className='mb-5 mx-auto w-full min-w-0 iPhoneXR:w-2/3 sm:w-1/2 lg:order-last lg:mb-0 lg:w-2/5 xl:w-1/3 lg:mr-0'>
					<svg
						viewBox='0 0 282 258'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<pattern
								id='img'
								patternUnits='userSpaceOnUse'
								width='282'
								height='258'>
								<image
									href='https://picsum.photos/282/258'
									x='0'
									y='0'
									width='282'
									height='258'
				/>
							</pattern>
						</defs>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M170.442 11.7096C204.381 18.8402 242.989 19.868 264.504 46.3403C286.873 73.8645 283.241 110.797 278.205 144.303C272.884 179.703 265.768 217.594 235.669 238.188C204.579 259.459 160.798 264.066 124.08 249.752C91.019 236.863 83.1051 198.397 62.2472 170.58C40.1257 141.078 -1.99244 119.718 0.0732747 84.3713C2.21638 47.7003 37.1047 20.6977 71.8731 5.86908C102.524 -7.20361 136.807 4.64308 170.442 11.7096Z'
							fill='url(#img)'
						/>
					</svg>
				</div>
			</Flex>
			{/* <div id='similar-lab' className='py-10 px-5 iPhoneXR:px-10 md:px-5 lg:px-10'>
				<h2 className='text-center mb-10 lg:text-left font-semibold leading-tight'>Similar Labs</h2>
				<div className='w-full flex flex-wrap justify-around'>
					<LabCard
						title='Lorem Ipsum'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					/>
					<LabCard
						title='Lorem Ipsum'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					/>
				</div>
			</div> */}
		</section>
	);
}

export async function getStaticPaths({ locales }) {
	const labs = await getAllLabs();

	const paths = labs
		.map((lab) =>
			locales.map((locale) => ({
				params: {
					id: `${lab.id}`,
				},
				locale,
			}))
		)
		.flat();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const lab = await getALab(params.id);
	return {
		props: {
			lab,
		},
	};
}
