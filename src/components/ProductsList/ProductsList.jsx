import React from "react";
import { useEffect ,useState} from "react";

const [products, setProducts] = useState([]);

function ProductsList() {

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data));
    }, []);

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
