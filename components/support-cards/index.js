import Button from '../button';
import Image from 'next/image';
import Card from '../card';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function SupportUs() {
	const { t } = useTranslation('common');
	const cards = t('support', { returnObjects: true });
	return (
		<div className='my-40'>
			<h2 className='text-center mb-10'>{t('support-title')}</h2>
			<div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 px-5 iPhoneXR:px-10 md:px-20 lg:px-16'>
				<Card classes='bg-[#EEBDAD] text-center py-10 space-y-5'>
					<h4>{cards[0].name}</h4>
					<p>{cards[0].text}</p>
					<div>
						<Image
							src='https://x.scambi.org/illustrations/hand.webp'
							width={32}
							height={88}
							alt=''
						/>
					</div>
					<Link href='/contact' passHref>
						<span>
							<Button classes='bg-white'>{t('volunteer')}</Button>
						</span>
					</Link>
				</Card>
				<Card classes='bg-[#EDBBFF] text-center px-5 py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0'>
					<h4>{cards[1].name}</h4>
					<p>{cards[1].text}</p>
					<div>
						<Image
							src='https://x.scambi.org/illustrations/hands.webp'
							width={64}
							height={80}
							alt=''
						/>
					</div>
					<Button
						classes='bg-white'
						onClick={() =>
							window.open('https://pretix.eu/scambi/2022/', '_blank')
						}>
						{t('tickets')}
					</Button>
				</Card>
				<Card classes='bg-[#AAB4D6] text-center px-5 py-10 space-y-5 GalaxyFold:mt-10 lg:mt-0'>
					<h4>{cards[2].name}</h4>
					<p>{cards[2].text}</p>
					<div>
						<Image
							src='https://x.scambi.org/illustrations/heartish.webp'
							width={42}
							height={80}
							alt=''
						/>
					</div>
					<Button
						classes='bg-white'
						onClick={() =>
							window.open('https://liberapay.com/scambi', '_blank')
						}>
						{t('donate')}
					</Button>
				</Card>
			</div>
		</div>
	);
}
