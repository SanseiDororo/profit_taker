import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172,67%,45%)',
        'very-dark-cyan': 'hsl(183,100%,15%)',
        'dark-greyish-cyan': 'hsl(186,14%,43%)',
        'grayish-cyan': 'hsl(184,16%,56%)',
        'light-grayish-cyan': 'hsl(185,41%,84%)',
        'very-light-grayish-cyan': 'hsl(189,41%,97%)',
      },
    },
  },
  plugins: [],
}
export default config
