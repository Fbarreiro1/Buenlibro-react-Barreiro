import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({id,name,img,description,price, stock}) => {
	const [quantityAdded, setQuantityAdded] = useState(0)
	
    const { addItem, removeItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }
	
return (
<div>
	{name} 
	<br></br>
	{description}
	<br></br>
	<img src ={img} alt ={name} height="300"/>
	<br></br>
	${price}

	{ quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <div><Link to='/cart'>Terminar compra</Link></div>
                }
				
</div>
)
}

export default ItemDetail