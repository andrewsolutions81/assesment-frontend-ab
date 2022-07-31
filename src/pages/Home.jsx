import React from 'react';
import ProductList from '../components/ProductsList/ProductsList.jsx';

function Home() {
  return (
      <div>
        <div className='homepage'>
          <h1 className='homepage_title'>Home Page</h1>
            <ul>
              <ProductList />
            </ul>
        </div>
      </div>
  )
}

export default Home;
