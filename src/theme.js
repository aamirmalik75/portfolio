import { createTheme } from "@mui/material";

export const tokens = () => ({
  ...({
    primary: {
      100: "#d7d8da",
      200: "#b0b2b5",
      300: "#888b90",
      400: "#61656b",
      500: "#393e46",
      600: "#2e3238",
      700: "#22252a",
      800: "#17191c",
      900: "#0b0c0e"
    },
    greenAccent: {
      100: "#dcf5ed",
      200: "#b8ebda",
      300: "#95e0c8",
      400: "#71d6b5",
      500: "#4ecca3",
      600: "#3ea382",
      700: "#2f7a62",
      800: "#1f5241",
      900: "#102921"
    },
  })
})

export const themeSettings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        light: colors.greenAccent[100],
        main: colors.greenAccent[500],
        dark: colors.greenAccent[700],
      },
      background: {
        default: colors.primary[500],
      }
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(','),
        fontSize: 14,
      },
    },
  };
}

const theme = createTheme(themeSettings());
export default theme;
