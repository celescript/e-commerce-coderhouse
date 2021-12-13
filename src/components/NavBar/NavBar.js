
import './NavBar.css'

import logo from '../../assets/shuriken.svg'

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { Cart3 } from 'react-bootstrap-icons';

import {Link} from 'react-router-dom'



export default function NavBar() {
  return (
    <AppBar position="static">
      <nav>
        <div className="container-logo">
          
          <h1>
            TEND</h1>
            <img src={logo} alt="tendo shuriken logo" />

          
        </div>

        
        <ul>
          <ButtonGroup aria-label="text button group">
            <li>
              <Link className='link' to='/'>
                <Button variant='contained' color='secondary'>Home</Button>
              </Link>
            </li>

            <li>
               <Link className='link' to="/Products">
                <Button variant='contained' color='secondary'>Products</Button>
              </Link>
            </li>

            <li>
              <Link className='link' to="/Contact">
                <Button variant='contained' color='secondary'>Contact</Button>
              </Link>
            </li>
            <li>
              <Link className='link' to="/About">
                <Button  variant='contained' color='secondary'>About</Button>
              </Link>
            </li>
          </ButtonGroup>
        </ul>
        
        <Cart3 className='cart-icon' size={15} />
          
      </nav>
    </AppBar>
  );
}