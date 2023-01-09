import React, { useState, useEffect } from "react";
import {
  appHeader,
  header,
  navLink,
  navLinkItem,
  logo,
  words,
  logoUnderline,
  menu,
  hamburger,
} from "./AppHeader.module.css";
import { Link } from "gatsby";
import AshleyKim from "../../images/AshleyKim.svg";

const AppHeader = () => {
  return (
    <div>
      <div className={appHeader}>
        <div className={words}>
          <title>Ashley Kim</title>
          <header className={header}>
            <Link to="/" className={logoUnderline}>
              <img src={AshleyKim} alt="Ashley Kim" className={logo} />
            </Link>
          </header>
          <nav className={navLink}>
            <ul className={navLink}>
              <li className={navLinkItem}>
                <Link to="/works">WORKS</Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about">ABOUT</Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/resume">RESUME</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <label>
        <input type="checkbox" />
        <span class={menu}>
          <span class={hamburger}></span>
        </span>
        <ul>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/resume">RESUME</Link>
          </li>
        </ul>
      </label>
    </div>
  );
};

export default AppHeader;
