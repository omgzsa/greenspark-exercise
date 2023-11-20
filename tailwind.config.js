/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
    },
    extend: {
      colors: {
        gspark: {
          light: '#f9f9f9',
          dark: '#212121',
          blue: '#2e3a8c',
          green: '#3b755f',
          beige: '#f2ebdb',
          hover: '#afc6bd',
          frame: '#b0b0b0',
        },
      },
    },
  },
  variants: {},
};
