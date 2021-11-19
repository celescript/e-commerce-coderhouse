import { dividerClasses } from '@mui/material'
import React from 'react' //este paso se puede obviar porque ya no es necesario
import './NavBar.css'
import logo from './assets/logo.svg'

export default function NavBar() {
    return(
        <nav>
            <div className='container-logo'> 
            <img src={logo} alt='PONER LOGO CON IMG IMPORTADO DESDE ASSETS' />
            </div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    )
}