import Header from "../components/header/Header";
import Home from "../components/home/Home";

import { Routes, Route } from "react-router-dom";
import Cart from "../components/cart/Cart";

import ProductDetails from "../components/ProductDetails/ProductFullData";
import { StoreProvider } from "../components/context/storeContext";
import NotFound from "../components/notFound/NotFound";
import Login from "../components/login/Login";
import AboutUs from "../components/aboutUs/AboutUs";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";

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
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>

          <Route path="login" element={<Login />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
        </Routes>
        <Footer/>
      </StoreProvider>
    </>
  );
}

export default App;
