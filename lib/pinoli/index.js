export async function getPinoli() {
	try {
		const response = await fetch(
			'https://pino.scambi.org/api/database/rows/table/313/?user_field_names=true&filter__field_2615__single_select_equal=1393',
			{
				method: 'GET',
				headers: { Authorization: 'Token ' + process.env.BASEROW },
			}
		);

		if (response.ok) {
			const pinoli = await response.json();
			return pinoli.results;
		} else {
			return response.status;
		}
	} catch (err) {
		console.log(err);
	}
}

export async function getPinolo(id) {
	try {
		const response = await fetch(
			`https://pino.scambi.org/api/database/rows/table/313/${id}/?user_field_names=true`,
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

export async function getHostBio(arr) {
	const hosts = await Promise.all(
		arr.map(async (host) => {
			try {
				const response = null;
				if (host.value !== 'Staff Scambi') {
					response = await fetch(
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
				} else {
					return 'To be added';
				}
			} catch (err) {
				console.log(err);
			}
		})
	);
	return hosts;
}
