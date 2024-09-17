import { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/storeContext";
import BestOffer from "../bestOffer/BestOffer";

function ProductFullData() {
  const { productList,dispatch } = useContext(StoreContext);
  const { id } = useParams();

  const [produtIdFileter, setprodutIdFileter] = useState();
  const [loading, setloading] = useState(true);

  const handleAddToCart = (product) => {
    
    dispatch({ type: "ADD_TO_CART", payload: product });


  };

  useEffect(() => {
    setprodutIdFileter(productList.find((p) => p.id == id));
    setloading(false);
  }, [id, productList]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="container mt-5 d-flex">
        <div className="row ">
          <div className="col-md-3">
            <img
              src= {produtIdFileter.image}
              alt="Product Image"
              className="product-image "
            />
          </div>

          <div id="product-details" className="col-md-6">
            <h3 className="font-Nunito">{produtIdFileter.title} </h3>
            <p className="font-Nunito-400" style={{fontSize:"22px"}}>{produtIdFileter.description}</p>

            <div className="price">₹{parseInt(((produtIdFileter.price)-(((produtIdFileter.price)/100)*produtIdFileter.offer))*84)}</div>
            <p>d</p>
            <div className="old-price">₹{parseInt((produtIdFileter.price)*84)}</div> 
           

            <div className="mb-3">
              <label
                style={{ color: "red", fontSize: "30px" }}
                className="form-label"
              >
                -{produtIdFileter.offer}%
              </label>
            </div>

            <div className="mb-3">
              <button onClick={() => handleAddToCart(produtIdFileter)}  className="btn btn-primary w-100">Add to Cart</button>
            </div>
            
          </div>
        </div>
        <div className="col">
 
            </div>
      
      </div>

      <BestOffer/>
    </>
  );
}

export default ProductFullData;
