import Card from '../..';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function MemberCard({ imgSrc, name, role, desc }) {
	return (
		<Card classes='bg-white text-center p-5'>
			<Image src={imgSrc} alt={teamName} width={200} height={200} />
			<h3>{name}</h3>
			<p className='font-semibold'>{role}</p>
			{/*eslint-disable-next-line react/no-children-prop*/}
			<ReactMarkdown children={desc} />
		</Card>
	);
}
