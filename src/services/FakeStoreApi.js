export const getProducts = async (setState) => {
  try{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setState(json))
  }
  catch (error) {
    console.log(error, ": Products can not be reached.")
  }
}

export const getProduct = (setState,id) => {
  try{
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>setState(json))
  }
  catch (error) {
    console.log(error, ": Product can not be reached. ")
  }
}
