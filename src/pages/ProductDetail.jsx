import React, { useEffect, useState } from "react";
import { getProduct } from "../services/FakeStoreApi";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [state, setState] = useState([]);

/*   useEffect(() => {
    getProduct(setState, id)
    .then((state) => setProduct(state));
    console.log(state);
  }, []); */

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>console.log("product yo soy el json",json))
    alert("Entró al useEffect")
  }, [])

  return (
    <div className="ProductDetail-container">
      {/* {product.id === Number(id) ? ( */}
        <div className="ProductDetail" key={product.id}>
          {" "}
          product detail
          <h1 className="ProductDetail-title">{product.title}</h1>
          <img className="ProductDetail-image">{product.image}</img>
          <p className="ProductDetail-description">{product.description}</p>
          <p className="ProductDetail-price">{product.price}</p>
          <p className="ProductDeta-category">{product.category}</p>
        </div>
      {/* ) : null} */}
    </div>
  );
}

export default ProductDetail;
