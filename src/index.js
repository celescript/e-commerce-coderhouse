import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './pages/Home'
import Categories from './pages/Categories'
import Item from './pages/Item.js'
import About from './pages/About'
import Stores from './pages/Stores'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}> 
            <Route index element={<Home />}/> 
            <Route path='/category/:id' element={<Categories />} />      
            <Route path='/product/:id' element={<Item />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cart/checkout' element={<CheckoutPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/stores' element={<Stores/>} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

