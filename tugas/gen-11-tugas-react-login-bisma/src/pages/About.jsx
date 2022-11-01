import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function About() {
    const { token } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    function getAllProducts() {
        axios.get('https://dummyjson.com/auth/products', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(result => {
            setProducts(result.data.products)
        }).catch(error => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return <>
        <h1>About</h1>
        <Link to="/">Back to Home</Link>

        <ul>
            {products.map(product => 
                <li>Product: {product.title} (${product.price})</li>
            )}
        </ul>
    </>
}