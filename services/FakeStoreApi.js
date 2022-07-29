const BASE_URL = 'http://fakestoreapi.com/';
/*
export async function getProducts(){
  const response = await ferch(`${BASE_URL}products`);
  return await response.json();
}

export async function getProduct(id){
  const response = await fetch(`${BASE_URL}products/${id}`);
  return await response.json();
} */

export const getProducts = () => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

export const getProduct = (id) => {
  fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then(json=>console.log(json))
}
