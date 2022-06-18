import fotoLibro from './images/fotoLibro.png';
import "./styles/NavBar.css"
	import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom"
	
	const  NavBar = () => {

		return (
			<div>
				
		<nav>
		<img src={fotoLibro} alt="Libro" />
			<Link to={"/"}><h1>BuenLibro</h1></Link>
				<button ><a href="#">Inicio</a></button>
				<button ><a href="#">Productos</a></button>
				<button ><a href="#">Blog</a>
				</button><button ><a href="#">Contacto</a>
				</button><button ><a href="#">Nosotros</a>
				</button>
				<input type="search"  placeholder="Buscar..."
					aria-label="Search"/>
				<button ><a href="#">Entrar</a></button>
				<button ><a href="#">Registrarse</a></button>
				<CartWidget/>
				<br></br>
				<div className="categorias">
				<NavLink style={{padding: 5}} to={"/category/fantasia"} className= {({isActive}) => isActive ? "clickeado" : "noClickeado"} ><h1>Fantasía</h1></NavLink>
				<NavLink style={{padding: 5}} to={"/category/romance"} className= {({isActive}) => isActive ? "clickeado" : "noClickeado"}><h1>Romance</h1></NavLink>
				<NavLink style={{padding: 5}} to={"/category/historia"} className= {({isActive}) => isActive ? "clickeado" : "noClickeado"}><h1>Historia</h1></NavLink>
				<NavLink style={{padding: 5}} to={"/category/terror"} className= {({isActive}) => isActive ? "clickeado" : "noClickeado"}><h1>Terror</h1></NavLink>
				
				</div>
				
			</nav>

			

			
			
			</div>
		
		
	)
}
	export default NavBar