import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams();
    console.log("id", id);
    const [product, setProduct] = useState(null);
    const getProductDetail = async() => {
        let url = `https://my-json-server.typicode.com/unkyung27/hnm-react-router/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("detail", data);
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail();
    }, []);
  return (
    <Container>
        <Row className="align-items-center">
            <Col xs={12} lg={6} className="product-img">
                <img src={product?.img} style={{ width: "100%", maxWidth: "300px"}}/>
            </Col>
            <Col xs={12} lg={6}>
                <div>{product?.title}</div>
                <div>{product?.price}원</div>
                <div>{product?.choice === true ? "Conscious Choice" : ""}</div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail