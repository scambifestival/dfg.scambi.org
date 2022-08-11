import Image from 'next/image';
import Accordion from '../components/accordion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function FAQ() {
	return (
		<section>
			<div className='flex flex-col items-center lg:flex-row mx-auto justify-between'>
				<h2 className='text-center lg:px-16'>Frequently Asked Questions</h2>
				<Image src='/faq.png' alt='' width={660} height={500} />
			</div>
			<div className='mx-auto w-full'>
				<div className='flex justify-center mx-1 iPhoneSE:mx-3 sm:mx-6 lg:mx-0'>
					<Accordion />
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, 'faq')),
		},
	};
}
