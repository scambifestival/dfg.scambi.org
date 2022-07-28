/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#69088d",
				"primary-hover": "#4E0968",
				"primary-selected": "#EDBBFF",
				"primary-yellow": "#FFD166"
			}
		},
		screens: {
			GalaxyFold: "280px",
			iPhones: "375px",
			SurfaceDuo: "540px",
			tablet: "639px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px"
		}
	},

	plugins: [require("@tailwindcss/forms")]
};
