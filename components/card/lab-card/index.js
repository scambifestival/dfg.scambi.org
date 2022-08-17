import Card from '..';
import Link from 'next/link';
import { ArrowRight } from '../../icons/arrow';

export default function LabCard({ imgSrc, link, title, description, lang }) {
	return (
		<Card classes='bg-white py-8 px-5 mb-5 h-fit iPhoneSE:px-8 md:max-w-[47%] lg:px-8 lg:max-w-full xl:max-w-[47%]'>
			<div className='flex flex-col justify-center w-full text-center items-center sm:w-fit lg:flex-row lg:text-left'>
				<div className='space-y-5 break-normal lg:w-2/3 lg:pr-3 xl:pr-7'>
					<h2 className='font-semibold text-3xl iPhoneSE:text-4xl'>{title}</h2>
					<p className=''>{description}</p>

					<Link href={`/labs/${link}`}>
						<a className='text-primary lg:items-center lg:space-x-2 flex'>
							Read more &nbsp;
							<ArrowRight />
						</a>
					</Link>
				</div>
			</div>
		</Card>
	);
}
