/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				turquase : '#EFF7FF',
				skyblue: "#003A74"
			},
			FontFace : {
				playfair : "var(--playfair-display)"
			}
		},
	},
	plugins: [],
}
