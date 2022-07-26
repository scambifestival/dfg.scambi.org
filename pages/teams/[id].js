import Button from '../../components/button';
import MemberCard from '../../components/card/teams-card';
import {
	getAllTeams,
	getAMember,
	getATeam,
	getTeamMembers,
} from '../../lib/teams';

import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

export default function Team({ frontmatter, team, members }) {
	return (
		<section className='mt-40'>
			<div>
				<h2>{frontmatter.name}</h2>
				{/*eslint-disable-next-line react/no-children-prop*/}
				<ReactMarkdown children={team} />
				<Button classes='btn-primary'>Join the team</Button>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
				{members.map(({ frontmatter, content }) => (
					<MemberCard
						key={frontmatter.name}
						name={frontmatter.name}
						role={frontmatter.role}
						desc={content}
					/>
				))}
			</div>
		</section>
	);
}

export async function getStaticPaths() {
	const files = getAllTeams();
	const paths = files.map((team) => ({
		params: {
			id: team.replace('.en.md', ''),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: id }) {
	const team = getATeam(id);
	const { data, content } = matter(team);

	const membersFile = getTeamMembers(id);
	const members = membersFile.map((member) => {
		const readFile = getAMember(id, member);
		const { data, content } = matter(readFile);
		return {
			frontmatter: data,
			content,
		};
	});

	return {
		props: {
			frontmatter: data,
			team: content,
			members,
		},
	};
}
