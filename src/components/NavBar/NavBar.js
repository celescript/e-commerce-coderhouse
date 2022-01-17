
import './NavBar.css'

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
             <h1>odele.</h1>
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
              <NavLink className='link' to="/stores">
                <Button variant='contained' color='secondary'>Stores</Button>
              </NavLink>
            </li>
            <li>
              <NavLink className='link' to="/about">
                <Button  variant='contained' color='secondary'>About</Button>
              </NavLink>
            </li>
          </ButtonGroup>
        </ul>
        
        <Link className='link' to="/cart">
          <CartWidget/>
        </Link>
          
      </nav>
    </AppBar>
  );
}