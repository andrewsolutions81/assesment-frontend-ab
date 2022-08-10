import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';


function Products({products}) {

  return(
    products.map((product) =>{
      return(
        <SingleProduct product={product} />
      )
    })
  )
}


export default Products
