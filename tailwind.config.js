/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.tsx'],
	theme: {
		extend: {
			boxShadow: {
				rounded: '0 0 25px #00000080'
			}
		},
	},
	plugins: [],
};
