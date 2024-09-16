import Header from "../components/header/Header";
import Home from "../components/home/Home";

import { Routes, Route } from "react-router-dom";
import Cart from "../components/cart/Cart";

import ProductDetails from "../components/ProductDetails/ProductFullData";
import { StoreProvider } from "../components/context/storeContext";
import NotFound from "../components/notFound/NotFound";
import Login from "../components/login/Login";

function App() {
  return (
    <>
      <StoreProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />

          <Route
            path="/ProductDetails/:id"
            element={<ProductDetails />}
          ></Route>
  <Route
            path="*"
            element={<NotFound />}
          ></Route>
           <Route
            path="login"
            element={<Login />}
          ></Route>

          
        </Routes>
        <ProductDetails />
      </StoreProvider>
    </>
  );
}

export default App;
