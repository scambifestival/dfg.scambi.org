import Button from '../../components/button';
import Flex from '../../components/flex';
import Image from 'next/image';
import { TeamCard } from '../../components/card/teams-card';
import { getAllTeams, getATeam } from '../../lib/teams';
import matter from 'gray-matter';
import Card from '../../components/card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Markdown from '../../components/markdown';

export default function Teams({ teams }) {
	const { t } = useTranslation(['common', 'about']);

	return (
		<section>
			<Flex classes='mx-auto justify-between md:flex-col lg:flex-row'>
				<div className='lg:w-1/2 mr-5'>
					<h2>{t('team.heading', { ns: 'about' })}</h2>
					<Markdown
						className='my-5'
						content={t('team.desc', { ns: 'about' })}
					/>
					<p>{t('team.text', { ns: 'about' })}</p>
					<Button classes='btn-primary mt-3'>Join our team</Button>
				</div>
				<div className='w-full px-5 iPhoneXR:w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 md:pr-0 mt-0'>
					<Image
						src='https://x.scambi.org/images/staff.webp'
						width={675}
						height={450}
						layout='responsive'
						alt=''
						className='rounded-xl'
					/>
				</div>
			</Flex>
			<div className='grid grid-cols-1 lg:px-16 gap-20 lg:grid-cols-3 mb-14'>
				{teams.map(({ team, frontmatter, content }) =>
					frontmatter ? (
						<TeamCard
							key={team}
							imgSrc={frontmatter.image}
							teamName={frontmatter.name}
							duty={frontmatter.duty}
							desc={content}
							path={team}
						/>
					) : (
						<Card key={team}>
							<h3>To be added</h3>
						</Card>
					)
				)}
			</div>
		</section>
	);
}

export async function getStaticProps({ locale }) {
	const files = getAllTeams();
	const teams = files.map((team) => {
		const readFile = getATeam(team, locale);
		let data = null;
		let content = null;
		if (readFile) {
			const parse = matter(readFile);
			data = parse.data;
			content = parse.content;
		}
		team = team[locale];
		return {
			team: team,
			frontmatter: data,
			content,
		};
	});

	return {
		props: {
			teams,
			...(await serverSideTranslations(locale, ['common', 'about'])),
		},
	};
}
