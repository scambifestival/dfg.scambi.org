export async function getAllLabs() {
	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/58806/?user_field_names=true&search=lab',
			{
				method: 'GET',
				headers: { Authorization: 'Token ' + process.env.BASEROW },
			}
		);

		if (response.ok) {
			const labs = await response.json();
			return labs.results;
		} else {
			return response.status;
		}
	} catch (err) {}
}

export async function getALab(id) {
	try {
		const response = await fetch(
			`https://api.baserow.io/api/database/rows/table/58806/${id}/?user_field_names=true`,
			{
				method: 'GET',
				headers: { Authorization: 'Token ' + process.env.BASEROW },
			}
		);

		if (response.ok) {
			const lab = await response.json();
			return lab;
		} else {
			return response.status;
		}
	} catch (err) {}
}

export function getDescription(locale, lab) {
	return locale === 'en' ? lab['eng_description'] : lab.description;
}
