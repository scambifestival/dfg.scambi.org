import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import SubscribeImg from '../../public/illustrations/subscribe.png';
import Button from '../button';

export default function Subscribe() {
	const { t } = useTranslation('subscribe');
	return (
		<div className='flex rounded-[32px] bg-primary text-white mx-16 drop-shadow-2xl'>
			<Image
				src={SubscribeImg}
				alt='Subscribe illustration'
				className='hidden lg:block lg:rounded-l-[32px]'
			/>
			<div className='flex flex-col items-center justify-center lg:pr-10'>
				<div className='lg:ml-10'>
					<p className='uppercase'>exchanges of letters, our newsletter</p>
					<h2>Scambi Epistolari</h2>
					<p className='mb-5'>
						Join the conversation - sign up now to receive updates on Scambi
						activities.
					</p>
					<form>
						<input
							type='email'
							placeholder={t('input')}
							className='rounded-md lg:w-[300px] lg:mr-5 peer'
						/>
						<Button classes='bg-primary-yellow peer-invalid:disabled text-black'>
							{t('button')}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
