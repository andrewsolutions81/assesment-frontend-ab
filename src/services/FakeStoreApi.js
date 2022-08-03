export const getProducts = async (setState) => {
  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setState(json))
}

export const getProduct = (setState,id) => {
  console.log("funciona")
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setState(json))//sacar la info del contexto para
}




