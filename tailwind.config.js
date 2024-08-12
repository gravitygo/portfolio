import { addIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors([
      "ic",
      "mingcute",
      "mdi",
      "material-symbols"
    ]),
    require('tailwind-scrollbar'),
  ],
}

