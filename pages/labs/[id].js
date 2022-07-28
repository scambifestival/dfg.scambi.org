import Image from 'next/image';
import Flex from '../../components/flex';
import LabCard from '../../components/card/lab-card';
import { useAppContext } from '../../context';
import { useEffect } from 'react';

export default function Lab() {
	const { labId } = useAppContext();
	const [data, setData] = useState({});

	useEffect(() => {
		fetch(
			`https://api.baserow.io/api/database/rows/table/58806/${labId}/?user_field_names=true&filter_field_341210_equal=lab`
		)
			.then((res) => res.json())
			.then((lab) => setData(lab));
	}, []);

	return (
		<section className='bg-white'>
			<div className='w-full'>
				<Image src='https://picsum.photos/1000/500' layout='fill' alt='' />
			</div>

			<Flex classes='pt-[700px] mx-auto text-left justify-between'>
				<div className='lg:w-1/2'>
					<h1 className='mb-10'>{data.title}</h1>
					<p className='font-semibold mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in
						mollis nunc sed. Et molestie ac feugiat sed lectus.{' '}
					</p>
					<p>{data.description}</p>
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
					{data.host.map((el, index) => (
						<p key={index} className='font-semibold mt-3 mb-5'>
							{el}
						</p>
					))}

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

export async function getStaticPaths() {
	const response = await fetch(
		'https://api.baserow.io/api/database/rows/table/58806/?user_field_names=true&filter_field_341210_equal=lab',
		{
			method: 'GET',
			headers: { Authorization: 'Token ' + process.env.BASEROW },
		}
	);
	const data = await response.json();
	const labs = data.results;

	const paths = labs.map((lab) => {
		return {
			params: {
				id: lab.title,
				locale: 'en',
			},
			params: {
				id: lab.title,
				locale: 'it',
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}
