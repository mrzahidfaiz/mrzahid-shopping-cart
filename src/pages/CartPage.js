import { useCart, useCartAction } from "../contexts/CartProvider";
import "./cartPage.css";


const CartPage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  if (!cart.length){ 
    return (
      <main className="emptyCart">
        <h3>Cart is empty</h3>
      </main>
    );
  }
  const incrementHandler = (cartItem) => {
    dispatch({type: "ADD_TO_CART", payload: cartItem })
  }
  const decrementHanlder = (cartItem) => {
    dispatch({type: "DECREMENT_PRODUCT", payload: cartItem })
  }
return (
  <main className="container">
    <section className="cartCenter">
      <section className="cartItemList">
        {cart.map((item) => {
          return (
            <div className="cartItem" key={item.id} >
              <div className="cartItemImage">
                <img src={item.image} alt={item.name} />
              </div>
              <h5>{item.name}</h5>
              <div>${item.price * item.quantity}</div>
              <div className="itemControlBtn">
                <button onClick={()=> incrementHandler(item)} className="itemControlBtn">+</button>
                <p>{item.quantity}</p>
                <button onClick={()=> decrementHanlder(item)} className={`itemControlBtn ${item.quantity === 1 && "remove"}`}>-</button>
              </div>
            </div>
          );
        })}
      </section>
      <section className="cartSummary">Cart summary</section>
    </section>
  </main>
);
}
export default CartPage;