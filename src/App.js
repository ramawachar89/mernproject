import React from 'react';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/myOrder';
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div >
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/creatuser" element={<Signup/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/myorders" element={<MyOrder/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
