/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      // Actualizaciones de nombres de colores
      sky: colors.sky, 
      stone: colors.stone, 
      neutral: colors.neutral, 
      gray: colors.gray, 
      slate: colors.slate, 
    },
  },
  plugins: [],
};
