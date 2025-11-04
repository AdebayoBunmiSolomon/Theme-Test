export const darkThemeColors = {
  black: "#FFFFFF",
  bgColor: "#000000",
  blue: "#6668a4",
};

export const lightThemeColors = {
  black: "#000000",
  bgColor: "#FFFFFF",
  blue: "#0e15dc",
};

// Create a theme map object
export const themeColors = {
  dark: darkThemeColors,
  light: lightThemeColors,
} as const;
