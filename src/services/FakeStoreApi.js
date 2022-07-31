const BASE_URL = 'http://fakestoreapi.com/';

export const getProducts = (setState) => {
  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setState(json))
}

export const getProduct = (setState,id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setState(json))
}
