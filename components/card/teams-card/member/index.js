import Card from '../..';
import Image from 'next/image';

export default function MemberCard({ imgSrc, name, role, desc }) {
	return (
		<Card classes='bg-white text-center p-5'>
			<Image src={imgSrc} alt={name} width={200} height={200} />
			<h3>{name}</h3>
			<p className='uppercase'>{role}</p>
			{/*eslint-disable-next-line react/no-children-prop*/}
			<p>{desc}</p>
		</Card>
	);
}
