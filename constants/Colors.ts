const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
const activeColorTint = "#BA86FC";

export default {
  text: {
    primary: "#141627",
    secondary: "#677487",
    tertiary: "#98A2B3",
    accent: "#FFFFFF",
  },
  gradient: {
    primary: {
      start: "#B98EE5",
      end: "#744AFF",
    },
    secondary: {
      start: "#FEFEFE",
      end: "#C7C2E0",
    },
  },
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
    200: "#FEE4E2",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92D20",
    700: "#D92D20",
    800: "#912018",
    900: "#7A271A",
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
  background: "#FAF4FF",
  berry: "#BA86FC",
  activeColorTint,
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
