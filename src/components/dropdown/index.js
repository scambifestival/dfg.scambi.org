import { useRef, useState } from 'react';
//import { HashLink } from 'react-router-hash-link';
import './Dropdown.css';

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
				className={`${btnStyle} inline-flex justify-center px-4 py-2 bg-white text-gray-700 focus:outline-none active:ring-2 active:ring-fuchsia-800`}>
				{content}
				<span className='pl-2' aria-hidden='true'>
					<i className='fa fa-chevron-down' />
				</span>
			</button>
			<ul
				ref={menu}
				className={`${dropdownStyle} ${
					isOpen ? '' : 'hidden'
				} py-1 left-0 mt-2 w-56 rounded-md bg-white ring-1 ring-black ring-opacity-5 lg:absolute lg:shadow-lg`}
				id={content}
				role='menu'
				aria-label={content}
				aria-orientation='vertical'
				aria-labelledby='menu-button'>
				{children.map((child, index) => (
					<li key={index}>
						<a
							href={`/${child.href}`}
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'>
							{child.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
