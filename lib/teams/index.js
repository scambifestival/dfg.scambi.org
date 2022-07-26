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

export function getATeam(name) {
	const filePath = path.join(teamDir, `${name}/${name}.md`);
	const team = fs.readFileSync(filePath, 'utf-8');
	return team;
}

export function getTeamMembers(team) {
	const filePath = path.join(teamDir, `${team}/members`);
	const members = fs.readdirSync(filePath);
	return members;
}

export function getAMember(team, name) {
	const filePath = path.join(teamDir, `${team}/members/${name}.md`);
	const member = fs.readFileSync(filePath, 'utf-8');
	return member;
}
