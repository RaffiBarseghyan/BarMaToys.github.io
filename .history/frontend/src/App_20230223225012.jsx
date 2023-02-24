import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./pages/header/header";
import Home from "./pages/Home/home";
import LoginFormComponent from "./pages/auth/login";
import Register from "./pages/auth/register";
import Footer from "./pages/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginFormComponent />} />
            <Route path="/register" element={<Register />} />   
            <Route path="/basket" element
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
