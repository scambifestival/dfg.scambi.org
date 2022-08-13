import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { subscribe } from '../../lib/communications';
import Button from '../button';
import { useState } from 'react';
import Markdown from '../markdown';

export default function Subscribe() {
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');

	const handleInput = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		subscribe(email);
	};
	return (
		<div className='flex rounded-[32px] bg-primary text-white mx-16 drop-shadow-2xl md:flex-row GalaxyFold:flex-col GalaxyFold:w-64 GalaxyS8:w-80 iPhoneSE:w-full'>
			<Image
				src='https://x.scambi.org/illustrations/press.webp'
				alt='Subscribe illustration'
				height={413}
				width={500}
				className='hidden lg:block lg:rounded-l-[32px] md:rounded-tr-[0px] GalaxyFold:rounded-t-[32px] md:rounded-l-[32px] object-fill'
			/>
			<div className='flex flex-col items-center justify-center lg:pr-10 p-6 GalaxyFold:p-12'>
				<div className='lg:ml-10 GalaxyFold:p-2'>
					<Markdown className='uppercase' content={t('subscribe.subtitle')} />
					<h2>Scambi Epistolari</h2>
					<p className='mb-5 w-[500px]'>{t('subscribe.join')}</p>
					<form>
						<input
							type='email'
							placeholder={t('subscribe.input')}
							className='rounded-md lg:w-[300px] lg:mr-5 peer mr-2 text-black'
						/>
						<Button classes='bg-primary-yellow peer-invalid:disabled text-black GalaxyFold:mt-2'>
							{t('subscribe.button')}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
