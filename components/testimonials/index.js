import Image from 'next/image';

import Card from '../card';

const testimonials = [
	{
		name: 'Anna',
		quote:
			'To me, Scambi is where I can be free and be hopeful for the future; in these confusing and uncertain times we all need to go back to focusing on what living together really means.',
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Luce',
		quote:
			'I decided to join Scambi because I saw what last year the team was able to create thanks to everybodys dedication and commitment, and I would d love to help to recreate the same magic for the next edition of the festival.',
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Luisa',
		quote:
			'I like Scambi because it brought together young people from all over Italy with the goal of inventing something new, of combining music, dancing and a lot of curiosity.',
		image: 'https://picsum.photos/200',
	},
];

export default function Testimonials() {
	return (
		<div className='flex flex-wrap justify-around items-stretch space-y-24 lg:space-y-0 xl:justify-center xl:space-x-40'>
			{testimonials.map((testimonial, index) => (
				<Card
					classes={`relative max-w-[80%] p-10 bg-white text-left lg:max-w-[25%] xl:max-w-[20%]`}
					key={`testimonial-${index}`}>
					<div className='absolute -top-10 -right-[10%] z-10 w-24 sm:w-32 sm:-top-14 lg:-top-16 lg:-right-[10%]'>
						<Image
							alt=''
							src={testimonial.image}
							width={152}
							height={152}
							className='rounded-full'
						/>
					</div>

					<div className='pb-8 text-lg font-medium'>{testimonial.name}</div>
					<p>{`"${testimonial.quote}"`}</p>
				</Card>
			))}
		</div>
	);
}
