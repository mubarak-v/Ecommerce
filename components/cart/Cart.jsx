import { useContext, useEffect, useState } from "react";

import { StoreContext } from "../context/storeContext";
import "./cart.css";
function Cart() {
  const { cart, dispatch } = useContext(StoreContext);
const [price, setPrice] = useState(0)



const handleRemoveToCart = (id)=>{

    dispatch({ type: "REMOVE_FROM_CART", payload: id });
}

useEffect(()=>{
    let total = 0
    cart.forEach(p => total += p.price)
    setPrice(parseInt(total, 10))

},[cart])



if(cart.length===0){
    return (
        <div className="container my-5">
            <h2 className="cart-title">Cart</h2>
            <p>Your cart is empty. Add some products to continue.</p>
        </div>
    )
}

  console.log(cart);

  const cartItems = cart.map((p) => (
    <>
      <div className="cart-item row align-items-center">
        <div className="col-md-2">
          <img src={p.image} alt="black shirt" />
        </div>
        <div className="col-md-6 item-details">
          <p> {p.title} </p>
          {/* <span className="text-muted">Black | M | Qty: 1</span> */}
        </div>
        <div className="col-md-2 text-end item-price"> {p.price} </div>
        <div className="col-md-2 text-end">
          <button onClick={()=>handleRemoveToCart(p.id)} className="btn btn-outline-danger btn-sm">Remove</button>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <div className="container my-5">
        <h2 className="cart-title">Cart</h2>
        {/* <p>Items are reserved for 60 minutes</p> */}
{cartItems}
        <div className="row">
          <div className="col-md-12 text-end subtotal">Sub-total: ₹{price} </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
