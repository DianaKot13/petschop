import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
      color: "#282828"
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
);


// up to date, audited 322 packages in 2s

// 112 packages are looking for funding
//   run `npm fund` for details

// 2 vulnerabilities (1 low, 1 high)

// To address all issues, run:
//   npm audit fix

// Run `npm audit` for details.