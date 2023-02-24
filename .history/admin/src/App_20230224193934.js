import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./header/header";
import Create from "./Create/Create";
import Users from "./Users/Users";
import Home from "./Home/Home";



function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

        <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />

        </Routes>

    </BrowserRouter>
  </>
  );
}

export default App;

