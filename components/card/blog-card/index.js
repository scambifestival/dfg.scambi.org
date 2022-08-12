import Card from '..';
import Image from 'next/image';

export default function BlogCard({ blog }) {
	return (
		<Card classes='bg-white w-96 m-12'>
			<Image
				src={blog.image}
				alt=''
				layout='fill'
				className='rounded-t-2xl w-full h-56'
			/>

			<div className='flex justify-between mt-6 pb-6 px-6'>
				<p>
					By <span>{blog.author}</span>
				</p>
				<p>{blog.date}</p>
			</div>

			<div className='text-left px-6 w-full'>
				<h4 className='pb-4'>{blog.title}</h4>
				<div className='mb-2'>
					{blog.categories.map((el) => (
						<p key={el} className='bg-yellow-300 w-fit px-2 py-1 rounded-md'>
							{el}
						</p>
					))}
				</div>
				<div>
					{blog.tags.map((el) => (
						<p key={el}>#{el}</p>
					))}
				</div>
			</div>
		</Card>
	);
}
