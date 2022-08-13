import Card from '..';
import Image from 'next/image';
import { getDate } from '../../../lib/blogs';

export default function BlogCard({ blog }) {
	return (
		<Card classes='bg-white w-96 m-12 drop-shadow-2xl'>
			<Image
				src={blog.image}
				alt=''
				height={316}
				width={420}
				className='rounded-t-2xl w-full h-56'
			/>

			<div className='flex justify-between mt-6 pb-6 px-6'>
				<p>
					By <span>{blog.author}</span>
				</p>
				<p>{getDate(new Date(blog.date))}</p>
			</div>

			<div className='text-left px-6 w-full'>
				<h4 className='pb-4'>{blog.title}</h4>
				<div className='mb-5 flex space-x-2'>
					{blog.categories.map((el) => (
						<p key={el} className='bg-yellow-300 w-fit px-2 py-1 rounded-md'>
							{el}
						</p>
					))}
				</div>
			</div>
		</Card>
	);
}
