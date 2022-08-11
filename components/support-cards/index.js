import Button from '../button';
import Image from 'next/image';
import Card from '../card';
import { useTranslation } from 'next-i18next';

export default function SupportUs() {
	const { t } = useTranslation('common');
	const cards = t('support', { returnObjects: true });
	return (
		<div className='my-40'>
			<h2 className='text-center mb-10'>{t('support-title')}</h2>
			<div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 px-10'>
				<Card classes='bg-[#EEBDAD] text-center py-10 space-y-5'>
					<h4>{cards[0].name}</h4>
					<p>{cards[0].text}</p>
					<div>
						<Image
							src='/illustrations/support1.png'
							width={32}
							height={88}
							alt=''
						/>
					</div>
					<Button>{t('volunteer')}</Button>
				</Card>
				<Card classes='bg-[#EDBBFF] text-center py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0'>
					<h4>{cards[1].name}</h4>
					<p>{cards[1].text}</p>
					<div>
						<Image
							src='/illustrations/support2.png'
							width={32}
							height={88}
							alt=''
						/>
					</div>
					<Button>{t('tickets')}</Button>
				</Card>
				<Card classes='bg-[#AAB4D6] text-center py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0'>
					<h4>{cards[2].name}</h4>
					<p>{cards[2].text}</p>
					<div>
						<Image
							src='/illustrations/support3.png'
							width={32}
							height={88}
							alt=''
						/>
					</div>
					<Button>{t('donate')}</Button>
				</Card>
			</div>
		</div>
	);
}
