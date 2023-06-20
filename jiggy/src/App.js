import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Navbar2 from "./components/Navbar2";
import Search from "./components/Search";

function App() {

  return (
    <BrowserRouter>
    
      <div>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
