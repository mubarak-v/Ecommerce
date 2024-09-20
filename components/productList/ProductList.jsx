import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./productList.css";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

import ProductCard from "../productCard/ProductCard";
function Mobile() {
  const { productList, dispatch, cart } = useContext(StoreContext);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleRemoveToCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  const allProducts = productList.map((product) => {
    let isInCart = false;
    const productId = product.id;
    isInCart = cart.some((cartItem) => cartItem.id === productId);

    return (
      <ProductCard
        key={product.id}
        product={product}
        handleProductClick={handleProductClick}
        handleAddToCart={handleAddToCart}
        isInCart={isInCart}
        handleRemoveToCart={handleRemoveToCart}
      />
    );
  });

  return (
    <>
      <div
        className="container-fluid"
        style={{ marginTop: "30px", display: "flex" }}
      >
        <div>
          <h1 id="offer-tag" className="font-Oswald">
            PRODUCTS
          </h1>{" "}
          <dir className="mobile">{allProducts}</dir>
        </div>
      </div>
    </>
  );
}

export default Mobile;
