import Card from '../../../../components/card';
import { Link } from 'react-router-dom';

export default function LabCard({ imgSrc, index, title, description }) {
	return (
		<Card key={index} classes='bg-white'>
			<div className='flex flex-col p-5 items-center lg:flex-row'>
				<div className='text-left'>
					<p className='text-2xl mb-5'>{title}</p>
					<div className='flex justify-center lg:hidden'>
						<svg
							width='282'
							height='258'
							viewBox='0 0 282 258'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<defs>
								<pattern
									id='img1'
									patternUnits='userSpaceOnUse'
									width='282'
									height='258'>
									<image
										href='https://picsum.photos/282/258'
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
								fill='url(#img1)'
							/>
						</svg>
					</div>

					<p className='lg:mt-0 my-5 lg:mb-10 w-[400px]'>{description}</p>
					<Link
						className='text-[#69088D] flex items-center'
						to={`/labs/${index}`}>
						Read more
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 ml-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							/>
						</svg>
					</Link>
				</div>
				<svg
					className='hidden lg:block'
					width='282'
					height='258'
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
								href='https://picsum.photos/282/258'
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
		</Card>
	);
}
