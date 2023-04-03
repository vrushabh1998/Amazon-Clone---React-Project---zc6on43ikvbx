import "./Footer.css";

function Footer() {
  const BackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="footer">
        <a onClick={BackToTop}>
          <div className="footerBottomToTop">
            <p>Back to Top</p>
          </div>
        </a>

        <div className="footerVerticalRow">
          <div className="footerVerticalColumn">
            <div className="footerVerticalColumnHead">Get to Know Us</div>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div className="footerVerticalColumn">
            <div className="footerVerticalColumnHead">Connect With Us</div>
            <ul>
              <li>Facebook</li>
              <li>Twiiter</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div className="footerVerticalColumn">
            <div className="footerVerticalColumnHead">Make Money With Us</div>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>

          <div className="footerVerticalColumn">
            <div className="footerVerticalColumnHead">Let Us Help You</div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Accounts</li>
              <li>Returns Center</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="footerLast">
          <div className="footerMessage">Made with ❤️ By Vrushabh</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
