import './App.css'

import NavBar from './components/NavBar/NavBar.js'
import {CartProvider} from './contexts/CartContext/CartContext.js';
import customTheme from './assets/theme'

import { ThemeProvider } from '@mui/material';

import {Outlet} from 'react-router-dom'





//JSX
function App() {
  return (
    
      <div className='App'>
        <ThemeProvider theme={customTheme}>
          <CartProvider>
            <NavBar/>
            <Outlet/>
          </CartProvider>
        </ThemeProvider>
      </div>

  );
}

export default App;
