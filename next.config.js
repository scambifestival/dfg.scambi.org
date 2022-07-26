/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['picsum.photos', 'images.tommi.space'],
	},
};

module.exports = nextConfig;
