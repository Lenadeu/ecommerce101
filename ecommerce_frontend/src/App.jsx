import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

import './App.css';


function App() {

  //save cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //get number of items in cart together with products.
    //?something is a query parameter 
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });
  }, []) //run once 

  return (
    //all pages of the web-site  
    <Routes>

      {/* path - at the url, element - the component to display -  */}
      {/* index means "/", main page */}
      {/* pass cart into HomePage and into CheckoutPage via prop */}
      <Route index element={<HomePage cart = {cart} />} />
      <Route path="checkout" element={<CheckoutPage cart = {cart} />} />
      <Route path="orders" element={<OrdersPage cart = {cart} />} />
      <Route path="tracking" element={<TrackingPage />} />

    </Routes>

  );
}

export default App;
