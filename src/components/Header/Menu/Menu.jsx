import React from "react";
import './Menu.css'

const Menu = () => {
  return (
    <nav className="header__menu menu-header">
      <ul className="menu-header__list">
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Home</a>
        </li>
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Companies</a>
        </li>
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Project</a>
        </li>
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Profiles</a>
        </li>
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Jobs</a>
        </li>
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Messages</a>
        </li>
        <li className="menu-header__item">
          <img className="menu-header__icon" src="" alt="" />
          <a className="menu-header__link" href="#">Notification</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu