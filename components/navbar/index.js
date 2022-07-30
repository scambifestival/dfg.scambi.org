import Dropdown from '../dropdown';
import Button from '../button';
import Menu from '../icons/menu';
import { useState, useRef } from 'react';
import Link from 'next/link';

const aboutUsDropdown = [
	{ title: 'About Scambi', href: 'about' },
	{ title: 'Our Story', href: '' },
	{ title: 'Our Team', href: 'teams' },
];

const festivalDropdown = [
	{ title: 'Labs', href: 'labs' },
	{ title: 'Pinolis', href: 'pinoli' },
	// {title: 'Film Contest', href:'filmcontest'}
];

const supportDropdown = [
	{ title: 'Donate', href: 'donate' },
	{ title: 'Volunteer', href: 'volunteer' },
	{ title: 'Join Team', href: 'careers' },
];

export default function Navbar() {
	const navbar = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const clickOutside = (e) => {
		if (!navbar.current.contains(e.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<nav
			aria-label='Scambi'
			ref={navbar}
			onBlur={clickOutside}
			className={`${isOpen ? 'rounded-3xl' : 'rounded-full'
				} fixed w-11/12 top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-start justify-between bg-white shadow-xl py-5 px-10 space-y-7 sm:px-14 lg:flex-row lg:items-center lg:space-y-0`}>
			<div className='w-full flex justify-between items-center lg:w-auto lg:px-0'>
				<button
					type='button'
					className={`w-6 sm:w-8 lg:hidden p-0 outline-none hover:text-fuchsia-800 focus:text-fuchsia-800 shadow-none`}
					onClick={handleClick}
				>
					<Menu isOpen={isOpen} />
				</button>
				<Link href='/'>
					<a
						id='logo'
						className=' font-medium text-4xl outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800'>
						Scambi
					</a>
				</Link>
				<button
					className='lg:hidden p-0 outline-none hover:text-fuchsia-800 focus:text-fuchsia-800'
					onClick={handleClick}>
					<Menu isOpen={isOpen} />
				</button>
			</div>
			<ul
				role='menubar'
				aria-label='scambi'
				className={`${isOpen ? 'flex' : 'hidden'
					} w-full space-y-3 flex-col justify-between items-start space-x-0 lg:w-auto lg:flex lg:flex-row lg:items-center lg:space-y-0 xl:space-x-10 2xl:w-auto 2xl:space-x-16`}>
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
				{/*<Dropdown
					name='Support'
					btnStyle='text-xl 2xl:text-2xl font-bold uppercase'
					content={supportDropdown}
			/>*/}
				<li role='none'>
					<Link href='/faq'>
						<a className='text-xl 2xl:text-2xl font-bold outline-none hover:text-fuchsia-800 active:text-fuchsia-800 focus:text-fuchsia-800'>
							FAQ
						</a>
					</Link>
				</li>
			</ul>

			<Button
				classes={`${isOpen ? '' : 'hidden'
				} lg:inline-block uppercase outline-offset-1 btn-primary`}>
				Attend
			</Button>
		</nav>
	);
}
