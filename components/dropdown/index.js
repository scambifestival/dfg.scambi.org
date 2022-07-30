import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronUp, ChevronDown } from '../icons/chevron';

export default function Dropdown({ btnStyle, dropdownStyle, name, content }) {
	const menu = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const clickOutside = (e) => {
		if (!menu.current.contains(e.relatedTarget)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
		  setIsOpen(false);
		}
	  }, [router]);

	return (
		<div className='relative inline-block' onBlur={clickOutside}>
			<button
				onClick={handleClick}
				className={`${btnStyle} ${isOpen ? 'text-fuchsia-800' : ''
					} inline-flex justify-start items-center shadow-none cursor-pointer px-0 py-2 bg-white outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800`}>
				{name}
				<span className='pl-2' aria-hidden='true'>
					{isOpen ? <ChevronUp /> : <ChevronDown />}
				</span>
			</button>
			<ul
				ref={menu}
				className={`${dropdownStyle} ${isOpen ? '' : 'hidden'
					} py-1 left-0 mt-2 w-56 rounded-md bg-white lg:absolute lg:shadow-xl`}
				id={name}
				role='menu'
				aria-label={name}
				aria-orientation='vertical'
				aria-labelledby='menu-button'>
				{content.map((child, index) => (
					<li key={index} role='menuitem'>
						<Link href={child.href} locale={child.locale || ''}>
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
