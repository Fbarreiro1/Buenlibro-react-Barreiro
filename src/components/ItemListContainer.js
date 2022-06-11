import ItemList from "./ItemList"
import {useState,useEffect} from "react"
import {getProducts,getProductByCategory} from "../API/asyncMock"
import { useParams } from "react-router-dom"

const  ItemListContainer = (props) => {
	const [products,setProducts] = useState([])

	const {categoryId} = useParams();

	const [loading, setLoading] = useState(true);

	useEffect(()=> {
		setLoading(true);
		if(!categoryId) {
			getProducts().then(res => {
				setProducts(res)
			}).finally(() => {
				setLoading(false)
			})
		}
		else {
			getProductByCategory(categoryId).then(res => {
				setProducts(res)
			}).finally(() => {
				setLoading(false)
			})
		}
	},[categoryId])

	if(loading) {
		return (
			<div><h1>Cargando...</h1>
			
			</div>
		)
	}
	else {
	
	return (
		<div>
		<h2>Catálogo BuenLibro</h2>
		<ItemList products = {products}/>
		</div>
	)
} 
}

export default ItemListContainer