import React, { useState } from 'react'
import './Checkout.css'

import Recipt from '../Recipt/Recipt'

import { OutlinedInput, Button, InputLabel, Alert } from '@mui/material'

import db from '../../firebase/firebaseconfig'
import { collection, addDoc } from 'firebase/firestore';

import CartContext from '../../contexts/CartContext/CartContext'
import { useContext } from 'react'


const Checkout = () => {
    const [form, setForm] = useState([{
        name: '',
        phone: '',
        email: ''
    }])
    const [date, setDate] = useState('')
    const [orderId, setOrderId] = useState(null)

    const {products, total} = useContext(CartContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
        setDate(new Date().toLocaleDateString())
    }

    const sendOrder = () => {
     let neworder = {}
     neworder.buyer = form
     neworder.products = products
     neworder.total = total
    neworder.date = date
        
        pushFirebase(neworder)
    }

    const pushFirebase = async(neworder) => {
        const firebaseOrder = collection( db, 'orders')
        const order = await addDoc(firebaseOrder, neworder)
        setOrderId(order.id)
        console.log(order.id)
   }

    return (
        <div className='checkout-container'>
            <h1>Checkout</h1>   
            <hr></hr>
        <div className='big-container'>
        {orderId ?  <div className='form-container'><Alert  variant="outlined" severity="success">
        Order number #{orderId}  : Your order has been sent. 
      </Alert></div> : <form className='form-container'>
            <h2 className='checkoutf-title'>Your information</h2>

                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                value={form.name}
                onChange={handleChange}
                name='name'
                label="Name"
                />
            
                <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                <OutlinedInput
                value={form.phone}
                onChange={handleChange}
                name='phone'
                label="Phone"
                />
            
            
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                value={form.email}
                onChange={handleChange}
                name='email'
                label="Email"
                />
            
            <Button onClick={sendOrder} variant="contained" >
             Send order
            </Button>
        </form> }

        <div className='recipt-container'>
            <Recipt/>
        </div>
        </div>
        
        </div>
    )
}

export default Checkout
