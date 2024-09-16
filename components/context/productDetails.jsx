import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/contextData";
import ProductList from "../productList/ProductList";
import { useNavigate } from "react-router-dom";

export const ProductDetail = createContext();

export const ProductDetailProvider = ({ children }) => {
  const { productList, setProductList } = useContext(ProductContext);
  const [productid, setProductid] = useState([0]);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  

  return (
    <ProductDetail.Provider value={{ productid, handleProductClick }}>
      {children}
    </ProductDetail.Provider>
  );
};
