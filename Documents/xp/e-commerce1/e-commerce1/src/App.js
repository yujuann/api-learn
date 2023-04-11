import "./App.css";
import React, { component } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Carts from "./Components/Carts";
import Register from "./Components/Register";
import Product from "./Components/Product";
// import Products from "./Components/Products";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </>
  );
}
export default App;

// <BrowserRouter>
{
  /* // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={Home} />
    //     <Route path="/products" element={Products} />
    //     <Route path="/products:id" element={Product} />
    //   </Routes>
    //   <Home />
    // </BrowserRouter> */
}
// <div className="App">
{
  /* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/products" element={Products} />
          <Route path="/products:id" element={Products} />
        </Routes>
      </BrowserRouter> */
}
{
  /* <Navbar />
      <Home />
    </div> */
}
