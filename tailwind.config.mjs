/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rohan_green': '#124632',
				'rohan_white': '#fefdfa',
				'rohan_red': '#4E1500',
				'rohan_gold': '#F8D885',
			},
			fontFamily: {
				'baskerville': ['"Libre Baskerville"']
			},
		},
	},
	variants: {
		extend: {}
	},
	plugins: [],
}
