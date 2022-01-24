import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'

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
        <li>logo</li>
        <li>logo</li>
        <li>logo</li>
      </ul>
    </div>

    <div className='footer-credits'>
      <h1>Celes</h1>
    </div>


    

  </footer>
  );
};

export default Footer;
