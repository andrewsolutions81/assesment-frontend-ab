export const getProducts = async (setState) => {
  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setState(json))
}

export const getProduct = (setState,id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setState(json))
}


/* export async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await response.json();
  return json;
} */

