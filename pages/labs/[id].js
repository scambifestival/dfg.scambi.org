import Image from 'next/image';
import Flex from '../../components/flex';
import {
	getALab,
	getAllLabs,
	getDescription,
	getHostBio,
	getLanguage,
} from '../../lib/labs';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Time from '../../components/time';

export default function Lab({ lab, hosts }) {
	const router = useRouter();
	const locale = router.locale;

	return (
		<section className='mt-48'>
			<div className='w-full mx-auto px-5 flex flex-col justify-between space-y-7 iPhoneXR:px-10 text-center md:text-left xl:flex-row xl:px-28'>
				<div className='w-full xl:w-3/5'>
					<h1 className='leading-tight font-medium break-words text-[54px] sm:text-[64px] lg:text-[102px]'>
						{lab.title}
					</h1>
					<div className='flex space-x-2 mb-5'>
						{lab.lang.map(({ id, value }) => (
							<p key={id} className='rounded-full p-2 bg-primary-yellow'>
								{getLanguage(value, locale)}
							</p>
						))}
					</div>
					<p className='text-[14px] md:text-[16px]'>{locale === 'en' ? lab['eng_description'] : lab.description}</p>
				</div>
				<div className='flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-14 xl:flex-col xl:space-x-0 xl:space-y-10'>
					<div>
						<h3 className='font-medium text-[48px] md:text-[52px]'>Where?</h3>
						{lab.location.map(({ id, value }) => (
							<p key={id}>{value}</p>
						))}
					</div>
					<div>
						<h3 className='font-medium text-[48px] md:text-[52px]'>When?</h3>
						{/*<Flex classes='space-x-2'>
							{lab.days.map(day => {
								<Time key={day.id} date={`8/${day.value}`} time={}
							})}
						</Flex>*/}
					</div>
				</div>

				{/* <Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/> */}
				{/*<div className='mb-5 mx-auto w-full min-w-0 iPhoneXR:w-2/3 sm:w-1/2 lg:order-last lg:mb-0 lg:w-1/3 xl:mr-0'>
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
			</div>*/}
			</div>
			<Flex classes='my-10 px-5 justify-between iPhoneXR:px-10 sm:mx-auto md:flex-col lg:flex-row lg:px-0 lg:py-20'>
				<div className='text-center sm:text-left lg:w-1/2'>
					<h2 className='leading-tight font-medium  text-[54px] md:text-[64px]'>Meet the Lab Host</h2>
					{hosts.map((host) => (
						<div key={host.id}>
							<h4>
								{host['Ente']
									? host['Ente']
									: host['Nome'] + ' ' + host['Cognome']}
							</h4>
							<p>{host.bio}</p>
						</div>
					))}
				</div>
				{/* <Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/> */}

				{/*<div className='mb-5 mx-auto w-full min-w-0 iPhoneXR:w-2/3 sm:w-1/2 lg:order-last lg:mb-0 lg:w-2/5 xl:w-1/3 lg:mr-0'>
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
			</div>*/}
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

export async function getStaticProps({ params, locale }) {
	const lab = await getALab(params.id);
	const hosts = await getHostBio(lab.host);
	return {
		props: {
			lab,
			hosts,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
