
import NavBar from './components/NavBar/NavBar.js'

import {Outlet } from 'react-router-dom'
import {CartProvider} from './contexts/CartContext/CartContext.js';



//JSX
function App() {
  return (
  
      <div className='App'>
        <CartProvider>
          <NavBar/>
          <Outlet/>
        </CartProvider>
        
      </div>

  );
}

export default App;
