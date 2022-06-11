import Item	from "./Item"

const  ItemList = ({products}) => {
	return (
		<ul>
			{products.map(producto=> <Item key={producto.id} {...producto}/>)}
			</ul>
	)

}

export default ItemList