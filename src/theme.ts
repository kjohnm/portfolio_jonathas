import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#222',
    },
    secondary: {
      main: '#DDD',
    },
  },
  typography:{
    fontFamily: [
      "Monospace",
    ].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme;