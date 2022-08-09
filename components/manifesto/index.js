import { useTranslation } from 'next-i18next';
import Card from '../card';

export default function Manifesto() {
	const { t } = useTranslation('common');
	const manifestoCards = t('manifesto', { ns: 'common', returnObjects: true });

	return (
		<div className='my-20 mx-auto space-y-12'>
			<h2 className='leading-tight text-center font-medium'>Our Manifesto</h2>
			<div className='flex flex-wrap justify-center items-stretch mx-5 space-y-6 sm:mx-16 md:mx-5 md:space-y-0'>
				{manifestoCards &&
					manifestoCards.map((card, index) => (
						<Card
							classes={`p-5 w-full h-fit md:max-w-[40%] md:mr-7 md:mb-24 xl:w-1/5 ${
								index % 2 === 0 ? 'yellow-pink-gradient' : 'bg-white'
							}`}
							key={`manifesto-${index}`}>
							<h3 className='leading-loose text-center font-["Poppins"] font-semibold text-2xl'>
								{card.name}
							</h3>
							<p className='leading-relaxed text-center sm:text-left'>
								{card.text}
							</p>
						</Card>
					))}
			</div>
		</div>
	);
}
