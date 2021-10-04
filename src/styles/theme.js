import { createMuiTheme } from "@material-ui/core/styles";

const theme = (value) => {
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 800, // default 600
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: { main: "#21396f" },
      secondary: { main: "#ffffff" },
    },
    typography: {
      fontFamily: "Chivo",
    },
  });
};

export default theme;
