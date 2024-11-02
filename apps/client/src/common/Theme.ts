// theme.ts
import { createTheme } from "@mui/material/styles";
import { colors } from "./Colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blueMain,
      light: colors.blueLight,
      dark: colors.blueDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.redMain,
      light: colors.redLight,
      dark: colors.redDark,
      contrastText: colors.white,
    },
    background: {
      default: colors.grayLight,
      paper: colors.white,
    },
    text: {
      primary: colors.grayDark,
      secondary: colors.grayMedium,
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export default theme;
