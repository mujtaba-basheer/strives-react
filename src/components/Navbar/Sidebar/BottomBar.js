import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomBar = ({ setCurrentSidebarScreen }) => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);

  return (
    <ul className="flex bottom-area">
      <li>
        <Link>
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </li>
      <li
        onClick={() => {
          userLogin.userInfo
            ? setCurrentSidebarScreen("sidebaraccount")
            : history.push("/login");
        }}
      >
        <Link>
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
