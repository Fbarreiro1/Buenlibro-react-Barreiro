import React  from 'react';
import { Link } from "react-router-dom"

const  Item= ({id, name, price, img}) => {
	return ( 
<l1>
	<div>
	{name}{"\n\r"}
	{"$"}{price}
	<br></br>
	<img src ={img} alt ={name} height="200"/>
	<br></br>
	<Link to={`/detail/${id}`} >Ver detalle</Link>
	
	</div>
</l1>


	)

}

export default Item