import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  return (
    <>
      <div className="paymentHeader">
        <div className="logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt=""
            ></img>
          </Link>
        </div>
        <h3>Checkout</h3>
        <div className="lockImg">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/checkout/truespc/secured-ssl._CB485936980_.png"
            alt=""
          ></img>
        </div>
      </div>

      {/* Payment Body Left and Right */}

      <div className="paymentBody">
        <div className="paymentLeft">
          <h1>1 Select a delivery address</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("address saved");
            }}
          >
            <h2>Full Name</h2>
            <input
              className="address"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <h2>Mobile Number</h2>
            <input
              className="address"
              type="text"
              placeholder="Enter Your Mobile number"
              required
            />
            <h2>Full Name</h2>
            <input
              className="address"
              type="text"
              placeholder="Enter Your PinCode"
              required
            />
            <h2>Full Name</h2>
            <input
              className="address"
              type="text"
              placeholder="Enter Shipping Address"
              required
            />
            <h2>Full Name</h2>
            <input
              className="address"
              type="text"
              placeholder="Enter Your City Name"
              required
            />
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Make this my default address
            </label>
            <button type="submit">Use this Address</button>
          </form>
        </div>

        <div className="right">
          <div className="checkOutRight">
            <div className="subTotal">
              <h2>Order Summery</h2>
              <p>
                Subtotal :<strong>${localStorage.getItem("subTotal")}</strong>
              </p>
              <small className="subTotalGift">
                <input type="checkbox" />
                This Order contains a Gift
              </small>
            </div>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
                alert("Your Order Placed!");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
