import React from "react";
import {getProducts} from '../../services/FakeStoreApi'


function ProductCard() {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
     getProducts(setProducts)
  },[])
  return(
    <div className="productcard">product card
    <div className="productcard-image">image</div>
    <h2 className="productcard-id">id</h2>
    <h1 className="productcard-title">Title</h1>
    <p className="productcard-description">Description</p>

    </div>
  )
}

export default ProductCard;

/* import React from "react";


function ProductCard() {
  return(
    <div className="productcard">
      <div className="productcard__container">
        product card
      </div>
    </div>
  )
}

export default ProductCard; */
