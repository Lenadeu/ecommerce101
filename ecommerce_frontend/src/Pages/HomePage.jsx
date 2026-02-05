import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';

export function HomePage({ cart }) {

    //useState - gives array with 2 values - a valiable and a function to update this value 
    //save products 
    const [products, setProducts ] = useState([]); //starting value is empty array 



    //useEffect let us control when the code run. default - every time the component is created 
    //or updated 
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            });
        

    }, []); // [] - dependency array, empty means the code will run once once when the component is
    //created 
    
    return (
        <>
            <title> Ecommerce project </title>

            {/* Pass the cart value into header */}
            <Header cart={cart} />

            <div className="home-page">

                <div className="products-grid">
                    {/* looping throu products array */}
                    {products.map((product) => {

                        return(

                        <div key={product.id} className="product-container">
                            <div className="product-image-container">
                                <img className="product-image"
                                    src={product.image} />
                            </div>

                            <div className="product-name limit-text-to-2-lines">
                                {product.name}
                            </div>

                            <div className="product-rating-container">
                                <img className="product-rating-stars"
                                    src={`/images/ratings/rating-${product.rating.stars * 10}.png`} />
                                <div className="product-rating-count link-primary">
                                    {product.rating.count}
                                </div>
                            </div>

                            <div className="product-price">
                                €{(product.priceCents/100)}
                            </div>

                            <div className="product-quantity-container">
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>

                            <div className="product-spacer"></div>

                            <div className="added-to-cart">
                                <img src="images/icons/checkmark.png" />
                                Added
                            </div>

                            <button className="add-to-cart-button button-primary">
                                Add to Cart
                            </button>
                        </div>
                        );
                    }
                    )
                    }

                </div>

            </div>

        </>

    );
}