import { useContext, useEffect, useState } from "react";

function ProductList() {
    const [products, setproduct] = useState([]);
    useEffect(() => {
      const Products = async () => {
        try {
          var Response = await fetch("https://fakestoreapi.com/products");
          var ProductData = await Response.json();
  
          setproduct(ProductData);
        } catch (error) {
          console.log("Server error");
        }
      };
      Products();
    }, []);






    console.log(products);
    return ( <></> );
}

export default ProductList;