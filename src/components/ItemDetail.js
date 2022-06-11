
const ItemDetail = ({id,name,img,description,price}) => {

return (
<div>
	{name} 
	<br></br>
	{description}
	<br></br>
	<img src ={img} alt ={name} height="400"/>
	<br></br>
	${price}
</div>
)
}

export default ItemDetail