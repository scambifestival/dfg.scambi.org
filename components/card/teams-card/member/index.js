import Card from '../..';
import Image from 'next/image';

export default function MemberCard({ imgSrc, name, role, desc }) {
	return (
		<Card classes='bg-white text-center space-y-3 px-5 py-10 md:px-10'>
			<Image
				src={imgSrc}
				alt={name}
				width={200}
				height={200}
				className='rounded-full'
			/>
			<h3>{name}</h3>
			<p className='uppercase'>{role}</p>
			{/*eslint-disable-next-line react/no-children-prop*/}
			<p className='text-[15px] sm:text-[16px]'>{desc}</p>
		</Card>
	);
}
