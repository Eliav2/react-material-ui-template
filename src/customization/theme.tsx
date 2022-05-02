import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { LinkBehavior } from "./themeCustomization";
import config from "./config";

const theme = createTheme({
  direction: config.direction,
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
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
});

export default theme;
