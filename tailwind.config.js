/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
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
      sky: colors.sky, // Reemplazar lightBlue con sky
      stone: colors.stone, // Reemplazar warmGray con stone
      neutral: colors.neutral, // Reemplazar trueGray con neutral
      gray: colors.gray, // Reemplazar coolGray con gray
      slate: colors.slate, // Reemplazar blueGray con slate
    },
  },
  plugins: [],
};
