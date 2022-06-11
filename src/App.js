import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  // const [page,setPage] = useState("list")
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = {<ItemListContainer saludo='Bienvenidos a BuenLibro'/>} />
        <Route path="/category/:categoryId" element = {<ItemListContainer saludo='Bienvenidos a BuenLibro'/>} />
        <Route path="/detail/:productId" element = {<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
    /*<div className="App">
      <div>
        <button  onClick={() => setPage("list")}>List</button>
        <button onClick={() => setPage("detail")}>Details</button>
        </div>
        <NavBar />
       {page == "list" && <ItemListContainer saludo='Bienvenidos a BuenLibro'/>}
        {page == "detail" && <ItemDetailContainer />}
      
    </div>*/
  );
}

export default App;
