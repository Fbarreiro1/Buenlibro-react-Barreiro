import React  from 'react';
import { useState } from 'react'

const ItemCount = ({stock = 3, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div>          
            <div>
            <button  onClick={increment}>+</button>
                
                <h4 >{quantity}</h4>
                <button  onClick={decrement}>-</button>   
            </div>
            <div>
                <button  onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount