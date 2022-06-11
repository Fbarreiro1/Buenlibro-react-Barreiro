import { useState, useEffect } from "react"
import { getProductByID } from "../API/asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
	const [products,setProducts] = useState()
	const {productId} = useParams();
	useEffect(()=> {
		getProductByID(productId).then(response => {
			setProducts(response)
		})
	},[])

	return (
		<div>
			<h1>Detalle del producto</h1>
			<ItemDetail {... products}/>
		</div>
	)
}
export default ItemDetailContainer