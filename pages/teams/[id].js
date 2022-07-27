import Button from '../../components/button';
import { MemberCard } from '../../components/card/teams-card';
import {
	getAllTeams,
	getFullName,
	getATeam,
	getTeamMembers,
} from '../../lib/teams';
import { i18n } from '../../lib/i18n';

import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Flex from '../../components/flex';

export default function Team({ frontmatter, team, members }) {
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
						role={member['Ruolo'].value}
						desc='To be added'
					/>
				))}
			</div>
		</section>
	);
}

export async function getStaticPaths() {
	const files = getAllTeams();
	const paths = i18n(files);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: id, locale }) {
	const team = getATeam(id.id, locale);
	const { data, content } = matter(team);
	const members = await getTeamMembers(id.id);

	return {
		props: {
			frontmatter: data,
			team: content,
			members,
		},
	};
}
