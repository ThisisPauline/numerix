import React from "react";
import Logo from "../../assets/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="logo_numerix" />
    </div>
  );
};

export default Header;
