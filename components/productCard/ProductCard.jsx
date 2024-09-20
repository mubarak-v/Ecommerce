/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../context/storeContext";
import { useContext } from "react";

function ProductCardList(props) {
  const {
    product,
    handleProductClick,
    handleAddToCart,
    productAdded,
    isInCart,
    handleRemoveToCart,
  } = props;

  return (
    <>
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
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              marginTop: "-12px",
              marginBottom: "3px",
              height: "20px",
              color: "green",
            }}
          >
            {" "}
            {isInCart && "✔  successfully added to cart "}
          </p>
          {isInCart === true ? (
            <div
              onClick={() => handleRemoveToCart(product.id)}
              className="btn btn-danger "
              id="add-to-cart"
            >
              <FontAwesomeIcon icon={faCartShopping} /> Remove to cart
            </div>
          ) : (
            <div
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary "
              id="add-to-cart"
            >
              <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCardList;
