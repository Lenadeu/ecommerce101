import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './Pages/HomePage'

function App() {

  return (
    //all pages of the web-site  
    <Routes>
      {/* a page */} 
      {/* path - at the url, element - the component to display -  */}
      {/* index means "/", main page */}
      <Route index element = {<HomePage />} />
      <Route path = "checkout" element = {<div>Test checkout</div>} />
      
      </Routes>
    
  )
}

export default App
