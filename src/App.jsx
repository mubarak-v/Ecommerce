import { ProductProvider } from "../components/context/contextData";
import Header from "../components/header/Header";
import Home from "../components/home/Home";

import { Routes, Route } from "react-router-dom";
import Cart from "../cart/Cart";

import ProductDetails from "../components/ProductDetails/ProductFullData";
import { ProductDetailProvider } from "../components/context/productDetails";

function App() {
  return (
    <>
      <ProductProvider>
        <ProductDetailProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />

            <Route path="/ProductDetails/:id" element={<ProductDetails />}>
              {" "}
            </Route>
          </Routes>
          <ProductDetails />
        </ProductDetailProvider>
      </ProductProvider>
    </>
  );
}

export default App;
