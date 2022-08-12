/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	images: {
		domains: [
			'picsum.photos',
			'images.tommi.space',
			'nuvola.scambi.org',
			'x.scambi.org',
		],
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
