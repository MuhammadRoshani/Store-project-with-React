import "./Navbar.css";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  // we just need state not dispatch and inside of state we need addedToCart not addedToProduct.
  const { addedToCart } = useContext(AppContext).state;

  return (
    <nav>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p className="bag">
        <Link to="/cart">
          <BsCart4 color="white" size="30px" />
        </Link>
        {addedToCart > 0 && <span>{addedToCart}</span>}
      </p>
    </nav>
  );
}

export default Navbar;
