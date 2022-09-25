import React,{ Fragment, useState }  from 'react';
import Home from './pages/home/home';
import Favorite from './pages/Favorite/favorite';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/ProductDetails.tsx/Details';
import CreateProduct from './pages/CreateProduct/createProduct';



function App() {



  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path ="/productfavorites" element ={<Favorite/>} ></Route>
    <Route path = "product/:id" element={<Details/>} />
    <Route path = "product/create" element={<CreateProduct/>} />
   </Routes>
 
    </>
  )
}

export default App;
