import { useRef, useState } from 'react';
import './Dropdown.css';

export default function Dropdown({
	btnStyle = "",
	dropdownStyle = "",
	content,
	children
}) {
	const menu = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleBlur = (e) => {
		if (!menu.current.contains(e.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<li className='relative inline-block text-left' role='none' key={content} onClick={handleClick} ref={menu} onBlur={handleBlur}>
			<a
				role="menuitem"
				href="#"
				className={`${btnStyle} inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
				aria-expanded="true"
				aria-haspopup="true"
			>
				{content}
				<span className="pl-2" aria-hidden="true">
					<i className="fa fa-chevron-down" />
				</span>
			</a>
			<ul
				className={`${dropdownStyle} ${isOpen ? "open" : "close"} py-1 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
				id={`sub-menu-${content.toLowerCase()}`}
				role="menu"
				aria-label={content}
				aria-orientation="vertical"
				aria-labelledby="menu-button"
			>
				{children.map((child, index) => (
					<li key={`${content}-${index}`}>
						<a href={`#${child.href}`}
							className="text-gray-700 block px-4 py-2 text-sm"
							role="menuitem"
						>
							{child.title}
						</a>
					</li>
				))}
			</ul>
		</li>
	);
}