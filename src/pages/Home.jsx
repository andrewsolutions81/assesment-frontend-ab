import React from 'react';
import ProductCard from '../components/ProductCard'
import ProductList from '../components/ProductsList/ProductsList.jsx';

function Home() {
  return (
      <div>
        <div className='homepage'>
          <div className='homepage__container'>
          <h1 className='homepage_title'>Super Home page</h1>
          <ProductList />
          <ProductCard />
          </div>
        </div>
      </div>
  )
}

export default Home;
