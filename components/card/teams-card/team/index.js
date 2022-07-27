import Card from '../..';
import ArrowRight from '../../../icons/arrow/right';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function TeamCard({ imgSrc, teamName, duty, desc, path }) {
	return (
		<Card classes='bg-white text-center p-5'>
			<Image src={imgSrc} alt={teamName} width={200} height={200} />
			<h3>{teamName}</h3>
			<p className='font-semibold my-3'>{duty}</p>
			{/*eslint-disable-next-line react/no-children-prop*/}
			<ReactMarkdown children={desc} />
			<Link href='/teams/[id]' as={`/teams/${path}`}>
				<a className='text-primary flex justify-center items-center mt-3'>
					Meet the {teamName}{' '}
					<div className='ml-3'>
						<ArrowRight />
					</div>
				</a>
			</Link>
		</Card>
	);
}
