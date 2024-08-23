import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        let searchQuery = query.get("q") || "";
        console.log("쿼리값: ", searchQuery);
        let url = `https://my-json-server.typicode.com/unkyung27/json-hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        // console.log("fetch", response);
        let data = await response.json();
        // console.log("all data", url, data);
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    },[query])
  
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu, index) => (
                        <Col lg={3} key={index}>
                            <ProductCard item={menu}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll