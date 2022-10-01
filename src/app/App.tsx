import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import {createTheme, ThemeProvider} from "@mui/material";
import { cyan, deepPurple } from '@mui/material/colors';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: cyan[50],
        main: cyan[500],
        dark: cyan[700],
      },
      secondary: {
        light: deepPurple[50],
        main: deepPurple[500],
        dark: deepPurple[700],
      }
    },
    components: {
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: 'h6',
            fontWeight: '600',
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
