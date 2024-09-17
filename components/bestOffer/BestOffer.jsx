import { useContext, useEffect, Link } from "react";

import "./bestOffer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { StoreContext } from "../context/storeContext";
import {  useNavigate } from 'react-router-dom';

function BestOffer() {
  const { dispatch, productList } = useContext(StoreContext);

  const handleAddToCart = (product) => {
    
    dispatch({ type: "ADD_TO_CART", payload: product });

     document.getElementById("add-to-cart").className.add = "btn-primary-green"
    document.getElementById("add-to-cart").className.remove = "btn-primary"


  };

  // const handleAddToCart = (product) => {
  //   // Dispatch the action to add the product to the cart
  //   dispatch({ type: "ADD_TO_CART", payload: product });
  
  //   // Correct way to add and remove classes

  //   const button = document.getElementById("add-to-cart");
  //   button.classList.add("btn-primary-green"); // Adds the new class
  //   button.classList.remove("btn-primary"); // Removes the old class
  // };



// const button = (()=>{
 
// })


  const navigate = useNavigate()

  const handleProductClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  const offerProducts = productList
    .filter((product) => product.offer > 15)
    .slice(0, 5);



  const mobileOffer = offerProducts.map((product) => (
    <div
      key={product.id}
      className="card text-center position-relative tramistion"
      style={{ width: "18rem" }}
    >
      <div onClick={() => handleProductClick(product.id)}>
        <img
          src={product.image}
          className="card-img-top mx-auto card-image cursor-pointer"
          alt={product.title}
          style={{ width: "50%" }}
        />

     
        <div className="offer-percentage offer-badge position-absolute rounded-circle bg-danger text-white d-flex justify-content-center align-items-center">
          <span>{product.offer}% OFF</span>
        </div>

        <div className="card-body">
          <h5 className="card-title font-Oswald cursor-pointer">
            {product.title}
          </h5>
          <p className="cursor-pointer card-text card-text-description font-roboto">
            {product.description}
          </p>
          <p className="card-text line-through-text font-Lato cursor-pointer">
            Price: ₹ <span>{parseInt(product.price * 84)}</span>
          </p>
          <p className="card-text offer-pirce font-Oswald font-Lato cursor-pointer">
            Offer Price: ₹
            {parseInt(
              (product.price - (product.price / 100) * product.offer) * 84
            )}
          </p>
          <span style={{backgroundColor:"red",marginTop:"5px"}}>{}</span>
          
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
     
        <div
          onClick={() => handleAddToCart(product)}
          className="btn btn-primary "
          id="add-to-cart"

          
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </div>
      </div>
    </div>
  ));

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
