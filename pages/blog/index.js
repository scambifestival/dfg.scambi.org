import Subscribe from '../../components/subscribe';
import React, { useState } from 'react';
import Button from '../../components/button';
import BlogCard from '../../components/card/blog-card';
import { getAPost, getAllPosts, sortByDate } from '../../lib/blog';
import matter from 'gray-matter';
import Image from 'next/image';

export default function Blog({ posts }) {
	const [openedTab, setOpenedTab] = useState(1);

	return (
		<section className='bg-white -mb-12'>
			<div className='relative w-screen -mt-48'>
				<div className='w-full h-96 flex justify-center'>
					<h2 className='z-20 text-white text-center mt-36 font-bold md:w-1/3 sm:w-1/2 SurfaceDuo:w-1/3 sm:mt-44'>
						Blog
					</h2>
				</div>

				<Image
					src='/illustrations/workshop-explanation.png'
					alt=''
					layout='fill'
					className='object-cover w-full absolute top-0 left-0 GalaxyFold:h-72 sm:h-96'
				/>
			</div>
			<div className='pb-36'>
				{/*<div className=' flex justify-around sm:mt-24 mb-24 h-12'>
					<ul className='flex flex-wrap text-center justify-center'>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(1);
							}}
							className={
								'mr-2  border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-3 iPhoneSE:mr-4 iPhoneSE:ml-4 ' +
								(openedTab === 1 ? 'border-purple-800 border-b-4' : '')
							}>
							<p className={openedTab === 1 ? 'font-bold' : ''}>All Posts</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(2);
							}}
							className={
								'mr-2  border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-2 iPhoneSE:mr-4 iPhoneSE:ml-4 ' +
								(openedTab === 2 ? 'border-purple-800 border-b-4' : '')
							}>
							<p className={openedTab === 2 ? 'font-bold' : ''}>
								Trade in the room
							</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(3);
							}}
							className={
								'mr-2  border-b-2 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-2 iPhoneSE:mr-4 iPhoneSE:ml-4 ' +
								(openedTab === 3 ? 'border-purple-800 border-b-4' : '')
							}>
							<p className={openedTab === 3 ? 'font-bold' : ''}>Postcards</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(4);
							}}
							className={
								'mr-2  border-b-2 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-2 iPhoneSE:mr-4 iPhoneSE:ml-4 ' +
								(openedTab === 4 ? 'border-purple-800 border-b-4' : '')
							}>
							<p className={openedTab === 4 ? 'font-bold' : ''}>Category 3</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(5);
							}}
							className={
								'mr-2  border-b-2 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-2 iPhoneSE:mr-4 iPhoneSE:ml-4 ' +
								(openedTab === 5 ? 'border-purple-800 border-b-4' : '')
							}>
							<p className={openedTab === 5 ? 'font-bold' : ''}>
								Uncategorized
							</p>
						</li>
					</ul>
						</div>*/}
				<div>
					<div className='flex flex-wrap mx-auto justify-center'>
						{posts.map(({ frontmatter, path }) => (
							<BlogCard
								key={frontmatter.title}
								post={frontmatter}
								path={path}
							/>
						))}
					</div>
					<div className='flex justify-center'>
						<Button classes='btn-primary SurfaceDuo:mr-0 iPhoneSE:px-12 iPhoneSE:h-auto GalaxyFold:mt-12'>
							<a href=''>Load more</a>
						</Button>
					</div>
				</div>
				<div className='bg-white flex justify-center py-10'>
					<Subscribe />
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const files = getAllPosts();
	let posts = files.map((post) => {
		const readFile = getAPost(post);
		let data = null;
		if (readFile) {
			const parse = matter(readFile);
			data = parse.data;
			data.date = new Date(data.date).toLocaleDateString();
		}
		post = post.replace('.md', '');

		return {
			path: post,
			frontmatter: data,
		};
	});

	posts.sort(sortByDate);

	return {
		props: {
			posts: posts,
		},
	};
}
