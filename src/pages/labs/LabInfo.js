import { useParams } from 'react-router-dom';
import LabCard from './components/card/index';

function LabInfo() {
	let params = useParams();
	return (
		<div>
			<div className='bg-white'>
				<img
					src='https://picsum.photos/400/100'
					className='w-full min-h-[60vh] z-0'
					alt=''
				/>
				<div className='mt-10 mx-auto text-left p-10 lg:p-20 lg:w-3/4'>
					<h2 className='mb-10'>Lorem Ipsum {params.labId}</h2>
					<p className='font-semibold mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in
						mollis nunc sed. Et molestie ac feugiat sed lectus.{' '}
					</p>
					Libero volutpat sed cras ornare. Nulla facilisi nullam vehicula ipsum
					a arcu cursus vitae. Magna fringilla urna porttitor rhoncus dolor
					purus non enim. Porta nibh venenatis cras sed felis eget velit. Felis
					bibendum ut tristique et. Integer malesuada nunc vel risus commodo.
					Amet risus nullam eget felis eget nunc. Eget sit amet tellus cras.
					Proin libero nunc consequat interdum varius sit amet mattis vulputate.
					Sed tempus urna et pharetra pharetra massa. Eu mi bibendum neque
					egestas congue quisque egestas diam in. Pharetra sit amet aliquam id
					diam maecenas ultricies mi. Egestas erat imperdiet sed euismod nisi
					porta lorem mollis aliquam. Aenean euismod elementum nisi quis
					eleifend quam adipiscing vitae proin. Eu tincidunt tortor aliquam
					nulla facilisi. Vitae purus faucibus ornare suspendisse sed nisi lacus
					sed. Eu turpis egestas pretium aenean pharetra magna. Blandit aliquam
					etiam erat velit scelerisque in dictum non. Proin fermentum leo vel
					orci porta non. Massa vitae tortor condimentum lacinia quis vel eros
					donec.
				</div>
				<div className='mt-10 mx-auto p-10 lg:p-20 flex flex-col items-center lg:flex-row justify-between'>
					<div className='text-left w-auto lg:w-3/4 xl:w-3/4'>
						<h3 className=''>Meet the Lab Host</h3>
						<p className='font-semibold mt-3 mb-5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
							in mollis nunc sed. Et molestie ac feugiat sed lectus.{' '}
						</p>
						<p>
							Libero volutpat sed cras ornare. Nulla facilisi nullam vehicula
							ipsum a arcu cursus vitae. Magna fringilla urna porttitor rhoncus
							dolor purus non enim. Porta nibh venenatis cras sed felis eget
							velit. Felis bibendum ut tristique et. Integer malesuada nunc vel
							risus commodo. Amet risus nullam eget felis eget nunc. Eget sit
							amet tellus cras. Proin libero nunc consequat interdum varius sit
							amet mattis vulputate.{' '}
						</p>
					</div>
					<svg
						width='242'
						height='317'
						viewBox='0 0 242 317'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<pattern
								id='img'
								patternUnits='userSpaceOnUse'
								width='242'
								height='317'>
								<image
									href='https://picsum.photos/242/317'
									x='0'
									y='0'
									width='242'
									height='317'
								/>
							</pattern>
						</defs>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M226.959 24.4434C243.794 49.2094 235.86 97.0334 236.441 137.812C237.021 178.377 245.729 211.896 238.763 244.562C231.603 277.014 208.383 308.398 180.519 315.23C152.655 322.062 119.954 304.555 89.768 288.329C59.582 272.103 32.105 257.372 17.012 232.819C1.919 208.053 -0.983507 173.466 1.91899 137.385C4.62799 101.09 13.3355 63.5139 35.201 39.6019C57.0665 15.9034 92.2835 6.29595 130.596 2.02595C168.909 -2.03055 210.318 -0.322548 226.959 24.4434Z'
							fill='url(#img)'
						/>
					</svg>
				</div>
			</div>

			<div className='p-10 mt-10'>
				<h3 className='mb-10 text-left'>Similar Labs</h3>
				<div className='grid lg:grid-cols-2 lg:gap-x-5 xl:gap-x-5'>
					<LabCard
						title='Lorem Ipsum'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					/>
					<LabCard
						title='Lorem Ipsum'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					/>
				</div>
			</div>
		</div>
	);
}

export default LabInfo;
