export default function Time(date, time) {
	return (
		<div>
			<h4>{date}</h4>
			<div className='grid grid-cols-1 gap-y-2'>
				{time.map((el, index) => {
					<p key={index} className='p-1 rounded-md bg-white'>
						{el}
					</p>;
				})}
			</div>
		</div>
	);
}
