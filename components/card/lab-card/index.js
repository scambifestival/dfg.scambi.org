import Card from '..';
import Link from 'next/link';
import { ArrowRight } from '../../icons/arrow';

export default function LabCard({ title, location }) {
	return (
		<Card classes='bg-white py-8 px-5 mb-5 h-fit iPhoneSE:px-8 md:max-w-[47%] lg:px-8 lg:max-w-full xl:max-w-[47%]'>
			<div className='flex flex-col justify-center w-full text-center items-center sm:w-fit lg:text-left'>
				<h2 className='font-semibold text-3xl iPhoneSE:text-4xl'>{title}</h2>
				<p>{location ? location.value : 'Undecided'}</p>
			</div>
		</Card>
	);
}
