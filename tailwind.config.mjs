/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '##FF5C5F',
				secondary: '#313131',
				dark: '#2F2E39',
				light: '#EAEAEA'

			}
		},
		fontFamily: {
			'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: [],
}
