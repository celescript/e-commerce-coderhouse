import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
  <footer className='footer-container'>
    <div className='footerlist-container'>
      
      <ul> 
      <p>CONTACT US</p>
        <li>1234567891</li>
        <li>123 Fake Street</li>
        <li>odeleonline@odele.com</li>
      </ul>
    
    
      
      <ul>
      <p>QUICK LINKS</p>
        <li><Link className='link' to='/category/all'>Products</Link></li>
        <li><Link className='link' to='/stores'>Stores</Link></li>
        <li><Link className='link' to='/about'>About</Link></li>
      </ul>
    
      
      <ul> 
      <p>SHOP</p>
      <li><Link className='link' to='/category/perfume'>Perfume</Link></li>
        <li><Link className='link' to='/category/creams'>Creams</Link></li>
        <li><Link className='link' to='/category/serums'>Serums</Link></li>
        <li><Link className='link' to='/category/face%20masks'>Face Masks</Link></li>
      </ul>
    </div>

    <div className='footersocial-section'>
      <ul>
        <li><TwitterIcon /></li>
        <li><InstagramIcon /></li>
        <li><FacebookIcon/></li>
      </ul>
    </div>

    <div className='footer-credits'>
      <Link to='/' className='link'><h1>odele.</h1></Link>
      <p> by </p>
      <a rel="noreferrer" className='link' href="https://www.linkedin.com/in/celestefernandez00/?locale=en_US" target="_blank"><h2>Celeste Fernandez</h2></a>
    </div>


    

  </footer>
  );
};

export default Footer;
