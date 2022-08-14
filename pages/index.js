import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Flex from '../components/flex';
import Card from '../components/card';
import Button from '../components/button';
import Subscribe from '../components/subscribe';
import Testimonials from '../components/testimonials';
import Manifesto from '../components/manifesto';
import Map from '../components/map';
import { ArrowRight } from '../components/icons/arrow';
import Carousel from '../components/carousel';
import CountDown from '../components/countdown';
import Markdown from '../components/markdown';

/* A different way to import image
import TableTalk from '../public/illustrations/table-talk.png';
import Program from '../public/illustrations/program.png'; */
//import Sponsors from '../public/illustrations/sponsors.png';

//import { eventCards, manifestoCards } from '../assets/data';
import { Trans, useTranslation } from 'next-i18next';

export default function Home() {
	const { t } = useTranslation(['home', 'common']);
	const highlights = [
		'https://x.scambi.org/archive_images/DSCF7431.jpg',
		'https://x.scambi.org/images/2021_drawing_cards.webp',
		'https://x.scambi.org/archive_images/DSCF7509.jpg',
		'https://x.scambi.org/archive_images/ballioccitani2.jpg',
		'https://x.scambi.org/archive_images/XYZ00217.jpg',
		'https://x.scambi.org/images/2021_dissolvenze.webp',
		'https://x.scambi.org/archive_images/DSCF7455.jpg',
		'https://images.tommi.space/plugins/download_by_size/action.php?id=22587&part=e&download&size=small',
		'https://x.scambi.org/archive_images/XYZ00236.jpg',
	];

	const eventCards = t('activities', { returnObjects: true });
	const family = t('family.text', { returnObjects: true });

	return (
		<section>
			<div className='w-10/12 mx-auto mt-48 mb-10 text-left flex flex-col justify-between xl:items-center  xl:flex-row'>
				<div>
					<h1 className='leading-none'>{t('header.heading')}</h1>
					<h3>{t('header.text')}</h3>
				</div>
				<p className='font-semibold'>
					<span className='text-2xl'>{t('header.month')} 25 - 28, 2022</span>{' '}
					<br />
					<span className='text-lg'>La Pigna, Sanremo, Italy</span>
				</p>
			</div>
			{/* <div className='relative pb-[50%] lg:pb-[40%] xl:pb-[30%]'>
					<iframe
						className="absolute top-0 left-0 w-full h-full"
						src="https://player.vimeo.com/video/658183199"
						title="Scambi Festival 2021 Rewind"
						allow="autoplay; fullscreen"
					/>
	</div>*/}
			<CountDown />
			<Flex classes='mt-16 justify-between mx-auto'>
				<div className=''>
					<h2 className='leading-tight lg:leading-normal mx-auto'>
						<Markdown content={t('paneurethic.heading')} />
					</h2>
					<div className='mx-auto my-5 w-4/5 md:mx-0'>
						<span className='font-semibold'>Pan - eur - etic:</span>{' '}
						{t('paneuretic.text')}
					</div>
				</div>
				<div className='w-4/5 iPhoneSE:w-3/4 iPhoneXR:w-3/5 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/4'>
					<Image
						src='https://x.scambi.org/illustrations/tabletalk.webp'
						alt='Illustration of 3 people sitting around a table talking'
						width={808}
						height={800}
					/>
				</div>
			</Flex>

			<Flex
				classes='mt-10 mb-32 mx-7 py-0 justify-between text-center sm:mx-16 md:mx-auto md:mt-20 md:text-left md:space-x-reverse md:space-x-20 lg:space-x-reverse lg:space-x-28 2xl:mt-10 2xl:w-9/12'
				reverse={true}>
				<div className='space-y-3 sm:space-y-6 md:w-full'>
					<h2 className='leading-tight font-medium text-[3.5rem] iPhoneSE:text-[64px]'>
						{t('edition.heading')}
					</h2>
					<Trans i18nKey={t('edition.text')} />
					<p>
						Not sure where to start? Check out our{' '}
						<Link href='/faq'>
							<a className='font-medium text-primary'>
								Frequently Asked Questions {'>'}
							</a>
						</Link>
					</p>
					<Button classes='btn-primary'>View the 2022 Program</Button>
				</div>
				<div className='w-full iPhoneSE:w-3/5 md:w-3/4 lg:w-3/5 xl:w-1/3'>
					<Image
						src='https://x.scambi.org/illustrations/program.webp'
						alt='Illustration of woman with curly hair in yellow sleeveless top, brownish bottoms, and sandals reading a program while resting on a bundle of blue roots'
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
						<h4 className='font-["Poppins"] font-medium'>{event.title}</h4>
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
				<h2 className='mb-10 font-medium leading-tight'>
					Scambi 2021 Highlights
				</h2>
				<Carousel slides={highlights} />
			</div>

			<div className='my-24 lg:my-40 space-y-20 lg:space-y-32'>
				<h2 className='text-center leading-tight font-medium mx-3 sm:w-4/5 sm:mx-auto'>
					{t('testimonials.title')}
				</h2>
				<Testimonials />
			</div>

			<Flex classes='mx-auto my-10 space-y-4 text-center md:flex-col lg:flex-row lg:space-x-10 lg:text-left'>
				<div className='mx-4 space-y-7 lg:w-3/5'>
					<h2 className='leading-tight lg:leading-normal font-medium'>
						{t('family.heading')}
					</h2>
					{family &&
						family.map((el, index) => <Markdown key={index} content={el} />)}
					<Link href='/contact'>
						<Button classes='btn-primary'>{t('family.button')}</Button>
					</Link>
				</div>
				<div className='w-3/4 sm:w-3/5 lg:w-1/2'>
					<Image
						src='https://x.scambi.org/images/staff.webp'
						alt='Five volunteers pose for group photo outside during the festival'
						height={492}
						width={645}
						className='rounded-2xl'
					/>
				</div>
			</Flex>

			<div className='text-center px-7 py-10 font-normal bg-white sm:px-14 xl:my-36'>
				<div className='text-2xl sm:leading-relaxed sm:text-3xl lg:leading-loose lg:text-4xl xl:text-5xl xl:leading-loose'>
					<Markdown content={t('purpose')} />
				</div>
			</div>

			<Manifesto />

			<div className='bg-white flex justify-center py-10'>
				<Subscribe />
			</div>

			<Flex
				classes='my-1 mx-4 space-y-10 sm:mx-10 md:mx-auto md:my-20 lg:space-x-reverse lg:space-x-10 xl:space-x-reverse xl:space-x-40'
				reverse={true}>
				<div className='w-full flex flex-col text-center space-y-8 md:text-left'>
					<h2 className='leading-tight lg:leading-normal font-medium'>
						{t('relations.heading', { ns: 'common' })}
					</h2>
					<Markdown content={t('relations.text', { ns: 'common' })} />
					<div className='flex flex-col justify-center items-center space-y-5 sm:flex-row sm:space-x-7 sm:space-y-0 md:justify-start'>
						<Link href='/contact'>
							<Button classes='btn-primary'>
								{t('relations.partner-button', { ns: 'common' })}
							</Button>
						</Link>
						<Button classes='btn-primary-light'>
							{t('relations.meet-button', { ns: 'common' })}
						</Button>
					</div>
				</div>
				<div className='px-3 w-full iPhoneXR:w-5/6 sm:w-4/5 md:pl-0 md:pr-10'>
					<Image
						src='https://x.scambi.org/images/fun.webp'
						alt='Illustration of three individuals holding hands, moving in a circle'
						layout='responsive'
						width={900}
						height={600}
						className='rounded-2xl'
					/>
				</div>
			</Flex>

			<div className='mx-7 my-20 sm:mx-10 xl:mx-20'>
				<h2 className='leading-tight font-medium text-center sm:text-left py-5'>
					Explore Scambi Festival
				</h2>
				<Map />
				<Button
					classes='font-[500] bg-white mt-6 px-9 py-2'
					onClick={() =>
						window.open(
							'//umap.openstreetmap.fr/en/map/scambi-2022_792002',
							'_self'
						)
					}>
					See full screen
				</Button>
			</div>
		</section>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common', 'home'])),
		},
	};
}
