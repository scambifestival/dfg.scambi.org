/* eslint-disable react/no-children-prop */
import { getAllPosts, getAPost, getDate } from '../../lib/blog';
import Markdown from '../../components/markdown';
import matter from 'gray-matter';

export default function Post({ data, content }) {
	return (
		<section className='mx-auto p-5 lg:p-16'>
			<h1>{data.title}</h1>
			<h3>{data.author}</h3>
			<p className='mb-10'>{data.date}</p>
			<Markdown content={content} />
		</section>
	);
}

export async function getStaticPaths({ locales }) {
	const posts = getAllPosts();
	const paths = posts
		.map((post) =>
			locales.map((locale) => ({
				params: {
					id: `${post.replace('.md', '')}`,
				},
				locale,
			}))
		)
		.flat();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const file = getAPost(params.id);
	let data = null;
	let content = null;
	if (file) {
		const parse = matter(file);
		data = parse.data;
		data.date = getDate(new Date(data.date));
		content = parse.content;
	}
	return {
		props: {
			data,
			content,
		},
	};
}
