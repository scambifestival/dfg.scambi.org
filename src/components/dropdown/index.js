import { useRef, useState } from 'react';
import './Dropdown.css';

export default function Dropdown({
	btnStyle = '',
	dropdownStyle = '',
	content,
	children,
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
		<div
			className='nav-menu'
			role='none'
			key={content}
			onClick={handleClick}
			ref={menu}
			onBlur={handleBlur}>
			<a
				role='menuitem'
				href='/#'
				className={`${btnStyle} nav-menuitem`}
				aria-expanded={isOpen}
				aria-haspopup='true'>
				{content}
				<span className='pl-2' aria-hidden='true'>
					<i className='fa fa-chevron-down' />
				</span>
			</a>
			<ul
				className={`${dropdownStyle} ${isOpen ? '' : 'close'} nav-submenu`}
				id={`sub-menu-${content.toLowerCase()}`}
				role='menu'
				aria-label={content}
				aria-orientation='vertical'
				aria-labelledby='menu-button'>
				{children.map((child, index) => (
					<li key={`${content}-${index}`}>
						<a
							href={`/${child.href}`}
							className='nav-submenu-item'
							role='menuitem'>
							{child.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
