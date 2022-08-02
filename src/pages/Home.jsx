import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

function Home(props) {

   const [products, setProducts ] = useState([])

   useEffect(() => {
    setProducts([...props.products])
    },[props.products.length])

  return (
      <div>
        <div className='homepage'>
          <h1 className='homepage__title'>Protucts</h1>
            <ul>
              { props.products.length > 0 && props.products ? <ProductCard products={props.products}/>
              : <p>Loading...</p>}
            </ul>
        </div>
      </div>
  )
}

export default Home;
