/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#69088d',
				'primary-hover': '#4E0968',
				'primary-selected': '#EDBBFF',
				'primary-yellow': '#FFD166',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
