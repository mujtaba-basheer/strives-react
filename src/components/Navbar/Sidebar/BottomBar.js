import React from "react";
import { Link } from "react-router-dom";

const BottomBar = ({ setCurrentSidebarScreen }) => {
  

  return (
    <ul className="flex bottom-area">
      <li onClick={() => setCurrentSidebarScreen("cart")}>
        <Link>
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </li>
      <li>
        <Link to="login">
          <i className="far fa-user-circle"></i>
        </Link>
      </li>
      <li onClick={() => setCurrentSidebarScreen("home")}>
        <Link>
          <i className="fas fa-heart"></i>
        </Link>
      </li>
      <li onClick={() => setCurrentSidebarScreen("search")}>
        <Link>
          <i class="fas fa-search"></i>
        </Link>
      </li>
    </ul>
  );
};

export default BottomBar;
