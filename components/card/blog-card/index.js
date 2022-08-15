import Card from "..";
import Image from "next/image";
import Link from "next/link";
import { getDate } from "../../../lib/blog";

export default function BlogCard({ post, path }) {
	return (
		<Link
			href={`blog/${path}`}
			as={path}
			locale={"lang" in post ? post.lang : ""}>
			<a>
				<Card classes="bg-white iPhoneXR:w-96 SurfaceDuo:m-12 drop-shadow-2xl GalaxyS8:w-80 GalaxyFold:mb-12 GalaxyFold:w-66 md:w-80">
					<Image
						src={post.image}
						alt=""
						layout="responsive"
						height={316}
						width={420}
						className="rounded-t-2xl h-56 w-fit GalaxyFold:w-66"
					/>

					<div className="flex justify-between mt-6 pb-6 px-6">
						<p>
							By <span>{post.author}</span>
						</p>
						<p>{getDate(new Date(post.date))}</p>
					</div>

					<div className="text-left px-6 w-full">
						<h4 className="pb-4">{post.title}</h4>
						<div className="pb-5 flex space-x-2">
							{post.categories.map((el) => (
								<p
									key={el}
									className={
										(category_colors[el] || default_category_color) +
										" w-fit px-2 py-1 rounded-md"
									}>
									{el}
								</p>
							))}
						</div>

						<div className="pb-5 flex space-x-2">
							{post.tags?.slice(0, 2).map((el) => (
								<span key={el} className="text-gray-400  text-left pb-4">
									#{el}
								</span>
							))}
							{post.tags?.length > 2 ? (
								<span className="text-gray-400  text-left pb-4">...</span>
							) : null}
						</div>
					</div>
				</Card>
			</a>
		</Link>
	);
}

const category_colors = {
	thinking: "bg-yellow-300",
	cartoline: "bg-pink-300",
	SquiLibristi: "bg-orange-400",
	GDL: "bg-green-400"
};

const default_category_color = "bg-blue-400";
