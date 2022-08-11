import { gallery } from '../../assets/gallery';
import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';

import Image from 'next/image';
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
			<Flex classes='items-center mx-auto'>
				<div className='text-left'>
					<h2 className='font-semibold mb-3'>Labs</h2>
					<p className='italic mb-10'>{t('header.heading')}</p>
					<Markdown className='lg:w-[600px] mb-5' content={t('header.desc')} />
					<Button classes='btn-primary'>
						{t('tickets', { ns: 'common' })}
					</Button>
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
					<h2 className='font-semibold mb-10'>{t('labs-def.heading')}</h2>
					<p>{t('labs-def.text')}</p>
				</div>
			</Flex>
			<div className='mt-20 w-full p-2 lg:px-16'>
				<div className='mb-10 text-center font-semibold'>
					<h2>{t('gallery')}</h2>
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
			<div className='mt-20 mx-auto p-2 lg:px-16 lg:pb-28'>
				<h2 className='font-semibold mb-10 text-center'>{t('upcoming')}</h2>
				<div className='flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-10'>
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

export async function getStaticProps({ locale }) {
	const labs = await getAllLabs();

	return {
		props: {
			labs: labs,
			...(await serverSideTranslations(locale, ['common', 'labs'])),
		},
	};
}
