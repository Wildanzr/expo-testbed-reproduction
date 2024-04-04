/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./views/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: "#F8F6FF",
          200: "#F1EDFE",
          300: "#EAE4FE",
          400: "#D3C6FC",
          500: "#7048F6",
          600: "#6541DD",
          700: "#5A3AC5",
          800: "#5436B9",
          900: "#432B94",
        },
        secondary: {
          200: "#FDEFFF",
          300: "#FCE7FF",
          400: "#F8CEFF",
          500: "#E961FF",
          600: "#D257E6",
          700: "#BA4ECC",
          800: "#AF49BF",
          900: "#8C3A99",
        },
        error: {
          200: "#F2D0A7",
          300: "#ECB97B",
          400: "#E5A14F",
          500: "#DF8A23",
          600: "#B26E1C",
          700: "#865315",
          800: "#59370E",
          900: "#2D1C07",
        },
        success: {
          200: "#D1FADF",
          300: "#A6F4C5",
          400: "#6CE9A6",
          500: "#32D583",
          600: "#12B76A",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
        "background": "#FAF4FF",
        "berry": "#BA86FC",
      },
      fontFamily: {
        "gilroy-reg": ["Gilroy-Regular"],
        "jakarta-reg": ["PlusJakartaSans-Regular"],
        "jakarta-bold": ["PlusJakartaSans-Bold"],
        "jakarta-light": ["PlusJakartaSans-Light"],
        "poppins-reg": ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-light": ["Poppins-Light"],
      },
      fontSize: {
        "heading1": ['32px', '38.4px'],
        "heading2": ['23px', '28.8px'],
        "heading3": ['20px', '2px4'],
        "heading4": ['10px', '21.6px'],
        "body1": ['18px', '21.6px'],
        "body2": ['16px', '19.2px'],
        "body3": ['14px', '16.8px'],
        "body4": ['12px', '14.4px'],
        "body5": ['10px', '12px'],
        "countdown": ['42px', '50.4px'],
      }
    },
  },
  plugins: [],
}