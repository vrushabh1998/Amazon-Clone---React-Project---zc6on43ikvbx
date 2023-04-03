import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import "./ProductDetails.css";
import Footer from "../Footer/Footer";
import Deals from "../Deals/Deals";
import { useState, useEffect } from "react";

function ProductDetails({ addToCart }) {
  let { id } = useParams();
  const [apiProduct, setapiProduct] = useState(null);

  function apiCall() {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    ).then(function (result) {
      result.json().then((output) => {
        setapiProduct(output);
      });
    });
  }

  useEffect(() => {
    apiCall();
  }, [id]);

  if (!apiProduct) {
    return <div>Loading...</div>;
  }
  let productInfo = apiProduct.find((item) => item.id === parseInt(id));

  return (
    <>
      <Navbar />
      <div className="singleProduct">
        <div className="row">
          <div className="colLeft">
            <img src={productInfo.image} alt=""></img>
          </div>
          <div className="colRight">
            <p>Home/Product Details</p>
            <h1>{productInfo.title}</h1>
            <h4>${productInfo.price}</h4>
            <button onClick={() => addToCart(productInfo)}>Add To Cart</button>
            <h3>Product Description</h3>
            <br></br>
            <p1>{productInfo.description}</p1>
          </div>
        </div>
      </div>
      <Deals />
      <Footer />
    </>
  );
}

export default ProductDetails;
