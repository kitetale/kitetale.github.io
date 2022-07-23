import React, { useState, useEffect } from "react";
import {
  appHeader,
  header,
  navLink,
  navLinkItem,
  logo,
} from "./AppHeader.module.css";
import { Link } from "gatsby";
import AshleyKim from "../../images/AshleyKim.svg";

const AppHeader = () => {
  return (
    <div className={appHeader}>
      <title>Ashley Kim</title>
      <header className={header}>
        <Link to="/">
          <img src={AshleyKim} alt="Ashley Kim" className={logo} />
        </Link>
      </header>
      <nav className={navLink}>
        <ul className={navLink}>
          <li className={navLinkItem}>
            <Link to="/works">works</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about">about</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/resume">resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
