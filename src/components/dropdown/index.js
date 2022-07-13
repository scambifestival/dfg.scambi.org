export default function Dropdown({
	btnStyle = "",
	dropdownStyle = "",
	content,
	children,
}) {
	return (
		<li className='relative inline-block text-left'>
			<a
				role="menuitem"
				href="#"
				className={`${btnStyle} inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
				aria-expanded="true"
				aria-haspopup="true"
			>
				{content}
				<span className="pl-2">
					<i className="fa fa-chevron-down" />
				</span>
			</a>
			<ul className={`${dropdownStyle} py-1 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				{children.map(child => (
					<li>
						<a href={`/${child.href}`} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">{child.title}</a>
					</li>
				))}
			</ul>
		</li>
	);
}