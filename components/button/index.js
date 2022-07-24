export default function Button({ children, classes = '', onSubmit, onClick }) {
	return (
		<button
			className={`rounded-2xl font-semibold ${classes}`}
			onClick={onClick}
			onSubmit={onSubmit}>
			{children}
		</button>
	);
}
