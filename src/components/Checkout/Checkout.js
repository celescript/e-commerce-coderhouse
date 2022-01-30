import React, { useState, useContext } from 'react'
import './Checkout.css'

import Recipt from '../Recipt/Recipt'

import checkpic from '../../assets/checkout.svg'

import { OutlinedInput, Button, InputLabel, Alert } from '@mui/material'

import db from '../../firebase/firebaseconfig'
import { collection, addDoc } from 'firebase/firestore';

import CartContext from '../../contexts/CartContext/CartContext'

import { Link } from 'react-router-dom'




const Checkout = () => {
    const initialValues = {
        name: '',
        phone: '',
        email: '',
        email2: ''
    }
    const [form, setForm] = useState(initialValues)
    const [date, setDate] = useState('')
    const [orderId, setOrderId] = useState(null) 
    const [errors, setErrors] = useState({})
    const {products, total, clear} = useContext(CartContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        const newForm = {...form, [name]: value}
        setForm(newForm)
        setErrors(validate(newForm))
        
    }



    const validate = (form) => {
        const {name, phone, email, email2} = form
        const errors = {}

        if(!name) {
            errors.name = 'Please enter your name'
 
        } else if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name)){
            errors.name = 'Please enter a valid name'
        } else {
            errors.name = ''
        }

        if(!phone) {
            errors.phone = 'Please enter your phone'
        } else if(!/^[0-9]+$/.test(phone)) {
            errors.phone = 'Please enter a valid phone'
        } else {
            errors.phone = ''
        }

        if(!email) {
            errors.email = 'Please enter your email'
        } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            errors.email = 'Please enter a valid email'
        } else {
            errors.email = ''
        }

        if(!email2) {
            errors.email2 = 'Please enter your email'
        } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email2)) {
            errors.email2 = 'Please enter a valid email'
        } else if(email2 !== email){
            errors.email2 = 'Emails do not match'
            
        } else {
            errors.email2 = ''
        }

        if(errors.name === '' && errors.phone === '' && errors.email === '' && errors.email2 === '') {
            errors.valid = true
            return errors
        } else {
            errors.valid = false
            return errors
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(new Date().toLocaleDateString())
    
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
        clear()
   }

    return (
        <div className='checkout-container'>
            <h1>Checkout</h1>   
            <hr></hr>
        <div className='big-container'>
        {orderId ?  
            <div className='form-container'>
                <img src={checkpic} alt='confirmed checkout'></img>
                <Alert  variant="outlined" severity="success">
                    Order number #{orderId}  : Your order has been sent. 
                </Alert>
                <Link className='link' to='/' end={true}><Button variant='outlined'>Go back to home</Button></Link>
            </div> : 
        <form className='form-container' onSubmit={handleSubmit}>
                <h2 className='checkoutf-title'>Your information</h2>

                    <InputLabel htmlFor="component-outlined">Full Name</InputLabel>
                    <OutlinedInput
                    value={form.name}
                    onChange={handleChange}
                    name='name'
                    type='text'
                    required
                    error={errors.name !== '' && form.name !== ''}
                    variant="standard"
                    helperText={errors.name}
                    />
                    <strong className='errors'>{errors.name}</strong>
                    
                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                    <OutlinedInput
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone !== '' && form.phone !== ''}
                    name='phone'
                    type='tel'
                    required
                    />
                    <strong className='errors'>{errors.phone}</strong>
                    

                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email !== '' && form.email !== ''}
                    name='email'
                    type='email'
                    required
                    />
                    <strong className='errors'>{errors.email}</strong>
                    

                    <InputLabel htmlFor="component-outlined">Confirm Email</InputLabel>
                    <OutlinedInput
                    value={form.email2}
                    onChange={handleChange}
                    error={errors.email2 !== '' && form.email2 !== ''}
                    name='email2'
                    type='email'
                    required
                    />
                    <strong className='errors'>{errors.email2}</strong>
                    
                
                <Button  type='submit'  variant="contained" disabled={!errors.valid} >
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
