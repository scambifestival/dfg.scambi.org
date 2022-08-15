import Subscribe from "../../components/subscribe";
import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import BlogCard from "../../components/card/blog-card";
import { getAPost, getAllPosts, sortByDate } from "../../lib/blog";
import matter from "gray-matter";
import Image from "next/image";

export default function Blog({ posts, categories }) {
	const [filter, setFilter] = useState("");
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [postNumber, setPostNumber] = useState(6);
	function handleClick() {
		setPostNumber((prevPostNumber) => prevPostNumber + 5);
	}

	useEffect(() => {
		if (filter === "") {
			setFilteredPosts(posts);
		} else {
			setFilteredPosts(
				posts.filter((post) => post.frontmatter.categories.includes(filter))
			);
		}
	}, [filter]);
	return (
		<section className="bg-white -mb-12">
			<div className="relative w-screen -mt-48">
				<div className="w-full h-96 flex justify-center">
					<h2 className="z-20 text-white text-center mt-36 font-bold md:w-1/3 sm:w-1/2 SurfaceDuo:w-1/3 sm:mt-44">
						Blog
					</h2>
				</div>

				<Image
					src="https://x.scambi.org/illustrations/paneuretico.webp"
					alt=""
					layout="fill"
					className="object-cover w-full absolute top-0 left-0 GalaxyFold:h-64 h-36"
				/>
			</div>
			<div className="pb-36">
				<div className=" flex justify-around GalaxyFold:mt-24 mb-24 h-12">
					<ul className="flex flex-wrap text-center justify-center">
						<li
							onClick={(e) => {
								e.preventDefault();
								setFilter("");
							}}
							className={
								"mr-2  border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-2 iPhoneSE:mr-4 iPhoneSE:ml-4 " +
								(filter === "" ? "border-purple-800 border-b-4" : "")
							}>
							<p className={filter === "" ? "font-bold" : ""}>All Posts</p>
						</li>
						{categories.map((category) => (
							<li
								key={"category-" + category}
								onClick={(e) => {
									e.preventDefault();
									setFilter(category);
								}}
								className={
									"border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-6 SurfaceDuo:ml-6 GalaxyFold:mr-3 GalaxyFold:ml-3 iPhoneSE:mr-4 iPhoneSE:ml-4 " +
									(filter === category ? "border-purple-800 border-b-4" : "")
								}>
								<p className={filter === category ? "font-bold" : ""}>
									{category}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div>
					<div className="flex flex-wrap mx-auto justify-center">
						{filteredPosts.slice(0, postNumber).map(({ frontmatter, path }) => (
							<BlogCard
								key={frontmatter.title}
								post={frontmatter}
								path={path}
							/>
						))}
					</div>
					{!(postNumber >= filteredPosts.length) ? (
						!(filteredPosts.length <= 6) ? (
							<div className="flex justify-center">
								<Button
									classes="btn-primary SurfaceDuo:mr-0 iPhoneSE:px-12 iPhoneSE:h-auto GalaxyFold:mt-12"
									onClick={handleClick}>
									Load more
								</Button>
							</div>
						) : (
							<div></div>
						)
					) : (
						<div></div>
					)}
				</div>
				<div className="bg-white flex justify-center py-10">
					<Subscribe />
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const files = getAllPosts();
	const categories = new Set();
	let posts = files.map((post) => {
		const readFile = getAPost(post);
		let data = null;
		if (readFile) {
			const parse = matter(readFile);
			data = parse.data;
			data.date = new Date(data.date).toLocaleDateString();
			data.categories.forEach((category) => categories.add(category));
		}
		post = post.replace(".md", "");
		console.log(data);
		return {
			path: post,
			frontmatter: data
		};
	});

	posts.sort(sortByDate);
	return {
		props: {
			posts: posts,
			categories: Array.from(categories)
		}
	};
}
