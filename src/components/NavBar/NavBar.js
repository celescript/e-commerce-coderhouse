import React from 'react' //este paso se puede obviar porque ya no es necesario
import './NavBar.css'
import logo from '../../cat.png';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";


export default function NavBar() {
  return (
    <AppBar position="static">
      <nav>
        <div className="container-logo">
          <img src={logo} alt="cat logo" />
        </div>
        <ul>
          <ButtonGroup variant="text" aria-label="text button group">
            <li>
              <Button className="button">Home</Button>
            </li>

            <li>
              <Button className="button">Products</Button>
            </li>

            <li>
              <Button className="button">Contact</Button>
            </li>

            <li>
              <Button className="button">About</Button>
            </li>
          </ButtonGroup>
        </ul>
      </nav>
    </AppBar>
  );
}