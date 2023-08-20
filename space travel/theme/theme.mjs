import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary:{
      main:'rgba(77, 71, 195, 1)'
    },
    secondary:{
      main:'rgba(232, 231, 255, 1)'
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

export default theme;
