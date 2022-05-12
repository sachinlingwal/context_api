import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  // const [cart, setCart] = useState([]);

  return (
    <>
      {/* <Header cart={cart} /> */}
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
