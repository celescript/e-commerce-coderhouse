
import NavBar from './components/NavBar/NavBar.js'

import {Outlet } from 'react-router-dom'



//JSX
function App() {
  return (
  
      <div className='App'>
        <NavBar/>
        
         
          <Outlet/>
        
        
      </div>

  );
}

export default App;
