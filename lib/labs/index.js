export async function getAllLabs() {
	try {
		const response = await fetch(
			'https://pino.scambi.org/api/database/rows/table/313/?user_field_names=true&filter__field_2615__single_select_equal=1390',
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
	} catch (err) {
		console.log(err);
	}
}

export async function getALab(title) {
	try {
		// In case we want title as an id
		/*const response = await fetch(
			`https://api.baserow.io/api/database/rows/table/58806/?user_field_names=true&filter__field_341077__equal=${title}`,
			{
				method: 'GET',
				headers: { Authorization: 'Token ' + process.env.BASEROW },
			}
		);*/

		// In case we want id
		const response = await fetch(
			`https://pino.scambi.org/api/database/rows/table/313/${title}/?user_field_names=true`,
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
