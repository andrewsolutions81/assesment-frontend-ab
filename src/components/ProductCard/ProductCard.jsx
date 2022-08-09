import { useEffect ,useState} from "react";
import {useNavigate} from "react-router-dom"
import Timer from "../Timer/Timer";


function ProductCard(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([...props.products])
  },[props.products])

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`../product-detail/${id}`);
  }

  if( Timer =='0:00'){

  }

  return(
    products.map((product) =>{
      return(
        <li className="productlist" key={product.id}>
          <h2 className="productlist-title">{product.title}</h2>
          <img className="product-image" src={product.image} alt="Cool product, white background"></img>
          <Timer/>
          <button  type="button" onClick={() => handleClick(product.id)} className="productlist-button">Go to detail</button>
        </li>
      )
    })
  )
}


export default ProductCard
