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
		<div className='flex rounded-3xl bg-primary text-white drop-shadow-2xl GalaxyFold:flex-col GalaxyFold:w-11/12 md:flex-row xl:max-w-[1300px]'>
			<div className='bg-[#8E5EB4] rounded-t-3xl md:rounded-tr-[0px] md:rounded-l-3xl relative h-[200px] md:w-full md:h-auto'>
			<Image
				src='https://x.scambi.org/illustrations/press.webp'
				alt='Subscribe illustration'
				height={413}
				width={500}
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				className='rounded-t-3xl md:rounded-tr-[0px] md:rounded-l-3xl'
			/>
			</div>
			<div className='p-4 mb-3 space-y-3 GalaxyS8:p-6 md:my-5 lg:ml-10'>
				<Markdown className='uppercase text-[13px] lg:text-[16px]' content={t('subscribe.subtitle')} />
				<h2 className='leading-tight font-medium text-[44px] lg:text-[64px]'>Scambi Epistolari</h2>
				<p className='w-full text-[14px] lg:text-[16px]'>{t('subscribe.join')}</p>
				<form className='space-y-5'>
					<input
						type='email'
						placeholder={t('subscribe.input')}
						className='rounded-md peer text-black mr-2 iPhoneXR:min-w-[275px] lg:mr-3'
					/>
					<Button classes='bg-primary-yellow peer-invalid:disabled text-black'>
						{t('subscribe.button')}
					</Button>
				</form>
			</div>
		</div>
	);
}
