import React  from 'react';
import Item	from "./Item"
import { memo } from 'react'

const  ItemList = ({products}) => {
	return (
		<ul>
			{products.map(producto=> <Item key={producto.id} {...producto}/>)}
			</ul>
	)

}

export default memo(ItemList)