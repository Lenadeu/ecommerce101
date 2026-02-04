import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

import './App.css';

function App() {

  return (
    //all pages of the web-site  
    <Routes>  

      {/* path - at the url, element - the component to display -  */}
      {/* index means "/", main page */}
      <Route index element = { <HomePage /> } />
      <Route path = "checkout" element = { <CheckoutPage /> } />
      <Route path = "orders" element = { <OrdersPage /> } />
      <Route path = "tracking" element = { <TrackingPage />} />

    </Routes>
    
  );
}

export default App;
