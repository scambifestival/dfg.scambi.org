import Card from '..';
import Image from 'next/image';
import Link from 'next/link';
import { getDate } from '../../../lib/blog';

export default function BlogCard({ post, path }) {
	return (
		<Link href={`blog/${path}`} locale={'lang' in post ? post.lang : ''}>
			<a>
				<Card classes='bg-white w-96 m-12 drop-shadow-2xl'>
					<Image
						src={post.image}
						alt=''
						height={316}
						width={420}
						className='rounded-t-2xl w-full h-56'
					/>

					<div className='flex justify-between mt-6 pb-6 px-6'>
						<p>
							By <span>{post.author}</span>
						</p>
						<p>{getDate(new Date(post.date))}</p>
					</div>

					<div className='text-left px-6 w-full'>
						<h4 className='pb-4'>{post.title}</h4>
						<div className='pb-5 flex space-x-2'>
							{post.categories.map((el) => (
								<p
									key={el}
									className='bg-yellow-300 w-fit px-2 py-1 rounded-md'>
									{el}
								</p>
							))}
						</div>
					</div>
				</Card>
			</a>
		</Link>
	);
}
