import React from 'react'
import {Provider} from 'react-redux';
import Home from './components/home/Home'
import store from './components/store/Store';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartData from './components/home/CartData';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/homedata' element={<CartData/>}/>
      </Routes>
      {/* <Home></Home> */}
      </BrowserRouter>
    </Provider>
  )
}

export default App
