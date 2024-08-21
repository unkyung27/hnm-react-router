import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async() => {
        let url = "http://localhost:5000/products";
        let response = await fetch(url);
        let data = await response.json();
        // console.log("all data", data);

        setProductList(data);
    }

    useEffect(() => {
        getProducts()
    },[])
  
    return (
        <div>
            <ProductCard />
        </div>
    )
}

export default ProductAll