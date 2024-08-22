import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }
    return (
    <div>
        <img src={item?.img} alt="" className="img-event" onClick={showDetail} />
        <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard