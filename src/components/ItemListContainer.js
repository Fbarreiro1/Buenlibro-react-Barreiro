import React  from 'react';
import ItemList from "./ItemList"
import {useState,useEffect} from "react"
import {getProducts,getProductByCategory} from "../API/asyncMock"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'

const  ItemListContainer = (props) => {
	const [products,setProducts] = useState([])

	const {categoryId} = useParams();

	const [loading, setLoading] = useState(true);

	const [title, setTitle] = useState('Bienvenidos')

	useEffect(()=> {

		setLoading(true);
		
		const collectionRef = categoryId ? ( 
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
	},[categoryId])

	useEffect(() => {
        setTimeout(() => {
            setTitle('Estos son nuestro productos')
        }, 3000)
    }, [])


	if(loading) {
		return (
			<div><h1>Cargando...</h1>
			
			</div>
		)
	}
	
	
	return (
		<div>
		<h2>{title}</h2>
		{ products.length > 0 
                ? <ItemList products={products}/>
                : <h1>No hay productos</h1>
            }
		</div>
	)

}

export default ItemListContainer