import Navbar from "../NavBar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Deals from "../Deals/Deals";
import Footer from "../Footer/Footer";

function Home({ addToCart, apiData }) {
  return (
    <>
      <Navbar />
      <Banner />
      <Products addToCart={addToCart} apiData={apiData} />
      <Deals />
      <Footer />
    </>
  );
}

export default Home;
