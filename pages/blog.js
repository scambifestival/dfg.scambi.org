import Subscribe from "../components/subscribe";
import React, { useState } from "react";
import Button from "../components/button";
import BlogCard from "./../components/card/blog-card";

export default function Blog() {
	const [openedTab, setOpenedTab] = useState(2);

	return (
		<div className="bg-white -mb-12">
			<div className="relative w-screen -mt-48">
				<div className="w-full h-96 flex justify-center">
					<h2 className="z-20 text-white text-center mt-36 font-bold md:w-1/3 sm:w-1/2 SurfaceDuo:w-1/3 sm:mt-44">
						Blog
					</h2>
				</div>

				<img
					src="/illustrations/workshop-explanation.png"
					alt=""
					layout="fill"
					className="object-cover w-full absolute top-0 left-0 GalaxyFold:h-72 sm:h-96"
				/>
			</div>
			<div className="pb-36">
				<div className=" flex justify-around mt-24 mb-24 h-12">
					<ul className="flex flex-wrap text-center justify-center">
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(1);
							}}
							className="mr-2 hover:border-purple-800 border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-12 GalaxyFold:mr-2">
							<p className={openedTab === 1 ? "font-bold" : ""}>All Posts</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(2);
							}}
							className="mr-2 hover:border-purple-800 border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-12 GalaxyFold:mr-2">
							<p className={openedTab === 2 ? "font-bold" : ""}>
								Trade in the room
							</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(3);
							}}
							className="mr-2 hover:border-purple-800 border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-12 GalaxyFold:mr-2">
							<p className={openedTab === 3 ? "font-bold" : ""}>Postcards</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(4);
							}}
							className="mr-2 hover:border-purple-800 border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-12 GalaxyFold:mr-2">
							<p className={openedTab === 4 ? "font-bold" : ""}>Category 3</p>
						</li>
						<li
							onClick={(e) => {
								e.preventDefault();
								setOpenedTab(5);
							}}
							className="mr-2 hover:border-purple-800 border-b-2 hover:border-b-4 cursor-pointer SurfaceDuo:mr-12 GalaxyFold:mr-2">
							<p className={openedTab === 5 ? "font-bold" : ""}>
								Uncategorized
							</p>
						</li>
					</ul>
				</div>
				<div>
					<div className={openedTab === 1 ? "block" : "hidden"}>
						<p className="text-center">test1</p>
						<BlogCard />
					</div>
					<div className={openedTab === 2 ? "block" : "hidden"}>
						<p className="text-center">test2</p>
						<BlogCard />
					</div>
					<div className={openedTab === 3 ? "block" : "hidden"}>
						<p className="text-center">test3</p>
						<BlogCard />
					</div>
					<div className={openedTab === 4 ? "block" : "hidden"}>
						<p className="text-center">test4</p>
						<BlogCard />
					</div>
					<div className={openedTab === 5 ? "block" : "hidden"}>
						<p className="text-center">test5</p>
						<BlogCard />
					</div>
					<div className="flex justify-center">
						<Button classes="btn-primary SurfaceDuo:mr-0 GalaxyFold:mr-2 GalaxyFold:p-4 GalaxyFold:h-14 iPhoneSE:px-12 iPhoneSE:h-auto iPhoneSE:mt-12">
							<a href="">Load more</a>
						</Button>
					</div>
				</div>
				<div className="bg-white flex justify-center py-10">
					<Subscribe />
				</div>
			</div>
		</div>
	);
}
