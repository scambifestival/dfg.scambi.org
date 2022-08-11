import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Card from '../card';
import Markdown from '../markdown';

export default function Testimonials() {
	const { t } = useTranslation('home');
	const testimonials = t('testimonials.data', { returnObjects: true });

	return (
		<div className='flex flex-wrap justify-around items-stretch space-y-16 lg:space-y-0 xl:justify-center xl:space-x-40'>
			{testimonials &&
				testimonials.map((testimonial, index) => (
					<Card
						classes={`${
							index === 1 ? 'lg:top-24' : ''
						} relative max-w-[80%] p-10 bg-white text-left lg:max-w-[25%] xl:max-w-[20%]`}
						key={`testimonial-${index}`}>
						<div className='absolute -top-10 -right-[10%] z-10 w-24 sm:w-32 sm:-top-14 lg:-top-20 lg:-right-[20%]'>
							<Image
								alt=''
								src={testimonial.image}
								width={152}
								height={152}
								className='rounded-full'
							/>
						</div>

						<div className='pb-3 text-lg font-medium text-center'>
							<Markdown content={testimonial.name} />
						</div>
						<p>{`"${testimonial.quote}"`}</p>
					</Card>
				))}
		</div>
	);
}
