import React ,{ useEffect ,useState} from "react";
import {getProducts} from "../../services/FakeStoreApi"

function ProductsList() {

  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
     getProducts(setProducts)
  },[])

  return(
  <div className="productlist">
    <div className="productlist-container">
      <div className="productlist-item">
        <div className="productlist-item__container">
          <div className="productlist-item__info">product list</div>
          <div className="productlist-item__id">id</div>
          <h2 className="productlist-item__title">Title</h2>
          <div className="productlist-item__image">image</div>
          <h3 className="productlist-item__price">price</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductsList
