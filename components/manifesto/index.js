import { useTranslation } from 'next-i18next';
import Card from '../card';
import Markdown from '../markdown';

export default function Manifesto() {
	const { t } = useTranslation('common');
	const manifestoCards = t('manifesto', { ns: 'common', returnObjects: true });

	return (
		<div className='my-20 mx-auto space-y-12'>
			<h2 className='leading-tight text-center font-medium text-[55px] lg:text-[64px]'>Our Manifesto</h2>
			<div className='flex flex-wrap justify-center items-stretch mx-5 space-y-6 sm:mx-16 md:mx-5 md:space-y-0'>
				{manifestoCards &&
					manifestoCards.map((card, index) => (
						<Card
							classes={`p-5 w-full h-fit md:max-w-[40%] md:mr-7 md:mb-24 xl:w-1/5 ${
								index % 2 === 0 ? 'yellow-pink-gradient' : 'bg-white'
							}`}
							key={`manifesto-${index}`}>
							<h3>
								<Markdown
									className='text-center font-["Poppins"] font-semibold text-2xl mb-3'
									content={card.name}
								/>
							</h3>

							<Markdown
								className='leading-relaxed text-[15px] sm:text-[16px] text-center sm:text-left'
								content={card.text}
							/>
						</Card>
					))}
			</div>
		</div>
	);
}
