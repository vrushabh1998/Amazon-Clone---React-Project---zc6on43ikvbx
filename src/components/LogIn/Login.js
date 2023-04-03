import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="Login">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className="LoginLogo"
            alt=""
          ></img>
        </Link>

        <div className="LoginContainer">
          <h1>Sign In</h1>
          <form>
            <h3>Email</h3>
            <input type="email" placeholder="Your Mail Id" required></input>
            <h3>Password</h3>
            <input type="password" placeholder="Your Password" required></input>
            <button className="LoginButton">Sign In</button>
          </form>
          <p>
            By Continuing, you agree to Amazon's Condition of Use and Privacy
          </p>
          <button className="LoginButton">Create Your Amazon Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
