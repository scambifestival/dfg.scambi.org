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

export async function getHostBio(arr) {
	const hosts = await Promise.all(
		arr.map(async (host) => {
			try {
				const response = await fetch(
					`https://pino.scambi.org/api/database/rows/table/320/${host.id}/?user_field_names=true`,
					{
						method: 'GET',
						headers: { Authorization: 'Token ' + process.env.BASEROW },
					}
				);

				if (response.ok) {
					const bio = await response.json();
					return bio;
				} else return 'Oops! Something is wrong!';
			} catch (err) {
				console.log(err);
			}
		})
	);
	return hosts;
}

export function getLanguage(value, locale) {
	if (value === 'other') {
		value = value.charAt(0).toUpperCase() + value.substring(1);
		return value;
	}
	const lang = new Intl.DisplayNames([locale], { type: 'language' });
	let result = lang.of(value);
	result = result.charAt(0).toUpperCase() + result.substring(1);
	return result;
}

/*function transformTitle(value) {
	value = value.replace('-', ' ');
	value = value.split(' ');

	for (let i = 0; i < value.length; i++) {
		value[i] = value[i].charAt(0).toUpperCase() + value[i].substring(1);
	}

	return value;
}*/
