import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./customization/theme";
import { RTLSupport } from "./customization/rtl";
import config from "./customization/config";

// for rtl setup
document.dir = config.direction;

const TopApp = () => {
  return (
    <React.StrictMode>
      <RTLSupport>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </RTLSupport>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<TopApp />);
