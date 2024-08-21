import React from 'react';
import './ProductCard.css';

const ProductCard = ({item}) => {
  return (
    <div>
        <img src={item?.img} alt="" className="img-event" />
        <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard