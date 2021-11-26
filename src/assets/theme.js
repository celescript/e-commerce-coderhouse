import { createTheme } from '@mui/material/styles';




const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8e3c',
    },
    secondary: {
        main: '#0d0d0d',
        contrastText: '#ff8e3c'
    }
  },
});



export default theme