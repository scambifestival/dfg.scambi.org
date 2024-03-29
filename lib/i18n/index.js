export function i18n(data, locales) {
	const paths = data
		.map((el) =>
			locales.map((locale) => ({
				params: {
					id: `${el[locale]}`,
				},
				locale,
			}))
		)
		.flat();
	return paths;
}
