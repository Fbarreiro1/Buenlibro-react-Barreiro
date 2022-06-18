import fotoLibro from './images/fotoLibro.png';
import "./styles/CartWidget.css"
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import carrito from './images/shopping-bag.png'
import { Link } from 'react-router-dom'

const  CartWidget = () => {

	const { getCartQuantity, totalQuantity } = useContext(CartContext)

	return (
		<div>
			<Link to='/cart'>
			<img src={carrito} alt="Libro" height={50}/>
			<h4>Su carrito de compras</h4>
			<h4>{ totalQuantity }</h4>
			</Link>
		</div>
		 
	) 
}

export default CartWidget