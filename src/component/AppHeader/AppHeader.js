import React, { useState, useEffect } from "react";
import {appHeader,navLink, navLinkItem,} from "./AppHeader.module.css";
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <div className={appHeader}>
      <title>Ashley Kim</title>
      <div>
        <header>
          <div>
            <Link to="/">
              <img src=""/>
            </Link>
          </div>
        </header>
        <nav>
          <ul className={navLink}>
            <li className={navLinkItem}>
              <Link to="/projects">works</Link>
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
    </div>
  );
};

export default AppHeader;
