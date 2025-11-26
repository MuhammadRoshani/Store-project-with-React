import { useContext } from "react";
import "./ProductItemInCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from "../context/AppContext";

function ProductItemInCart({ id, name, price, image, count, totalPrice }) {
  const { dispatch } = useContext(AppContext);

  // decreaseHandler func
  const decreaseHandler = () => {
    dispatch({ type: "DECREASE_IN_CART", id });
  };

  // increaseHandler func
  const increaseHandler = () => {
    dispatch({ type: "INCREASE_IN_CART", id });
  };

  // removeHandler func
  const removeHandler = () => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <div className="productItemInCart">
      <div className="cardLeft">
        <img src={image} />
      </div>

      <div className="cardMiddle">
        {count > 1 ? (
          <button onClick={decreaseHandler}>-</button>
        ) : (
          <button onClick={removeHandler}>
            <RiDeleteBin6Line />
          </button>
        )}
        <span>{count}</span>
        <button onClick={increaseHandler}>+</button>
      </div>

      <div className="cardRight">
        <h5>{name}</h5>
        {/* we use toLocaleString method for our price number that separate three by three */}
        <p>price : {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}

// note : when we use useState , UI and logic combine together and other wise when we use useReducer , UI and logic separate from each other (we define our logic in reducer).

export default ProductItemInCart;
