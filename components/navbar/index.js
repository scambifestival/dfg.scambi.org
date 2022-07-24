import Dropdown from '../dropdown';
import Button from '../button';
import { useState } from 'react';
import Link from 'next/link';

const aboutUsDropdown = [
	{ title: 'About Scambi', href: 'about' },
	{ title: 'Our Story', href: '' },
	{ title: 'Our Team', href: 'ourTeam' },
];

const festivalDropdown = [
	{ title: 'Labs', href: 'labs' },
	{ title: 'Pinolis', href: 'minievents' },
	// {title: 'Film Contest', href:'filmcontest'}
];

const supportDropdown = [
	{ title: 'Donate', href: 'donate' },
	{ title: 'Volunteer', href: 'volunteer' },
	{ title: 'Join Team', href: 'careers' },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			aria-label='Scambi'
			className={`fixed z-50 w-11/12 flex flex-col items-center justify-between bg-white shadow-xl left-1/2 -translate-x-1/2 mt-10 space-y-7 py-5 ${
				isOpen ? 'rounded-3xl' : 'rounded-full'
			} lg:flex-row lg:rounded-full lg:space-y-0 lg:px-12 2xl:px-20`}>
			<div className='w-full flex justify-between items-center px-8 sm:px-16 lg:w-auto lg:px-0'>
				<Link
					href='/'
					className='text-5xl font-["Londrina_Solid"]  outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800'>
					<a>Scambi</a>
				</Link>
				<button
					className='lg:hidden p-0 outline-none hover:text-fuchsia-800 focus:text-fuchsia-800'
					onClick={handleClick}>
					<i className={`fa fa-3x ${isOpen ? 'fa-close' : 'fa-bars'}`} />
				</button>
			</div>
			{/*<ul
				role='menubar'
				aria-label='scambi'
				className={`${
					isOpen ? 'flex' : 'hidden'
				} space-y-3 flex-col justify-around items-center space-x-0 lg:w-auto lg:flex lg:flex-row lg:space-y-0 xl:space-x-10 2xl:w-auto 2xl:space-x-16`}>
				<Dropdown
					name='About us'
					btnStyle='text-xl 2xl:text-2xl font-bold uppercase'
					content={aboutUsDropdown}
				/>
				<Dropdown
					name='Festival'
					btnStyle='text-xl 2xl:text-2xl font-bold uppercase'
					content={festivalDropdown}
				/>
				<Dropdown
					name='Support'
					btnStyle='text-xl 2xl:text-2xl font-bold uppercase'
					content={supportDropdown}
				/>
				<li role='none'>
					<Link
						role='menuitem'
						to='/faq'
						className='text-xl 2xl:text-2xl font-bold outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800'>
						FAQ
					</Link>
				</li>
			</ul>*/}

			<Button
				classes={`${
					isOpen ? '' : 'hidden'
				} lg:inline-block uppercase outline-offset-1`}>
				Attend
			</Button>
		</nav>
	);
}
