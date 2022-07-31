import { useEffect ,useState} from "react";
import {getProducts} from "../../services/FakeStoreApi"
import {useNavigate} from "react-router-dom"

function ProductsList() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts(setProducts)
  },[])

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`../product-detail/${id}`);
  }


  return(
    products.map((product) =>{
      return(
        <li className="productlist" key={product.id}>
          <h2 className="productlist-title">{product.title}</h2>
          <img className="product-image" src={product.image}></img>
          <h3 className="productlist-price">{product.price}</h3>
          <button  type="button" onClick={() => handleClick(product.id)} className="productlist-button">Details</button>
        </li>
      )
    })
  )
}

export default ProductsList
