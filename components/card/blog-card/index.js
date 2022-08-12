import Card from "..";
import Image from "next/image";

export default function blogCard() {
	return (
		<Card classes="bg-white w-96 m-12">
			<Image
				src="/illustrations/workshop-explanation.png"
				alt=""
				width={660}
				height={500}
				className="rounded-t-2xl w-full h-56"
			/>

			<div className="flex justify-between mt-6 pb-6 px-6">
				<p>
					By <span>Authour</span>
				</p>
				<p>Date</p>
			</div>
			<div className="text-left px-6 w-full h-42">
				<h5 className="pb-4 text-2xl">Disequilibrium in cinema</h5>
				<p>
					Disequilibrium. The word that will serve as a common thread in (the
					world of) this year's
				</p>
				<div className="py-6">
					<p className="bg-yellow-300 w-fit px-2 py-1 rounded-md">
						Category or tags
					</p>
				</div>
			</div>
		</Card>
	);
}
