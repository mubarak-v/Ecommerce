
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./mobilesAccessories.css";
import { StoreContext } from "../context/storeContext";
function Mobile() {
    const {productList, dispatch} = useContext(StoreContext);
    const mobileList = productList.filter(product => product.category === "mobile accessory").slice(0,5);
    
    const handleAddToCart = (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
  
  
    };

    const mobiles = mobileList.map((product) => (


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
            Price: ₹ <span>{product.price * 84}</span>
          </p>
          <p className="card-text offer-pirce font-Oswald font-Lato cursor-pointer">
            Offer Price: ₹{" "}
            {parseInt(
              (product.price - (product.price / 100) * product.offer) * 84
            )}
          </p>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
     
        <div
          onClick={() => handleAddToCart(product)}
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </div>
      </div>
    </div>
    
      ))
    return (<>


<div className="container-fluid" style={{marginTop:"30px",display:"flex"}}> 
    <div><h1 id="offer-tag" className="font-Oswald">MOBILE ACCESSORIES</h1> <dir className="mobile-accessories"  >
       

    {mobiles}
   
       </dir></div>
       
        
     
          
          </div>
    
    
    </>  );
}

export default Mobile;