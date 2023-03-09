import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";

// I need to override the default theme to add the browser object to the theme
// so I can use it in the makeStyles function
//

// The default material UI theme, in a future we could se dynamic values here instad of hardcoding the values.
let mainTheme = createTheme({
  palette: createPalette({
    primary: {
      main: "rgb(255, 165, 0)",
      contrastText: "#262626",
    },
    secondary: {
      main: "#262626",
      contrastText: "white",
    },
  }),
  typography: {
    fontFamily: ["'Poppins', sans-serif"].join(","),
    fontSize: 12,
    button: {
      fontWeight: 900,
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
