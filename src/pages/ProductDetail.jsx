import React, {useEffect, useState} from "react";
import { getProduct } from "../services/FakeStoreApi";


function ProductDetail(props) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([...props.products])
  },[])

  return(
    <div className="ProductDetail" key={product.id}> product detail
      <h1 className="ProductDetail-title">{product.title}</h1>
      <img className="ProductDetail-image">{product.image}</img>
      <p className="ProductDetail-description">{product.description}</p>
      <p className="ProductDetail-price">{product.price}</p>
      <p className="ProductDeta-category">{product.category}</p>
    </div>
  )
}

export default ProductDetail;
