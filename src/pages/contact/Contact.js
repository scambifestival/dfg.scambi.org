import Button from '../../components/button';
import { Link } from 'react-router-dom';
export default function Contact() {
	return (
		<section>
			<h1>Contact Us</h1>
			<div className='mt-10 mx-auto'>
				<h3>
					Contact us with any general questions and we will try to get back to
					you as soon as we can.{' '}
				</h3>
				<form className='lg:mx-auto mt-10 p-10 lg:p-0 lg:flex lg:flex-col lg:items-center space-y-5'>
					<div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row'>
						<div className='relative bg-white p-2 rounded-md lg:mr-3'>
							<input
								id='name'
								type='text'
								className='bg-transparent lg:w-[310px] focus:outline-none peer'
							/>
							<label className="absolute left-2 after:content-['*'] after:text-red-600 peer-focus:hidden">
								Name
							</label>
						</div>
						<div className='relative bg-white p-2 rounded-md'>
							<input
								id='name'
								type='text'
								className='bg-transparent lg:w-[310px] focus:outline-none peer'
							/>
							<label className="absolute left-2 after:content-['*'] after:text-red-600 peer-focus:hidden">
								Email
							</label>
						</div>
					</div>
					<div className='relative bg-white p-2 rounded-md'>
						<input
							id='name'
							type='text'
							className='bg-transparent lg:w-[650px] focus:outline-none peer'
						/>
						<label className="absolute left-2 peer-focus:hidden after:content-['*'] after:text-red-600">
							Subject
						</label>
					</div>
					<div className='relative bg-white p-2 rounded-md'>
						<textarea
							id='name'
							className='bg-transparent h-[328px] lg:w-[650px] focus:outline-none peer'
						/>
						<label className="absolute left-2 peer-focus:hidden after:content-['*'] after:text-red-600">
							Message
						</label>
					</div>
					<Button>Send</Button>
				</form>
			</div>
			<div className='mt-20 px-10'>
				<div className='bg-white p-5 shadow-lg rounded-lg lg:flex lg:justify-between lg:items-center'>
					<div className='text-left'>
						<p className='font-bold'>FAQ</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<Link className='text-[#69088D] flex items-center' to='/faq'>
						Go to FAQ
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 ml-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							/>
						</svg>
					</Link>
				</div>
			</div>
			<div className='mt-20 px-10'>
				<div className='bg-white p-5 shadow-lg rounded-lg lg:flex lg:justify-between lg:items-center'>
					<div className='text-left'>
						<p className='font-bold'>PressKit</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<Link className='text-[#69088D] flex items-center' to='/'>
						Download
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 ml-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
