import fs from 'fs';
import path from 'path';

const teamDir = path.join(process.cwd(), 'teams');

const dict = [
	{ it: 'camaleonti', en: 'chameleons' },
	{ it: 'dissolvenze', en: 'dissolvenze' },
	{ it: 'libellule', en: 'dragonflies' },
	{ it: 'paguri', en: 'hermit-crabs' },
	{ it: 'ghiandaie', en: 'jays' },
	{ it: 'civette', en: 'owls' },
	{ it: 'palanche', en: 'palanche' },
	{ it: 'peacocks', en: 'peacocks' },
	{ it: 'silicon', en: 'silicon' },
	{ it: 'stambecchi', en: 'steinbocks' },
	{ it: 'rodini', en: 'swallows' },
	{ it: 'tartarughe', en: 'turtles' },
];

export function getAllTeams() {
	/*const files = fs.readdirSync(teamDir, { withFileTypes: true });
	let teams = files
		.filter((file) => file.isDirectory())
		.map((file) => file.name);

	if (buildPath) {
		const italianTeams = files.filter((file) => getItalianName(file));
		console.log(italianTeams);
		teams = teams.map((team, index) => ({ it: italianTeams[index], en: team }));
	}*/
	return dict;
}

export function getATeam(name, locale) {
	if (typeof name === 'string') {
		name = dict.filter((el) => el[locale] === name)[0];
	}
	let filePath = path.join(teamDir, `${name.en}/${name[locale]}.${locale}.md`);
	try {
		const team = fs.readFileSync(filePath, 'utf-8');
		return team;
	} catch (error) {
		return null;
	}
}

export async function getTeamMembers(team, locale) {
	if (locale === 'en') team = dict.filter((el) => el.en === team)[0].it;
	try {
		const res = await fetch(
			`https://pino.scambi.org/api/database/rows/table/323/?user_field_names=true&filter__field_2790__contains=${team}`,
			{
				method: 'GET',
				headers: {
					Authorization: 'Token ' + process.env.BASEROW,
				},
			}
		);

		if (res.ok) {
			const members = await res.json();
			const result = members.results.filter(
				(member) =>
					!member.role.value.includes('ex socio') &&
					!member.role.value.includes('socio simpatizzante')
			);
			//console.log(result[4].role.value);
			return result;
		} else return res.status;
	} catch (err) {
		return err;
	}
}

export function getFullName(first, last) {
	return first + ' ' + last;
}

export function getBio(locale, member) {
	if (locale === 'en') {
		return member['bio_en']
			? member['bio_en']
			: "Oops! It's empty! We will add these later!";
	} else
		return member['bio']
			? member['bio']
			: "Oops! It's empty! We will add these later!";
}

export function getImgSrc(first, last) {
	return `https://x.scambi.org/profile_pics/${first}_${last}.jpg`;
}
