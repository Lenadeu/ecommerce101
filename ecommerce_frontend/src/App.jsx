import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';

import './App.css';


function App() {

  //save cart
  const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchAppData = async () => {

      //get number of items in cart together with products.
      //?something is a query parameter 
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    
    };

    fetchAppData();

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
