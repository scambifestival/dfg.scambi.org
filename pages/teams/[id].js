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

export default function Team({ frontmatter, team, members }) {
	const router = useRouter();
	const locale = router.locale;
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
						imgSrc={getImgSrc(member['profile_pic'])}
						desc={getBio(member, locale)}
					/>
				))}
			</div>
		</section>
	);
}

export async function getStaticPaths({ locales }) {
	const files = getAllTeams();
	const paths = i18n(files, locales);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: id, locale }) {
	const team = getATeam(id.id, locale);
	const { data, content } = matter(team);
	const members = await getTeamMembers(id.id);
	console.log(members);

	return {
		props: {
			frontmatter: data,
			team: content,
			members,
		},
	};
}
