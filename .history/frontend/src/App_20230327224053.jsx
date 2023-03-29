import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./pages/header/header";
import Home from "./pages/Home/home";
import LoginFormComponent from "./pages/auth/login";
import Register from "./pages/auth/register";
import Footer from "./pages/footer/footer";
import Basket from "./pages/basket/basket";
import Toy from "./pages/Toy/Toy";
import Checkout from "./pages/basket/components/checkout";
import Paypal from "./pages/basket/PayPal/payPal";
import Category from "./pages/Category/Category";
import Test from "./pages/Category/test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {localStorage.getItem("loginEmail") ? (
            " "
          ) : (
            <Route path="/login" element={<LoginFormComponent />} />
          )}

          {localStorage.getItem("loginEmail") ? (
            " "
          ) : (
            <Route path="/register" element={<Register />} />
          )}
          {localStorage.getItem("loginEmail") ? (
            <Route path="/paypal" element={<Paypal />} />
          ) : (
            ""
          )}
          {localStorage.getItem("loginEmail") ? (
            <Route path="/checkout" element={<Checkout />} />
          ) : (
            ""
          )}

          <Route path="/basket" element={<Basket />} />
          <Route path="/category/:search" element={<Category />} />

          <Route path="/toy/:userId" element={<Toy />} />
          <Route path="/basket" element={<Test />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
