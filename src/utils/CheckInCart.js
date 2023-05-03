export function checkInCart(cart, product){
    return cart.find( x => x.id === product.id );
}