/* eslint-disable react/no-children-prop */
import { getAllPosts, getAPost, getDate } from "../../lib/blog";
import Markdown from "../../components/markdown";
import matter from "gray-matter";
import BlogCard from "../../components/card/blog-card";
import Subscribe from "../../components/subscribe";

export default function Post({ data, content, posts }) {
	return (
		<div>
			<div className="bg-purple-900 text-center w-screen flex z-0 GalaxyFold:-mt-60 GalaxyFold:h-96 SurfaceDuo:-mt-48">
				<div className="text-center m-auto text-white z-1 font-bold SurfaceDuo:mt-52 w-fit GalaxyFold:mt-60">
					<h3 className="SurfaceDuo:text-6xl">{data.title}</h3>
				</div>
			</div>

			<div className="bg-white -mb-12 pb-36">
				<div className="SurfaceDuo:w-3/5 items-center m-auto SurfaceDuo:pt-36 GalaxyFold:w-60 GalaxyFold:pt-12">
					<Markdown content={content} />
					<h4 className="mt-12 text-right">{data.author}</h4>
					<p className="mb-10 text-right">{getDate(new Date(data.date))}</p>
				</div>
				<div className="flex flex-wrap mx-auto justify-center SurfaceDuo:mt-12 GalaxyFold:mt-32">
					{posts?.map(({ frontmatter, path }) => (
						<BlogCard key={frontmatter.title} post={frontmatter} path={path} />
					))}
				</div>
				{posts?.length > 1 && (
					<div>
						<h3 className="text-center">Recent Posts</h3>
					</div>
				)}
				<div className="bg-white flex justify-center py-10">
					<Subscribe />
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths({ locales }) {
	const posts = getAllPosts();
	const paths = posts
		.map((post) =>
			locales.map((locale) => ({
				params: {
					id: `${post.replace(".md", "")}`
				},
				locale
			}))
		)
		.flat();

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	let postData = null;
	let content = null;
	const file = getAPost(params.id);
	if (file) {
		const parse = matter(file);
		postData = parse.data;
		console.log(postData.date);
		postData.date = new Date(postData.date).toLocaleString();
		console.log("parsed date", postData.date);
		content = parse.content;
	}

	const files = getAllPosts();
	let posts = files
		.map((post) => {
			const readFile = getAPost(post);
			let data = null;
			if (readFile) {
				const parse = matter(readFile);
				data = parse.data;
				data.date = new Date(data.date).toLocaleDateString();
			}
			post = post.replace(".md", "");
			return {
				path: post,
				frontmatter: data
			};
		})
		.filter(
			({ frontmatter }) =>
				frontmatter.author === postData.author &&
				frontmatter.title !== postData.title
		);
	return {
		props: {
			data: postData,
			content,
			posts: posts
		}
	};
}
