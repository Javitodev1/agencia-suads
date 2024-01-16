/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'rohan_green': { DEFAULT: '#124632', 100: '#040e0a', 200: '#071c14', 300: '#0b291e', 400: '#0e3727', 500: '#124632', 600: '#238861', 700: '#35cb91', 800: '#78dcb6', 900: '#bceeda' },
			'rohan_gold': { DEFAULT: '#fefdfa', 100: '#544311', 200: '#a98721', 300: '#d2b25f', 400: '#eddca6', 500: '#fefdfa', 600: '#fefefc', 700: '#fefefc', 800: '#fffefd', 900: '#fffffe' },
			'rohan_red': { DEFAULT: '#924d33', 100: '#1d0f0a', 200: '#3b1f15', 300: '#582e1f', 400: '#763e29', 500: '#924d33', 600: '#be6747', 700: '#ce8d75', 800: '#dfb3a3', 900: '#efd9d1' },
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
}
