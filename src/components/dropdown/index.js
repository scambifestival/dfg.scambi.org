import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({
	btnStyle,
	dropdownStyle,
	content,
	children,
}) {
	const menu = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const clickOutside = (e) => {
		if (!menu.current.contains(e.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<div className='relative inline-block' onBlur={clickOutside}>
			<button
				onClick={handleClick}
				className={`${btnStyle} ${isOpen ? 'text-fuchsia-800' : ''} inline-flex justify-center px-4 py-2 bg-white outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800`}>
				{content}
				<span className='pl-2' aria-hidden='true'>
					<i className='fa fa-chevron-down' />
				</span>
			</button>
			<ul
				ref={menu}
				className={`${dropdownStyle} ${isOpen ? '' : 'hidden'
					} py-1 left-0 mt-2 w-56 rounded-md bg-white lg:absolute lg:shadow-xl`}
				id={content}
				role='menu'
				aria-label={content}
				aria-orientation='vertical'
				aria-labelledby='menu-button'>
				{children.map((child, index) => (
					<li key={index}>
						<Link
							to={child.href}
							className='text-lg font-bold block px-4 py-2 uppercase outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800'
							role='menuitem'>
							{child.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
