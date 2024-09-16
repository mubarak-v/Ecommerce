import "./ProductCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";


import { ProductContext } from "../context/contextData";
import { BsDisplay } from "react-icons/bs";






const ProductCard = () => {

       const { productList ,setProductList } =  useContext(ProductContext);

// setProductList(...productList,...Mproducts);

  // console.log(productList);



  const filteredProducts = productList.filter((product) => product.price <=10000);



  const productmap = filteredProducts.map((product) => (
    <div key={product.id} className="card text-center" style={{ width: "18rem" }}>
     
      <img 
        src={product.image}
        className="card-img-top mx-auto card-image"
        alt={product.title}
        style={{ width: "50%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text card-text-description">
          {product.description}
        </p>
       
        <p className="card-text underline-text">Price: ₹ <span>{product.price}</span></p>
        <p className="card-text" >Offer Price: ₹ {  parseInt((product.price)-(product.price/100)*(product.offer))}  </p>
        <a href="#" className="btn btn-primary">
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </a>
      </div>
    </div>
  )

  


  )






  return (
    <>
    <div style= {{display:"flex", flexWrap:"wrap"}} >
    {productmap}
    </div>
  
     
    </>
  );
};

export default ProductCard;
