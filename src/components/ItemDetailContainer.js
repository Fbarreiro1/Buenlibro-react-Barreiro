import React  from 'react';
import { useState, useEffect } from "react"
import { getProductByID } from "../API/asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
	const [products,setProducts] = useState()
	const [loading, setLoading] = useState(true)
	const {productId} = useParams();

	useEffect(()=> {

		const docRef = doc(db, 'products', productId)

		getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProducts(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductById(productId).then(response => {
        //     setProduct(response)
        // })
    }, [productId])

	if(loading) {
        return <h1>Cargando...</h1>
    }

	return (
		<div>
			<h1>Detalle del producto</h1>
			<ItemDetail {... products}/>
		</div>
	)
}
export default ItemDetailContainer