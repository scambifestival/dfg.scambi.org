import Image from 'next/image';
import Flex from '../../components/flex';
import Button from '../../components/button';
import LabCard from '../../components/card/lab-card';
import Carousel from '../../components/carousel';
import SupportUs from '../../components/support-cards';
import { getPinoli } from '../../lib/pinoli';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Markdown from '../../components/markdown';
import Link from 'next/link';

export default function Pinoli({ pinoli }) {
	const { t } = useTranslation(['pinoli', 'common']);
	const pinoliImg = [
		'https://images.tommi.space/plugins/download_by_size/action.php?id=23324&part=e&download&size=small',
		'https://images.tommi.space/plugins/download_by_size/action.php?id=23669&part=e&download&size=small',
		'https://images.tommi.space/plugins/download_by_size/action.php?id=23645&part=e&download&size=small',
		'https://images.tommi.space/plugins/download_by_size/action.php?id=23241&part=e&download&size=small',
		'https://images.tommi.space/plugins/download_by_size/action.php?id=23256&part=e&download&size=small',
		'https://images.tommi.space/plugins/download_by_size/action.php?id=23322&part=e&download&size=small',
		'https://x.scambi.org/archive_images/IMG_8291.jpg',
		'https://x.scambi.org/archive_images/IMG_8300.jpg',
		'https://x.scambi.org/archive_images/IMG_8296.jpg',
	];

	return (
		<section>
			<Flex classes='py-20 mx-4 space-y-8 SurfaceDuo:mx-8 sm:mx-12 md:flex-col md:space-y-12 md:mx-auto lg:flex-row lg:space-y-0 lg:space-x-16 lg:mx-auto xl:space-x-56'>
				<div className='w-fit text-center lg:text-left'>
					<h1 className='font-semibold'>Pinoli</h1>
					<Markdown content={t('header.desc')} />
					<Button classes='btn-primary mt-5'>{t('header.button')}</Button>
				</div>
				<div className='w-4/5 SurfaceDuo:w-3/5 md:w-2/5 lg:w-3/5 xl:max-w-md'>
					<Image
						src='https://x.scambi.org/illustrations/pinoli.webp'
						alt='Two hand-drawn orange bowls full of seeds with a hand-drawn purplish acorn behind it'
						width={738}
						height={682}
					/>
				</div>
			</Flex>

			<div className='bg-white text-center py-10 px-4 lg:px-16'>
				<h2>
					<Markdown content={t('pinolo.heading')} />
				</h2>
				<Markdown content={t('pinolo.text')} />
				<div className='mt-10'>
					<Carousel slides={pinoliImg} />
				</div>
			</div>

			{/* Map */}
			{/*<div className='px-20 my-10'>
				<h2 className='pt-5'>Upcoming Pinolis</h2>
				<Map />
  </div>*/}

			<div className='mt-20 mx-auto p-2 lg:px-16 lg:pb-28'>
				<h2 className='font-semibold mb-10 text-center'>{t('upcoming')}</h2>
				<div className='flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-10'>
					{pinoli.map((pinolo) => {
						return (
							<Link key={pinolo.id} href={`/pinoli/${pinolo.id}`}>
								<a>
									<LabCard title={pinolo.title} location={pinolo.location[0]} />
								</a>
							</Link>
						);
					})}
				</div>
			</div>

			<SupportUs />
		</section>
	);
}

export async function getStaticProps({ locale }) {
	const pinoli = await getPinoli();

	return {
		props: {
			pinoli,
			...(await serverSideTranslations(locale, ['common', 'pinoli'])),
		},
	};
}
