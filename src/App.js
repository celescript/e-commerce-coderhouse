
import NavBar from './components/NavBar/NavBar.js'
import {ThemeProvider} from '@mui/material/styles';
import theme from './assets/theme'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';



//JSX
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar/>
        
        <ItemListContainer/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
