import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./mobilesAccessories.css";
import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
function Mobile() {
  const { productList, dispatch, cart } = useContext(StoreContext);
  const mobileList = productList
    .filter((product) => product.category === "mobile accessory")
    .slice(0, 5);
    const handleRemoveToCart = (id) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };


  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

 


  const mobilesAccessories = mobileList.map((product) => {
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
            MOBILE ACCESSORIES
          </h1>
       

          <dir className="mobile-accessories">{mobilesAccessories}</dir>
        </div>
      </div>
    </>
  );
}

export default Mobile;
