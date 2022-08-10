import React from 'react';
import Products from '../components/Products/Products'

const  Home = ({products}) => {
  return (
      <div>
        <div className='homepage'>
          <h1 className='homepage__title'>Products</h1>
            <div className='list-container'>
              <ul className="every-product">
                { products.length > 0 && products
                ? <Products products={products}/>
                : <p>Loading...</p>}
              </ul>
            </div>
        </div>
      </div>
  )
}

export default Home;
