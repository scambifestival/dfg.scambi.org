import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Dropdown({ btnStyle, dropdownStyle, name, content }) {
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
			<p
				onClick={handleClick}
				className={`${btnStyle} ${
					isOpen ? 'text-fuchsia-800' : ''
				} cursor-pointer px-4 py-2 bg-white outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800`}>
				{name}
			</p>
			<ul
				ref={menu}
				className={`${dropdownStyle} ${
					isOpen ? '' : 'hidden'
				} py-1 left-0 mt-2 w-56 rounded-md bg-white lg:absolute lg:shadow-xl`}
				id={name}
				role='menu'
				aria-label={name}
				aria-orientation='vertical'
				aria-labelledby='menu-button'>
				{content.map((child, index) => (
					<li key={index} role='menuitem'>
						<Link href={child.href}>
							<a className='text-lg font-bold block px-4 py-2 uppercase outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800'>
								{child.title}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
