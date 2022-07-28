import fs from 'fs';
import path from 'path';

const teamDir = path.join(process.cwd(), 'teams');

export function getAllTeams() {
	const files = fs.readdirSync(teamDir, { withFileTypes: true });
	const teams = files
		.filter((element) => element.isDirectory())
		.map((element) => element.name);
	return teams;
}

export function getATeam(name, locale) {
	const filePath = path.join(teamDir, `${name}/${name}.${locale}.md`);
	const team = fs.readFileSync(filePath, 'utf-8');
	return team;
}

export async function getTeamMembers(team) {
	/*const filePath = path.join(teamDir, `${team}/members`);
	const members = fs.readdirSync(filePath);
	return members;*/
	try {
		const res = await fetch(
			`https://api.baserow.io/api/database/rows/table/56862/?user_field_names=true&filter__field_328099__contains=${team}`,
			{
				method: 'GET',
				headers: {
					Authorization: 'Token ' + process.env.BASEROW,
				},
			}
		);

		if (res.ok) {
			const members = await res.json();
			return members.results.filter(
				(member) => member['Ruolo']['value'] !== 'ex socio'
			);
		} else return res.status;
	} catch (err) {
		return err;
	}
}

export function getFullName(first, last) {
	return first + ' ' + last;
}

/*export function getAMember(team, name, locale) {
	const filePath = path.join(teamDir, `${team}/members/${name}.${locale}.md`);
	const member = fs.readFileSync(filePath, 'utf-8');
	return member;
}*/
