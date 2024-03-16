/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				current: 'currentColor',
				"primary": "#141a29",
				"secondary": "#ffa41b",
				"btn-background": "#111623",
				white: "#fff",
				black: "#000000",
			},
			boxShadow: {
				card: "0px 4px 17px #00000040;",
			},
			backgroundImage: {
				radial : 'radial-gradient(82.15% 82.15% at 50% 17.85%, rgba(0, 0, 0, 0.00) 0%, #141A29 90.2%)',
			},
			fontFamily: {
				"kenia-one" : '"Keania One"',
				poppins: 'Poppins'
			},
			gridTemplateColumns: {
				custom: 'repeat( auto-fit, minmax(250px, 1fr) )'
			}
		}
	},
	plugins: [],
}
