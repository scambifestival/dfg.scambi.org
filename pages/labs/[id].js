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
			<div className='w-full'>
				<Image src='https://picsum.photos/1000/500' layout='responsive' width={1000} height={500} alt='' />
			</div>

			<Flex classes=' mx-auto text-left justify-between'>
				<div className='lg:w-1/2'>
					<h1 className='mb-10'>{lab.title}</h1>
					<p>{getDescription(locale, lab)}</p>
				</div>

				<Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/>
			</Flex>
			<Flex classes='mt-10 mx-auto justify-between bg-white'>
				<div className='text-left lg:w-1/2'>
					<h2 className=''>Meet the Lab Host</h2>
					{lab['host'].map((host) => (
						<p key={host.id}>{host.value}</p>
					))}
				</div>
				<Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/>
			</Flex>
			{/*<div id='similar-lab' className='px-2 lg:px-10 py-28 mt-10'>
				<h3 className='mb-10 text-left'>Similar Labs</h3>
				<div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5 xl:gap-x-5'>
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
					</div>*/}
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
