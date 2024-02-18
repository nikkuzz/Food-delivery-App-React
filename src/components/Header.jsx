import { useContext, useState } from "react";
// import Logo from "public/Logo.jpeg"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";


function Header(){

  const [btnlog, setbtnlog] = useState("Login");

  const onlineStat = useOnlineStatus();

  const {LogginUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

    return (
      <div className="header border border-sky-500">
       <div className="logo">
        <Link to="/">
        {/* <img src={Logo} className="App-logo" alt="logo" /> */}
        <img src="/img/logo.jpeg" className="App-logo" alt="logo" />
        </Link>
       </div>
       <div className="navbar">
        <ul>
          <li>Connected - {onlineStat ? "✅" : "🛑" }</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/InstaGrocery">InstaGrocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/Cart">Cart - ({cartItems.length} items)</Link>
            </li>
          <button className="btn"
              onClick={() => 
                btnlog === "Login" ? setbtnlog("Logout") : setbtnlog("Login")}
          >{btnlog}</button>
          <li className="font-bold ">{LogginUser}</li>
        </ul>
       </div>
    </div>
    )
  }
  
export default Header;