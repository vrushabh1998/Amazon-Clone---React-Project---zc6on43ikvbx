import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Login from "./components/LogIn/Login";
import React from "react";
import { useState, useEffect } from "react";
import Payment from "./components/PaymentModal/Payment";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  const [apiData, setapiData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  function apiCall() {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    ).then(function (result) {
      result.json().then((output) => {
        setapiData(output);
      });
    });
  }

  function addToCart(value) {
    const previous = cart.find((item) => value.id === item.id);
    if (previous) {
      alert("Product Already In Cart");
      return;
    } else {
      setCart([...cart, value]);
      let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
      cartData.push(value);
      localStorage.setItem("cartData", JSON.stringify([...cartData]));
    }
  }
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home addToCart={addToCart} apiData={apiData} />}
            />

            <Route
              exact
              path="/cart"
              element={
                <>
                  <ShoppingCart cart={cart} setCart={setCart} />
                </>
              }
            />

            <Route
              exact
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />

            <Route
              exact
              path="/payment"
              element={
                <>
                  <Payment />
                </>
              }
            />

            <Route
              exact
              path="/productDetails/:id"
              element={
                <>
                  <ProductDetails addToCart={addToCart} />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
