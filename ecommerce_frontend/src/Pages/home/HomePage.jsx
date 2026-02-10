import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart, loadCart }) {

    //useState - gives array with 2 values - a valiable and a function to update this value 
    //save products 
    const [products, setProducts] = useState([]); //starting value is empty array 

    //useEffect let us control when the code run. default - every time the component is created 
    //or updated 
    useEffect(() => {
        //if we use await it must be inside async function 
        const getHomeData = async () => {
            //await is waiting to code to finish
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        //we must then run the function 
        getHomeData();

    }, []); // [] - dependency array, empty means the code will run once once when the component is
    //created 

    return (
        <>
            <title> Ecommerce project </title>

            {/* Pass the cart value into header */}
            <Header cart={cart} />

            <div className="home-page">

                <ProductsGrid products={products} loadCart={loadCart}/>

            </div>

        </>

    );
}