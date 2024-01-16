/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rohan_green': '#124632',
				'rohan_white': '#fefdfa',
				'rohan_red': '#924d33',
				'rohan_gold': '#d2b25f'
			}
		},
	},
	variants: {
		extend: {}
	},
	plugins: [],
}
