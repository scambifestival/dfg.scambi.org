import Image from 'next/image';

import Card from '../card';

const testimonials = [
	{
		name: 'Anna',
		quote:
			'To me, Scambi is where I can be free and be hopeful for the future; in these confusing and uncertain times we all need to go back to focusing on what living together really means.',
		image: '/200',
	},
	{
		name: 'Luce',
		quote:
			'I decided to join Scambi because I saw what last year the team was able to create thanks to everybodys dedication and commitment, and I would d love to help to recreate the same magic for the next edition of the festival.',
		image: '/200',
	},
	{
		name: 'Luisa',
		quote:
			'I like Scambi because it brought together young people from all over Italy with the goal of inventing something new, of combining music, dancing and a lot of curiosity.',
		image: '/200',
	},
];

export default function Testimonials() {
	return (
		<div className='flex flex-wrap justify-center mb-5 lg:mt-0 xl:mt-16'>
			{testimonials.map((testimonial, index) => (
				<Card
					classes='relative max-w-[80%] p-10 my-8 bg-white text-left lg:max-w-[27%] lg:mx-5 lg:my-20 xl:max-w-[20%] xl:m-16'
					key={`testimonial-${index}`}>
					<Image
						alt=''
						src={testimonial.image}
						layout='fill'
						className='absolute max-w-[12rem] -top-12 -right-14 lg:-top-14 lg:-right-10 xl:-top-24 xl:-right-20'
					/>
					<div className='pb-8 text-lg font-semibold'>{testimonial.name}</div>
					<p>{`"${testimonial.quote}"`}</p>
				</Card>
			))}
		</div>
	);
}