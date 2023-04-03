import React from "react";
import "./ShoppingCart.css";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { Link } from "react-router-dom";

function ShoppingCart({ cart, setCart }) {
  var localData = JSON.parse(localStorage.getItem("cartData")) || [];
  const subTotal = localData.reduce(
    (price, newPrice) => price + parseFloat(newPrice.price),
    0
  );
  localStorage.setItem("subTotal", subTotal.toFixed(2));
  function removeFromCart(value) {
    const remove = localData.filter((item) => item.id !== value.id);
    setCart(remove);
    localStorage.setItem("cartData", JSON.stringify(remove));
  }
  return (
    <>
      <Navbar />
      <div className="checkOut">
        <div className="checkOutLeft">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
            alt=""
            className="checkOutAd"
          ></img>

          <div>
            <h2>Hello</h2>
            <h1 className="checkOutTitle">Your Shopping Cart</h1>

            {localData.map(function (value, index) {
              return (
                <div className="checkOutProduct" key={index}>
                  <img
                    src={value.image}
                    alt=""
                    className="checkOutProductImage"
                  ></img>

                  <div className="checkOutProductInfo">
                    <p className="checkOutProductName">{value.title}</p>
                    <p className="checkOutProductPrice">
                      <strong>₹{value.price}</strong>
                    </p>
                    <span onClick={() => removeFromCart(value)}>
                      Remove From Cart
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="checkOutRight">
          <div className="subTotal">
            <p>
              Subtotal :<strong>${localStorage.getItem("subTotal")}</strong>
            </p>
            <small className="subTotalGift">
              <input type="checkbox" />
              This Order contains a Gift
            </small>
          </div>
          {localData.length === 0 ? (
            ""
          ) : (
            <Link to="/payment">
              <button>Proceed to Buy</button>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShoppingCart;
