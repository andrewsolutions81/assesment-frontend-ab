import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const  Home = ({products}) => {
  return (
      <div>
        <div className='homepage'>
          <h1 className='homepage__title'>Protucts</h1>
            <ul>
              { products.length > 0 && products
              ? <ProductCard products={products}/>
              : <p>Loading...</p>}
            </ul>
        </div>
      </div>
  )
}

export default Home;
