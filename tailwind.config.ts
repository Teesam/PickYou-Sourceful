import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': "390px",
        'md': '748px',
        'lg': '1024px',
        'xl': '1280px',
        "2xl": '1536px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        myWhite: '#fff',
        grey: "#f2ebf0",
        deepGrey: '#777877',
        black: "#000",
        transparentBlack: "#0006",
        orange: '#ff913d',
        hoverColor: '#f2ede9',
        red: '#fc031c',
        lightGrey: '#f0f0f0',
        brown: '#555'
      }
    },
  },
  mode: 'jit',
  plugins: [],
}
export default config
