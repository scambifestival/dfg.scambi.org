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
