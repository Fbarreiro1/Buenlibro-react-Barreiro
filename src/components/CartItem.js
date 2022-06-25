import React  from 'react';
import { Link } from "react-router-dom"
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const  CartItem= ({id, name, price, img, quantity,}) => {

	const { removeItem} = useContext(CartContext);

	return ( 
<l1>
<h2 key={id}>{name} X {quantity} Unidades </h2>
{img}
<h3>Precio por unidad ${price}</h3>
<button onClick={()=> removeItem(id)}>Eliminar producto</button>
</l1>


	)

}

export default CartItem