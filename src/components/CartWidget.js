import React  from 'react';
import fotoLibro from './images/fotoLibro.png';
import "./styles/CartWidget.css"
import { useContext } from 'react';
import { useState, useEffect, createContext } from "react"
import CartContext from '../context/CartContext';
import carrito from './images/shopping-bag.png'
import { Link } from 'react-router-dom'

const  CartWidget = () => {

	const { getCartQuantity, totalQuantity } = useContext(CartContext);
	if(totalQuantity !==0) {
		return (
			<Link to='/cart'>
				<div><img src={carrito} alt="Libro" height={50}/>
				<h4>Su carrito de compras</h4>
				<h4>{ totalQuantity }</h4>
				</div>
				</Link>
			 
		) 
	}
	
}

export default CartWidget