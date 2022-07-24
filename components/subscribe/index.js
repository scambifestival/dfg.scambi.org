import Image from 'next/image';
import SubscribeImg from '../../public/illustrations/subscribe.png';
import Button from '../button';

export default function Subscribe() {
	return (
		<div className='flex px-10 rounded-[32px]'>
			<Image
				src={SubscribeImg}
				alt='Subscribe illustration'
				className='hidden lg:block'
			/>
			<div>
				<div>
					<p className='uppercase'>exchanges of letters, our newsletter</p>
					<h2>Scambi Epistolari</h2>
					<p>
						Join the conversation - sign up now to receive updates on Scambi
						activities.
					</p>
					<form>
						<input
							type='email'
							placeholder='Enter your email'
							className='rounded-md peer'
						/>
						<Button classes='bg-primary-yellow peer-invalid:disabled'>
							Subscribe
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
