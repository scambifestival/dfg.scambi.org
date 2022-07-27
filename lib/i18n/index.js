export function i18n(data) {
	const paths = data.map((el) => {
		return {
			params: {
				id: el.replace('.it.md', ''),
				locale: 'it',
			},
			params: {
				id: el.replace('.en.md', ''),
				locale: 'en',
			},
		};
	});
	return paths;
}
