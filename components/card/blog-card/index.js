import Card from "..";

export default function blogCard() {
	return (
		<div className="pl-12 pr-12">
			<Card classes="bg-white w-fit">
				<img
					src="/illustrations/workshop-explanation.png"
					alt=""
					layout="fill"
					className="rounded-t-2xl w-96 h-72"
				/>
				<div className="flex justify-between mt-6 pb-6 px-6">
					<p>
						By <span>Authour</span>
					</p>
					<p>Date</p>
				</div>
				<div className="text-left px-6 w-96 h-42">
					<h4 className="pb-4">Disequilibrium in cinema</h4>
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
		</div>
	);
}
