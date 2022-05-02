import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { LinkBehavior } from "./themeCustomization";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // make material-ui buttons use the react-router-dom link behavior
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;
