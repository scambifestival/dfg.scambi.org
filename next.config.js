/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['picsum.photos', 'images.tommi.space'],
	},
	i18n: {
		// providing the locales supported by your application
		locales: ['en', 'it'],
		//  default locale used when the non-locale paths are visited
		defaultLocale: 'en',
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
			};
		}

		return config;
	},
};

module.exports = nextConfig;
