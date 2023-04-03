import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const valueChange = JSON.parse(localStorage.getItem("cartData")) || [];
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <header className="header">
        <div className="navBar navBarHeader">
          <Link to="/">
            <div className="logoContainer borderWhite">
              <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                className="logo"
                alt=""
              />
              <span className="dotIn">.in</span>
            </div>
          </Link>

          <div className="locationContainer borderWhite">
            <p className="deliverTo">Deliver to</p>
            <div className="iconLocation">
              <i className="fa-solid fa-location-dot iLocation"></i>
              <p>Location</p>
            </div>
          </div>

          <div className="searchBoxContainer">
            <select className="searchSelect">
              <option>All</option>
              <option>Amazon Fashion</option>
              <option>Amazon LifeStyle</option>
              <option>Amazon Devices</option>
              <option>Amazon Pharmacy</option>
              <option>Grocery & Gourmet Foods</option>
              <option>Deals</option>
              <option>Electronics</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="searchInput"
            />
            <div className="searchIcon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="languageContainer borderWhite">
            <div className="languageImage">
              <img
                src="https://media.istockphoto.com/id/1051236720/vector/vector-flag-of-the-republic-of-india-proportion-2-3-the-national-flag-of-india-tricolor.jpg?s=612x612&w=0&k=20&c=vcZ3ssSitwTXLGOjA9_8FJ951MCNdSsF-DOHyrb58vA="
                alt=""
              ></img>
            </div>
            <p>EN</p>
          </div>

          {isAuthenticated ? (
            <div className="loginContainer borderWhite">
              <p className="hello">
                Hello,
                <button
                  className="logout"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LOG OUT
                </button>
              </p>
              <p className="accountLists">Accounts & Lists</p>
            </div>
          ) : (
            <div className="loginContainer borderWhite">
              <p className="hello">
                Hello,
                <button className="logIn" onClick={() => loginWithRedirect()}>
                  {" "}
                  LOG IN
                </button>
              </p>
              <p className="accountLists">Accounts & Lists</p>
            </div>
          )}

          <div className="returnOrders borderWhite">
            <p className="returns">
              Returns <br></br>
            </p>
            <span className="orders">& Orders</span>
          </div>

          <div className="cartContainer borderWhite">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping cartIcon">
                <span className="digit">{valueChange.length}</span>
              </i>
            </Link>
          </div>
        </div>
      </header>

      <div className="navBottom">
        <ul>
          <li>All</li>
          <li>Amazon miniTV</li>
          <li>Amazon Pay</li>
          <li>Gift Cards</li>
          <li>Buy Again</li>
          <li>Gift Ideas</li>
          <li>Amazon Basics</li>
          <li>Books</li>
          <li>Personal Care</li>

          <img
            src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/HappyFamily/400x39-SWM_NP._CB595272176_.jpg"
            alt=""
          />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
