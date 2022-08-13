import Card from '..';
import Link from 'next/link';
import { ArrowRight } from '../../icons/arrow';

export default function LabCard({ imgSrc, id, title, description, lang }) {
	return (
		<Card classes='bg-white py-8 px-5 mb-5 h-fit iPhoneSE:px-8 md:max-w-[47%] lg:px-8 lg:max-w-full xl:max-w-[47%]'>
			<div className='flex flex-col justify-center w-full text-center items-center sm:w-fit lg:flex-row lg:text-left'>
				<div className='mb-5 mx-auto w-full min-w-0 iPhoneXR:w-2/3 sm:w-1/2 lg:order-last lg:mb-0 lg:w-1/3'>
					<svg
						viewBox='0 0 282 258'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<pattern
								id='img'
								patternUnits='userSpaceOnUse'
								width='282'
								height='258'>
								<image
									href={`${imgSrc !== undefined
										? imgSrc
										: 'https://picsum.photos/282/258'
										}`}
									x='0'
									y='0'
									width='282'
									height='258'
								/>
							</pattern>
						</defs>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M170.442 11.7096C204.381 18.8402 242.989 19.868 264.504 46.3403C286.873 73.8645 283.241 110.797 278.205 144.303C272.884 179.703 265.768 217.594 235.669 238.188C204.579 259.459 160.798 264.066 124.08 249.752C91.019 236.863 83.1051 198.397 62.2472 170.58C40.1257 141.078 -1.99244 119.718 0.0732747 84.3713C2.21638 47.7003 37.1047 20.6977 71.8731 5.86908C102.524 -7.20361 136.807 4.64308 170.442 11.7096Z'
							fill='url(#img)'
						/>
					</svg>
				</div>
				<div className='space-y-5 break-normal lg:w-2/3 lg:pr-3 xl:pr-7'>
					<h2 className='font-semibold text-3xl iPhoneSE:text-4xl'>
						{title}
					</h2>
					<p className=''>{description}</p>
					<div className=''>
						{lang.map(({ id, value }) => (
							<p key={id} className='rounded-full p-2 bg-primary-yellow'>
								{value}
							</p>
						))}
					</div>
					<Link href={`/labs/${id}`}>
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
