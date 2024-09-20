import { useContext, useEffect, Link, useState } from "react";

import "./bestOffer.css";

import { StoreContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import ProductCardList from "../productCardList/ProductCardList";

function BestOffer() {
  const { dispatch, productList, cart } = useContext(StoreContext);

  const carID = cart.map((p) => p.id);

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
  const offerProducts = productList
    .filter((product) => product.offer > 15)
    .slice(0, 5);
  const mobileOffer = offerProducts.map((product) => {
    let isInCart = false;
    const productId = product.id;
    isInCart = cart.some((cartItem) => cartItem.id === productId);

    return (
      <ProductCardList
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
            OFFER ZONE
          </h1>{" "}
          <dir className="products">{mobileOffer}</dir>
        </div>
      </div>
    </>
  );
}

export default BestOffer;
