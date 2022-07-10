export default function Dropdown({
	btnStyle,
	dropdownStyle,
	content,
	children,
}) {
	return (
		<div className='relative'>
			<button className={btnStyle}>{content}</button>
			<div className={`absolute top-28 z-10 text-center ${dropdownStyle}`}>
				{children}
			</div>
		</div>
	);
}
