import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'
import { Link, NavLink } from "react-router-dom"

const Cart = () => {

	const {cart,addItem, removeItem,  isInCart, clearCart, totalQuantity} = useContext(CartContext);

	if(totalQuantity == 0) {
		return(<div><h1>No hay productos agregados</h1>
		<Link to={"/"}><button>Volver a catálogo</button></Link></div>)
	}

	return (

<div>
<h1>Mis productos</h1>
<div>
	{cart.map(prod => <CartItem key={prod.id} {...prod} />)}
</div>
<button onClick={()=> clearCart()}>Borar todo</button>
</div>
	)
		
	
}
export default Cart