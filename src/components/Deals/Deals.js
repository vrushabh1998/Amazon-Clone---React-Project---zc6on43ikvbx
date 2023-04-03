import React from "react";
import "./Deals.css";

function Deals() {
  return (
    <>
      <div class="todaysDealsContainer">
        <div class="todayDealsHeading">
          <h1>Today's Deals</h1>
          <p>
            <a href="#">See all deals</a>
          </p>
        </div>

        <div className="todayDealsProductContainer">
          <div className="todayDealsButtonContainer">
            <button className="todayDealsButton">
              <i className="fa-solid fa-angle-left"></i>
            </button>

            <button className="todayDealsButton">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>

          <div className="todayDealsProductList">
            <div className="todayDealsProductItem">
              <img
                className="dealsImage"
                src="https://m.media-amazon.com/images/I/31f7nuANQNL._AC_SY200_.jpg"
                alt=""
              />
              <div className="discountContainer">
                <a href="#">Upto 53% off</a>
                <a href="#">Deal of the Day</a>
              </div>
              <p>Crocs Footwear</p>
            </div>

            <div className="todayDealsProductItem">
              <img
                className="dealsImage"
                src="https://m.media-amazon.com/images/I/41-+itFyZlL._AC_SY200_.jpg"
                alt=""
              />
              <div className="discountContainer">
                <a href="#">Upto 35% off</a>
                <a href="#">Deal of the Day</a>
              </div>
              <p>Grand Gaming Days - Game o..</p>
            </div>

            <div className="todayDealsProductItem">
              <img
                className="dealsImage"
                src="https://m.media-amazon.com/images/I/31RwE3ltrQL._AC_SY200_.jpg"
                alt=""
              />
              <div className="discountContainer">
                <a href="#">Upto 46% off</a>
                <a href="#">Deal of the Day</a>
              </div>
              <p>Exciting offers on One Plus Mobi..</p>
            </div>

            <div className="todayDealsProductItem">
              <img
                className="dealsImage"
                src="https://m.media-amazon.com/images/I/4151aOEWqAL._AC_SY200_.jpg"
                alt=""
              />
              <div className="discountContainer">
                <a href="#">27% off</a>
                <a href="#">Deal of the Day</a>
              </div>
              <p>Lava Blaze 5G (6GB) available at..</p>
            </div>

            <div className="todayDealsProductItem">
              <img
                className="dealsImage"
                src="https://m.media-amazon.com/images/I/61QQtY6qtHL._AC_SY200_.jpg"
                alt=""
              />
              <div className="discountContainer">
                <a href="#">Upto 87% off</a>
                <a href="#">Deal of the Day</a>
              </div>
              <p>Levi's, Allen Solly, ANNI Designer..</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Deals Slider

export default Deals;
