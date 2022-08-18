import Card from '..';
import Link from 'next/link';
import { ArrowRight } from '../../icons/arrow';

export default function LabCard({ title, location }) {
	return (
		<Card classes='bg-white flex items-center py-8 px-5 mx-auto h-full lg:max-w-full'>
			<div className='flex flex-col justify-center items-center w-full text-center lg:text-left'>
				<h2 className='font-semibold text-3xl iPhoneSE:text-4xl'>{title}</h2>
				<p>{location ? location.value : 'Undecided'}</p>
			</div>
		</Card>
	);
}
