import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Userbar from "./Userbar/Userbar";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
      <div className="header__left">
        <Logo />
        <Search />
      </div>

      <div className="header__right">
        <Menu />
        <Userbar />
      </div>
      </div>

    </header>
  )
}

export default Header