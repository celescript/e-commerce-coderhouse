
import './NavBar.css'

import logo from '../../assets/shuriken.svg'

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";



import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';




export default function NavBar() {
  return (
    <AppBar position="static">
      <nav>
      <Link className='link' to='/'>
          <div className="container-logo">
                <h1>
                  TEND</h1>
                  <img src={logo} alt="tendo shuriken logo" />
            
            
          </div>
        </Link>
        
        <ul>
          <ButtonGroup aria-label="text button group">
            <li>
              <NavLink className='link' to='/'
              end={true}>
                <Button variant='contained' color='secondary'>Home</Button>
              </NavLink>
            </li>

            <li>
               <NavLink className='link' to="/category/all">
                <Button variant='contained' color='secondary'>Products</Button>
              </NavLink>
            </li>

            <li>
              <NavLink className='link' to="/Contact">
                <Button variant='contained' color='secondary'>Contact</Button>
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to="/About">
                <Button  variant='contained' color='secondary'>About</Button>
              </NavLink>
            </li>
          </ButtonGroup>
        </ul>
        
        <CartWidget />
          
      </nav>
    </AppBar>
  );
}