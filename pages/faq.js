import Flex from '../components/flex';
import Image from 'next/image';
import Accordion from '../components/accordion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { data } from '../assets/data';

export default function FAQ() {
	return (
		<Flex classes='my-32 w-full mx-auto items-center'>
			<div className='flex flex-col items-center mx-auto lg:mr-20'>
				<h2 className='text-center lg:mb-5'>Frequently Asked Questions</h2>
				<div className='hidden lg:block'>
					<Image src='/faq.png' alt='' width={660} height={500} />
				</div>
			</div>
			<div className='mx-auto w-full'>
				<div className='flex justify-center'>
					<Accordion content={data} />
				</div>
			</div>
		</Flex>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, 'faq')),
		},
	};
}
