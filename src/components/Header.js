import { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export default Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="logo w-28" src={Logo}></img>
        Food Delivery App
      </div>
      <div className="nav-items items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
