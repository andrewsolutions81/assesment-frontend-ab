import React from 'react';
import Timer from '../Timer/Timer'
import {useNavigate} from 'react-router-dom'


function SingleProduct({product}) {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`../product-detail/${id}`);
  }

  return(
    <li className="product_card" key={product.id}>
      <h2 className="produc_title">{product.title}</h2>
      <img className="product-image" src={product.image} alt="Cool product, white background"></img>
      <Timer />
      <button  type="button" onClick={() => handleClick(product.id)} className="productlist-button">Go to detail</button>
    </li>
  )
}

export default SingleProduct
