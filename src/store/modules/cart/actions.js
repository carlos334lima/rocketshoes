export function addToCart(product){
  return {
    type: '@cart/ADD',
    product
  }
}

export function removeToCart(id){
  return {
    type: '@cart/REMOVE',
    id
  }
}

