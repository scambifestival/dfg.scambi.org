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
				<form className='bg-white lg:mx-auto mt-10 p-10 max-w-3xl space-y-5 border-2 border-purple-650 rounded-md'>
					<div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-center max-w-full'>
						<div className='lg:mr-5 w-full'>
							<input
								id='name'
								type='text'
								placeholder='Name'
								className='w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#7B61FF] placeholder:text-gray-300 peer'
							/>
							<p className='text-red-600 font-bold text-left mt-2 invisible peer-invalid:visible'>
								This field is required
							</p>
						</div>
						<div className='w-full'>
							<input
								id='email'
								type='email'
								placeholder='Email'
								className='w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#7B61FF] placeholder:text-gray-300 peer'
							/>
							<p className='text-red-600 font-bold text-left mt-2 invisible peer-invalid:visible'>
								This field is required
							</p>
						</div>
					</div>
					<div className='max-w-full'>
						<input
							id='subject'
							type='text'
							placeholder='Subject'
							className='w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#7B61FF] placeholder:text-gray-300 peer'
						/>
						<p className='text-red-600 font-bold text-left mt-2 invisible peer-invalid:visible'>
							This field is required
						</p>
					</div>
					<div className='w-full'>
						<textarea
							id='name'
							placeholder='Message'
							rows={4}
							className='w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#7B61FF] placeholder:text-gray-300 peer'
						/>
						<p className='text-red-600 font-bold text-left mt-2 invisible peer-invalid:visible'>
							This field is required
						</p>
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
