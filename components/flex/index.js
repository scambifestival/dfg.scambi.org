export default function Flex({ classes, children, reverse = false }) {
	return (
		<div
			className={`${classes} flex px-16 py-10 space-y-10 flex-col md:w-10/12 ${
				reverse ? 'md:flex-row-reverse' : 'md:flex-row'
			} justify-center items-center`}>
			{children}
		</div>
	);
}
