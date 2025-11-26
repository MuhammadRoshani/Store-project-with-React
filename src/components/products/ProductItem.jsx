import "./ProductItem.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProductItem(data) {
  // we need access to information our products that user click on that by destructuring and give it to our dispatch to send our data to reducer.

  // action.data :
  const { id, name, price, image } = data;

  const { dispatch } = useContext(AppContext);

  const addToCartHandler = () => {
    // actions : dispatch send our actions to reducer
    dispatch({ type: "ADD_TO_CART", data });
  };

  return (
    <div className="productCard">
      <div className="cardImage">
        <img className="img-fluid" src={image} />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">price : {price.toLocaleString()}</p>
        <button onClick={addToCartHandler} className="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
