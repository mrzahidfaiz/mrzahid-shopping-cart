import * as data from "../data";
import "../App.css";
import { useCartAction, useCart } from "../contexts/CartProvider"
import { toast } from "react-toastify";
import { checkInCart } from "../utils/CheckInCart";


const HomePage = () => {
    const { cart } = useCart();
    const dispatch = useCartAction();
    const addProductHanlder = (product) => {
        toast.success(`${product.name} is added to Cart!`)
        dispatch({type: "ADD_TO_CART", payload: product});
    }
  return (
    
      <div>
        <section className="productList">
            {data.products.map((product)=>{
                return (
                    <section className="product" key={product.id}>
                        <div className="productImage">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="productDesc">
                            <div>{product.name}</div>
                            <div>
                                <p>${product.price}</p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button className={`btn primary ${checkInCart(cart, product) && "secondary"}`} onClick={() => addProductHanlder(product)}>{checkInCart(cart, product) ? "In Cart" : "Add to Cart"}</button>
                        </div>
                    </section>
                );
            })}
        </section>
      </div>
  );
};

export default HomePage;