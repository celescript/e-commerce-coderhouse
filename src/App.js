
import NavBar from './components/NavBar/NavBar.js'
import { ThemeProvider} from '@mui/material/styles';
import theme from './assets/theme'


//JSX
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <NavBar/>
    </div>
    </ThemeProvider>
  );
}

export default App;
