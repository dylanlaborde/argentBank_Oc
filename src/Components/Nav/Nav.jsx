import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/img/argentBankLogo.png'
function Nav() {
  return (
    <nav className="main-nav">
      <Link to={"./"} className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" href="./sign-in">
          <i className="fa fa-user-circle"></i>
           Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Nav;