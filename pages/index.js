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
import { highlights } from '../assets/highlights';

/* A different way to import image
import TableTalk from '../public/illustrations/table-talk.png';
import Program from '../public/illustrations/program.png'; */
//import Sponsors from '../public/illustrations/sponsors.png';

//import { eventCards, manifestoCards } from '../assets/data';
import { Trans, useTranslation } from 'next-i18next';

export default function Home() {
	const { t } = useTranslation(['home', 'common']);

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
						className='absolute top-0 left-0 w-full h-full'
						src='https://player.vimeo.com/video/658183199'
						title='Scambi Festival 2021 Rewind'
						allow='autoplay; fullscreen'
					/>
				</div>*/}
			<CountDown />
			<Flex classes='mt-16 justify-between mx-auto'>
				<div className=''>
					<h2 className='leading-tight lg:leading-normal mx-auto'>
						{t('paneuretic.heading')}
					</h2>
					<p className='mx-auto my-5 w-4/5 md:mx-0'>
						<span className='font-semibold'>Pan - eur - etic:</span>{' '}
						{t('paneuretic.text')}
					</p>
				</div>
				<div className='w-full iPhoneSE:w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/5 xl:w-2/5'>
					<Image
						src='/illustrations/table-talk.png'
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
				<div className='w-full iPhoneSE:w-1/2 md:w-3/4 lg:w-3/5 xl:w-2/5'>
					<Image
						src='/illustrations/program.png'
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
					{family && family.map((el, index) => <p key={index}>{el}</p>)}
					<Link href='/contact'>
						<Button classes='btn-primary'>{t('button')}</Button>
					</Link>
				</div>
				<div className='w-3/4 sm:w-3/5 lg:w-1/2'>
					<Image
						src={highlights[4]}
						alt='Five volunteers pose for group photo outside during the festival'
						layout='responsive'
						width={475}
						objectFit='cover'
						objectPosition='right'
						className='rounded-2xl'
					/>
				</div>
			</Flex>

			<div className='text-center px-7 py-10 font-normal bg-white sm:px-14 xl:my-36'>
				<div className='text-2xl sm:leading-relaxed sm:text-3xl lg:leading-loose lg:text-4xl xl:text-5xl xl:leading-loose'>
					<Trans i18nKey={t('purpose')} />
				</div>
			</div>

			<Manifesto />

			<div className='bg-white flex justify-center py-10'>
				<Subscribe />
			</div>

			<Flex
				classes='my-1 mx-4 space-y-10 sm:mx-10 md:my-20 lg:mx-auto md:space-x-reverse md:space-x-16 xl:space-x-reverse xl:space-x-40'
				reverse={true}>
				<div className='w-full flex flex-col text-center space-y-8 md:text-left'>
					<h2 className='leading-tight lg:leading-normal font-medium'>
						{t('relations.heading', { ns: 'common' })}
					</h2>
					<p>{t('relations.text', { ns: 'common' })}</p>
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
				<div className='w-3/5 sm:w-1/2'>
					<Image
						src='/illustrations/sponsors.png'
						alt='Illustration of three individuals holding hands, moving in a circle'
						layout='responsive'
						width={654}
						height={689}
					/>
				</div>
			</Flex>

			<div className='m-7 sm:m-10 xl:mx-20'>
				<h2 className='leading-tight font-medium text-center sm:text-left py-5'>
					Explore Scambi Festival
				</h2>
				<Map />
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
