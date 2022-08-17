import Image from 'next/image';
import Flex from '../../components/flex';
import { getHostBio, getPinoli, getPinolo } from '../../lib/pinoli';
import { getLanguage } from '../../lib/i18n';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function Pinolo({ pinolo }) {
	const router = useRouter();
	console.log(router.pathname);
	const locale = router.locale;

	return (
		<section className='mt-48'>
			<Flex classes='mx-auto text-left justify-between'>
				<div className='lg:w-1/2'>
					<h1 className='mb-10'>{pinolo.title}</h1>
					<div className='flex space-x-2 mb-5'>
						{pinolo.lang.map(({ id, value }) => (
							<p key={id} className='rounded-full p-2 bg-primary-yellow'>
								{getLanguage(value, locale)}
							</p>
						))}
					</div>
					<p>
						{locale === 'en' ? pinolo['eng_description'] : pinolo.description}
					</p>
				</div>
				<div className='flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-14 xl:flex-col xl:space-x-0 xl:space-y-10'>
					<div>
						<h3 className='font-medium text-[48px] md:text-[52px]'>Where?</h3>
						{pinolo.location.map(({ id, value }) => (
							<p key={id}>{value}</p>
						))}
					</div>
					<div>
						<h3 className='font-medium text-[48px] md:text-[52px]'>When?</h3>
						{/*<Flex classes='space-x-2'>
							{lab.days.map(day => {
								<Time key={day.id} date={`8/${day.value}`} time={}
							})}
						</Flex>*/}
					</div>
				</div>
			</Flex>
			<Flex classes='mt-10 mx-auto justify-between bg-white'>
				<div className='text-left lg:w-1/2'>
					<h2 className=''>Meet the Pinolo Host</h2>
				</div>
			</Flex>
		</section>
	);
}

export async function getStaticPaths({ locales }) {
	const pinoli = await getPinoli();
	const paths = pinoli
		.map((pinolo) =>
			locales.map((locale) => ({
				params: {
					id: `${pinolo.id}`,
				},
				locale,
			}))
		)
		.flat();
	console.log(paths);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, locale }) {
	const pinolo = await getPinolo(params.id);
	//const hosts = await getHostBio(pinolo.host);

	return {
		props: {
			pinolo,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
