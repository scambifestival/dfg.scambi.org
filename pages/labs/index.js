import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';

import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../../components/carousel';
import { getAllLabs, getDescription } from '../../lib/labs';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
import Markdown from '../../components/markdown';
import Button from '../../components/button';

export default function Labs({ labs }) {
	const router = useRouter();
	const locale = router.locale;
	const { t } = useTranslation(['labs', 'common']);

	return (
		<section>
			<div className='w-full mx-auto flex flex-col md:flex-row flex-nowrap justify-around items-center px-5 space-y-5 md:px-10 md:space-y-0 md:space-x-9 lg:px-16 xl:max-w-[90%]'>
				<div className='text-center md:text-left md:max-w-[60%]'>
					<h2 className='font-semibold mb-3'>Labs</h2>
					<p className='italic mb-10'>{t('header.heading')}</p>
					<Markdown className='mb-5' content={t('header.desc')} />
					<Button classes='btn-primary'>
						{t('tickets', { ns: 'common' })}
					</Button>
				</div>
				<div className='w-full max-w-[475px] lg:max-w-[540px]'>
					<Image
						src='https://picsum.photos/640/412'
						width={640}
						height={412}
						// layout='responsive'
						alt=''
						className='rounded-xl'
					/>
				</div>
			</div>
			<div className='w-full mx-auto flex flex-col-reverse md:flex-row justify-center items-center my-12 px-5 space-y-reverse space-y-7 md:space-y-0 md:px-10 md:space-x-24 md:my-24'>
				<div className='w-full max-w-[350px] lg:max-w-[450px]'>
				<Image
					src='https://x.scambi.org/illustrations/tabletalk.webp'
					width={436}
					height={425}
					alt=''
				/>
				</div>
				<div className='w-full space-y-5 text-center md:text-left lg:max-w-[30%]'>
					<h2 className='leading-tight font-semibold'>{t('labs-def.heading')}</h2>
					<p className='w-full'>{t('labs-def.text')}</p>
				</div>
			</div>
			{/* <div className='mt-20 w-full p-2 lg:px-16'>
				<div className='mb-10 text-center font-semibold'>
					<h2>{t('gallery')}</h2>
				</div>
				<div>
					<Carousel slides={gallery} />
			</div>
			</div> */}
			{/*<Flex classes='mx-auto'>
				<h1>More Info Coming Soon!</h1>
				<Image
					src='/illustrations/rocket.png'
					alt=''
					width={382}
					height={500}
				/>
	</Flex>*/}
			<div className='mt-20 mx-auto p-2 lg:px-16 lg:pb-28'>
				<h2 className='font-semibold mb-10 text-center'>{t('upcoming')}</h2>
				<div className='flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-10'>
					{labs.map((lab) => {
						return (
							<Link key={lab.id} href={`/labs/${lab.id}`}>
								<a>
									<LabCard title={lab.title} location={lab.location[0]} />
								</a>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps({ locale }) {
	const labs = await getAllLabs();

	return {
		props: {
			labs: labs,
			...(await serverSideTranslations(locale, ['common', 'labs'])),
		},
	};
}
