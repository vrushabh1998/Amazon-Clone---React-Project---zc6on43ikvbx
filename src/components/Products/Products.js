import "./Products.css";
import { Link } from "react-router-dom";

function Products({ addToCart, apiData }) {
  return (
    <>
      <div className="ProductsContainer">
        {apiData.map(function (value, index) {
          return (
            <div className="Products" key={index}>
              <Link to={`/productDetails/${value.id}`}>
                <img src={value.image} alt="" />
              </Link>

              <h3>{value.title.slice(0, 20)}</h3>
              <p>${value.price}</p>

              <button onClick={() => addToCart(value)}>Shop Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
