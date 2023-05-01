import { useCart } from "../contexts/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart } = useCart();
  if (!cart.length){ 
    return (
      <main className="emptyCart">
        <h3>Cart is empty</h3>
      </main>
    );
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
              <div>${item.price}</div>
              <div className="itemControlBtn">
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
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