import Image from 'next/image';
import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';

export default function Lab() {
	return (
		<section className='bg-white'>
			<div className='w-full'>
				<Image src='https://picsum.photos/1000/500' layout='fill' alt='' />
			</div>

			<Flex classes='pt-[700px] mx-auto text-left justify-between'>
				<div className='lg:w-1/2'>
					<h1 className='mb-10'>Lorem Ipsum</h1>
					<p className='font-semibold mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in
						mollis nunc sed. Et molestie ac feugiat sed lectus.{' '}
					</p>
					<p>
						Libero volutpat sed cras ornare. Nulla facilisi nullam vehicula
						ipsum a arcu cursus vitae. Magna fringilla urna porttitor rhoncus
						dolor purus non enim. Porta nibh venenatis cras sed felis eget
						velit. Felis bibendum ut tristique et. Integer malesuada nunc vel
						risus commodo. Amet risus nullam eget felis eget nunc. Eget sit amet
						tellus cras. Proin libero nunc consequat interdum varius sit amet
						mattis vulputate. Sed tempus urna et pharetra pharetra massa. Eu mi
						bibendum neque egestas congue quisque egestas diam in. Pharetra sit
						amet aliquam id diam maecenas ultricies mi. Egestas erat imperdiet
						sed euismod nisi porta lorem mollis aliquam. Aenean euismod
						elementum nisi quis eleifend quam adipiscing vitae proin. Eu
						tincidunt tortor aliquam nulla facilisi. Vitae purus faucibus ornare
						suspendisse sed nisi lacus sed. Eu turpis egestas pretium aenean
						pharetra magna. Blandit aliquam etiam erat velit scelerisque in
						dictum non. Proin fermentum leo vel orci porta non. Massa vitae
						tortor condimentum lacinia quis vel eros donec.
					</p>
				</div>

				<Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/>
			</Flex>
			<Flex classes='mt-10 mx-auto justify-between bg-white'>
				<div className='text-left lg:w-1/2'>
					<h2 className=''>Meet the Lab Host</h2>
					<p className='font-semibold mt-3 mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in
						mollis nunc sed. Et molestie ac feugiat sed lectus.{' '}
					</p>
					<p>
						Libero volutpat sed cras ornare. Nulla facilisi nullam vehicula
						ipsum a arcu cursus vitae. Magna fringilla urna porttitor rhoncus
						dolor purus non enim. Porta nibh venenatis cras sed felis eget
						velit. Felis bibendum ut tristique et. Integer malesuada nunc vel
						risus commodo. Amet risus nullam eget felis eget nunc. Eget sit amet
						tellus cras. Proin libero nunc consequat interdum varius sit amet
						mattis vulputate.{' '}
					</p>
				</div>
				<Image
					src='https://picsum.photos/400'
					alt=''
					width={387}
					height={427}
				/>
			</Flex>
			<div id='similar-lab' className='px-2 lg:px-10 py-28 mt-10'>
				<h3 className='mb-10 text-left'>Similar Labs</h3>
				<div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5 xl:gap-x-5'>
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
		</section>
	);
}
