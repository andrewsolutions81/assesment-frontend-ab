import React, { useEffect, useState } from "react";
import { getProduct } from "../services/FakeStoreApi";
import { useParams } from "react-router-dom";


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    getProduct(setProduct, id);
    console.log(state);
  }, []);

  const Loading =() => {
    return(
      <div>Loading.....</div>
    )
  }

  return (
    <article className="ProductDetail-container">
        <div className="ProductDetail" key={product.id} />
        <h1 className="ProductDetail-title">{product.title}</h1>
        <img className="ProductDetail-image" src={product.image}></img>
        <p className="ProductDetail-description">{product.description}</p>
        <p className="ProductDetail-price">{product.price}</p>
        <p className="ProductDetail-category">{product.category}</p>
    </article>
  );
}

export default ProductDetail;
