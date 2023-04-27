import * as data from "../data";
import "../App.css";
import { useCartAction } from "../contexts/CartProvider"

const HomePage = () => {
    const dispatch = useCartAction();
    const addProductHanlder = (product) => {
        dispatch({type: "ADD_TO_CART", payload: product});
    }
  return (
    
      <div>
        <section className="productList">
            {data.products.map((product, index)=>{
                return (
                    <section className="product" key={index}>
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
                            <button className="btn primary" onClick={() => addProductHanlder(product)}>Add to Cart</button>
                        </div>
                    </section>
                );
            })}
        </section>
      </div>
  );
};

export default HomePage;