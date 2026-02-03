import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';

import './App.css'

function App() {

  return (
    //all pages of the web-site  
    <Routes>  
      {/* path - at the url, element - the component to display -  */}
      {/* index means "/", main page */}
      <Route index element = {<HomePage />} />
      <Route path = "checkout" element = {<CheckoutPage />} />
      
    </Routes>
    
  )
}

export default App
