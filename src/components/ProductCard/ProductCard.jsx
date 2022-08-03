import { useEffect ,useState} from "react";
import {getProducts} from "../../services/FakeStoreApi"
import {useNavigate} from "react-router-dom"
import ProductDetail from "../../pages/ProductDetail";

function ProductCard(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([...props.products])
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
          <p className="timer">00:00:00</p>
          <button  type="button" onClick={() => handleClick(product.id)} className="productlist-button">Go to detail</button>
        </li>
      )
    })
  )
}


export default ProductCard
