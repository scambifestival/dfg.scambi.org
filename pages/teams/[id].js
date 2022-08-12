import Button from '../../components/button';
import { MemberCard } from '../../components/card/teams-card';
import {
	getAllTeams,
	getFullName,
	getATeam,
	getTeamMembers,
	getBio,
	getImgSrc,
} from '../../lib/teams';
import { i18n } from '../../lib/i18n';

import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Flex from '../../components/flex';
import { useRouter } from 'next/router';

function TeamInfo({ frontmatter, team, members, locale }) {
	return (
		<section className='mt-40'>
			<Flex classes='mx-auto mb-20'>
				<div>
					<h2>{frontmatter.name}</h2>
					{/*eslint-disable-next-line react/no-children-prop*/}
					<ReactMarkdown children={team} />
					<Button classes='btn-primary mt-5'>Join the team</Button>
				</div>
			</Flex>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-16 mb-20'>
				{members.map((member) => (
					<MemberCard
						key={member.id}
						name={getFullName(member['Nome'], member['Cognome'])}
						role={member['role'].value}
						imgSrc={getImgSrc(member['Nome'], member['Cognome'])}
						desc={getBio(locale, member)}
					/>
				))}
			</div>
		</section>
	);
}

// TODO: Add translation
function TeamError() {
	return (
		<section className='mt-40'>
			<h2>This team is lost in the festival</h2>
		</section>
	);
}

export default function Team({ frontmatter, team, members }) {
	const router = useRouter();
	const locale = router.locale;
	return frontmatter ? (
		<TeamInfo
			frontmatter={frontmatter}
			team={team}
			members={members}
			locale={locale}
		/>
	) : (
		<TeamError />
	);
}

export async function getStaticPaths({ locales }) {
	const files = getAllTeams(true);
	const paths = i18n(files, locales);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: id, locale }) {
	const team = getATeam(id.id, locale);
	let data = null;
	let content = null;
	let members = [];

	if (team !== null) {
		const parse = matter(team);
		data = parse.data;
		content = parse.content;
		members = await getTeamMembers(id.id, locale);
		console.log(members);
	}

	return {
		props: {
			frontmatter: data,
			team: content,
			members,
		},
	};
}
