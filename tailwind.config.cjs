/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/hero-bg.jpg')",
			  }
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
