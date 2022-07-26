/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['picsum.photos', 'images.tommi.space'],
	},
	i18n: {
		// providing the locales supported by your application
		locales: ['en', 'it-IT'],
		//  default locale used when the non-locale paths are visited
		defaultLocale: 'it-IT',
	},
};

module.exports = nextConfig;
