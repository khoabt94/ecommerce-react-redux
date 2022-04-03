import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductList,
  ProductDetail,
  Cart,
  ContactPage,
  RegisterPage,
} from "./pages/index";

import { NavBar } from "./components/index";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
