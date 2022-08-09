import Button from '../../components/button';
import Flex from '../../components/flex';
import Image from 'next/image';
import { TeamCard } from '../../components/card/teams-card';
import { getAllTeams, getATeam } from '../../lib/teams';
import matter from 'gray-matter';
import Card from '../../components/card';

export default function Teams({ teams }) {
	return (
		<section>
			<Flex classes='mx-auto justify-between'>
				<div className='lg:w-1/2 mr-5'>
					<h2>Our Teams</h2>
					<p>We are a group of under 25s coming from every corner of Europe.</p>
					<p className='my-5'>
						Our association was born from our wish to value real and deep ties,
						horizontality and dialogue, curiosity and welcoming of the
						different. After lots of videocalls, thousand doubts and just as
						many ideas, our team has become a family. We are proud of our
						diversity and passion, enthusiastic in sharing inspiration and in
						continuously proposing new perspectives.{' '}
					</p>
					<p>
						We will be waiting for you in Sanremo, to introduce ourselves
						properly. In the meanwhile, here is an anticipation of who we are.
					</p>
					<Button classes='btn-primary mt-3'>Join our team</Button>
				</div>
				<Image src='/illustrations/group.png' alt='' width={600} height={400} />
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

		return {
			team,
			frontmatter: data,
			content,
		};
	});

	return {
		props: {
			teams,
		},
	};
}
