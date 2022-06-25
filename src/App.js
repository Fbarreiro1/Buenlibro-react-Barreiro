import React from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState,createContext } from 'react'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart';

  
  

function App() {
  
  return (
    <div className="App">
      
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = {<ItemListContainer saludo='Bienvenidos a BuenLibro'/>} />
        <Route path="/category/:categoryId" element = {<ItemListContainer saludo='Bienvenidos a BuenLibro'/>} />
        <Route path="/detail/:productId" element = {<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
    
  );
}

export default App;
