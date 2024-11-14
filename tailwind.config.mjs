/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'
import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
        figtree: ["Figtree Variable", "sans serif"],
      },
		},
	},
	plugins: [animations, typography],
}
