import { useContext } from "react";
import "./Cart.css";
import ProductItemInCart from "./ProductItemInCart";
import { AppContext } from "../context/AppContext";

function Cart() {
  const { addedToCart, addedProducts } = useContext(AppContext).state;

  return (
    <div className="cartContainer">
      {addedToCart > 0 ? (
        <>
          {addedProducts.map((product) => (
            <ProductItemInCart key={product.id} {...product} />
          ))}
        </>
      ) : (
        <p>The shopping cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
